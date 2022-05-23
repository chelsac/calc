var x=document.getElementById('fn');
var y=document.getElementById('sn');
console.log(x);
console.log(y);
function sum(){
    if(!x.value || !y.value){
        alert("please enter values")
        }
    else{
    var n1=parseFloat(x.value);
    var n2=parseFloat(y.value);
    console.log(n1);
    console.log(n2);
    var res=n1+n2;
    result.innerText="Result of sum is "+res;
    console.log(res);
    }
}
function sub(){
    if(!x.value || !y.value){
        alert("please enter values")
        }
    else{
    var n1=parseFloat(x.value);
    var n2=parseFloat(y.value);
    console.log(n1);
    console.log(n2);
    var res=n1-n2;
    result.innerText="Result of subtraction is "+res;
    console.log(res);
    }
}
function mul(){
    if(!x.value || !y.value){
        alert("please enter values")
        }
    else{
    var n1=parseFloat(x.value);
    var n2=parseFloat(y.value);
    console.log(n1);
    console.log(n2);
    var res=n1*n2;
    result.innerText="Result of multiplication is "+res;
    console.log(res);
    }
}
function div(){
    if(!x.value || !y.value){
        alert("please enter values")
        }
    else{
    var n1=parseFloat(x.value);
    var n2=parseFloat(y.value);
    console.log(n1);
    console.log(n2);
    var res=n1/n2;
    result.innerText="Result of divison is "+res;
    console.log(res);
    }
}
