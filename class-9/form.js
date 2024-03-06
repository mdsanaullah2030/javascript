function submitForm(event){ 
event.preventDefault();

 let rName = document.getElementById('name').value;
let email=document.getElementById('email').value;
let Password=document.getElementById('password').value;
let gender=document.querySelector('input[name="gender"]:checked').value;

let output= "Name: "+rName+ "\n";
 output += "Email: "+email+ "\n";
 output += "Password: "+Password+ "\n";
 output +="Gender:" +gender+ "\n";

 let newWindow=window.open("",'_blank');
 newWindow.document.write("<pre>"+ output+"</pre");

}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit',submitForm);