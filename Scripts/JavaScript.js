window.onload = function () {
    pegadados();

};

function imprimeDados(result) {
    objeto = $.parseJSON(result.d);
    var options = {
        series: [(objeto.a), (objeto.b), (objeto.c), (objeto.d), (objeto.e)],
        chart: {
            width: 380,
            type: 'pie',
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 4,
                left: 7,
                blur: 4,
                color: '#313332',
                opacity: 0.35
            }
        },
        fill: {
            colors: ['#32a894', '#E91E63', '#9C27B0', '#32a852', '#a87532']
        },
        labels: ['Teste1', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };


    var chart = new ApexCharts(document.querySelector("#firstChart"), options);
    chart.render();
}

function pegadados() {
    $.ajax({
        type: "POST",
        url: "WebForm1.aspx/GetCharts",
        contentType: "application/json; charset=utf-8",
        data: {},
        dataType: "json",
        success: function (result) {
            imprimeDados(result);
        },
        error: function (error) {
            alert(error);
        }
    });

    imprimeDados(result);
}