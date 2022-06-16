// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHeart = document.querySelectorAll(".like-glyph")
console.log(likeHeart)
likeHeart.forEach( (elementLikeGlyph) => {
  elementLikeGlyph.addEventListener('click',myheartFunc)
})
  
function myheartFunc(event){
  mimicServerCall()
  .then(returnedserverMessage => {
    let heart = event.target
    if (heart.textContent === EMPTY_HEART)
    {
      heart.textContent = FULL_HEART
      heart.textContent.classList.add
    }else{
      heart.textContent = EMPTY_HEART
    }
  })
  .catch( (errorMessage) => {
    let divContainerErrorMsg = document.getElementById(modal)
    //let msgDisplay = divContainerErrorMsg.removeAttribute("hidden")
    setTimeout(()=> {
      let pTagMsg = document.querySelectorAll("p .modal-message")
      pTagMsg.textContent = errorMessage
    },3000)
    
  })
}
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
