class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Getter
    info() {
        return this.getInfo()
    }
    // Method
    getInfo() {
        return "name : "+this.name+" age :"+this.age;
    }
}


export default Person;