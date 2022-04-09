const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    // when inserting url or text in the input box
    let qrValue = qrInput.value.trim();
    if (!qrValue) return; 
    console.log(qrValue);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    wrapper.classList.add("active");
})