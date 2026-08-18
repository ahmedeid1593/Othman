// ================= SPLASH SCREEN =================

window.addEventListener("load", () => {

    const splash = document.getElementById("splash");

    if (splash) {

        setTimeout(() => {

            splash.classList.add("hide");

            setTimeout(() => {
                splash.style.display = "none";
            }, 600);

        }, 700);

    }

});