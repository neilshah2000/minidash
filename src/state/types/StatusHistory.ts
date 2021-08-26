import parse from 'date-fns/parse'


export class StatusHistory {
    chainlength: number = 0; // "5835"
    chainspeed: number = 0; // "0.047"
    chainweight: string = ''; // "3523115752327"
    id: number = 0 // "1"
    ram: number = 0 // "72.3 MB"
    ramUnits: string = ''
    time: Date | null = null // "Thu Aug 26 09:19:57 BST 2021"


    constructor(chainlength: string = '0', chainspeed: string = '0.0', chainweight: string = '', id: string = '0', ramString: string = '0 MB', time: string = '') {
        this.chainlength = parseInt(chainlength)
        this.chainspeed = parseFloat(chainspeed)
        this.chainweight = chainweight
        this.id = parseInt(id)
        this.ram = parseFloat(ramString.split(/\s+/)[0])
        this.ramUnits = ramString.split(/\s+/)[1]
        this.time = this.createDate(time)
    }

    private createDate(minimaDateStr: string): Date {
        const dateParts = minimaDateStr.split(/\s+/) // "Thu Aug 26 09:19:57 BST 2021"
        // remove 'BST' part
        dateParts.splice(4,1)
        // remove 'Thu' part
        dateParts.splice(0,1)
        const dateStr = dateParts.join(' ')
        let d1 = parse(dateStr, 'LLL dd HH:mm:ss yyyy', new Date())
        return d1
    }

}