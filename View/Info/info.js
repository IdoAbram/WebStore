  const symbol = 'MA';//my stock
  const apiKey = 'YOUR_API_KEY_HERE';
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=15min&apikey=${apiKey}`;//from here im taking information
  let lastRequestTime = null;

  if (lastRequestTime === null || Date.now() - lastRequestTime > 5 * 60 * 1000) {//ask for request if i didnt ask in the last 5 minutes or didnt ask at all(null)
    $.ajax({//sending the request
      url: apiUrl,// putting the url
      dataType: 'json'//ask for type json
    })
      .done(data => {
        const dailyData = data['Time Series (15min)'];// taking data for every 15 minutes
        const dates = Object.keys(dailyData).reverse().slice(0, 100);//taking 100 points to the chart
        const prices = dates.map(date => parseFloat(dailyData[date]['4. close']));//the funchion mapping every pricce to date and using parse to change the price from string to float
        const ctx = document.getElementById('ma-chart').getContext('2d');//putting the 2d chart in the canvas
        const chart = new Chart(ctx, {
          type: 'line',//chart type
          data: {//the data and informationmto the graph
            labels: dates,
            datasets: [{
              label: 'MA Stock Price',
              data: prices,
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
              borderColor: 'blue',
              borderWidth: 1
            }]
          },
          options: {//
            responsive: true,// allow to fit good
            maintainAspectRatio: false,// disable changing width and height 
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: false// allow the chart to start from numbers that different than 0
                }
              }]
            }
          }
        });
        lastRequestTime = Date.now();//updating the last request
      })
  }
/////////////////////////////map////////////////////////////////
let markers;
fetch('/customers/addresses')
        .then(res => res.json())
        .then(addresses => {
          markers = addresses;
          createMap(addresses)
        })

    function createMap(markers){
        const myCenter = { lat: 31.9650241, lng: 34.7817688 };
        let map;

        map = new google.maps.Map(document.getElementById("map"), {
            center: myCenter,
            zoom: 10,
        });
        markers.forEach(m => {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': m}, function(results, status) {
              new google.maps.Marker({
              position: results[0].geometry.location,
              map: map
            });
          });
       })
  }
