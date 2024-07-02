document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const greetElement = document.getElementById('greet');

    nameInput.addEventListener('keyup', function() {
        greetElement.textContent = 'Hello ' + nameInput.value;
    });
});