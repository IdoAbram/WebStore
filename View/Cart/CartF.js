

function increase(event){
    const ids = event.target.dataset.id.split(" ");

    var quantity = document.getElementById( ids[0] );
    var currentValue = parseInt(quantity.value);

    currentValue = currentValue + 1;

    quantity.value = currentValue;




    var price = document.getElementById( ids[1] );
    var crValue = parseInt(price.value);

    var totalPrice=document.getElementById("total");
    totalPrice.value=parseInt(totalPrice.value)-crValue

    crValue = crValue + (crValue/(currentValue-1));

    price.value = crValue;

    totalPrice.value=parseInt(totalPrice.value)+crValue
}

function decrease(event){
    const ids = event.target.dataset.id.split(" ");

    var textField = document.getElementById( ids[0] );
    var currentValue = parseInt(textField.value);

    var totalPrice=document.getElementById("total");

    var price = document.getElementById( ids[1] );
    var crValue = parseInt(price.value);

    totalPrice.value=parseInt(totalPrice.value)-crValue

    if(currentValue>1){
        crValue = crValue - (crValue/(currentValue));
    }

    price.value = crValue;

    totalPrice.value=parseInt(totalPrice.value)+crValue


    if(currentValue>1)
        currentValue = currentValue - 1;

    textField.value = currentValue;
}

function removeFromCart(event){
    const ids = event.target.dataset.id.split(" ");
    const prod=document.getElementById(ids[0]);
    const check=document.getElementById(ids[3]);


    var totalPrice=document.getElementById("total");
    if(check.value==1){
        totalPrice.value-=document.getElementById(ids[1]).value
    }

    prod.classList.add("hide");
    
}

function remove(event){
    const ids = event.target.dataset.id.split(" ");
    const prod=document.getElementById(ids[0]);

    var totalPrice=document.getElementById("total");
    const check=document.getElementById(ids[2]);
    const but1=document.getElementById(ids[3]);
    const but2=document.getElementById(ids[4]);
    if(check.value==1){
        totalPrice.value=parseInt(totalPrice.value)-parseInt(document.getElementById(ids[1]).value)
        check.value=0
        but1.classList.add("remove")
        but2.classList.add("remove")
        prod.classList.add("table-active")
    }
    else{
        check.value=1
        prod.classList.remove("table-active")
        but1.classList.remove("remove")
        but2.classList.remove("remove")
        totalPrice.value=parseInt(totalPrice.value)+parseInt(document.getElementById(ids[1]).value)
    }
}