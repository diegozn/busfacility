

var ctx = document.getElementById('canva1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h','13h','14h'],
        datasets: [{
            label: 'Nº de Passageiros',
            data: [12, 35, 19, 14, 12, 5, 30, 15],
            backgroundColor: [
                '#C53434',
                '#C53434',
                '#C53434',
                '#C53434',
                '#C53434',
                '#C53434'
            ],
            borderColor: [
                '#C53434',
                '#C53434',
                '#C53434',
                '#C53434',
                '#C53434',
                '#C53434'
            ],
            borderWidth: 1
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

