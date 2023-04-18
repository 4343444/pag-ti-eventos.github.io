const fulImgbox = document.getElementById("fulImgbox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgbox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgbox.style.display = "none";
}