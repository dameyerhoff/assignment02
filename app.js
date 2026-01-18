const thumbnailsContainer = document.querySelector(".carousel");
const bigDisplay = document.getElementById("bigDisplay");

const images = [
  {
    src: "images/sonic 1.jpg",
    alt: "Sonic 1 (Released 1991)",
    class: "card",
  },
  {
    src: "images/sonic 2.jpg",
    alt: "Sonic 2 (Released 1992)",
    class: "card",
  },
  {
    src: "images/sonic 3.jpg",
    alt: "Sonic 3 (Released 1994)",
    class: "card",
  },
  {
    src: "images/sonic and knuckles.jpg",
    alt: "Sonic & Knuckles (Released 1994)",
    class: "card",
  },
  {
    src: "images/sonic 3d.jpg",
    alt: "Sonic 3D (Released 1996)",
    class: "card",
  },
  {
    src: "images/sonic spinball.jpg",
    alt: "Sonic Spinball (Released 1993)",
    class: "card",
  },
  {
    src: "images/dr robotniks mean bean machine.jpg",
    alt: "Dr Robotnik's Mean Bean Machine (Released 1993)",
    class: "card",
  },
];

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

function createThumbnails() {
  //An *ALTERNATE* way of writing the loops is a for loop. here we create i as a variable, i stands for index and represents each objects position within an array. when we tell the loop that i=0 it knows to start looking inside the array at position 0. postion 0 is the first object of an array. the second object is at index i=1, and the 3rd object is i=2 etc etc.
  for (let i = 0; i < images.length; i++) {
    // it never reads the first part of this code again, it moves onto i < images.length the 1st object is found at i=0, it then checks if 0 is less than the arrays length. (the arrays length is how ever many objects are stored within it, in our case x6 of them), so yes, 0 is less than 6, then it moves onto the const line and carries on doing as it's instructed (read below to see what it does). when finished it comes back up, finally to execute the final part of the first line (i++), adding 1 to the value of i. Then it begins the loop again (starting at i < images). The loop finally stops when i is more than images.length
    const imgElement = document.createElement("img"); // next we tell the loop to pull the data from object 0, save its value as imgElement, and create a html element image tag <img></img>
    imgElement.src = images[i].src; // we also now need to pull the actual data of the image (src and alt details) to put in between the <img> tags.
    imgElement.alt = images[i].alt; // same to pull the alt text ^ now it moves back up the the 1st line (i++)
    imgElement.class = images[i].class; // same to pull the alt text ^ now it moves back up the the 1st line (i++)

    // we can also add an eventListener in here. to know when somebody has clicked on an image. as we dont have any physical html image elements on our index.html - javasript only has access to them through it's own code block here.
    imgElement.addEventListener("click", function () {
      console.log(images[i]); // an event listener knows when a user has clicked on what image - and will then fetch those extra src/alt details for it when they do
      //createBigImage(images[i])
      createBigImage(images[i]);
    });

    thumbnailsContainer.append(imgElement); //we created a thumbnails container on the very top of the code. this says, add (as a child) this block of code (therefore all of our images into this container)
  }
}

createThumbnails(); // this is the invoker code (the Wizard summoning his spell)

// now we are going to create a function to make large images
function createBigImage(imageData) {
  // clear the big Diplsay everytime this functions //runs
  bigDisplay.innerHTML = imageData.alt;
  // 1. make an image tag
  const bigImage = document.createElement("img");

  bigImage.src = imageData.src;
  bigImage.alt = imageData.alt;
  //
  bigDisplay.append(bigImage);
}
