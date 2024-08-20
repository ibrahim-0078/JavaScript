function per(){
    std_Tm=document.querySelector("#tm1").value;
    std_Obt=document.querySelector("#obt1").value;
    res=(std_Obt/std_Tm)*100;
    // document.write(`you have got it ${res} %`);
    document.querySelector('#change').innerHTML=(`you have got it ${res} %`);
}