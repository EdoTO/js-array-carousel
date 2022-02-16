

const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

let index = 0;

const slideContainer = document.querySelector('.slide-container')


for ( let i = 0; i < images.length; i++ ) {

    const item = '<div class="item"><img src=" ${ images [i] } " alt=""></div>';
    slideContainer.innerHTML += item;

}

const items = [...document.getElementsByClassName('item')]

items[index].classlist.add('active')


const left = document.querySelector('.left')

left.addEventListener('click', function() {

    if( index > 0 ) {
        items[index].classList.remove('active')
        index--
        items[index].classList.add('active')
    }

})

const right = document.querySelector('.right')

right.addEventListener('click', function() {

    if( index > items.length -1 ) {
        items[index].classList.remove('active')
        index++
        items[index].classList.add('active')
    }
})