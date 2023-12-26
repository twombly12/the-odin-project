import './style.css';
import { homePage } from './home';
import { contactPage } from './contact';
import { menuPage } from './menu';

homePage()

let navBtns = document.querySelectorAll('nav button');

navBtns[0].addEventListener('click', homePage);
navBtns[1].addEventListener('click', menuPage);
navBtns[2].addEventListener('click', contactPage);