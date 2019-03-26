var ctx2 = document.getElementById("myChart2");
var ctx3 = document.querySelector("#selected .skills-card i");


// const myStatus = JSON.parse(ctx.canvas.dataset.deliveries)
// const data2 = ctx2.dataset.data2


var myRadarChart2 = new Chart(ctx2, {
  type: 'radar',
  data: {
    labels:
      ['CSS', 'HTML', 'JavaScript', 'React', 'Design'],
    datasets: [{
      data: [4, 5, 4, 3, 3],
      borderWidth: 1,
      borderColor: 'rgba(65, 156, 255, 0.9)',
      backgroundColor: 'rgba(0,255,0,0.5)',
      backgroundColor: 'rgba(65, 156, 255, 0.9)'
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
        color: 'grey'
      },
      xAxes: [{
          display: true,
          color: "#FFFFFF",
          gridLines: {
            display: true,
            color: 'grey'
          }
      }],
        gridLines: {
          display: true ,
          color: "grey"
            },
        display: true,
        ticks: {
          beginAtZero: true,
          max: 5,
          stepSize: 1,
          display: false
        },
        pointLabels: {
          fontSize: 20,
          fontColor: 'grey'
        }
    }},
  });
