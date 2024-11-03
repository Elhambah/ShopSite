
let slideIndex = 1;
let remainingTime =70000;

function setTime(){
    if(remainingTime==0) return;
    let h=Math.floor(remainingTime/3600);
    let m=Math.floor((remainingTime%3600)/60);
    let s=(remainingTime%300)%60;
 document.querySelector('#hours').innerHTML=h;
 document.querySelector('#minute').innerHTML=m;
 document.querySelector('#second').innerHTML=s;

}
setInterval(() => {
    remainingTime-=1;
    setTime()
}, ((1000)));


function setSlide(input, index) {
    slideIndex = index;
    let item = document.querySelector(`#${input}`);
    let sildes = [...document.querySelector('.slides').children];

    sildes.forEach((element) => {
        element.classList.remove('active');
    }
    )
    item.classList.add('active');
}

setInterval(() => {
    slideIndex += 1;
    if (slideIndex == 4) {
        slideIndex = 1;
    }
    setSlide(`slid${slideIndex}`, slideIndex)
}, 4000)

function loginform(){
console.log("hello");

}