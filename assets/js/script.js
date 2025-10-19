// Attendre que tout le contenu soit chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       ANIMATION DE CHARGEMENT (LOADER)
    ============================== */
    
    // Loader uniquement sur desktop
    const bar = document.querySelector(".bar");
    const hero = document.getElementById("hero");
    const header = document.getElementById("site-header");

    if (window.innerWidth >= 768) {
        bar.addEventListener("animationend", (e) => {
            if (e.animationName === "barDown") {
                hero.classList.add("split");
                setTimeout(() => bar.classList.add("remove"), 1200);
            }
        });
    } else {
        // Cache directement le loader sur mobile
        document.getElementById("loader").style.display = "none";
    }

    /* ==============================
       AFFICHAGE DU HEADER EN FONCTION DU SCROLL
    ============================== */
    window.addEventListener("scroll", () => {
        // Montre le header quand on a défilé la moitié de l’écran
        if (window.scrollY > window.innerHeight / 2) {
            header.classList.add("show");
        } else {
            header.classList.remove("show");
        }
    });

    /* ==============================
        CURSEUR PERSONNALISÉ (désactivé sur mobile)
    ============================== */
    const cursor = document.querySelector(".cursor");

    if (window.innerWidth >= 768) {
        let targetX = 0, targetY = 0;
        let posX = 0, posY = 0;

        window.addEventListener("mousemove", (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        });

        function moveCursor() {
            posX += (targetX - posX) * 0.1;
            posY += (targetY - posY) * 0.1;
            cursor.style.transform = `translate(${posX}px, ${posY}px)`;
            requestAnimationFrame(moveCursor);
        }
        moveCursor();
    } else {
        cursor.style.display = "none"; // désactivé sur mobile
    }


    /* ==============================
       EFFET HACKER SUR LE TIRTE ET LE SOUS-TITRE
    ============================== */
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    function hackerEffect(el, speed = 20) {
        const original = el.textContent;
        let iteration = 0;

        const interval = setInterval(() => {
            el.textContent = original
                .split("")
                .map((char, i) =>
                    i < iteration
                        ? original[i]
                        : letters[Math.floor(Math.random() * letters.length)]
                )
                .join("");

            if (iteration >= original.length) clearInterval(interval);
            iteration += 0.5;
        }, speed);
    }

    // Lance l’effet sur les titres au démarrage
    const title = document.getElementById("hackTitle");
    const subtitle = document.getElementById("hackSubtitle");
    hackerEffect(title, 20);
    hackerEffect(subtitle, 25);

    /* ==============================
       ANIMATION DU TEXTE "ABOUT"
    ============================== */
    const about = document.querySelector("#about");
    const text = document.querySelector(".intro-text");

    window.addEventListener("scroll", () => {
        const rect = about.getBoundingClientRect();

        // Si la section "about" est visible à l’écran
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = rect.top * 0.3;
            text.style.transform = `translateY(${offset}px)`;
        }
    });

    /* ==============================
       ANIMATION DES BARRES DE COMPÉTENCES
    ============================== */
    let skillsAnimated = false;

    window.addEventListener("scroll", () => {
        if (skillsAnimated) return; // empêche de rejouer l’effet

        const skillsSection = document.querySelector("#skills");
        const position = skillsSection.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom > 0) {
            document.querySelectorAll(".skill-fill").forEach(skill => {
                const level = skill.style.getPropertyValue("--level");
                skill.style.width = level;
            });
            skillsAnimated = true;
        }
    });

    /* ==============================
       BOUTON "RETOUR EN HAUT"
    ============================== */
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
