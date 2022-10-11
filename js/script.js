const btn = document.querySelector('.button');

btn.addEventListener("click", () => {
    const name = prompt("What is your name?");
    alert(`Your name is ${name}`);
});


