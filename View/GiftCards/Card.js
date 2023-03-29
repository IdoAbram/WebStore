
function deleteCard(id){//Delete a card by admins
    fetch("/giftCards/delete/"+id);
    document.getElementById(id).hidden=true;

}