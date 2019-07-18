//creating a function that creates a cookie for the person who visits the page.
function setCookie(cookie_name, cookie_value, expiration_date) {
  //Getting the date of the user's sign up to accurately make the cookie expire later
  var sign_up_date = new Date()
  //Calculating the day that the cookie will no longer apply
  sign_up_date.setTime(
    sign_up_date.getTime() + expiration_date * 24 * 60 * 60 * 1000
  )
  var expires = 'expires=' + sign_up_date.toGMTString()
  //setting up the cookie format when it will be stored as a string on the client's machine
  document.cookie = cookie_name + '=' + cookie_value + ';' + expires + ';path=/'
}
console.log('SOMETHING')
function getCookie(cookie_name) {
  var name = cookie_name + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function checkCookie() {
  var user = getCookie('username')
  if (user != '') {
    alert('Welcome again ' + user)
  } else {
    user = prompt('Please enter your name:', '')
    if (user != '' && user != null) {
      setCookie('username', user, 30)
    }
  }
}

checkCookie()
