/* Reset styles for all elements */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Global CSS variables (custom properties) for colors and theme */
:root {
    --main: #fff;
    --background: #ffebf2;
    --envelop-backgroung: #ffe3ed;
    --envelop-flap: #ffccd5;
    --envelop-body: #ffc1d1;
    --shadow: rgba(0, 0, 0, 0.2);
    --text: #003049;
    --sticker: #ff477e;
}

/* Styles for the <body> element */
body {
    background: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}

/* Main page title styling */
h1 {
    font-family: "Marck Script", serif;
    text-align: center;
    font-size: 60px;
    margin-bottom: 50px;
    color: #444;
}

/* Container that limits the width of the envelope area */
.container {
    width: 400px;
}

/* Main envelope wrapper that holds the envelope and applies background and shadow */
.envelope-wrapper {
    position: relative;
    background-color: var(--envelop-backgroung);
    box-shadow: 0 0 40px var(--shadow);
    border-radius: 15px;
    overflow: visible;
    cursor: pointer;
}

/* Wrapper inside the envelope used to position the letter and flap shape */
.wrapper {
    position: relative;
    width: 400px;
    height: 300px;
    overflow: visible;
}

/* Pseudo-element that creates the top triangular flap with borders */
.wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;
    border-top: 180px solid var(--envelop-flap);
    border-right: 200px solid transparent;
    border-left: 200px solid transparent;
    transform-origin: top;
    transition: all 0.5s ease-in-out 0.7s;
    border-radius: 10px;
}

/* Right triangular part of the envelope body */
.right-flap {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    background-color: var(--envelop-body);
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

/* Left triangular part of the envelope body */
.left-flap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    background-color: var(--envelop-body);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

/* The letter (the inner paper) styling */
.letter {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main);
    text-align: center;
    box-shadow: 0 0 5px var(--shadow);
    padding: 20px;
    border-radius: 10px;
    z-index: 0;
    transition: transform .4s ease-in-out;
}

/* Inner content of the letter */
.content {
    font-family: "Gill Sans", Calibri, sans-serif;
    color: var(--text);
    text-align: left;
    font-size: 12px;
    border: 3px dotted var(--text);
    padding: 10px;
    height: 100%;
    line-height: 14px;
    cursor: pointer;
    overflow-Y: scroll;
}

/* Circular "sticker" in the middle of the envelope that acts like a seal */
.sticker {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    background-color: var(--sticker);
    transform: translate(-50%,0) rotate(45deg);
    transition: transform 0.5s ease-in-out 1s;
    z-index: 999;
    cursor: pointer;
}

/* Pseudo-elements used to make the heart-like shape out of circles */
.sticker::before,
.sticker::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: var(--sticker);
    border-radius: 100%;
}

/* Top circle of the heart shape */
.sticker:before {
    top: -15px;
}

/* Right circle of the heart shape */
.sticker:after {
    right: 15px;
}

/* ===== Custom scroll-bar styles for WebKit-based browsers ===== */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: var(--envelop-body);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: var(--sticker);
}

/* ===== Dynamic classes applied via JavaScript for animations ===== */

/* When the envelope wrapper has the .open class, rotate the top flap backwards */
.open .wrapper::before {
    transform: rotateX(180deg);
    z-index: 0;
}

/* Rotate the sticker when the envelope wrapper is open */
.open .sticker {
    transform: rotate(90deg);
    transition-delay: 0.4s;
}

/* Chưa mở: lá thư ở dưới */
.letter.show-letter {
    transform: translateY(-180px);
    z-index: 2;
    transition: transform .4s ease-in-out;
}

/* Đóng: lá thư lùi xuống */
.letter.closing-letter {
    transform: translateY(0);
    z-index: 0;
    transition: transform .4s ease-in-out;
}

/* Mở xong: lá thư mới nổi lên trên */
.letter.open {
    z-index: 2;
}

/* Không cho nắp đè lên quá sớm */
.envelope-wrapper.deactivate-wrapper .wrapper::before {
    pointer-events: none;
}

/* ===== Mobile view adjustments (screens up to 400px wide) ===== */
@media screen and (max-width:400px) {
    .container {
        width: 300px;
    }

    .wrapper {
        width: 300px;
        height: 250px;
    }

    .wrapper::before {
        border-top:150px solid var(--envelop-flap);
        border-right: 150px solid transparent;
        border-left: 150px solid transparent;
    }
}