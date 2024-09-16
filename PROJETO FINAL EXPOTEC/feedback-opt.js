
document.getElementById('feedback-btn').addEventListener('click', function() {
    document.getElementById('feedback-modal').style.display = 'block';
});


document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('feedback-modal').style.display = 'none';
});


let selectedRating = 0;
document.querySelectorAll('.star').forEach(function(star) {

    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(function(s) {
            s.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});


document.getElementById('submit-feedback').addEventListener('click', function() {
    if (selectedRating > 0) {
        saveFeedback(selectedRating);
        alert('Obrigado pelo seu feedback!');
        document.getElementById('feedback-modal').style.display = 'none';
    } else {
        alert('Por favor, selecione uma avaliação.');
    }
});

function saveFeedback(rating) {
    console.log('Feedback enviado: ' + rating);
}
document.querySelectorAll('.star').forEach(function(star, index, stars) {
    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');

        stars.forEach(function(s) {
            s.classList.remove('selected');
        });

        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
        }
    });
});
