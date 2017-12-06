var pins = 0;
var imageArray = new Array();

function imageLocation(){
  dataObj1 = {globaDdataId1:kony.application.getCurrentForm().Camera1.rawBytes};
//addAt method call ,adding the above row at 15th index position.
kony.application.getCurrentForm().segCarousel1.addDataAt(dataObj1,0);	
  	imageArray.push(kony.application.getCurrentForm().Camera1.rawBytes);
  	saveLocation();
}

function pinClicked(id){
  	alert(id);
}


function successcallback(position) {
    var geoPosition = "Latitude: " + position.coords.latitude;
    geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
    geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
    geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
    geoPosition = geoPosition + " Altitude Accuracy: "+ position.coords.altitudeAccuracy;
    geoPosition = geoPosition + " Heading: " + position.coords.heading;
    geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
    geoPosition = geoPosition + " Timestamp: " + position.timestamp;
  	var pin = {
      id: "pin"+pins,
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      name: "Pin"+pins
    };
    alert(geoPosition);
  	kony.application.getCurrentForm().Map0.addPin(pin);
}

function errorcallback(positionerror) {
    var errorMesg = "Error code: " + positionerror.code;
    errorMesg = errorMesg  + " message: " + positionerror.message;
    alert(errorMesg);

}

function saveLocation(){
var positionoptions = {maximumage: 3000};
pins++;
kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
}


