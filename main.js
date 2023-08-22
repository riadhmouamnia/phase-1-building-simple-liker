// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const hearts = document.querySelectorAll(".like-glyph");
mimicServerCall()
  .then((data) => {
    console.log(data);
    hearts.forEach((heart) => {
      heart.addEventListener("click", () => {
        heart.innerText === FULL_HEART
          ? (heart.innerText = EMPTY_HEART)
          : (heart.innerText = FULL_HEART);
        heart.classList.toggle("activated-heart");
      });
    });
  })
  .catch((err) => {
    console.log(err.message);
    const modal = document.querySelector("#modal");
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.add("hidden"), 3000);
  });
