let a = document.getElementById("inp-1").value
    let b = document.getElementById("inp-2").value
    let c = document.getElementById("inp-3").value
    let d = document.getElementById("inp-4").value

    if(a == "" && b == "" && c == "" && d == "")
    {
        document.getElementById("ans").innerHTML = ""
    }
    else
    {
        if(a < b)
        {
            if(a < c)
            {
                 if(a < d)
                {
                    document.getElementById("ans").innerHTML = "A is Lower"
                }
            }
            
        }
        else if(b < c)
        {
            if(b < d)
            {
                    document.getElementById("ans").innerHTML = "B is Lower"
            }
        }
        else if(c < d)
        {
            document.getElementById("ans").innerHTML = "C is Lower"
        }
        else
        {
            document.getElementById("ans").innerHTML = "D is Lower"
        }
    }