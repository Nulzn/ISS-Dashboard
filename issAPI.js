var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var request = new XMLHttpRequest();
let lat, lon;

request.open('GET', 'https://api.wheretheiss.at/v1/satellites/25544');

request.onreadystatechange = function()
{
    if (request.readyState === 4)
    {
        var data = JSON.parse(request.responseText);
        lat = data.latitude;
        lon = data.longitude;
    }
}

request.send();

export { lat, lon };