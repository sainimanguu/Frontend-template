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

gsap.to(".slide", {
    scrollTrigger: {
        trigger: "slides",
        start: "top top",
        end: "bottom bottom",
        markers: true,
    },
    xPercent: -200,
    ease: Power1
})

homepageanimation();
teamanimation();