const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;//enu illa andre
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";//until it gets loaded
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});
// Next release with download button 
// generateBtn.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         let qrValue = qrInput.value.trim();
//         if(!qrValue || preValue === qrValue) return;//enu illa andre
//         preValue = qrValue;
//         generateBtn.innerText = "Generating QR Code...";//until it gets loaded
//         qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
//         qrImg.addEventListener("load", () => {
//             wrapper.classList.add("active");
//             generateBtn.innerText = "Generate QR Code";
//         }); // code for enter
//     }
// });

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});