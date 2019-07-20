function setCookie(cname, cvalue, exdays) {
    // console.log(cname + " " + cvalue)
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    location.reload();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("user_email");
    // console.log("User Email: " + user);
    if (user != "") {
        document.getElementById("get_rid_of_this_on_submit").style.display = "none";
        // document.getElementById("thankyou").innerHTML += " " + user + "!";
    } else {
        document.getElementById("thankyou").style.display = "none";
    }
}