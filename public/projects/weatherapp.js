$(document).ready(function(){
	var long;
	var lat;
	var temp;
	
	navigator.geolocation.getCurrentPosition(function(position){
		var long 	= position.coords.longitude;
		var lat 	= position.coords.latitude;

		var api = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long;

		$.getJSON(api, function(data){

			var name 	= data.name;
			var weather = data.weather[0].main;

			var temp_degrees = data.main.temp;
			var temp_fair = ((temp_degrees * 1.8) + 32);

			var icon = data.weather[0].icon;

			console.log(icon);

			$('#box').css("background-image", icon); 

			$("h2").html(
				"<strong>Location:</strong> " + name + 
				"</br><strong>Weather:</strong> " + weather +
				"</br><strong>Temperature:</strong>  <span class='temp'>" + temp_degrees + "°C</span>" + 
				"</br><img id='icon' src=" + icon + "></img>");

			$('button').click(function(){
				if ($(".temp").html() == temp_degrees + "°C") {
					$(".temp").html(temp_fair + "°F")
					$("button").text("°C")
				} else {
					$(".temp").html(temp_degrees + "°C")
					$("button").text("°F")
				}
			});
			
		});
	});		
});

