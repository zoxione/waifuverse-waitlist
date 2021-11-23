import './style.css';

const form = document.getElementById('form'), 
    input = document.getElementById('input'),
    submitBtn = document.getElementById('submit');

input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value);
});

Pageclip.form(form, {
    onSubmit: function (event) { 
        var content = document.getElementById('content');
        content.innerHTML = `
            <main class="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="#fff">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/>
                </svg>
                <h1 class="mt-2 text-3xl md:text-5xl font-bold">Done!</h1>
                <p class="mt-1 text-lg md:text-xl font-light text-gray-50 text-opacity-80">You will get the news first.</p>
            </main>
        `; 
    },
    onResponse: function (error, response) { },
    successTemplate: '<span>Thank you!</span>'
})

function isValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
}