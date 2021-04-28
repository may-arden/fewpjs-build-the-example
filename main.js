// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector('#modal');
const errorMessage = document.querySelector('#modal-message');

function hideError() {
  errorModal.classList.add("hidden");
};

//

document.addEventListener('DOMContentLoaded', hideError());

//
const hearts = document.querySelectorAll(".like-glyph");

//
function updateLikeStatus() {
  mimicServerCall()
  .then((response) => {
    updateHeart(this)
  })
  .catch((error) => {
    handleError(error);
  })
}

//

function handleError(message) {
  errorModal.classList.remove("hidden");
  errorMessage.innerText = message;
  removeError();
}

function removeError() {
  let timer = setTimeout(function() {
    errorModal.classList.add("hidden");
    errorMessage.innerText = "";
  }, 5e3);
  }

  function updateHeart(heart) {
    if (heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    } else {
      heart.innerText = FULL_HEART;
      heart.classList.add("acivated_heart");
    }
  }

  hearts.forEach(
    heart => heart.addEventListener("click", updateLikeStatus)
  )

  



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
