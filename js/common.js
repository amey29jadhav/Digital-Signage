$(document).ready(function(){
    getLocation();
    var dateHeight = $(".date-weather-cls").outerHeight()
    var bodyHeight = $("body").outerHeight()
    $(".ytplayercls").height(bodyHeight-dateHeight)
    
    /* Date and time calculations start*/
    var newDate = new Date();
    var days=["Sunday",'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var months=["Jaunary",'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var day= newDate.getDay();
    var date= newDate.getDate()
    var month = months[newDate.getMonth()];
    var year = newDate.getFullYear();
    var time = newDate.getHours()+":"+newDate.getMinutes();
    $("#day").html(days[day]);
    $("#date").html(date+" "+month+" "+year);
    $("#time").html(time)
    /* Date and time calculations end*/
    
    /*Notfication start*/
    var notifications = [];
    $.ajax({
        type: "GET",
        url: "../data.txt",
        dataType: "text",
        success: function(data) {
            data = data.split("\n");
            for(var i = 0; i < data.length; i++){
                $("#notification").append("<div class='notify'>"+data[i]+"</div>")
            }
        }
     });
    /*Notfication end*/
    
    
    /*Weather start*/
    var long, lat;
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    function showPosition(position) {
        $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=e26f9566a42faca4fe3dde590b931aaf",
        type: "GET",
        success: function(data) {
            console.log(data)
        }
     });
    }
    /*Weather end*/
 
    
})