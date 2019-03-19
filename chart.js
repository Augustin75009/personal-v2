var ctx = document.getElementById("myChart");
var ctx2 = document.getElementById("myChart2");


// const myStatus = JSON.parse(ctx.canvas.dataset.deliveries)
// const data1 = ctx.dataset.data1
// const data2 = ctx.dataset.data2
// const data3 = ctx.dataset.data3
// const data4 = ctx.dataset.data4
// const data5 = ctx.dataset.data5


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
