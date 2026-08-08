const contactForm = document.querySelector("#contact-form");
const messageCount = document.querySelector("#message-count");

let numMessages = Number(localStorage.getItem("messages-ls")) || 0;

messageCount.textContent = numMessages;

contactForm.addEventListener("submit", () => {

    numMessages++;

    localStorage.setItem("messages-ls", numMessages);

});