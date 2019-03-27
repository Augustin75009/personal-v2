var ctx2 = document.getElementById("myChart2");

var myRadarChart2 = new Chart(ctx2, {
  type: 'radar',
  data: {
    labels:
      ["Créativité", "Autonomie", "Mental", "Réactivité", "Management"],
    datasets: [{
      data: [5, 4, 3, 4, 3],
      borderWidth: 1,
      borderColor: 'rgba(65, 156, 255, 0)',
      // backgroundColor: 'red',
      // backgroundColor: 'rgba(0,255,0,0.7)'
      backgroundColor: 'rgba(65, 156, 255, 0.7)'
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
          color: 'rgba(220, 220, 220, 0.3)'
        }
      }],
      gridLines: {
        display: true,
        color: "rgba(220, 220, 220, 0.3)"
      },
      ticks: {
        beginAtZero: true,
        max: 5,
        stepSize: 1,
        display: false
      },
      pointLabels: {
        fontSize: 18,
        display: true,
        fontColor: 'grey'
      }
    }},
});