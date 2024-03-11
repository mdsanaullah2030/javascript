function submitForm(evenet){
    evenet.prevenetDefault();

    let rName=document.getElementById('name').value;

    let output="Name:"+rName+"\n" 

    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"</pre>");
}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit',submitForm);