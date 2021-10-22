// First Method (~YAY)
var inputElement = doc.createElement('input');
inputElement.type = 'url'; // this is important
// inputElement.value = url;
if (!inputElement.checkValidity()) {
    throw new TypeError('Invalid URL');
}

// Second Method (NAY)
function validURL(str) {
	  var pattern = new RegExp('((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)','i'); // fragment locator
	  return !!pattern.test(str);
}

// Third Method (Vimium) [includes guessing protocol, chrome:// pages, ...]
  // usage:
  if (isUrl(q)) {
      window.location=createFullUrl(q);
  } else {
  // (...)
  }
