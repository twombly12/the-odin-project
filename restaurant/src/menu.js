import { newPage } from './transition';
import Masala from './assets/masala.jpg';
import Samosa from './assets/samosa.jpg';
import Chicken from './assets/chicken.jpg';
import Pastry from './assets/pastry.jpg';

function menuPage() {

    let landing = document.createElement('div');
    landing.classList.add('landing');

    let dishes = document.createElement('div');
    dishes.classList = ('dishes menu-page');

    function createMenuItem(imageSrc, dishName, dishDesc) {
        let menuItem = document.createElement('div');

        let image = document.createElement('img')
        image.src = imageSrc;
        menuItem.appendChild(image)

        let nameAndDesc = document.createElement('div');

        let name = document.createElement('h1')
        name.classList = ('white-text smaller-text');
        name.innerText = dishName;
        nameAndDesc.appendChild(name)

        let desc = document.createElement('h3')
        desc.classList = ('white-text smaller-text');
        desc.innerText = dishDesc;
        nameAndDesc.appendChild(desc)

        menuItem.appendChild(nameAndDesc)

        dishes.appendChild(menuItem)
    }

    let dish1Img = Masala;
    let dish1Name = 'Special Dish #1';
    let dish1Desc = 'This Is A Delicious Dish Of Food. $4.76!';

    let dish2Img = Samosa;
    let dish2Name = 'Special Dish #2';
    let dish2Desc = 'This one is okay. $3.27!';

    let dish3Img = Chicken;
    let dish3Name = 'Special Dish #3';
    let dish3Desc = 'This one Is also A Delicious Dish Of Food. $5.21!';

    let dish4Img = Pastry;
    let dish4Name = 'Special Dish #4';
    let dish4Desc = 'This one is not so good. $3.99!';

    createMenuItem(dish1Img, dish1Name, dish1Desc)
    createMenuItem(dish2Img, dish2Name, dish2Desc)
    createMenuItem(dish3Img, dish3Name, dish3Desc)
    createMenuItem(dish4Img, dish4Name, dish4Desc)


    landing.appendChild(dishes)
    newPage(landing)

}

export {
    menuPage,
};