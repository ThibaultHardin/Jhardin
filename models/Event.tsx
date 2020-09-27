export class Event {

    name: String
    picto: any
    galery: any
    date: any
    note: String
    
    constructor (name: String, note: String, date: any) {
        this.name = name;
        this.note = note;
        this.date = date;
    }
}