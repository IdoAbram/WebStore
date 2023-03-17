


function func(event){
    var imgSec = event.target;

    var firstImg = document.getElementById("firstPic");
    var firstSrc = firstImg.src ;
    firstImg.src = imgSec.src;
    imgSec.src = firstSrc;
}

