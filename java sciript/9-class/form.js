function submitForm(event){
    event.preventDefault();
    let rName=document.getElementById('name').Value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let dob=document.getElementById('dob').value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    let course=document.getElementById('course').value;


let output = "Name:" + rName + "\n";
output += "Email:" + email +"\n";
output += "Password:" + password +"\n";
output += "dob:" + dob +"\n";
output += "Gender:" + gender +"\n";
output += "course:" + course +"\n";



let newWindow=window.open("",'_black');
newWindow.document.write("<pre>"+output+"</pre>");
}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit',submitForm);
////?