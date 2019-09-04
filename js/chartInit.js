// import Chart2 from 'chart.js';

// function chartInit() {
  var ctx2 = document.getElementById("myChart2");

  var myRadarChart2 = new Chart(ctx2, {
    type: 'radar',
    data: {
      labels:
        ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
      datasets: [{
        data: [1, 3, 5, 3, 2],
        borderWidth: 1,
        borderColor: 'rgba(67, 238, 206, 0.5)',
        // borderColor: 'rgba(65, 156, 255, 0)',
        // backgroundColor: 'rgba(67, 176, 92, 0.7)'
        backgroundColor: '#00adb5eb'
        // backgroundColor: 'rgba(65, 156, 255, 0.7)'
      }]
    },
    options: {
      responsive: true,
      legend: {
        display: false
      },
      scale: {
        display: true,
        angleLines: {
          color: 'rgba(220, 220, 220, 0.1)'
        },
        xAxes: [{
          display: true,
          color: "#FFFFFF",
          gridLines: {
            display: true,
            color: 'rgba(220, 220, 220, 0.6)'
          }
        }],
        gridLines: {
          display: true,
          color: "rgba(220, 220, 220, 0.4)"
        },
        ticks: {
          beginAtZero: true,
          max: 5,
          stepSize: 1,
          display: false
        },
        pointLabels: {
          fontSize: 17,
          display: true,
          fontColor: 'rgba(220, 220, 220, 0.6)'
        }
      }},
  });
  // return myRadarChart2
// }

// chartInit()
// export { chartInit, myRadarChart2}
