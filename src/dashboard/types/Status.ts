

class Status {
    constructor(
        public automine: boolean = false,
        public cascade: string = '',
        public chainlength: number = -1,
        public chainspeed: number = -1,
        public chainweight: string = '',
        public conf: string = '',
        public connections: number = -1,
        public difficulty: string = '',
        public host: string = '',
        public lastblock: string = '',
        public lasttime: string = '',
        public mempoolcoins: number = -1,
        public mempooltxn: number = -1,
        public minidappserver: number = -1,
        public minimaport: number = -1,
        public ram: string = '',
        public root: string = '',
        public rpcport: number = -1,
        public time: string = '',
        public tip: string = '',
        public total: string = '',
        public txpowdb: number = -1,
        public uptime: string = '',
        public version: string = '',
        public websocketport: number = -1
    ) { }
}

export default Status;