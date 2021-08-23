class TxPow {
    txpowid: string;
    hasbody: boolean;
    isblock: boolean;
    istransaction: boolean;
    size: number;
    superblock: number;

    constructor(txpowid: string, hasbody: boolean, isblock: boolean, istransaction: boolean, size: number, superblock: number) {
        this.txpowid = txpowid
        this.hasbody = hasbody
        this.isblock = isblock
        this.istransaction = istransaction
        this.size = size
        this.superblock = superblock
    }
}

export default TxPow