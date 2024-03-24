function submitForm(event){
    event.preventDefault();

    let name=document.getElementById('name').value;
    let content=document.getElementById('content').value;
    let grnder=document.querySelector('input[name="grnder"]:checked');
    let locetion=document.querySelectorAll('input[name="locetion"]:checked');
    let locetionvalue=[];
    for(i=0;i<locetion.length;i++){
        locetionvalue.push(locetion[i].value);

    }
    let subject=document.getElementById('subject').value;

    let output="name:"+name+"\n";
     output+="content:"+content+"\n";
     output+="grnder:"+grnder.value+"\n";
     output+="locetion:"+locetionvalue+"\n";
     output+="subject:"+subject+"\n";

    let newWindow=window.open("",'_blank')
    newWindow.document.write("<pre>"+output+"</pre>");
}
let myForm=document.getElementById('myForm')
myForm.addEventListener('submit',submitForm);