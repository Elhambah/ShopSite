
let slideIndex = 1;
function setSlide(index, input) {
    slideIndex = index;
    let item = document.querySelector(`#${input}`);
    let sildes = [...document.querySelector('.slides').children]
    sildes.forEach((element) => {
        element.classList.remove('active');
    }
    )
    item.classList.add('active');
}