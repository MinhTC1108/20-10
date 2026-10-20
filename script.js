const wrapper = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");

if (!wrapper || !letter) {
    console.error("Envelope elements not found.");
} else {
    const openEnvelope = () => {
        wrapper.classList.add("open");
        wrapper.classList.add("deactivate-wrapper");

        if (!letter.classList.contains("open")) {
            setTimeout(() => {
                letter.classList.add("show-letter");

                setTimeout(() => {
                    letter.classList.remove("show-letter");
                    letter.classList.add("open");
                }, 500);
            }, 1000);
        }
    };

    const closeEnvelope = () => {
        wrapper.classList.remove("open");
        wrapper.classList.remove("deactivate-wrapper");

        if (letter.classList.contains("open")) {
            letter.classList.add("closing-letter");

            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("open");
            }, 500);
        }
    };

    wrapper.addEventListener("click", (e) => {
        if (e.target.closest(".content")) {
            return;
        }

        if (wrapper.classList.contains("open")) {
            closeEnvelope();
        } else {
            openEnvelope();
        }
    });
}