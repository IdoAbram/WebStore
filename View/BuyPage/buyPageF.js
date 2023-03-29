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

  function setFontSize() {
    const vw = window.innerWidth;
    const fontSize = vw / 100; // 1vw = 1% of the viewport width
    document.documentElement.style.fontSize = fontSize + 'px';
  }
  
  setFontSize(); // Set initial font size on page load
  
  window.addEventListener('resize', setFontSize);
  