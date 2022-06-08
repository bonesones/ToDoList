let modal = document.querySelectorAll(".modal-window");
let btn = document.querySelectorAll(".task-action");
let checkOpened = document.querySelectorAll('.opened');

function openModal(){
  for (let i = 0; i < modal.length; i++){
      btn[i].addEventListener('click', (() => {
        if (checkOpened[i] != indefined){
        modal[i].classList.remove('opened');
      }
      modal[i].classList.add('opened');
    }))
  }
}
