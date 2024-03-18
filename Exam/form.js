function submitForm(event){
    event.preventDefault();
    
 let name=document.getElementById('name').value;
 let content=document.getElementById('content').value;
 let Remarck=document.getElementById('Remarck').value;
 let gender=document.querySelector('input[name="gender"]:checked')
 let courses=document.querySelectorAll('input[name="courses"]:checked')

 let coursesValue=[];
 for(let i=0;i<courses.length;i++){
    coursesValue.push(courses[i].value)
 }
 let location=document.getElementById('location').value;

 let output="name:"+name+"\n";
  output+="content:"+content+"\n";
  output+="Remarck:"+Remarck+"\n";
  output+="gender:"+gender.value+"\n";
  output+="courses:"+coursesValue+"\n";
  output+="location:"+location+"\n";

    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"</pre>")
}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit',submitForm);
