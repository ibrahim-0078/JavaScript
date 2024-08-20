// alert => Displays an alert msg on the page. => for popup => we use alert();
alert("Welcome to my Website");

// prompt => Displays a dialog box that asks user for some input
let firstName = prompt("Enter your Name : ");
let msg = `Welcome! ${firstName}`;
alert(msg),
document.write(`${msg}`);