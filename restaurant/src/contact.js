import { newPage } from './transition';

function contactPage() {

    let landing = document.createElement('div');
    landing.classList.add('landing');

    let heading = document.createElement('h1');
    heading.classList = ('white-text center-text');
    heading.innerText = 'Our Contact Info';
    landing.appendChild(heading)

    let subHeading = document.createElement('h3');
    subHeading.classList = ('white-text center-text smaller-text');
    subHeading.innerText = 'we have a Phone Number';
    landing.appendChild(subHeading)

    let subHeadingTwo = document.createElement('h3');
    subHeadingTwo.classList = ('white-text center-text smaller-text');
    subHeadingTwo.innerText = 'We also have an Email Address';
    landing.appendChild(subHeadingTwo)

    let subHeadingThree = document.createElement('h3');
    subHeadingThree.classList = ('white-text center-text smaller-text');
    subHeadingThree.innerText = 'And we have an Address';
    landing.appendChild(subHeadingThree)

    let dishes = document.createElement('div');
    dishes.classList.add('dishes');

    let img1 = document.createElement('div');
    img1.classList.add('contact-images')
    dishes.appendChild(img1)

    let img2 = document.createElement('div');
    img2.classList.add('contact-images')
    dishes.appendChild(img2)

    let img3 = document.createElement('div');
    img3.classList.add('contact-images')
    dishes.appendChild(img3)

    landing.appendChild(dishes)

    newPage(landing)
}

export {
    contactPage,
};