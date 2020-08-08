$(document).ready(function ($) {

    function loadJSON() {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data/userInfo.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText)
            }
        }
        xobj.send(null)
        xobj.onload = function() {
            var jsonResponse = xobj.response
            loadUserInfo(jsonResponse)
        }
    }
    loadJSON();

    function loadUserInfo(jsonResponse) {
        document.getElementById("myName").textContent = jsonResponse['f_name']
        console.log(jsonResponse['f_name'])
    }
});