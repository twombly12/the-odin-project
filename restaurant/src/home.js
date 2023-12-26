import { newPage } from './transition';

function homePage() {

    let landing = document.createElement('div');
    landing.classList.add('landing');

    let heading = document.createElement('h1');
    heading.classList = ('white-text center-text');
    heading.innerText = 'This is a restaurant';
    landing.appendChild(heading)

    let subHeading = document.createElement('h3');
    subHeading.classList = ('white-text center-text');
    subHeading.innerText = 'We have food';
    landing.appendChild(subHeading)

    let dishes = document.createElement('div');
    dishes.classList.add('dishes');

    let img1 = document.createElement('div');
    img1.classList.add('landing-dishes')
    dishes.appendChild(img1)

    let img2 = document.createElement('div');
    img2.classList.add('landing-dishes')
    dishes.appendChild(img2)

    let img3 = document.createElement('div');
    img3.classList.add('landing-dishes')
    dishes.appendChild(img3)

    let img4 = document.createElement('div');
    img4.classList.add('landing-dishes')
    dishes.appendChild(img4)

    landing.appendChild(dishes)

    newPage(landing)
}

export {
    homePage,
};