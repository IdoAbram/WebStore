let title

function increase(quan,price){
    var quantity = document.getElementById( quan );
    var currentValue = parseInt(quantity.value);

    currentValue = currentValue + 1;

    quantity.value = currentValue;




    var price = document.getElementById( price );
    var crValue = parseInt(price.value);

    crValue = crValue + (crValue/(currentValue-1));

    price.value = crValue;

}

function decrease(quan,price){
    var textField = document.getElementById( quan );
    var currentValue = parseInt(textField.value);



    var price = document.getElementById( price );
    var crValue = parseInt(price.value);

    if(currentValue>1){
        crValue = crValue - (crValue/(currentValue));
    }

    price.value = crValue;





    if(currentValue>1)
        currentValue = currentValue - 1;

    textField.value = currentValue;
}

function remove(product){
    const prod=document.getElementById(product);
    prod.classList.add("hide");
}

function addToCart() {
    
}