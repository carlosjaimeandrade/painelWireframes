google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mês', 'Sales', 'Expenses'],
    ['Janeiro',  1000,      400],
    ['Fevereiro',  560,      460],
    ['Março',  535,      300]
  ]);

  var options = {
    title: '',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
    colors: ['#4AA088', '#FF6A64']
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}