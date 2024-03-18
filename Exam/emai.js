function submitForm(event){ 
    event.preventDefault();

    let email=document.getElementById('email').value;
    let output="email:"+email+"\n";
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regEx.test(email)){

    }
    else{
        alert("Not a valied email address");
        return;
    }

let newWindow=window.open("",'_blank');
newWindow.document.write("<pre>"+output+"</pre>")
}


let myForm=document.getElementById('myForm');
myForm.addEventListener('submit',submitForm);
