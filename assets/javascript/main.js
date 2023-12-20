let image = document.querySelector('#section-2 .container .image img');
let dark = document.querySelector(".darkmode i");
let link = document.querySelectorAll("link");

function darkLightMode(){
    if (dark.classList.contains("fa-sun")){
        dark.classList.replace('fa-sun', 'fa-moon');
        image.src= "./assets/images/pngegg.png";
        link[3].href="./assets/css/dark.css";
    }
    else
    {
        dark.classList.replace('fa-moon', 'fa-sun');
        image.src= "./assets/images/hero_image.png";
        link[3].href="./assets/css/main.css";
    }
}
dark.addEventListener("click" , darkLightMode);