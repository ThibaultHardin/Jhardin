export class Animal implements GardenItem {

    // Garden Item
    name: String
    specie: any
    picto: any
    galery: any
    creationDate: any
    ToDos: any
    area: any
    note: String
    group: any

    constructor (name: String, specie: any, group: any, note: String) {
        this.name = name;
        this.specie = specie;
        this.group = group;
        this.note = note;
    }
}