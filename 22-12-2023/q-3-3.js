let str = document.getElementById("in").value 

for(let i=0 ; i < str.length ; i++){
    if(str[i] >= 'a' && str[i] <= 'z'){
      let ans = str.charAt(i)-=32
    }else if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
      let ans = str.charAt(i)+=32
    }else{
        console.log("Something Went Wrong !!")
    }
}

console.log(ans)