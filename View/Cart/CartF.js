

function increase(event){
    const ids = event.target.dataset.id.split(" ");

    var quantity = document.getElementById( ids[0] );
    var currentValue = parseInt(quantity.value);

    currentValue = currentValue + 1;

    quantity.value = currentValue;




    var price = document.getElementById( ids[1] );
    var crValue = parseInt(price.value);

    crValue = crValue + (crValue/(currentValue-1));

    price.value = crValue;

}

function decrease(event){
    const ids = event.target.dataset.id.split(" ");

    var textField = document.getElementById( ids[0] );
    var currentValue = parseInt(textField.value);



    var price = document.getElementById( ids[1] );
    var crValue = parseInt(price.value);

    if(currentValue>1){
        crValue = crValue - (crValue/(currentValue));
    }

    price.value = crValue;





    if(currentValue>1)
        currentValue = currentValue - 1;

    textField.value = currentValue;
}

function remove(event){
    const prod=document.getElementById(event.target.dataset.id);
    prod.classList.add("hide");
}
