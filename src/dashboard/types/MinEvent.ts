import Info from './Info'

class MinEvent {
    eventname: string;
    info: Info;

    constructor(eventname: string, info: Info) {
        this.eventname = eventname
        this.info = info
    }
}

export default MinEvent