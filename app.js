var imgDetails;
let img_placeholder;
let localCats = JSON.parse(localStorage.getItem("favKats"));

function kat(res) {
  let img = new Image();
  img.src = res;
  img.crossOrigin = "Anonymous";
  img.alt = "A lovely cat";
  imgDetails = res;
  img.onload = function (e) {
    // console.log("image loaded");
    // console.log(e);
  };
  img.setAttribute("class", "tab__img");
  img_placeholder = document.querySelector(".tab__pic");
  // remove old child if exists
  if (img_placeholder.firstChild) {
    img_placeholder.removeChild(img_placeholder.firstChild);
  }
  img_placeholder.appendChild(img);
  // return imgDetails;
}

function kitty() {
  // check if network is available
  if (navigator.onLine) {
    fetch("https://source.unsplash.com/1920x1080/?cat").then((res) => {
      // console.log(res);
      kat(res.url);
    });
  } else {
    // if network is not available
    alert("No internet connection");
  }
}

window.addEventListener("load", () => kitty());

document.addEventListener("DOMContentLoaded", () => {
  let btn_heart = document.querySelector(".tab__icon--heart");
  let btn_shuffle = document.querySelector(".tab__icon--shuffle");
  let btn_menu = document.querySelector(".tab__icon--menu");
  let btn_debug = document.querySelector(".tab__icon--debug");
  let btn_download = document.querySelector(".tab__icon--download");

  btn_heart.addEventListener("click", () => {
    // create new cat object, add base64 img to it, add to local storage
    // create canvas element to convert img to base64
    // get reference to img element which is in the DOM
    let img = document.querySelector(".tab__img");
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let base64 = canvas.toDataURL("image/png");
    let newCat = {
      url: imgDetails.url,
      data_uri: base64,
    };
    // get local cats
    if (localCats instanceof Array && localCats.length > 0) {
      // check if img is already in local storage
      let isInLocalStorage = localCats.find(
        (cat) => cat.url === imgDetails.url
      );
      if (!isInLocalStorage) {
        localCats.push(newCat);
        try {
          localStorage.setItem("favKats", JSON.stringify(localCats));
        } catch (error) {
          console.log(error.message);
        }
      }
    } else {
      localCats = [];
      localCats.push(newCat);
      try {
        localStorage.setItem("favKats", JSON.stringify(localCats));
      } catch (error) {
        console.log(error.message);
      }
    }
    console.log("localCats", localCats);
  });

  btn_shuffle.addEventListener("click", async () => {
    if (localCats) {
      let randomCat = localCats[Math.floor(Math.random() * localCats.length)];

      console.log("randomCat", randomCat);
      kat(randomCat.data_uri);
    } else {
      console.log("no cats in local storage");
      await kitty();
    }
    console.log("shuffle clicked");
    // todo
  });

  btn_menu.addEventListener("click", () => {
    console.log("menu clicked");
    // todo
  });

  btn_debug.addEventListener("click", () => {
    imgDetails ? console.log(imgDetails) : console.log("Sed Lyf! no img");
    // todo
    localCats ? console.log(localCats) : console.log("Sed Lyf! no cats");
  });

  btn_download.addEventListener("click", () => {
    let blob = new Blob([imgDetails.url], { type: "image/jpeg" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = "cat.jpg";
    link.click();
  });
});
