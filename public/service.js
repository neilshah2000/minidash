
Minima.init(function(msg){
    if(msg.event == 'connected') {
        Minima.log("Minima server side connected!");
        createTxPOWTable();
        createStatusTable()
    }
    if(msg.event == 'newtxpow') {
        storeTxPOWEvent(msg.info.txpow);
        
        Minima.cmd('status', function(respJSON) {
            const status = respJSON.response;
            storeStatus(status)
        })
    }
    
});


function createTxPOWTable() {
    Minima.log('Creating table');

    const INITSQL = 'CREATE Table IF NOT EXISTS txpowlist ( id INT PRIMARY KEY AUTO_INCREMENT, txpow VARCHAR(64000) NOT NULL, height int NOT NULL, hash VARCHAR(160) NOT NULL, isblock int NOT NULL, relayed VARCHAR(160) NOT NULL, txns int NOT NULL, PRIMARY KEY(id));CREATE INDEX IF NOT EXISTS arrange_index ON txpowlist(height DESC, hash, txpow)';
    Minima.sql(INITSQL, function(resp){
        Minima.log(JSON.stringify(resp));
        if(!resp.status){
            Minima.log("Something went wrong with SQL DB+\n\n"+resp.message);
        }
    })
}

function createStatusTable() {
    const statusSQL = 'CREATE TABLE IF NOT EXISTS networkstatus(id INT PRIMARY KEY AUTO_INCREMENT, time VARCHAR(160), ram VARCHAR(160), chainlength INT, chainspeed DECIMAL(16,3), chainweight VARCHAR(160));'

    Minima.sql(statusSQL, function(resp){
        Minima.log(JSON.stringify(resp));
        if(!resp.status){
            Minima.log("Something went wrong with SQL DB+\n\n"+resp.message);
        }
    })
}

function storeTxPOWEvent(txpow) {
    Minima.log('Storing NEWTXPOW event: ' + JSON.stringify(txpow));

    const INSERT = "INSERT INTO txpowlist (txpow, height, hash, isblock, relayed, txns) VALUES ('";
    var isblock = 0;
    if(txpow.isblock) {
      isblock = 1;
    }
    // wipe out mmrproofs and signatures for lighter txpows.. 
    txpow.body.witness.signatures = {};
    txpow.body.witness.mmrproofs = {};

    Minima.sql(INSERT+JSON.stringify(txpow)+"', '"+txpow.header.block+"', '"+txpow.txpowid+"', '"+isblock+"', '"+txpow.header.timesecs+"', '"+txpow.body.txnlist.length+"')", function(res){
        if(res.status == true) { 
            Minima.log(JSON.stringify(res));
            Minima.log("TxPoW Added To SQL Table.. ");
        }
    });
}


function storeStatus(status) {
    Minima.log('Storing status: ' + JSON.stringify(status));

    const INSERT = "INSERT INTO networkstatus (time, ram, chainlength, chainspeed, chainweight) VALUES (";
    const TIME = status.time;
    const RAM = status.ram;
    const CHAINLENGTH = status.chainlength;
    const CHAINSPEED = status.chainspeed;
    const CHAINWEIGHT = status.chainweight;

    const SQL = INSERT +
                '\'' + TIME + '\', ' +
                '\'' + RAM + '\', ' +
                CHAINLENGTH + ', ' +
                CHAINSPEED + ', ' +
                '\'' + CHAINWEIGHT + '\'' +
                ')';
    Minima.log('Status sql: ' + JSON.stringify(SQL));

    Minima.sql(SQL, function(res){
        if(res.status == true) { 
            Minima.log(JSON.stringify(res));
            Minima.log("Status Added To SQL Table.. ");
        }
    });
}