function deletePage() {
    let landing = document.querySelector('.landing')
    landing.style.right = '300px';
    landing.style.opacity = '0%';

    setTimeout(function() {
        landing.remove();
    }, 1000);
}

function newPage(newDiv) {

    let landing = document.querySelector('.landing')

    const newContent = () => {
        newDiv.style.left = '400px';
        newDiv.style.opacity = '0%';

        let main = document.getElementById('content')
        main.appendChild(newDiv)


        setTimeout(function() {
            newDiv.style.left = '0px';
            newDiv.style.opacity = '100%';
        }, 100);
    }

    if (landing) {
        deletePage();
        setTimeout(function() {
            newContent();
        }, 1000);
    } else {
        newContent();
    }



}

export {
    deletePage,
    newPage,
};