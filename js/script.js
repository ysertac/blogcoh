let changeColor = () => {
    document.querySelector('.fa-magnifying-glass').style.color = 'purple';
    document.querySelector('.fa-magnifying-glass').style.transition = 'all .3s';
}

let resColor = () => {
    document.querySelector('.fa-magnifying-glass').style.color = 'white';
}

let refreshForm = () => {
    setTimeout(() => {
        document.querySelector('.mycontact').reset()}, 10);
};


