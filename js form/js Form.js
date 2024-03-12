function submitForm(evenet){
    evenet.preventDefault();

    let rName=document.getElementById('name').value;
    let gmail=document.getElementById('gmail').value;
    let password=document.getElementById('password').value;
    let gendar=document.querySelector('input[name="gendar"]:checked');
    let hobby=document.querySelectorAll('input[name="hobby"]:checked');

let hobbyValue=[];
for(iedext=0; iedext>hobby.length;iedext++){
    hobbyValue.push(hobby[iedext].value);
}
    let output="Name:"+rName+"\n";
    output+="gmail:"+gmail+"\n"; 
    output+="Password:"+password+"\n"; 
    output+="gendar:"+gendar.value+"\n"; 
    output+="hobby:"+hobbyValue+"\n"; 

    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"</pre>");
}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit',submitForm);