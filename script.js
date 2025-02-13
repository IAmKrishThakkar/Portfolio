// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.skill, .project-card').forEach(el => {
    observer.observe(el);
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-70px"; // Adjust based on navbar height
    } else {
        // Scrolling up
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});
document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.getElementById("tooltip-iframe");
    const iframe = document.getElementById("preview-frame");

    window.showPreview = function (event, url) {
        iframe.src = url; // Ensure iframe gets correct URL
        tooltip.style.display = "block";
        tooltip.style.opacity = "1";
        moveTooltip(event);
    };

    window.moveTooltip = function (event) {
        tooltip.style.left = event.pageX + 15 + "px"; // Slight offset from cursor
        tooltip.style.top = event.pageY + 15 + "px";
    };

    window.hidePreview = function () {
        tooltip.style.opacity = "0";
        setTimeout(() => {
            tooltip.style.display = "none";
            iframe.src = "about:blank"; // Prevent continuous loading
        }, []);
    };
});

