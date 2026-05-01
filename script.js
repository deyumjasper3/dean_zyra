// LIGHTBOX
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// SURPRISE BUTTON
function surprise() {
  alert("I love you more than words can ever explain ❤️");
}

// FLOATING HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);

// MUSIC CONTROL
const music = document.getElementById("music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// TIME TOGETHER COUNTER (Readable format)
const startDate = new Date("2025-11-24T02:30:00"); // EDIT THIS

function updateCounter() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  // Fix negatives step-by-step
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthDays;
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  // Combine years into months (so it's cleaner like "6 months" instead of years)
  months += years * 12;

document.getElementById("counter").innerText =
  `We've been together for ${months} months, ${days} days, ${hours} hrs, ${seconds} secs ❤️`;
}

setInterval(updateCounter, 1000);
updateCounter();


document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".carousel-track");
  const viewport = document.querySelector(".carousel-viewport");

  let cards = Array.from(document.querySelectorAll(".polaroid-card"));

  const cardWidth = () => {
    const style = window.getComputedStyle(cards[0]);
    return cards[0].offsetWidth + parseInt(style.marginRight || 20);
  };

  let index = cards.length;

  // 🔁 CLONE CARDS FOR LOOPING
  function setupInfinite() {
    const firstClones = cards.map(card => card.cloneNode(true));
    const lastClones = cards.map(card => card.cloneNode(true));

    firstClones.forEach(c => track.appendChild(c));
    lastClones.reverse().forEach(c => track.insertBefore(c, track.firstChild));

    cards = Array.from(document.querySelectorAll(".polaroid-card"));

    track.style.transform = `translateX(-${index * cardWidth()}px)`;
  }

  function move(direction) {
    index += direction;

    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${index * cardWidth()}px)`;

    track.addEventListener("transitionend", () => {
      const total = cards.length;

      // 🔁 jump without animation (infinite illusion)
      if (index >= total - 3) {
        track.style.transition = "none";
        index = cards.length / 3;
        track.style.transform = `translateX(-${index * cardWidth()}px)`;
      }

      if (index <= 2) {
        track.style.transition = "none";
        index = cards.length / 3;
        track.style.transform = `translateX(-${index * cardWidth()}px)`;
      }
    }, { once: true });
  }

  window.move = move;

  setupInfinite();

  // Swipe
  let startX = 0;

  viewport.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  viewport.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) move(1);
    if (endX - startX > 50) move(-1);
  });

});


// 💌 OPEN WHEN LETTERS CONTENT
const letters = [
  {
    title: "Open when you miss me 💔",
    text: "Close your eyes and remember I’m always thinking of you. No matter the distance, you’re always with me in my heart."
  },
  {
    title: "Open when you're sad 😔",
    text: "It’s okay to not be okay. I wish I could hold you right now, but for now, please remember you are deeply loved."
  },
  {
    title: "Open when you can't sleep 🌙",
    text: "Breathe slowly… imagine I’m there beside you, holding your hand until you fall asleep peacefully."
  },
  {
    title: "Open when you need love 💖",
    text: "You are one of the most precious people in my life. Never doubt how deeply you are loved."
  },
  {
    title: "Open when you feel alone 🥺",
    text: "You are never alone. Even in silence, I’m always here with you in spirit and heart."
  },
  {
    title: "Open when you want to smile 💞",
    text: "Think of the little moments we shared. I hope this makes your heart a little lighter today."
  },
  {
  title: "Open when you miss us 💖",
  text: "Remember all the little moments we shared—the laughs, the talks, the silence that still felt comforting. We are a story still being written."
  },
  {
  title: "Open when you need a reminder of my love 🫶",
  text: "No matter what happens, my feelings for you don’t change. You are deeply loved, always and without condition."
  }
  
];


function openLetter(index) {
  const modal = document.getElementById("letterModal");
  const title = document.getElementById("letterTitle");
  const text = document.getElementById("letterText");

  modal.style.display = "flex";

  title.innerText = letters[index].title;

  // reset animation
  text.style.animation = "none";
  text.offsetHeight; // force reflow

  text.innerText = letters[index].text;

  // re-trigger handwriting animation
  text.style.animation = "typing 3s steps(60, end), blink 0.8s infinite";
}

function closeLetter() {
  document.getElementById("letterModal").style.display = "none";
}


// 💌 100 REASONS WHY I LOVE YOU
const reasons = [
  "You're kind without trying to impress anyone. (If weekend kay diliii HAHAHAHA di mang reply sa workmates jkk.)",
  "You're genuinely funny, usahayyy samot nag mangape ig gabie padung tulog.",
  "You're confident.",
  "You care deeply about people you love.",
  "You're emotionally intelligent. (If di lang mokatok ang utok HAHAHAHA.)",
  "You're smart in a way that's attractive.",
  "You challenge me to think differently.",
  "You have this energy that lights up a room.",
  "You're real.",
  "You're beautiful.",
  "You make me feel calm, especially when you're by my side on my lowest days.",
  "You make me feel seen. (Delivered diay basta di ganahan makigchat hahahahaha.)",
  "You make me smile when I don't feel like smiling.",
  "You make me look forward to every text and every meeting.",
  "You make me feel lucky.",
  "You make me want to be a better version of myself.",
  "Time feels different when I'm with you.",
  "You make me laugh in the best way.",
  "You make me feel safe being myself.",
  "You make me happy.",
  "You're thoughtful.",
  "You're caring.",
  "You ask challenging questions that I enjoy answering.",
  "You have opinions and you're not afraid to share them.",
  "You're emotionally aware in a chaotic world.",
  "The way you laugh at your own jokes.",
  "The way you say my name.",
  "The way you send random updates.",
  "The way you remember small details.",
  "The way you hype up your friends.",
  "The way you talk about things you love.",
  "The way you make me feel loved.",
  "You give the best compliments.",
  "You give me butterflies.",
  "Deep conversations are easy with you.",
  "You're honest.",
  "You speak your mind.",
  "You're effortlessly cute.",
  "You still get my attention without trying.",
  "You're very pretty even when you doubt it.",
  "You look amazing.",
  "You listen, like really listen.",
  "You encourage me even in small ways.",
  "You're honest with your feelings.",
  "You make me feel like I matter.",
  "You bring calm to my chaos.",
  "You're fun to just exist around.",
  "You feel like home.",
  "Even if you win arguments, I still like you more.",
  "You're unpredictable in the best ways.",
  "You make me nervous in a good way.",
  "You get my sense of humor.",
  "You're the first person I want to text.",
  "You're enough as you are.",
  "You give me peace.",
  "You inspire me without trying.",
  "You make me excited to meet you.",
  "You make my problems feel lighter.",
  "You make love feel possible again.",
  "You make me feel chosen.",
  "You're my calm and my overthinking trigger.",
  "You're what I'd choose again and again.",
  "You've got something I can't explain but I feel.",
  "You're the 'what if' I want to answer.",
  "You don't need to say 'I love you' for me to feel it.",
  "You make vulnerability feel safe.",
  "You make me want to protect what we're building.",
  "Even your 'I'm okay' tells me everything.",
  "You laugh at my terrible jokes.",
  "You're better company than most people.",
  "You look good even when you feel like a mess.",
  "You make me want to cancel plans just to be with you.",
  "You've become my favorite notification.",
  "You're my safe space and my favorite headache.",
  "You could win an Olympic medal in eyerolling.",
  "You know when to say sorry.",
  "You express what you feel.",
  "You somehow make every day better.",
  "If I had ₱10 every time I thought of you, I'd be rich.",
  "I talk to God about you.",
  "Talking to you feels like something I want forever.",
  "I want to know everything about you.",
  "You're respectful.",
  "You protect your peace.",
  "I want to see you every day.",
  "I'd risk a lot for you.",
  "You remind me how it feels to genuinely care.",
  "You say no when needed.",
  "I want to hear about your day no matter how mine is.",
  "I want to build something slow and real with you.",
  "I want to be there on your worst days.",
  "Your eyes show what you're really feeling.",
  "I want to be one of the few people you trust.",
  "I admire how you take your time with things.",
  "I respect your boundaries.",
  "You make me want to feel more, not less.",
  "You understand me.",
  "I trust you.",
  "In a world of temporary things, you feel like something that lasts."
];


function openBottle() {
  const bottle = document.querySelector(".bottle");
  const modal = document.getElementById("reasonModal");
  const text = document.getElementById("reasonText");

  // 🫙 reset animation so shake always triggers
  bottle.classList.remove("shake");
  void bottle.offsetWidth; // force reflow (IMPORTANT FIX)
  bottle.classList.add("shake");

  // pick random reason
  const randomIndex = Math.floor(Math.random() * reasons.length);

  setTimeout(() => {
    text.innerText = reasons[randomIndex];
    modal.style.display = "flex";
  }, 600); // wait for shake animation
}

function closeBottle() {
  document.getElementById("reasonModal").style.display = "none";
}


const dailyMessages = [
  "You are doing better than you think ❤️",
  "No matter what today brings, I’m proud of you 🫶",
  "Take things one step at a time 🌸",
  "You are loved more than you realize 💖",
  "It’s okay to rest, you don’t have to be strong all the time 🌙",
  "You are enough, exactly as you are ✨",
  "I hope today treats you gently 💕",
  "You are someone’s favorite person (mine) 💞",
  "Breathe. You’re going to be okay 🌷",
  "Even on hard days, you are still loved ❤️"
];

// 🌷 Stable daily index (based on real date)
function getStableDailyIndex() {
  const now = new Date();

  // Convert date to a stable number (YYYYMMDD)
  const dateKey = now.getFullYear() * 10000 +
                  (now.getMonth() + 1) * 100 +
                  now.getDate();

  // Convert to index
  return dateKey % dailyMessages.length;
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("dailyMessage");

  if (el) {
    const index = getStableDailyIndex();
    el.innerText = dailyMessages[index];
  }
});
