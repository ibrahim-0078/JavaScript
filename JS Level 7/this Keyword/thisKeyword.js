// this Keyword => gbh b kisi function ky under humy usky parameters ko use krna hota hai tu wha pr hum this Keyword ka use kerty hain

const student = {
    name : "ibrahim",
    age : 23,
    eng : 75,
    math : 50,
    science : 100,
    getAvg(){
        let avg = (this.eng + this.math + this.science) / 3;
        console.log(`${this.name} got avg marks : ${avg}`);
    }
}
console.log(student.getAvg());