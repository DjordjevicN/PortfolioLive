
let enterTimeline = gsap.timeline()
enterTimeline.from(".mainMenu__logo", { y: 50, opacity: 0, duration: 1, delay: 1, ease: "elastic" })
enterTimeline.from(".circleElement--big", { width: 0, height: 0, duration: 1, ease: "expo.out" })
enterTimeline.from(".introduction__firstName", { y: 50, opacity: 0 })
enterTimeline.from(".introduction__lastName", { y: 50, opacity: 0 }, "-=.7")
enterTimeline.from(".introduction__aboutMe", { y: 50, opacity: 0, }, "-=.9")
enterTimeline.from(".contactBTN", { y: -50, opacity: 0, ease: "elastic" })


let deviceWidth = window.innerWidth > 600 ? true : false;
if (deviceWidth) {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".stack",
            start: "-300 center",
            end: '+=500',
            scrub: 2,
            // pin: true,
            // markers: true,
            toggleActions: 'restart pause resume pause'
        }
    })
    tl.from(".stack__icons--row1, .stack__text--row1", {
        y: 130,
        opacity: 0,
    })
        .from(".stack__icons--row2 , .stack__text--row2", {
            y: 130,
            opacity: 0,
        }, "-=.4")
        .from(".stack__icons--row3 , .stack__text--row3", {
            y: 130,
            opacity: 0
        }, "-=0.4")
        .from(".stack__icons--row4 , .stack__text--row4", {
            y: 130,
            opacity: 0
        }, "-=0.4")
        .from(".stack__icons--row5 , .stack__text--row5", {
            y: 130,
            opacity: 0
        }, "-=0.4")
        .from(".stack__icons--row6 , .stack__text--row6", {
            y: 130,
            opacity: 0
        }, "-=0.4")


    gsap.registerPlugin(ScrollTrigger);
    let tlProjects = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects",
            start: "-100 center",
            end: '+=700',
            scrub: 1,
            // pin: true,
            // markers: true,
            toggleActions: 'restart pause resume pause'
        }
    })
    tlProjects.from(".projects__card--row1", {
        x: 400,
        opacity: 0,
    })
        .from(".projects__card--row2", {
            x: 400,
            opacity: 0,
        }, "-=.4")
        .from(".projects__card--row3", {
            x: 400,
            opacity: 0
        }, "-=0.4")
        .from(".projects__card--row4", {
            x: 400,
            opacity: 0
        }, "-=0.4")


    gsap.registerPlugin(ScrollTrigger);
    let tlContact = gsap.timeline({
        scrollTrigger: {
            trigger: ".sectionTitle--contact",
            start: "top center",
            end: '+=200',
            scrub: 1,
            // pin: true,
            // markers: true,
            toggleActions: 'restart pause resume pause'
        }
    })
    tlContact.from(".contact__social__title, .contact__info__title", {
        y: 400,
        opacity: 0,
    })
        .from(".contact__social__item--linkedin", {
            y: 400,
            opacity: 0,
        }, "-=.4")
        .from(".contact__social__item--github, .contact__info__name", {
            y: 400,
            opacity: 0
        }, "-=0.4")
        .from(".contact__social__item--gmail, .contact__info__email", {
            y: 400,
            opacity: 0
        }, "-=0.4")
        .from(".contact__info__town", {
            y: 400,
            opacity: 0
        }, "-=0.4")


    gsap.registerPlugin(ScrollTrigger);
    let tlContactBTN = gsap.timeline({
        scrollTrigger: {
            trigger: ".contactBTN",
            start: "300 center",
            end: '+=50',
            scrub: 1,
            // pin: true,
            // markers: true,
            toggleActions: 'restart pause resume pause'
        }
    })
    tlContactBTN.to(".contactBTN", {
        opacity: 0,
        x: 50,
    })
        .to(".contactBTN", {
            position: 'fixed',
            right: 0,
            bottom: 30,
            x: 0,
            opacity: 1
        })
        .to(".contactBTN", {
            position: 'fixed',
            right: 0,
            x: 0,
            opacity: 1
        })
        .to(".chewbacca", {
            opacity: 0,
            duration: .1
        })
        .to(".chewbacca", {
            opacity: 0.1,
            duration: .1
        })
        .to(".chewbacca", {
            opacity: 0,
            duration: .1
        })
}



gsap.registerPlugin(ScrollTrigger);
let tlCircle1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contactBTN",
        start: "top center",
        end: '+=3000',
        scrub: 4,
        // pin: true,
        // markers: true,
        toggleActions: 'restart pause resume pause'
    }
})
tlCircle1.to(".circleElement--el1", {
    y: -1700,
    x: 100,
    rotate: 200

})
gsap.registerPlugin(ScrollTrigger);
let tlCircle2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contactBTN",
        start: "top center",
        end: '+=3000',
        scrub: 2,
        // pin: true,
        // markers: true,
        toggleActions: 'restart pause resume pause'
    }
})
tlCircle2.to(".circleElement--el2", {
    y: -400,
    x: 50,
    rotate: -300

})
gsap.registerPlugin(ScrollTrigger);
let tlCircle3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contactBTN",
        start: "top center",
        end: '+=3000',
        scrub: 3,
        // pin: true,
        // markers: true,
        toggleActions: 'restart pause resume pause'
    }
})
tlCircle3.to(".circleElement--el3", {
    y: -1000,
    rotate: 300,
    x: -100

})






// // // gsap.registerPlugin(ScrollTrigger);
// // // gsap.from(".ai", {
// // //     scrollTrigger: {
// // //         trigger: ".stack",
// // //         start: "200 center",
// // //         markers: true,
// // //         end: '+=600',
// // //         pin: true,
// // //         scrub: 1,
// // //         toggleActions: 'restart pause resume pause'
// // //     },
// // //     x: 400,
// // //     opacity: 0,
// // //     // rotation: 360,
// // //     duration: 3
// // // })

