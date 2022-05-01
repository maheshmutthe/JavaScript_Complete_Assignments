
function factorial(a){
let fact = 1;
		if(a == 0) {
			document.write("Factorai of "+a+" "+"is 1");
		}else {
			for(var i=1;i<=a;i++) {
				fact = fact * i;
			}
			document.write("Factorial of "+a+" "+"is"+" "+fact );
		}
    }