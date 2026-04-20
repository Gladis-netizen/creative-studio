function scrollToVideo(){
    document.getElementById("videoSection").scrollIntoView({
        behavior:"smooth"
    });
}

// gamification score
let score = 0;

function addScore(){
    score++;
    document.getElementById("score").innerText = score;
}

function openLightbox(){
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function resetGame(){
    score = 0;
    document.getElementById("score").innerText = score;
}

