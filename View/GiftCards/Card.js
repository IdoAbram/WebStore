
function deleteCard(id){
    fetch("/giftCards/delete/"+id);
    document.getElementById(id).hidden=true;

}