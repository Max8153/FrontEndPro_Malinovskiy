class Student {
    constructor(name, surmane, yearOfBitrh) {
        this.name = name;
        this.surmane = surmane;
        this.yearOfBitrh = yearOfBitrh;
        this.grades = [];
        this.visit = [];
    }
    get age() {
        const ageOfStudent = 2023 - this.yearOfBirth;
        return ageOfStudent;
    }
    get avarageGrade() {
        const allGrades = this.grades.reduce((accum, grade) => accum + grade, 0);
        const middlePoint = allGrades / this.grades.length;
        return middlePoint;
    }
    present() {
        if (this.visit.length > 25) {
            throw new Error(console.log("Error"))
        } else {
            this.visit.push(true);
        }
        return this;
    }
    absent() {
        if (this.visit.length > 25) {
            throw new Error(console.log("Error"))
        } else {
            this.visit.push(false);
        }
        return this;
    }
    summary() {
        const averageVisit = this.visit.filter(Boolean).length / this.visit.length;
        if (this.avarageGrade > 90 && averageVisit > 0.9) {
            console.log("Good Job!");
        } else if (this.avarageGrade > 90 || averageVisit > 0.9) {
            console.log("Good, but you can always be better.");
        } else {
            console.log("Not good at all.");
        }
    }
}
const student1 = new Student("Alex", "Tompson", 2001);
const student2 = new Student("John", "Mitchel", 1998);
console.log(student1);
student1.present().present().absent().present();
console.log(student1);
student1.summary();