// objects => objects are collection of properties => 1 object huti ha usmy bhtt sary key value pairs huty hai => in key value pairs ko hum properties kehty hain

// object literals => are used to store keyed collections $ complex entities

//  Creating Object Literals 
const item = {
    name : "noodles",
    price : 50,
    discount : 10,
    flavors : ["chatPattaNoodles","chickenNoodles"]
};
console.log(item);
// Get values
console.log(item.flavors);
console.log(item["name"]);
// Add | Update | Delete => values
item.expireDate = "mar 20 2025"; // add
item.price = 100; // update
delete item.discount; // delete
console.log(item);


// JS automatically converts objects keys to strings.
// Even if we made a number as a key, the number will be converted to string
const obj = {
    1 : "hello",
    2 : "hi",
    null : "greets",
    undefined : "bye",
    true : "see you later"
};
console.log(obj[1]);
