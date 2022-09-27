function imgChange(anyimage){
    document.querySelector('.logo').src = anyimage;
}

function setbgcolor(color){
    const Image = document.querySelector('.images-change');
    Image.style.background = color;
}

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0;i<reveals.length;i++){
       var windowHeight = window.innerHeight;
       var topelement = reveals[i].getBoundingClientRect().top;
       var element_visible = 30 ;
       if(topelement < element_visible + windowHeight){
        reveals[i].classList.add('active');
       }else{
        reveals[i].classList.remove('active');
       }
    }
}

window.addEventListener("scroll",reveal);