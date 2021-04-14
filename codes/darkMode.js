const html = document.querySelector('html');
const checkbox = document.querySelector('.switch');


let check;

(() => {

  check = localStorage.getItem('check');

  if(check) {
    html.classList.toggle('dark-mode');
  }

})();

checkbox.addEventListener('change', function(){

  check = html.classList.toggle('dark-mode');

  if(check == true) {
    localStorage.setItem('check', check);
  } else {
    localStorage.clear();
  }

});
