// Array of some thoughts
const thoughts = [
    "Success is not a good teacher, failure makes you humble.",
    "Don't let your fears become boxes that enclose you.",
    "Life begins when we decide it's going to begin for us.",
    "Sometimes, your greatest strengths can be your greatest weaknesses.",
    "In the end, you are the only one who can make yourself happy."
  ];
  
  const thoughtElement = document.getElementById('thought');
  const nextThoughtBtn = document.getElementById('nextThoughtBtn');
  
  nextThoughtBtn.addEventListener('click', () => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    
    // Update the paragraph with a random thought
    thoughtElement.textContent = thoughts[randomIndex];
  });
  