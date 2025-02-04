// Heart generator
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);
    
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
    setTimeout(() => heart.remove(), 5000);
  }
  
  setInterval(createHeart, 500);
  
  // Function to show the surprise
  function showSurprise(message) {
    alert(message);
    if (message.includes("Rose Day")) {
      createRoseBouquet();
    }
  }
  
  // Create a bouquet of roses
  function createRoseBouquet() {
    const colors = ['red', 'yellow', 'white', 'pink', 'purple', 'blue', 'orange']; // Array of possible rose colors
    for (let i = 0; i < 20; i++) { // Number of roses in the bouquet
      const rose = document.createElement('div');
      rose.className = 'rose';
      rose.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      rose.style.left = `${Math.random() * 100}vw`;
      rose.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(rose);
  
      // Remove the rose after 5 seconds
      setTimeout(() => rose.remove(), 5000);
    }
  }
  