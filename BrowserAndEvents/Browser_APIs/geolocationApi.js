const findButton = document.getElementById("findButton");
const locationArea = document.getElementById("locationDiv");

const options = {
    enableHighAccuracy: true,
    timeOut: 5000,
    maximumAge: 0
}

const handleSuccess = (position) => {
    const result = position.coords;
    let message = `You are at <br />
    Latitude  : ${result.latitude} <br />
    Longitude : ${result.longitude} <br />
    +/-       : ${(result.accuracy)} meters`;
    locationArea.innerHTML = message;
    locationArea.style.color = "blue";
}

const handleError = (error) => {
    console.warn(`Error (${error.code}: ${error.message})`);
}

findButton.onclick = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }
    else{
        locationArea.innerHTML = "Sorry! this browser does not support geolocation!!!";
        locationArea.style.color = "red";
    }
}