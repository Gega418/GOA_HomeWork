class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    static compare(car1, car2) {
        if (car1.brand === car2.brand) {
            return "These cars are of the same brand."
        } else {
            return "These cars are of different brands."
        }
    }
}

export { Car }