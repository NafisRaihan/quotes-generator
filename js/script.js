function quickQuote(){
    fetch('https://api.kanye.rest/')
        .then (response => response.json())
        .then ( data => quoteGenerate(data));
}

function quoteGenerate(data){
    const quoteText = document.getElementById('quoteText');
    quoteText.innerText = data.quote;
}