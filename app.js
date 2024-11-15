import  {Reeller} from 'reeller';
import  {gsap}  from "gsap";
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
import  {Swiper}  from 'swiper';

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

// Create shorthands
var Sc = ScrollTrigger;
var Qe = gsap;

Reeller.registerGSAP(gsap);

(() => {
    
    
      const reels = document.querySelectorAll('.ns-reel');
      const reelsLogos = document.querySelectorAll('.ns-reel-logo');
 
 
      reels.forEach((reel) => {
         
 
         const reeller = new Reeller({
             container: reel,
             wrapper: '.ns-reel-wrap',
             itemSelector: '.ns-reel-item',
             speed: 55,
             plugins: {
                 scroller: {
                     speed: 1,
                     multiplier: 0.2,
                     threshold: 1,
                 },
             },
         });
      })

      reelsLogos.forEach((rels) => {
         
 
        const reellerMe = new Reeller({
            container: rels,
            wrapper: '.ns-reel-logo-wrap',
            itemSelector: '.ns-reel-logo-item',
            speed: 105,
            reversed: true,
            
        });
     })
     
      
 
     document.querySelectorAll(".ns-coach-accent-img").forEach((e) =>  {
 
         let t = Qe.timeline();
     
     
         t.from(e, {
             yPercent: -50,
         }),
         Sc.create({
             trigger: e,
             start: "top bottom",
             end: "bottom top",
             animation: t, 
             scrub: 1, 
         });
     
     
     });
 
     document.querySelectorAll(".ns-comp").forEach((e) => {
         let t = Qe.timeline();
         let els = e.querySelectorAll('img');
         
         
         els.forEach((el) => {
             
             
             t.fromTo(el, {
                 yPercent: -20,
             }, {
                 yPercent: 20,
                 stagger: { amount: 0.1, from: "random" }
             }, 0);  
         });
     
         Sc.create({
             trigger: e,
             start: "top bottom",
             end: "bottom center",
             animation: t,
             scrub: .3,
         });
     });
 
     document.querySelectorAll(".ns-phone").forEach((e) => {
         let t = Qe.timeline();
         
         t.fromTo(e, {
             yPercent: -40,
         }, {
             yPercent: 0,
         }, 0);  
     
         Sc.create({
             trigger: e,
             start: "top bottom",
             end: "bottom center",
             animation: t,
             scrub: 1,
         });
     });

     function processInit(e) {
      e || (e = document);
      let t = e.querySelector(".process-grid"),
          a = e.querySelectorAll(".process-card"),
          i = e.querySelector(".x-axis"),
          o = e.querySelector(".y-axis"),
          p = e.querySelectorAll(".abso-chart");
    
          if (!t) {
            return;
        }
    
          Qe.set([a], { clipPath: "clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"});
          Qe.set(i, { width: "0%"});
          Qe.set(o, { height: "0%"});
          Qe.set(p, {width: "0%"});
    
          let tl = Qe.timeline({ paused: !0});
    
          tl
          .to(i, {width: "100%", duration: 1}, 0)
          .to(o, {height: "100%", duration: 1}, .2)
          .to(p, {width: "100%", duration:1, ease: "power4.out", stagger: { amount: .3 }}, .4)
          .to(a, 
            { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, stagger: { amount: 1.3, from: "end"} }
          , 1.7 ),      
    
          Sc.create({ trigger: t, animation: tl, toggleActions: "play none none none", ease: "power4.out"});
          
    }
 
      let groups = gsap.utils.toArray(".faq-menu");
      let menus = gsap.utils.toArray(".faq-item");
      let menuToggles = [];
      let activeMenu = null; // Keep track of the active menu
      
      menus.forEach((menu, index) => {
        let animation = createAnimation(menu);
        menuToggles.push(animation);
      
        menu.addEventListener("click", () => toggleMenu(animation));
      
        // Open the first menu by default
        if (index === 0) {
          animation.play();
          activeMenu = animation;
        }
      });
      
      function toggleMenu(animation) {
        if (activeMenu !== animation) {
          if (activeMenu) {
            activeMenu.reverse(); // Close the previously open menu
          }
          animation.play(); // Open the clicked menu
          activeMenu = animation;
        } else {
          animation.reverse(); // Close the clicked menu
          activeMenu = null;
        }
      }
      
      function createAnimation(menu) {
        let element = menu.parentElement;
        let box = element.querySelector(".answer");
        let plusSign = element.querySelector(".plus");
        let cardBack = element.querySelector(".faq-item");
        let questionText = element.querySelector(".question");
      
        gsap.set(box, { height: "auto" });
        gsap.set(questionText, { marginLeft: "0vw" });
      
        let timeline = gsap
          .timeline({ paused: true })
          .from(box, {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut",
          })
          .from(
            questionText,
            {
              marginLeft: 0,
              duration: 0.5,
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            plusSign,
            {
              rotate: "45deg",
              duration: 0.1,
              ease: "power1.inOut",
            },
            "<"
          )
          .reverse();
      
        return timeline;
      }
    
    
    window.addEventListener("DOMContentLoaded", function () {

      processInit();
  
      });
      
})();


  
  


