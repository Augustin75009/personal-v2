var ctx = document.getElementById("myChart");
var ctx2 = document.getElementById("myChart2");
var ctx3 = document.querySelector("#selected .skills-card i");
// var ctx3 = document.querySelector(".item-selected .skills-card i");


// const myStatus = JSON.parse(ctx.canvas.dataset.deliveries)
// const data2 = ctx2.dataset.data2
// const data3 = ctx2.dataset.data3
// const data4 = ctx2.dataset.data4
// const data5 = ctx2.dataset.data5



var myRadarChart = new Chart(ctx, {
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
