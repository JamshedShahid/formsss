function showPass(e){
        var passInput= document.getElementById("passInput");
        console.log(e.className)
        if(e.className === "fas fa-eye"){
            e.className = "fas fa-eye-slash" 
            passInput.type = "text" 
        }else{
            e.className = "fas fa-eye"
            passInput.type = "password  " 
    
        }
    }
    