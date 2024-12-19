let num=prompt()
function verify(num){
    let restriction=/^{1}[0-9]{10}$/
    let res=restriction.test(num)
    if (res){
        document.write("Valid Number")
    }
    else{
        document.write("Invalid Number")
    }
}verify(num)