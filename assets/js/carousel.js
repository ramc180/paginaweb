let slideIndex = 0;
let animationFrame;

function animateSlides() {
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex >= slides.length) { slideIndex = 0; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.transform = "translateX(100%)";
        slides[i].style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
        slides[i].querySelectorAll('.animate-text')?.forEach(text => {
            text.style.opacity = 0;
            text.style.transform = "translateY(20px)";
        });
    }

    slides[slideIndex].style.display = "block";
    slides[slideIndex].style.transform = "translateX(0)";
    slides[slideIndex].style.opacity = 1;

    slides[slideIndex].querySelectorAll('.animate-text')?.forEach(text => {
        setTimeout(() => {
            text.style.opacity = 1;
            text.style.transform = "translateY(0)";
        }, 100);
    });

    let currentX = 0;
    let direction = 1;

    function moveSlide() {
        currentX += 0.5 * direction;
        if (currentX > 100 || currentX < -100) direction *= -1;
        slides[slideIndex].style.transform = `translateX(${currentX}px)`;
        animationFrame = requestAnimationFrame(moveSlide);
    }

    animationFrame = requestAnimationFrame(moveSlide);

    slideIndex++;
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        animateSlides();
    }, 5000);
}

animateSlides();
