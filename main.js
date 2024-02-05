// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let isActivated = false

mimicServerCall()
  .then(() => {
    const heart = document.querySelector('.like-glyph')
    heart.addEventListener('click', () => {
    if (isActivated){
      heart.classList.remove('activated-heart')
      isActivated = false
    }else {
      heart.classList.add('activated-heart')
      isActivated = true
    
    }
  })
  })
  .catch((error) => {
   const errorModal = document.getElementById('modal')
   const errorMessage = document.getElementById('modal-message')

   errorMessage.textContent = error.message

   errorModal.classList.remove('hidden')

   setTimeout(() => {
    errorModal.classList.add('hidden')
  }, 3000)
  })



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
