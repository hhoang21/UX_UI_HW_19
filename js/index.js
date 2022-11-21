
console.log("Your index.js file is loaded correctly!");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

const overlay = document.querySelector("#overlay")

document.querySelector("#contactModal1").addEventListener("click", function(){
    overlay.style.display = "block";
});

document.querySelector(".closeButton").addEventListener("click", function(){
    overlay.style.display = "none";
});

document.querySelector(".sendMessage").addEventListener("click", function(){
    overlay.style.display = "none";
});