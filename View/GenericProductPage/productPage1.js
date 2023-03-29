document.getElementById("addToCart").style.display = "none;"


function func(event){//Switch Between the samll picture and the bigger one.
    var imgSec = event.target;

    var firstImg = document.getElementById("firstPic");
    var firstSrc = firstImg.src ;
    firstImg.src = imgSec.src;
    imgSec.src = firstSrc;
}

function deleteRev(id){//Delete your own review
    fetch('/prPage/rev/'+id);
    document.getElementById(id).hidden=true;
}

function stars(num){//Gets How Many stars you gave in your review
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

function addToCart(id){//Add the product to card, and switch the button to a go to cart one
    fetch("/prPage/"+id+"/addToCart")
    document.getElementById(id).hidden = true;
    let gotoCart = document.createElement('a');
    gotoCart.setAttribute('href', "/cart");
    gotoCart.innerHTML = "Go To Cart";
    gotoCart.classList.add("btn"); 
    gotoCart.classList.add("btn-success"); 
    document.getElementById("addToCart").appendChild(gotoCart);
}