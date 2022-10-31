// DOM queries
const numbers = document.querySelectorAll('.number');
const btn = document.querySelector('.btn');
const rating = document.querySelector('.rating-container');
const results = document.querySelector('.results');
const ratingNumber = document.getElementById('rating-number');

// show and hide content
const setupUI = () => {
    rating.classList.add('hide');
    results.classList.remove('hide');
}

// initialize setupUI function on click
btn.addEventListener('click', setupUI);

// get rating numbers
numbers.forEach(number => number.addEventListener('click', () => {
    
    ratingNumber.innerHTML = number.innerHTML;

}));
