let loadButton = document.querySelector(".load-more .btn1");
let showButton = document.querySelector(".load-more .btn2");
let currentItem = 6;
let maxItem = 11;
let boxes = document.querySelectorAll('.card-container .col');


// If Load More Button On Click
loadButton.onclick = () => {

  for(let i = currentItem; i < currentItem + 3; i++){
      boxes[i].classList.remove('d-none');
      
    }

  currentItem += 3;

  if (currentItem >= boxes.length){
    loadButton.classList.remove("d-inline-block");
    loadButton.classList.add("d-none");
    showButton.classList.remove("d-none");
    showButton.classList.add("d-inline-block");

    currentItem = 6;
  }
};

showButton.onclick = () => {
  for(let j = maxItem; j > maxItem - 6; j--){
    boxes[j].classList.add('d-none');
  }

  maxItem -= 6;

  if (maxItem <= boxes.length) {
    showButton.classList.remove('d-inline-block');
    showButton.classList.add('d-none');
    loadButton.classList.remove('d-none');
    loadButton.classList.add('d-inline-block');
    maxItem = 11;
  }
}

// If window scroll vertically
const navbarLogo = document.querySelector("img");

window.addEventListener ('scroll', () => {
  if(window.scrollY > 100){
    navbarLogo.classList.add('shrink');
  }
  else {
    navbarLogo.classList.remove('shrink');
  }
});












