function submitForm(event){
    event.preventDefault()

    let newWindow=window.open("",'_blank')
    newWindow.document.write("<pre>"+output+"</pre>")
}
let myForm=document