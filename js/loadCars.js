$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data){
        //console.log(data);
        var table =$("#carsTable")
        $.each(data, function(key, value){
            var row = $('<tr></tr>');
            var manufacturerCell = $('<td>' + value.manufacturer + '</td>')
            var nameCell = $('<td>' + value.name + '</td>')
            var consumptionCell = $('<td>' + value.consumption + '</td>')
            var colorCell = $('<td>' + value.color + '</td>')
            var yearCell = $('<td>' + value.year + '</td>')
            var horsepowerCell = $('<td>' + value.horsepower + '</td>')
            var availableCell = $('<td>' + value.available + '</td>')

            $(row).append(manufacturerCell);
            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(yearCell);
            $(row).append(horsepowerCell);
            $(row).append(availableCell);

            $(table).append(row);
        })
    })
})