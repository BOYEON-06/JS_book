var isOpen = false;

var view = document.querySelector("#view");
view.addEventListener('click',function() {
    if(isOpen == false){
        document.querySelector("#detail").style.display = "block";
        view.innerText = "Close"; 
        isOpen = true;
    }
    else{
        document.querySelector("#detail").style.display = "none"
        view.innerText = "About animation..";
        isOpen = false;
    }
});