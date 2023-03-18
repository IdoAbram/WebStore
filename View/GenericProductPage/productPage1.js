


function func(event){
    var imgSec = event.target;

    var firstImg = document.getElementById("firstPic");
    var firstSrc = firstImg.src ;
    firstImg.src = imgSec.src;
    imgSec.src = firstSrc;
}

function stars(num){
    for(let i=1;i<num+1;i++){
        var star = document.getElementById(i);
        var inp =document.getElementById("i"+i);
        inp.checked = true;
        star.classList.add("checked");
    }
    for(let i=5;i>num;i--){
        var star = document.getElementById(i);
        var inp =document.getElementById("i"+i);
        inp.checked = false;
        star.classList.remove("checked");
    }
}

