// Helper Fuctions ------------------------------------------------------

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0)
      return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function doesCookieExist(name) {
  // Create the cookie name string with equal sign
  const nameEQ = name + "=";
  // Split document.cookie on semicolons into an array of all the cookies
  const ca = document.cookie.split(";");
  // Loop through the array elements
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    // Remove leading whitespace from the cookie string
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    // Check if this cookie string contains the name we're looking for
    if (c.indexOf(nameEQ) == 0) return true;
  }
  return false;
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}