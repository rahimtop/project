const forms = document.querySelector('.form');


forms.addEventListener('click', () => {
    if (forms.style.background == 'gold') {
        forms.style = `
        background: lime;
        border-radius: 150px;
        transition: 1.5s;
        `
    }else {
        forms.style = `
            background: gold;
            border-radius: none;
            transition: 1.5s;
        `
    }
})
