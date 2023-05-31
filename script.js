
//--------------------------------------------------- VARIABLE ----------------------------------------------------//

//=====VARIABLE EXAMPLE (var)======//
	function imgVar() {
		let x = 100 ;
		alert(x);

	}

//=====VARIABLE EXAMPLE (let)======//
	function imglet(){
		let x = 2;

		alert(x);

	}
//=====VARIABLE EXAMPLE (const)======//
	function imgconst(){
		let x = 16;
		document.getElementById("img-const").innerHTML = ("The value of const is x = ") + x;

	}

//-------------------------------------------------- CONDITIONAL STATEMENT-------------------------------------------//

//=====IF STATEMENT EXAMPLE======//
function Ifstmnt(){
	if(10 > 5){
		let outcome = "If Block" ; 

		alert(outcome);
	}
}

//=====ELSE STATEMENT EXAMPLE======//
function elsestatement(){
	if("cat" == "dog"){
		alert("if block");
	}

	else{
		alert("else block");
	}
}

//=====ELSE IF STATEMENT EXAMPLE======//
function elseif(){
	if(false){
		alert("if block");
	}
	else if(true){
		alert("else if block");
	}

	else{
		alert("else block")
	}
}

//=====ELSE IF (2) STATEMENT EXAMPLE======//
function elseif(){
	if(false){
		alert("if block");
	}
	else if(true){
		alert("First else if block");
	}
	else if(true){
		alert("Second else if block");
	}
	else{
		alert("else block")
	}
}

//-------------------------------------------------- POP-UP BOXES -------------------------------------------//

//=====ALERT EXAMPLE======//
function myalert() {
	alert("Hit me to proceed!");
	var alrt = "Have a nice day!!"
    document.getElementById("myalert").innerHTML = alrt;
}

//===== CONFIRM EXAMPLE======//
function myconfirm() {
	a = confirm("Want to proceed?");
    document.getElementById("myconfirm").innerHTML = ("You have click on: ")+ a;
}

//===== PROMPT EXAMPLE======//
function myprompt() {
	a = prompt("Enter your name: ");
    document.getElementById("myprompt").innerHTML = ("You have enetered: ") + a;
}

//-------------------------------------------------- LOOPS -------------------------------------------//

//===== FOR LOOP EXAMPLE======//
function bttnloops(){
for (i = 1; i<=5; i++){
	alert(i + "br/>")
	}
}

//===== WHILE LOOP EXAMPLE======//
function bttnwhileloops(){
	let 1 = 0;

	while(i < 5){
		console.log(i); i++;
	}
}

//===== DO LOOP EXAMPLE======//
function dowhile(){
let count = 0;
do {
	console.log(count);
	count++;
	}
while 
	(count < 5)

}

//-------------------------------------------------- ARRAY METHOD -------------------------------------------//

//===== PUSH EXAMPLE======//
		function Push(){
			const fruit =["Apple", "Peach"];
			do 
		}

		 function pop(){
            const fruit =["Apple", "Peach"];
            fruit.pop();
            console.log(fruit);
        }

        function shift(){
             const fruit =["Apple", "Peach"];
             fruit.shift();
             console.log(fruit);
        }
        
        function unshift(){
           const fruit = ["Apple", "Peach"]; 
           console.log(fruit.unshift("Banana")); 
           console.log(fruit); 
        }










