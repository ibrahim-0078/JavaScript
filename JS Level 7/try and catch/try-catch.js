// try statement => ka kam hota hai ky kisi b block of code k0 test krna ky usky under error tu ni a jay ga gbh wo code run kry ga.

// catch statement => agr try block ky ander error ajata hai tu ju b code catch ky andr ha wo code run kry ga.

// try-catch => error sy pehly wala code tu run hogya pr jaisy hi error ata hai code wuhi ruk jata hai ur humara next code execute nhi hota => is exception sy bachny ky liy hum try-catch use kerty => single error ki wajha sy hamera next code excute hona stop ni hota.

// Error occur
// console.log("hello");
// console.log("hi");
// console.log(a);
// console.log("byee");

// Error Caught
console.log("hello");
console.log("hi");
try{
    console.log(a);
}
catch{
    console.log("Error caught : a is not defined");
}
console.log("byee");
