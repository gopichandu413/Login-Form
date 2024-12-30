function Test_case1()
{
    var username=document.getElementById("A").value
    var password=document.getElementById("B").value
    var obj1=username.match(/[A-z]{1}[a-z]*[_]{1}[1-9]{5}/g)
    var obj2=password.match(/[A-Z]{1}[a-z]*[@]{1}[0-9]{3}/g)
    if (username==""||username==null)
    {
        document.getElementById("YYY").innerHTML="***Username is required***"
        return false
    }
    else if(obj1==""|| obj1==null)
    {
        document.getElementById("YYY").innerHTML=username+"Invalid_username Ex:Gopi_123"
        return false
    }
    if (password==""||password==null)
        {
            document.getElementById("ZZZ").innerHTML="***Password is required***"
            return false
        }
        else if(obj2==""|| obj2==null)
            {
                document.getElementById("ZZZ").innerHTML=password+"Invalid_Password Ex:Gopi_123"
                return false

}
}