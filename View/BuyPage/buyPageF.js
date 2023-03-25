function paid(event){
    moneySpent(event.target.dataset.id);
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

  