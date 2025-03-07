document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded, adding tabindex to images");

    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.setAttribute("tabindex", "0");
    });
});

function upDate(previewPic) {
    let displayDiv = document.getElementById("image");

    displayDiv.classList.add("hover-effect");
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = `url(${previewPic.src})`;

    console.log("Mouse over / Focus:", previewPic.alt, previewPic.src);
}

function undo() {
    let displayDiv = document.getElementById("image");

    displayDiv.classList.remove("hover-effect");
    displayDiv.innerHTML = "Hover over an image below to display here.";
    displayDiv.style.backgroundImage = "none";

    console.log("Mouse out / Blur: Reset image");
}
