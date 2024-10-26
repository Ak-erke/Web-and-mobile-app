const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playSound(note);
    });
});

function playSound(note) {
    const sound = new Audio(`sounds/${note}.wav`);
    sound.play();
}
