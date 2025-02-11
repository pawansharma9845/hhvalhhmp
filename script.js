
function updateCounter() {
    const startDate = new Date('2023-12-22T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    document.getElementById('counterText').innerHTML = `
      <div style="font-size: 1.8rem; margin-bottom: 1rem;">Have been blessed for</div>
      <div style="display: flex; gap: 2rem; justify-content: center; align-items: baseline;">
        <div>
          <span style="color: #ffebf0; font-size: 2.8rem; font-weight: 600;">${days}</span>
          <span style="color: #ffdde5; font-size: 1.8rem;">Days</span>
        </div>
        <div>
          <span style="color: #ffdde5; font-size: 2.8rem; font-weight: 600;">${hours}</span>
          <span style="color: #ffcfd8; font-size: 1.8rem;">Hours</span>
        </div>
        <div>
          <span style="color: #ffcfd8; font-size: 2.8rem; font-weight: 600;">${minutes}</span>
          <span style="color: #ffc0cb; font-size: 1.8rem;">Minutes</span>
        </div>
        <div>
          <span style="color: #ffc0cb; font-size: 2.8rem; font-weight: 600;">${seconds}</span>
          <span style="color: #ffb3bf; font-size: 1.8rem;">Seconds</span>
        </div>
      </div>
    `;
  }
  setInterval(updateCounter, 1000);
  updateCounter();
  // Add this at the top of your script
const funnyMessages = [
  "Are you sure?😢",
  "Really really sure?🥺",
  "Saney please! 😭",
  "Yesto nagara hai💔",
  "Tablet khaidinxu feri😭",
  "Socha hai ramrari 🙄",
  "Dukha pauli maya 💔",
  "Janni dherai😒",
  "Namaste Dhogdiya🙏"
];

let messageIndex = 0;
const proposalSection = document.querySelector('.proposal');


//  Button Logic
noBtn.addEventListener('click', () => {
  // Update the message text on click
  noBtn.textContent = funnyMessages[messageIndex];
  messageIndex = (messageIndex + 1) % funnyMessages.length;

  isMoving = true;
  noBtn.style.transform = 'translate(0) scale(1)';
  noBtn.style.transition = 'transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
  
  // Immediately reset the state
  isMoving = false;
  noBtn.style.transition = 'all 0.1s ease';
});

  document.getElementById('yesBtn').addEventListener('click', function() {
    const note = document.getElementById('cuteNote');
    note.classList.add('visible');
    createHeartsBurst();
    document.querySelector('.btn-group').style.display = 'none';
    noBtn.textContent = "Nai hudaina"; 
  messageIndex = 0; 
  });
  

  function createFallingHearts() {
    const container = document.querySelector('.falling-hearts');
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.className = 'falling-heart';
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = Math.random() * 5 + 8 + 's';
      heart.style.animationDelay = Math.random() * -20 + 's';
      heart.style.fontSize = Math.random() * 30 + 50 + 'px';
      container.appendChild(heart);
    }
  }
  createFallingHearts();
  
  
  function createHeartsBurst() {
    const burstContainer = document.createElement('div');
    burstContainer.style.position = 'fixed';
    burstContainer.style.width = '100%';
    burstContainer.style.height = '100%';
    burstContainer.style.pointerEvents = 'none';
    burstContainer.style.zIndex = '9999';
  
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.style.position = 'absolute';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.fontSize = '40px';
      heart.innerHTML = '💖';
      heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 1 + Math.random() * 5;
      const tx = Math.cos(angle) * velocity * 100;
      const ty = Math.sin(angle) * velocity * 100;
      
      heart.style.animation = `burst 1s ease-out forwards`;
      heart.style.setProperty('--tx', `${tx}%`);
      heart.style.setProperty('--ty', `${ty}%`);
      
      burstContainer.appendChild(heart);
    }
  
    document.body.appendChild(burstContainer);
    setTimeout(() => burstContainer.remove(), 1000);
  }
  

  if (!document.getElementById('burst-animation')) {
    const burstStyle = document.createElement('style');
    burstStyle.id = 'burst-animation';
    burstStyle.textContent = `
      @keyframes burst {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(2); opacity: 0; }
      }
    `;
    document.head.appendChild(burstStyle);
  }
  

  function shufflePhotos() {
    const photoGrid = document.getElementById('photoGrid');
    const photos = Array.from(photoGrid.children);
    
    
    for (let i = photos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      photoGrid.insertBefore(photos[j], photos[i]);
    }
  
    
    photos.forEach(img => {
      img.classList.add('shuffling');
      setTimeout(() => img.classList.remove('shuffling'), 600);
    });
  }
  
  
  let shuffleInterval = setInterval(shufflePhotos, 2000);
  shufflePhotos();
  
