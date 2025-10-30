import './style.css'
import viteLogo from '/vite.svg'
import {
  animate,
  scroll,
  inView,
  stagger,
  hover
} from "motion";


const section = document.querySelector(".pattern-section");
const titleSection = document.getElementById("title-section")
const heroImage = document.getElementById("hero-image")
const clientResultHeading = document.getElementById("client-result-heading")
const clientResultCards = document.getElementById("client-result-cards")





inView(".faqs", (element) => {
 // Animate heading: slide up + fade in
    animate(".faq-heading", {y:[50,0], opacity:[0,1]}, {duration:0.7, ease: "easeOut"})

    // Animate cards: scale from center + fade in (with small stagger)
     animate(".faq-items", {y:[50,0], opacity:[0,1]}, {duration:0.7, ease: "easeOut", })
          animate(".faq-items div", {y:[50,0], opacity:[0,1]}, {duration:0.7, ease: "easeOut", delay: stagger(0.2) })

     
}, {amount: 0.2})




// animate pricing section
inView(".pricing", (element) => {
 // Animate heading: slide up + fade in
    animate(
      ".pricing-heading",
      { opacity: [0, 1], y: [50,0] },
      { duration: 0.6, easing: "ease-out", delay: 0.2 }
    );

    // Animate cards: scale from center + fade in (with small stagger)
    animate(
      ".pricing-cards div",
      { opacity: [0, 1], scale: [0.9, 1] },
      { duration: 0.6, easing: "ease-out" }
    );
})
   
  
   


// ######### animate why-us section ##########
inView(".whyUs-heading", (element) => {
  console.log("triggereeeeeeeed!!!!!!!!")
  animate(".whyUs-heading", {y:[50,0], opacity:[0,1]}, {duration:0.7, ease: "easeOut"})
}, { amount: 0.8 })

inView(".whyUs-lists", (element) => {
  animate(".whyUs-lists", {y:[50,0], opacity:[0,1]}, {duration:0.7, ease: "easeOut"})
},{ amount: 0.5 })



// Scroll-triggered animations for each list item
const items = [
  { container: ".firepower", heading: ".firepower h4", label: ".firepower span" },
  { container: ".fast", heading: ".fast h4", label: ".fast span" },
  { container: ".obsessed", heading: ".obsessed h4", label: ".obsessed span" }
];

items.forEach((item, index) => {
  const container = document.querySelector(item.container);
  const heading = document.querySelector(item.heading);
  const label = document.querySelector(item.label);

  if (!container || !heading || !label) return;

  // Calculate offset based on item position (each item triggers at different scroll points)
  const startOffset = 0.75 - (index * 0.15); // First: 0.75, Second: 0.6, Third: 0.45
  const endOffset = 0.5 - (index * 0.15);    // First: 0.5, Second: 0.35, Third: 0.2

  // Animate heading color from black to orange as you scroll DOWN
  scroll(
    animate(
      heading,
      { color: ["#1E1F2B", "#F55138"] }
    ),
    {
      target: container,
      offset: [`start ${startOffset}`, `start ${endOffset}`]
    }
  );

  // Animate label from invisible to visible as you scroll DOWN
  scroll(
    animate(
      label,
      { opacity: [0, 1], scale: [0, 1], transformOrigin: "right" },
      { duration: 0.5, easing: [0.34, 1.56, 0.64, 1] }
    ),
    {
      target: container,
      offset: [`start ${startOffset}`, `start ${endOffset}`]
    }
  );
});






// animate problem-solution-cardss
// initial state
document.querySelectorAll(".problem-solution-cards div").forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
});


inView(".problem-solution-cards", (element) => {
  console.log("cards section triggered!")
  animate(".problem-solution-cards div", {
    opacity: [1],
    y: [50, 0]
  }, {
    delay: stagger(0.07, {
      start: "first"
    }),
    duration: 0.5,
    easing: "easeOut"
  })

}, {
  amount: 0.4
})



animate(
  titleSection, {
    opacity: [0, 1], // fade in
    y: [50, 0] // move up slightly
  }, {
    duration: 0.5,
    easing: "ease-out"
  }
);


animate(
  heroImage, {
    opacity: [0, 1], // fade in
    y: [50, 0] // move up slightly
  }, {
    duration: 0.4,
    easing: "ease-out"
  }
);

// Client Results Heading
inView("#client-result-heading", (element) => {
  console.log("heading inView triggered!");
  animate(
    element, {
      opacity: [0, 1],
      y: [80, 0]
    }, {
      duration: 1,
      easing: "ease-out"
    }, {
      amount: 0.90,
      once: true
    }
  );
});


// Cards animation
inView("#client-result-cards", (element) => {
  console.log("cards inView triggered!");
  const cards = element.querySelectorAll(":scope > div");
  cards.forEach((card, i) => {
    animate(
      card, {
        opacity: [0, 1],
        y: [40, 0]
      }, {
        duration: 0.8,
        delay: i * 0.1,
        easing: "ease-out"
      }
    );
  });
});

const leftPattern = document.querySelector("#left-pattern");
const rightPattern = document.querySelector("#right-pattern");

// Set initial positions to center (override CSS positioning temporarily)
// leftPattern.style.left = "50%";
// leftPattern.style.transform = "translateX(-50px)"; // Slightly left of center
// rightPattern.style.right = "auto";
// rightPattern.style.left = "50%";
// rightPattern.style.transform = "translateX(50px)"; // Slightly right of center

// Stage 1: Page load animation - Separate images to the sides
window.addEventListener("load", () => {
  setTimeout(() => {
    // Animate left pattern from center to far left
    animate(
      leftPattern,
      { 
        
        x: ["0px", "-420px"]
      },
      { 
        easing: "ease-in-out",
        duration: 0.5,
        fill:"forwards"
      }
    );
    
    // Animate right pattern from center to far right
    animate(
      rightPattern,
      { 
       
        x: ["0px", "420px"]
      },
      { 
        easing: "ease-in-out",
        duration: 0.5,
        fill:"forwards"
      }
    );
  }, 500);
});

// Stage 2: Scroll animation - Your original code
// Set up after initial animation completes
setTimeout(() => {
  scroll(
    animate(
      "#left-pattern",
      { x: ["-500px", "0px"] },
      { 
        easing: "ease-out",
        duration: 1.5
      }
    ),
    {
      target: document.querySelector("#hero-image"),
      offset: ["start end", "end -100%"]
    }
  );

  scroll(
    animate(
      "#right-pattern",
      { x: ["500px", "0px"] },
      { 
        easing: "ease-out",
        duration: 1.5
      }
    ),
    {
      target: document.querySelector("#hero-image"),
      offset: ["start end", "end -100%"]
    }
  );
},2000);




const ctaBtn = document.querySelector('.cta-btn');
  const leftArrow = document.querySelector('.btn-arrow-left');
  const rightArrow = document.querySelector('.btn-arrow-right');












// animate("#left-pattern", {x:["0px", "-420px"]}, { delay: 0.5,
//   duration: 0.4,
//   easing: "ease-out"})

// animate("#right-pattern", {x:["0px", "420px"]}, { delay: 0.5,
//   duration: 0.4,
//   easing: "ease-out"})



// --- Scroll animation (coming together) ---
// scroll(
//   animate(
//     "#left-pattern",
//     { x: ["-420px", "0px"]},
//     { easing: "ease-out",
//       duration: 1.5,
//       delay:0.7
//      }
//   ),
//   {
//     // Trigger when hero starts leaving the top
//     target: document.querySelector("#hero-image"),
//     // End when we reach the end of client results
//     offset: ["start end", "end -100%"],
//   }
// )

// scroll(
//   animate(
//     "#right-pattern",
//     { x: ["420px", "0px"] },
//     { easing: "ease-out", duration: 1.5 , delay:0.7}
//   ),
//   {
//     target: document.querySelector("#hero-image"),
//     offset: ["start end", "end -100%"],
//   }
// )







