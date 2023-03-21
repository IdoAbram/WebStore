function paid(event){
    const ids = event.target.dataset.id.split(" ");
    moneySpent(ids[3])
    const main=document.getElementById("bp");
    main.classList.add("hide")
    const back=document.getElementById("paid")
    back.classList.remove("hide")
}
function credit(event){
    const main=document.getElementById("bp");
    main.classList.add("hide")
    const back=document.getElementById("credit")
    back.classList.remove("hide")
}

function pictures(event){
    const ids = event.target.dataset.id.split(" ");
}

function moneySpent(total) {
    $.ajax({
      type: "GET",
      url: "/buyPage/moneySpent/"+total,
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }