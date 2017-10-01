$(function () {
    $("#get").click(function (e) {
        e.preventDefault();
        $(".card").css("display", "none");
        $(".card-body").empty();
        var city = $("#city").val();
         var d = new Date();
            var date = d.toDateString();
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4640b994ea52ada5f732377b5326ef48";
       
        $.get(urlApi, function (data) {
            var weatherp = data.weather[0].main;
            if (weatherp == "Clouds") {
                var weatherS = "013-cloudy.png";
            }
            if (weatherp == "Rain") {
                var weatherS = "014-rainy.png";
            }
            if (weatherp == "Clear") {
                var weatherS = "008-weatherlogo.png";
            }
            if (weatherp == "Thunderstorm") {
                var weatherS = "017-storm.png";
            }
            if (weatherp == "Mist") {
                var weatherS = "018-sky.png";
            }
            
            console.log(data);
            var row1 = "<h1><b>" + data.name + "</b></h1>" +
            "<p>&nbsp;" + date+   
             "<br>&nbsp;&nbsp;<img src='" + weatherS + "' alt='Cinque Terre'  width='200' height='200'>" +
                                                           
             "<p>Temperature: &nbsp;" + data.main.temp / 10 + 
            "<br>Humidity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;" + data.main.humidity + 
            "<br>Weather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;" + data.weather[0].description+  "</p>";
            // $("#testshow").append(row1);
            $(".card-body").append(row1);
            $(".card").slideDown("slow");

           
            
        });
    });
});