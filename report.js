$(function () {
    $("#getW").click(function (e) {
        e.preventDefault();
        $("#reportbox").empty();
        var city = $("#city").val();
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca44bdc8f531754566a509754e2b141c";
        $.get(urlApi, function (data) {
            console.log(data);
            var row1 = "<h4><b>" + data.name + "</b></h4>" + 
            "Temperature: &nbsp;" + data.main.temp / 10 + 
            "<br>Humidity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;" + data.main.humidity + 
            "<br>Weather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;" + data.weather[0].description + data.weather[0].icon + "</p>";
            // $("#testshow").append(row1);
            $("#reportbox").append(row1);
        });
    });
});