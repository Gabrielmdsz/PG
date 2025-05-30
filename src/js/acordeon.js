const perguntas = document.querySelectorAll(".duvida");


perguntas.forEach(function(item){
    item.addEventListener('click',function(){

        if (item.classList.contains("ativo")) {
            item.classList.remove("ativo");
            return;
        }

        const itemAtivo = document.querySelector(".ativo");
        if (itemAtivo){
            itemAtivo.classList.remove("ativo");
        }
        
        
        item.classList.add("ativo");
    });
});