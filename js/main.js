
let slideIndex = 1;
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

