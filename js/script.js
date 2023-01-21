  var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);

//     const header = document.querySelector("header");

// window.addEventListener ("scroll", function(){
//     header.classList.toggle ("sticky", this.window.scrollY > 0);
// })

// let menu = document.querySelector('#menu-icon');
// let navmenu = document.querySelector('.navmenu');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navmenu.classList.toggle('open');
// }

  