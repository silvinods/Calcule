(function(){


    const fucInterval = setInterval(()=>{

        const dateNow = new Date();
        
        const date = dateNow.toLocaleDateString('pt-BR');
        const time = dateNow.toLocaleTimeString("pt-BR");
        document.getElementById("date").innerHTML=date;
        document.getElementById("time").innerHTML=time;
    }, 1000)
    VanillaTilt.init(document.querySelectorAll(".form-container"),{
        max:20,
        spread:350,
        perspeective:700,
        transition:true,
        glare:true,
        "max-glare": 0.2,
    })
   
}())

 
  
    
