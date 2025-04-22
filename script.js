function homepageanimation() {
    gsap.set(".slidesm", {
        scale: 6,
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    })

    tl.
        to(".vdodiv", {
            '--clip': "0%",
            ease: Power2,
        }, 'a')
        .to(".slidesm", {
            scale: 1,
            ease: Power2,
        }, 'a')
        .to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power4,
        }, 'b')
        .to(".rgt", {
            xPercent: 8,
            stagger: .03,
            ease: Power4,
        }, 'b')



}

function teamanimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {

            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                duration: .5,
                ease: Power4
            })
        })
        el.addEventListener("mouseleave", function (dets) {
            gsap.to(
                this.querySelector(".picture"), {
                opacity: 0,
            }
            )
        })
    })
}


function paraanimation() {
    var clutter = "";
    document.querySelector(".textpara").textContent.split("").forEach(function (e) {
        if (e === "  ") clutter += `<span>&nbsp;</span>`
        clutter += `<span class="opacity-10">${e}</span>`
    })

    document.querySelector(".textpara").innerHTML = clutter;
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.5,
        },
        opacity: 1,
        stagger: .03,
        ease: Power4,
    })

}

function locomotive() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleanimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },

        y: 0,
        ease: Power4,
    })
}

function changecolor() {
    document.querySelectorAll(".section").forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "botttom 50%",
            onEnter: function () {
                e.dataset.color,
                    document.body.setAttribute("theme", e.dataset.color)
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color)
            }
        })
    })
}

function realanimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        xPercent: -200,
        ease: Power4,
    })
}


homepageanimation();
teamanimation();
paraanimation();
locomotive();
capsuleanimation();
changecolor();
realanimation();



