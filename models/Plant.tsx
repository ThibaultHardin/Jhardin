enum SunExposure {
    'Soleil',
    'Ombre',
    'Mi-ombre'
}

export class Animal implements GardenItem {

    // Garden Item
    name: String
    specie: any
    group: any
    picto: any
    galery: any
    creationDate: any
    ToDos: any
    area: any
    note: String
    harvests: any;

    plantingDate: any
    sunExposure: SunExposure = SunExposure.Soleil

    constructor (name: String, specie: any, group: any, note: String) {
        this.name = name;
        this.specie = specie;
        this.note = note;
    }
}