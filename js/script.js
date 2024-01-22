const signInBtnLink = document.querySelector('.singnInBtn-Link');

const signUpBtnLink = document.querySelector('.singnUpBtn-Link');

const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('Click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('Click', () => {
    wrapper.classList.toggle('active');
});

