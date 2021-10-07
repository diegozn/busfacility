// Sempre que add novo entregavel no trello, add na variavel x
// o valor deste entregavel em fibonnaci
var x = 315+5;


var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['22/09', '27/10', '28/09', '29/09', '30/09', '04/10','05/10','06/10','07/10','13/10','14/10','18/10','19/10','20/10','21/10'],
        datasets: [{
            label: 'Gráfico BURNDOWN',
            data: [
                x,
                x-15,
                x-15,
                x-15-21,
                x-15-21-20,
                x-15-21-20-6,
                x-15-21-20-11,
                //completar dia 6/10
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

