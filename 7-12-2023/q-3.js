let a = document.getElementById("num").value 
    let b = 1
    do{
        if(b % 2 == 0){
            document.write("<center><h3>",b,"<br></h3></center>")
        }
       b++;
    }
    while (b <= a);