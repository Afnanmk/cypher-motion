import './style.css'
import viteLogo from '/vite.svg'
import {
  animate,
  scroll,
  inView,
  stagger,
  hover
} from "motion";

const left = document.getElementById("left-pattern");
const right = document.getElementById("right-pattern");
const section = document.querySelector(".pattern-section");
const titleSection = document.getElementById("title-section")
const heroImage = document.getElementById("hero-image")
const clientResultHeading = document.getElementById("client-result-heading")
const clientResultCards = document.getElementById("client-result-cards")


      // Text slides right, arrow goes right & reappears from left
    hover(".cta-btn", (button) => {
      const text = button.querySelector(".btn-text");
      const arrow = button.querySelector(".btn-arrow");

      // Animate text moving right
      animate(text, { x: "20px" }, { duration: 0.3 });

      // Animate arrow: move right & disappear, reappear from left, then settle
      animate(arrow, [
        { x: "20px", opacity: 0, duration: 0.3 },
        { x: "-40px", opacity: 1, duration: 0.3 },
        { x: "0", duration: 0.3 }
      ]);

      // Return hover-out animation
      return () => {
        animate(text, { x: "0" }, { duration: 0.3 });
        animate(arrow, { x: "0", opacity: 1 }, { duration: 0.3 });
      };
    });





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
   
  
   


// animate why-us section
inView(".whyUs-heading", (element) => {
  console.log("triggereeeeeeeed!!!!!!!!")
  animate(".whyUs-heading", {y:[50,0], opacity:[0,1]}, {duration:0.7, ease: "easeOut"})
}, { amount: 0.8 })

inView(".whyUs-lists", (element) => {
  animate(".whyUs-lists", {y:[50,0], opacity:[0,1]}, {duration:0.7, ease: "easeOut"})
},{ amount: 0.5 })


// Trigger when each "whyUs-list" enters the viewport
  inView(".whyUs-list", ({ target }) => {
    const span = target.querySelector("span");
    const heading = target.querySelector("h4");

    // Animate the span (appear upward)
    animate(
      span,
      { opacity: [0, 1], y: [10, 0] },
      { duration: 0.6, easing: "ease-out" }
    );

    // Animate the heading color
    animate(
      heading,
      { color: ["#1E1F2B", "#ff4433"] },
      { duration: 0.6, easing: "ease-out" }
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




// Step 1: Slight approach (toward center)
animate(left, {
  x: ["0px", "50px"]
}, {
  duration: 0.5
});
animate(right, {
  x: ["0px", "-50px"]
}, {
  duration: 0.5
});

// Step 2: Immediately separate beyond screen
animate(left, {
  x: ["50px", "-480px"],
  y: ["5px", "40px"]
}, {
  delay: 0.2,
  duration: 0.4,
  easing: "ease-out"
});
animate(right, {
  x: ["-50px", "400px"],
  y: ["8px", "40px"]
}, {
  delay: 0.2,
  duration: 0.4,
  easing: "ease-out"
});


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

