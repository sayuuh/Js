function carregar(){
    /* MODAL */
    document.getElementsByClassName('modal-container')[0].style.display = "block"
}

function menu(){
    // verifica checkbox
    var check = document.getElementsByName('checkMenu')[0].checked
    
    if(check){
        document.getElementsByClassName("container-menu")[0].style.display = "block"
    }else{
        document.getElementsByClassName("container-menu")[0].style.display = "none"
    }    
}

function fecharModal(){
    document.getElementsByClassName('modal-container')[0].style.display = "none"
}