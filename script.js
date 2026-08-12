let currentPage = 1;


/* NEXT PAGE */

function nextPage() {

    const current =
        document.getElementById("page" + currentPage);

    if (current) {
        current.classList.remove("active");
    }

    currentPage++;

    const next =
        document.getElementById("page" + currentPage);

    if (next) {
        next.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* CARD MESSAGES */

const messages = [

    "Thank you so much meri life mein aane ke liye. ❤️",

    "Aap meri life ka bohat special hissa hain. 💕",

    "Aapke saath guzra har moment mere liye precious hai. ✨",

    "Thank you for always making me smile. 😊",

    "Aapki khushi mere liye bohat important hai. 💓",

    "Main dua karti hoon Allah aapko hamesha khush rakhe. 🤲",

    "Aap meri life mein aaye, iske liye main hamesha thankful rahungi. 🌸"

];

let messageIndex = 0;


/* REVEAL CARD */

function reveal(card) {

    if (card.dataset.opened === "true") {
        return;
    }

    card.dataset.opened = "true";

    card.innerHTML =
        messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    card.style.fontSize = "15px";
    card.style.lineHeight = "1.5";
}


/* MUSIC */

function playMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.querySelector(".music-btn");

    if (!music) return;

    if (music.paused) {

        music.play();

        if (button) {
            button.innerHTML =
                "⏸️ Pause Music";
        }

    } else {

        music.pause();

        if (button) {
            button.innerHTML =
                "🎵 Play Music";
        }
    }
}