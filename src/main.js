import './style.css'
import viteLogo from '/vite.svg'
import { animate, scroll, inView } from "motion";

const left = document.getElementById("left-pattern");
const right = document.getElementById("right-pattern");
const section = document.querySelector(".pattern-section");
const titleSection = document.getElementById("title-section")
const heroImage = document.getElementById("hero-image")
const clientResultHeading = document.getElementById("client-result-heading")
const clientResultCards = document.getElementById("client-result-cards")



animate(
  titleSection,
  { 
    opacity: [0, 1],   // fade in
    y: [50, 0]         // move up slightly
  },
  { 
    duration: 0.5, 
    easing: "ease-out" 
  }
);


animate(
  heroImage,
  { 
    opacity: [0, 1],   // fade in
    y: [50, 0]         // move up slightly
  },
  { 
    duration: 0.4, 
    easing: "ease-out" 
  }
);

// Client Results Heading
inView("#client-result-heading", (element) => {
  console.log("heading inView triggered!");
  animate(
    element,
    { opacity: [0, 1], y: [80, 0] },
    { duration: 1, easing: "ease-out" },
    { amount: 0.90, once: true }
  );
});


// Cards animation
inView("#client-result-cards", (element) => {
  console.log("cards inView triggered!");
  const cards = element.querySelectorAll(":scope > div");
  cards.forEach((card, i) => {
    animate(
      card,
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.8, delay: i * 0.1, easing: "ease-out" }
    );
  });
});




// Step 1: Slight approach (toward center)
animate(left, { x: ["0px", "50px"] }, { duration: 0.5 });
animate(right, { x: ["0px", "-50px"] }, { duration: 0.5 });

// Step 2: Immediately separate beyond screen
animate(left, { x: ["50px", "-480px"], y:["5px", "40px"] }, { delay: 0.2, duration: 0.4, easing: "ease-out" });
animate(right, { x: ["-50px", "400px"], y:["8px", "40px"] }, { delay: 0.2, duration: 0.4, easing: "ease-out" });


// Step 3: Scroll-triggered return
scroll(left, { 
  x: ["-300px", "0px"], 
         // scroll effect ends at the end of this section
  easing: "ease-out"
});

scroll(right, { 
  x: ["300px", "0px"], 
 
  easing: "ease-out"
});




