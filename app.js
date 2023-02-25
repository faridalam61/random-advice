document.getElementById('reload').addEventListener('click', loadAdvice);

function loadAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
    .then(data => updateAdvice(data))
}

function updateAdvice(advice) {
    document.getElementById('advice-number').innerText = `Advice #${advice.slip.id}`;
    document.getElementById('advice-text').innerText = `${advice.slip.advice}`;
}

loadAdvice();
