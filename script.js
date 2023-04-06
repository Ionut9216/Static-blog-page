const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#5AB682';
    });
    
    button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#6D3075';
    });
})
