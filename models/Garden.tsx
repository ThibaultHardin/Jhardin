enum GardenType {
    'Balcon',
    'Jardin',
    'Potager',
    'Intérieur'
}

export class Garden {

    type: GardenType = GardenType.Jardin;
    name: String = "Mon jardin"
    dimensions: String[] = []
    
    constructor (type: GardenType, name: String) {
        this.type = type;
        this.name = name;
    }
}