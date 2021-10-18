

var ctx = document.getElementById('canva2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            //label: '# of Votes',
            data: [35, 25, 40],
            backgroundColor: [
                '#C0504D',
                '#4F81BD',
                '#9BBB59'
            ],
            borderColor: [
                '#C0504D',
                '#4F81BD',
                '#9BBB59'
            ],
            borderWidth: 1
        }]
    },

});

