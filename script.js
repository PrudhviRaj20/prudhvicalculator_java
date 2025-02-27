
function calculateResult() {
    try {
        document.getElementById('expression').value = eval(document.getElementById('expression').value);
    } catch (e) {
        alert('Invalid Expression');
        document.getElementById('expression').value = '';
    }
}
        