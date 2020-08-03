

class CarModel {
    constructor(brand, model, year, km) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.km = km;
    }

    kmPerYear() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year + 1;
        return this.km / age;
    }
}

export default CarModel;