window.addEventListener('DOMContentLoaded', (event) => {
    // Find nav elements
    const hamburger = document.getElementById('hamburger');
    const navContainer = document.getElementById('nav');
    const close = document.getElementById('close');
    const workLink = document.getElementById('work-link');
    const backTopBtn = document.getElementById("back-top-btn");

    // when scroll position is greater than 10px, display glass effect on nav
    document.addEventListener('scroll', (e) => {
        var scrollPosition = window.scrollY;
      
        if (scrollPosition > 10) {
            navContainer.classList.add("sticky-nav");
        } else {
            navContainer.classList.remove("sticky-nav");
        }
    });

    // When click on menu icon, open the menu modal
    hamburger.addEventListener('click', (event) => {
        navContainer.classList.add("opening");

        setTimeout(() => {
            navContainer.classList.remove("opening");
            navContainer.classList.add("open");
        }, "100");
    });

    // when click on close icon in menu modal, close menu modal
    close.addEventListener('click', (event) => {
        navContainer.classList.remove("open");
        navContainer.classList.add("closing");

        setTimeout(() => {
            navContainer.classList.remove("closing");
        }, "200");
    });

    // when click on works link in menu modal, close menu modal
    workLink.addEventListener('click', (event) => {
        navContainer.classList.remove("open");
        navContainer.classList.add("closing");

        setTimeout(() => {
            navContainer.classList.remove("closing");
        }, "200");
    });

    // When the user scrolls down 20px from the top of the document, show the button
    document.addEventListener('scroll', (e) => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backTopBtn.style.opacity = "1";
        } else {
            backTopBtn.style.opacity = "0";
        }
    });

    // When the user clicks on the button, scroll to the top of the document
    backTopBtn.addEventListener('click', (event) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});