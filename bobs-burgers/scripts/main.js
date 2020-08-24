/* const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable = 'Bob';
*/

//comment with no line breaks for js

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/bobs-burgers-sign.png');
    } else {
      myImage.setAttribute('src','images/bobs-burgers-sign-alt.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bob Belcher welcomes you, ' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bob Belcher welcomes you, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }