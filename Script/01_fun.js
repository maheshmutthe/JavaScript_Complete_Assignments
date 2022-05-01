"use strict";

function go() {
    document.write("hello");
}
go(); //function call
var r = go();
undefined
console.log(r); //Undefine 
document.write(typeof(go)); //function
document.write("<hr/>");
document.write(go); //function defination