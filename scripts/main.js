// Replace Text in H1
//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

// Replacing image on click the source image
let myImage = document.querySelector('img');

myImage.onclick = function() {
	
	let mySrc = myImage.getAttribute('src');
	
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute ('src', 'images/firefox2.png');
	} else {
		myImage.setAttribute ('src', 'images/firefox-icon.png');
	}
}

// change the page title to a personalized welcome message when the user first visits the site
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

myButton.onclick = function() {
  setUserName();
}