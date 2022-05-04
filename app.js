const text = document.querySelectorAll(".thePaths");

// console.log(text[0].getTotalLength());

for (let index = 0; index < text.length; index++) {
  console.log(`text number ${index} length is ${text[index].getTotalLength()}`);
}

const lastWord = document.querySelector("#two_seven");
console.log(lastWord);
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease; opacity:0; pointer-events:none;";
});

document.addEventListener("click",function(e){
  if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
      myModal.show();
  }
})


