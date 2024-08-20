let n = prompt("Enter the Number for Multiple Table");
n = parseInt(n);
for(let i=n; i<=n*10; i+=n) {
    document.write(`${i} <br>`);
}