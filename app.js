// so we are going to make a gallery using javascript. Rather than adding each image seperately onto the index.html (the document) we are going to first create an array of images (as objects) on app.js, and then create a loop function to pull those various image details (objects) from the array. We will then ask the loop function to paste those details inbetween x2 <img> tags (as we would do if we'd typed them manually onto the document itself). Once we have those image tags ready, we will finally send them to a js thumbnails container, which will then share itself with a container on the document side.

// step 1. create a js thumbnails container - called "jsThumbnailsContainer". We will call the recieving (document) container "carousel". Note, you will need to add a div line to the body of the document like so... <div id="thumbnails-container" class="thumbnailsContainer"></div>
const jsThumbnailsContainer = document.querySelector(".thumbnails-container");

// come back later to understand this line
const jsBigContainer = document.getElementById("bigContainer");

//now we have linked our js container (empty at the moment) to our html document container, which is also empty (until it can access any details from the js one). Think of any javascript code as being like a mask. It supplies the html document with a (like) placeholder value, which the document can then read/use (As if it's been typed on the document itself). This is the only way javascript can communicate with html, as they're 2 different languages.

// step 2. create an array of objects (which in this case will be our image details). We will call this array "jsImages". The more details we can supply in each object, the more we can manipluate their presense later to achieve different things. src is the location of the image. alt is alt text (which will display if the image struggles loading, for whatever reason). and class is giving the images a label basically, so we can tinker with their css later. We'll give them the class name of "card"

// ignore this step for now. this os coding for button functions. Continue the guide from const images = [

const left = document.getElementById("leftBtn");
const right = document.getElementById("rightBtn");
const toggle = document.getElementById("toggle");

let currentIndex = 0;
let isShown = true;

const images = [
  {
    src: "images/sonic 1.jpg",
    alt: "Sonic 1 (Released 1991)",
    className: "thumb",
  },
  {
    src: "images/sonic 2.jpg",
    alt: "Sonic 2 (Released 1992)",
    className: "thumb",
  },
  {
    src: "images/sonic 3.jpg",
    alt: "Sonic 3 (Released 1994)",
    className: "thumb",
  },
  {
    src: "images/sonic and knuckles.jpg",
    alt: "Sonic & Knuckles (Released 1994)",
    className: "thumb",
  },
  {
    src: "images/sonic 3d.jpg",
    alt: "Sonic 3D (Released 1996)",
    className: "thumb",
  },
  {
    src: "images/sonic spinball.jpg",
    alt: "Sonic Spinball (Released 1993)",
    className: "thumb",
  },
  {
    src: "images/dr robotniks mean bean machine.jpg",
    alt: "Dr Robotnik's Mean Bean Machine (Released 1993)",
    className: "thumb",
  },
];
// for each method (i find this method harder to understand)
//function createThumbnails() {

//images.forEach(function (image) {
//const imageElement = document.createElement("img");
//
//imageElement.src = image.src;
//imageElement.alt = image.alt;
//
//console.log(image);
//console.log(imageElement);
//
//thumbnailsContainer.append(imageElement);
//});
//}
//
//createThumbnails();

// step 3. Create a loop function to pull those details out of the array one by one, (and do various things with them at the end of the loop code). To create a loop we must first tell the function - which object in the array to start executing the code on. By telling it that i=0 (i stands for index) it knows to start the process with the 1st object. The 1st object in an array is always postion 0, Javascript reads from top to bottom, so the first object is considered position 0, and the next - position 1, next position 2, etc etc.
// so here, we say we want to create a function, call it what you want, I will call it createJsThumbnails(), and any code within the {brackets} is the function code itself
// here we tell it, let i=0 (start looking for objects at object position 0).
// then we say if that object's index number is a number less than the arrays length number (remember we labelled our array "images") - (an arrays length is the number of objects it holds within it), we set the object's index start position starts at (0), so that is less than 6 (the arrays length) then move down to the next line of code (const...) and carries on doing as it's instructed (read below to see what it does). (note, the loop function reads the last part (i=++) as the last process in the code, so it skips past that to begin with, and comes back to it at the end - thus creating the loop). It only ever reads the i=0 once, and skips that completely for the remainder of how ever many loops it performs.
function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    const jsElement = document.createElement("img"); // next we tell the loop what to do once it has found an object in the array. We put this into another block of code between {brackets} and give it a block name, I will call it "jsElement". And we ask it to simulaneously create and paste an <img> element onto the html document itself. All this would create so far is <img></img> on the document, so we need to add the actual object details within those tags too, like so...
    jsElement.src = images[i].src; // this pulls the actual src data of the object from the object in the array, and pastes it between the created <img> tags.So it would now look like <img> src = </img>
    jsElement.alt = images[i].alt; // same to pull the alt text. So now it would look like <img> src = alttext = </img>
    jsElement.className = images[i].className; // same to pull the class data. Now it would look like <img> src = alttext = class = </img>. The Element creation process is now complete. now the loop function moves back up the the 1st line of the function (to the i++) here it finally executes the final part of the loop function (i++), adding 1 to the current value of i. Then it repeats the loop again (starting at i < images). The loop finally stops when i has become more than the array.length during the loop process. By which time a seperate image element will have been created for all objects.

    // we can also add an eventListener in here. to know when somebody has clicked on an image. even though we dont have any physical html image elements on our index.html - javasript will still detect a click via it's connection to the document in this loop function.
    jsElement.addEventListener("click", function () {
      console.log(images[i]); // add a console log function to verify the click is detected
      displayBigImage(images[i]); // upon click - trigger a invoker to summon a bigger image to display below the clicked image. This will need to be set up as a new function of it's own outside of this loop function. (see below)
    });

    jsThumbnailsContainer.append(jsElement); //we created a javascript thumbnails container on the very top of this page. this final line of loop code says, add each jsElement created by this loop function (as a child) into the jsThumbnails container. (which is in turn is linked to the documents carousel container).
  }
}

createThumbnails(); // this is the invoker code to trigger the "createThumbnails" Function. Without this the createThumbnails function will never start.

// now we are going to create a function to make large images (remember we asked our loop function to summon this (a large image) whenever somebody clicks on the thumbnail.
function displayBigImage(objectData) {
  // give the function a name. I will call it createBigImage, the () are to house extra arguement requirements given to it by the invoker. (this invoker is placed above in the createThumbnails function. And the extra information supplied in the invoker command is the array object's alt and src details.

  bigContainer.innerHTML = ""; // ignore this for now. this is simply a line of code to make the big image delete itself when the user clicks on another image. i.e. it clears the big image everytime this functions runs. instead of objectData.alt I could have left it as "". But I wanted to display the alt text also above the big image.

  // this is the beginning of function block now. We tell it to create <img> tags for the large images, and past them onto the document. Remember this line of code is also the documents virtual connection to the javascript side of it.
  const jsBigImage = document.createElement("img");
  //and finally we give the function's (imageData) by pulling it's info from the jsBigImage .src and alt
  jsBigImage.src = objectData.src;
  jsBigImage.alt = objectData.alt;
  jsBigImage.className = "big-image";

  jsBigContainer.append(jsBigImage); // and we finish by adding each big image into the bigDisplayContainer that we made at the very top of this page.
}

// to style the big images, create a dummy invoker command to trigger a large image. So you can work on it. This also triggers the first large image in the array to be showing upon page load.
displayBigImage(images[0]);

// code for button functions

left.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  //currentIndex = currentIndex-1;
  displayBigImage(images[currentIndex]);
});
right.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  displayBigImage(images[currentIndex]);
});

// arrow key functions (scrolling with the left and right buttons)

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "ArrowLeft") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    //currentIndex = currentIndex-1;
    displayBigImage(images[currentIndex]);
  } else if (event.key === "ArrowRight") {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    displayBigImage(images[currentIndex]);
  }
});

toggle.addEventListener("click", () => {
  if (isShown) {
    // We're using style.display to change the visibility/layout of the element, with 'display = "none"' to hide it
    thumbnailsContainer.style.display = "none";
    isShown = false;
    toggle.style.top = "5vh";
  } else {
    thumbnailsContainer.style.display = "flex";
    isShown = true;
    toggle.style.top = "25vh";
  }
});
// a bit of debugger practice
for (let i = 0; i <= 100; i++) {
  console.log([i]);
}
