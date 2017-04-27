/* called when new weather arrives */

function callbackFunction(data) {


	var city = document.getElementById("city");
    	city.textContent = JSON.stringify(data.query.results.channel.location.city+",").slice(1,-1);
    var region = document.getElementById("region");
    	region.textContent = JSON.stringify(data.query.results.channel.location.region).slice(1,-1);
    var temperature = document.getElementById("temperature");
    	temperature.textContent = JSON.stringify(data.query.results.channel.item.condition.temp+"\u00B0").slice(1,-1);
    var text = document.getElementById("text");
    	text.textContent = JSON.stringify(data.query.results.channel.item.condition.text).slice(1,-1);
	var wind = document.getElementById("wind");
    	wind.textContent = JSON.stringify(data.query.results.channel.wind.chill).slice(1,-1);
    var humidity = document.getElementById("humidity");
    	humidity.textContent = JSON.stringify(data.query.results.channel.atmosphere.humidity).slice(1,-1);

    var day = document.getElementsByClassName("day");
    var text = document.getElementsByClassName("text");
    var high = document.getElementsByClassName("high");
    var low = document.getElementsByClassName("low");

    var i;
    for (i=0; i <= 9; i++) {
    	day[i].textContent=JSON.stringify(data.query.results.channel.item.forecast[i].day).slice(1,-1);
    	text[i].textContent=JSON.stringify(data.query.results.channel.item.forecast[i].text).slice(1,-1);

        var forecast = data.query.results.channel.item.forecast;
        var images = document.getElementsByClassName("images");

        if (forecast.code == "16") {
            img="../WeatherApp3/snow.png";
            images.appendChild(img);
        };
        if (forecast.code == 26) {
            img="../WeatherApp3/cloudy.png";
            images.appendChild(img);
        };
        if (forecast.code == 24) 
        {
            img="../WeatherApp3/cloudy.png";
            images.appendChild(img);
        };

    	high[i].textContent=JSON.stringify(data.query.results.channel.item.forecast[i].high+"\u00B0").slice(1,-1);
    	low[i].textContent=JSON.stringify(data.query.results.channel.item.forecast[i].low+"\u00B0").slice(1,-1);
    }
    /*
    var forecast = document.getElementByClassName("forecast");
    for (var i in forecast) {
    	forecast[i].children[0].innerHtml=data.query.results.channel.item.forecast.day;
    	forecast[i].children[1].innerHtml=data.query.results.channel.item.forecast.text;
    	forecast[i].children[2].innerHtml=data.query.results.channel.item.forecast.high;
    	forecast[i].children[3].innerHtml=data.query.results.channel.item.forecast.low;
    }

3 ways to create methods in javascript
    1) outside of object (outside) - public methods 
    2) inside the constructor (use this keyword) - privileged methods (private data and private methods)
    3) 

    
    data.query.results.channel.item.forecast;
    var day1 = document.getElementById("day1");

    //console.log(forecast);
    for (var i in forecast) {
    	var day = forecast[i].day;
    	document.body.appendChild(day);
    	
    }

    var forecast = data.query.results.channel.item.forecast;
    var cur = document.getElementById("current");
    //console.log(forecast);
    for (var i in forecast) {
        var day = forecast[i].day;
        cur.innerHtml += "<p id=\"day\">" + day + "</p";
    }


    var day1_day = forecast[0].day;
    	document.getElementById("day1_day").textContent=day1_day;
    var day1_high = forecast[0].high;
    	document.getElementById("day1_high").textContent=day1_high;
    var day1_low = forecast[0].low;
    	document.getElementById("day1_low").textContent=day1_low;
    var day1_text = forecast[0].text;
    	document.getElementById("day1_text").textContent=day1_text;

    var day2_day = forecast[1].day;
   		document.getElementById("day2_day").textContent=day2_day;
    var day2_high = forecast[1].high;
    	document.getElementById("day2_high").textContent=day2_high;
    var day2_low = forecast[1].low;
    	document.getElementById("day2_low").textContent=day2_low;
    var day2_text = forecast[1].text;
    	document.getElementById("day2_text").textContent=day2_text; */

}	

function buttonAction(data) {
	// get what the user put into the textbox
	var newPlace = document.getElementById("zipbox").value;

	// make a new script element
	var script = document.createElement('script');

	// start making the complicated URL
	script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+newPlace+"')&format=json&callback=callbackFunction"
	script.id = "jsonpCall";

	// remove old script
	var oldScript = document.getElementById("jsonpCall");
	if (oldScript != null) {
		document.body.removeChild(oldScript);
	}

	// put new script into DOM at bottom of body
	document.body.appendChild(script);
}


/*
function buttonAction() {
	var zipcode = document.getElementById("zipcode").value;
	document.getElementById("zipcode").value="";
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +zipcode+"'&format=json&callback=callbackFunction", false);
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);
}

function start(){
	var city = data.query.results.channel.location.city;
	var region = data.query.results.channel.location.region;
	var 
}
*/


