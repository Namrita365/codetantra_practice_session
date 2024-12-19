let mail=prompt()
function verify(mail){
    let restriction=/^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-z]{3,9}$/
    let res=restriction.test(mail)
    if(res){
        document.write("valid mail")
    }
    else{
        document.write("invalid mail")
    }
}
verify(mail)
