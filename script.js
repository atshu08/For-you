const emotions = [
  { id: "happy", name: "Happy", icon: "🥰", desc: "Smiling from the heart" },
  { id: "excited", name: "Excited", icon: "🤩", desc: "Can't sit still!" },
  { id: "sad", name: "Sad", icon: "🥺", desc: "Need a little comfort" },
  { id: "angry", name: "Angry", icon: "😤", desc: "Someone pushed a button" },
  { id: "worried", name: "Worried", icon: "😟", desc: "Mind is full of what-ifs" },
  { id: "overthinking", name: "Overthinking", icon: "🫠", desc: "Brain won't be quiet" },
  { id: "tired", name: "Tired", icon: "😴", desc: "Running low on battery" },
  { id: "lonely", name: "Lonely", icon: "🥹", desc: "Missing someone special" },
  { id: "calm", name: "Calm", icon: "😌", desc: "Peaceful little moment" },
  { id: "confused", name: "Confused", icon: "😵‍💫", desc: "What is even happening?" },
  { id: "loved", name: "Loved", icon: "💖", desc: "Heart feeling warm" },
  { id: "sleepy", name: "Sleepy", icon: "😪", desc: "Eyes saying goodnight" }
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const messages = {
  happy: {
    Sunday: "If today has made you smile, I hope you know that your smile is one of my favourite things in this whole world. Keep that beautiful happiness close, Shyam. And yes… save a little of it for me. 💗",
    Monday: "A happy Monday? Look at you proving Mondays don't always have to be boring. Keep that cute smile on your face today. Somewhere, your Atsu Ma is smiling because you are smiling. 🌷",
    Tuesday: "Whatever made you happy today, hold onto it. Tiny happy moments become the memories we talk about later. And I hope I get to be one of those moments for you. 🥰",
    Wednesday: "Midweek happiness deserves an extra hug. So consider this your invisible Wednesday hug from me. Squeeze it properly, okay? 🤗❤️",
    Thursday: "You're glowing today, even if I can't see you right now. Don't let anything steal that sparkle. Your happiness matters to me more than you know. ✨",
    Friday: "Friday looks good on you! Go enjoy your day, make some beautiful memories, and remember that one girl is ridiculously happy that you exist. 💕",
    Saturday: "A happy Saturday for my favourite boy? Perfect. Go have fun, laugh loudly, eat something delicious, and come back to me with all your stories. 😚"
  },
  excited: {
    Sunday: "That excited little heart of yours is adorable. Whatever you're looking forward to, I hope it becomes even better than you imagined. And if it involves me… obviously I'm already excited too. 🤭💗",
    Monday: "Starting the week with this much excitement? Okayyy, Mr. Energy! Don't let the Monday mood catch you. Keep that sparkle alive. ✨",
    Tuesday: "I can practically imagine your excited face right now. Go enjoy this feeling without overthinking it. Some moments are meant to simply be enjoyed. 🤩",
    Wednesday: "Halfway through the week and your excitement is still here? I love that for you. Now breathe, smile, and enjoy every tiny second. 💫",
    Thursday: "Whatever you're waiting for, I hope it arrives with the biggest smile. And if you need someone to celebrate with… you know exactly where to find me. 🫶",
    Friday: "FRIDAY + YOU + EXCITEMENT = dangerous levels of happiness. Go enjoy yourself, Shyam! And don't forget to tell me everything later. 😌💕",
    Saturday: "Your excited energy could probably power the entire city today. 😂 Go make today memorable, my favourite human. 🌟"
  },
  sad: {
    Sunday: "Hey, come here. 🤍 You don't have to pretend you're okay just because it's Sunday. Rest, breathe, and let yourself feel. This sad moment does not define your whole day.",
    Monday: "If Monday feels heavy today, you don't have to carry everything at once. One small step, one deep breath, one little smile. I'm sending you the biggest invisible hug. 🫂",
    Tuesday: "It's okay to have a soft day. You don't need to be strong every minute. Drink some water, take a breath, and remember that someone cares about your heart very, very much. ❤️",
    Wednesday: "Halfway through the week and feeling low? Pause for a moment. You are allowed to rest. You are allowed to feel. And you are definitely allowed to come to me for comfort. 🥺",
    Thursday: "I wish I could sit beside you quietly right now. No fixing, no questions—just being there. Until then, imagine my hand holding yours. You'll get through this. 🤍",
    Friday: "Don't let a difficult Friday convince you that the whole week was bad. Tonight, be gentle with yourself. Tomorrow can carry the things that feel too heavy today. 🌙",
    Saturday: "Saturday is supposed to feel light, but sometimes hearts don't follow calendars. It's okay. Take your time, little one. Your Atsu Ma is sending you a warm hug through this screen. 💗"
  },
  angry: {
    Sunday: "Okay, angry boy 😤. First rule: don't send that angry message yet. Breathe. Drink water. Then decide if it still deserves your energy. Protect your peace, Shyam. ❤️",
    Monday: "Monday already annoyed you? 😂 Come here before you fight the whole world. Take five minutes, breathe slowly, and remember not everything deserves a reaction.",
    Tuesday: "I know you're angry, but your peace is more valuable than winning an argument. Say what needs to be said calmly. Future-you will thank you for it. 🤍",
    Wednesday: "Midweek rage detected! 🚨 Put the phone down for a minute, unclench your jaw, breathe, and come back when your heart is calmer. I'm rooting for the peaceful version of you. 🌷",
    Thursday: "Whatever happened, don't let someone else's behaviour decide who you become today. Feel the anger, then let it pass. Your heart deserves better than carrying it all day.",
    Friday: "Before you let one annoying person ruin your Friday, remember: they don't deserve that much control over your mood. Go eat something nice and reclaim your happiness. 😌",
    Saturday: "Angry on a Saturday? Absolutely illegal. 😂 Come on, breathe. Whatever happened can wait five minutes. Give your beautiful brain a little break, okay? 🫶"
  },
  worried: {
    Sunday: "Your mind is trying to solve tomorrow before today has even finished. Come back to this moment. Right now, you are here, you are breathing, and you don't have to solve everything tonight. 🤍",
    Monday: "Monday worries can feel huge before the day even starts. Take it one task at a time. You don't need the whole staircase—just the next step. 🌷",
    Tuesday: "If your brain is shouting 'what if?', gently answer it with 'what is happening right now?' Stay with the present, Shyam. You can handle today without borrowing tomorrow's problems.",
    Wednesday: "Worried little heart, pause. Not every possibility is a prediction. Some things will work themselves out, and some things you'll handle when they arrive. For now, breathe. 💗",
    Thursday: "I know your mind is busy. But worrying doesn't mean you care more—it only makes your heart tired. Give yourself permission to have a peaceful evening. 🫂",
    Friday: "Whatever you're worried about, you don't have to carry it alone. Talk about it, write it down, or simply take a break. One thing at a time, my love.",
    Saturday: "Your Saturday deserves a little peace. Put the worries down for a while. They can wait. Your heart needs some sunshine too. ☀️💖"
  },
  overthinking: {
    Sunday: "Dear overthinking brain: the meeting is cancelled today. 😂 You don't need to replay every conversation or predict every future. Come back to now. You are okay.",
    Monday: "If your brain has already created seventeen possible endings before breakfast, please tell it to sit down. 😭 One thing at a time, Shyam. You don't have to solve imaginary problems.",
    Tuesday: "Not every thought deserves an investigation. Some thoughts are just thoughts. Let them pass like clouds instead of chasing every single one. ☁️",
    Wednesday: "Your brain is doing overtime again, isn't it? Take a slow breath. Ask yourself: 'Can I do anything about this right now?' If not, let it rest for tonight.",
    Thursday: "Stop reading between lines that may not even exist. Sometimes a message is just a message, a silence is just a silence, and everything is okay. 🤍",
    Friday: "Your brain wants a complete explanation for everything. Your heart doesn't need one tonight. Relax those shoulders and let yourself simply exist. 🌙",
    Saturday: "Saturday's assignment: absolutely no unnecessary overthinking for at least ten minutes. 😂 Go outside, listen to music, eat something you love, and let your brain breathe. 💕"
  },
  tired: {
    Sunday: "You don't have to be productive every second. Sunday permission granted: do less, rest more, and let your body catch up with your beautiful busy brain. 😴❤️",
    Monday: "Already tired? I know. 😭 Don't try to conquer the entire week today. Just get through today gently. Tomorrow can worry about itself.",
    Tuesday: "Your battery is asking for a charger, not another task. Take a proper break, drink water, eat something, and rest without feeling guilty. 🫶",
    Wednesday: "Halfway there! You don't have to sprint to the finish line. Slow down, breathe, and give yourself credit for making it this far. 🌷",
    Thursday: "If you're exhausted, please don't confuse rest with laziness. Rest is how you recharge. Tonight, choose yourself and get some proper sleep. 🌙",
    Friday: "You made it to Friday! Put the week down for a little while. You deserve to relax, laugh, eat something good, and do absolutely nothing if you want. 😌",
    Saturday: "Today has one mission: recharge the Shyam battery. 🔋❤️ Sleep, eat, relax, smile. The world can wait while you take care of yourself."
  },
  lonely: {
    Sunday: "If Sunday feels unusually quiet, remember that quiet doesn't mean forgotten. Close your eyes and imagine me sitting beside you, talking about absolutely everything and nothing. 🫂",
    Monday: "Even on a busy Monday, loneliness can sneak in. So here's your reminder: you have a place in someone's heart that no one else can replace. 💗",
    Tuesday: "I wish I could magically appear beside you for five minutes right now. Until teleportation is invented, take this message as my little virtual hug. 🤗",
    Wednesday: "Midweek loneliness? Come here. You are loved, you are remembered, and you are missed. Don't let one quiet moment tell you otherwise. ❤️",
    Thursday: "If you need company, reach out. Send a silly message, call someone you love, or come talk to me. You don't have to sit alone with every feeling.",
    Friday: "Friday can make quiet moments feel extra quiet. So make a little noise—music, a movie, a call, anything. And remember someone is thinking about you. 🥰",
    Saturday: "If today feels lonely, imagine me stealing the loneliness away and replacing it with the world's biggest hug. Consider yourself officially hugged. 🫂💗"
  },
  calm: {
    Sunday: "This peaceful feeling looks beautiful on you. Don't rush it. Let Sunday be slow, soft, and quiet. You deserve moments where nothing needs fixing. 🌿",
    Monday: "A calm Monday? We love to see it. Keep that peaceful energy protected. Not every notification needs an answer immediately. 😌",
    Tuesday: "Take a moment to notice how nice it feels when your mind isn't racing. Stay here a little longer. You don't need to rush into the next thing.",
    Wednesday: "Midweek peace is precious. Breathe deeply, enjoy your little calm corner, and let yourself be proud of how you're handling things. 🌷",
    Thursday: "You seem to have found a little pocket of peace today. Keep it. Put your phone down for a moment and enjoy the quiet around you. 🤍",
    Friday: "Calm Friday energy? Perfect. No unnecessary drama, no unnecessary stress—just you enjoying your evening and letting the week fade away. 🌙",
    Saturday: "A peaceful Saturday is a gift. Stay cozy, stay soft, and do something that makes your heart feel quietly happy. 💕"
  },
  confused: {
    Sunday: "If life feels like a giant question mark today, that's okay. You don't need every answer immediately. Sometimes clarity arrives after you stop chasing it. 🤍",
    Monday: "Monday brain + confusion = dangerous combination. 😂 Pick one small thing you know for sure and start there. The rest can become clear later.",
    Tuesday: "Confused doesn't mean incapable. It just means you need a little more time or information. Give yourself that time without judging yourself.",
    Wednesday: "If you don't know what to do next, pause. You can always take one tiny step and adjust later. You don't need a perfect plan.",
    Thursday: "Some days are blurry. That's normal. Don't force an answer just because you feel like you should have one. Let things unfold a little. 🌷",
    Friday: "Before your brain turns one little confusion into a full documentary series, breathe. 😂 Write down what you know, what you don't, and leave the rest for tomorrow.",
    Saturday: "Confused little Shyam, today is allowed to be a 'figure it out later' day. Go do something fun and let your brain take a vacation. 🫶"
  },
  loved: {
    Sunday: "I hope you feel loved today because you absolutely are. In tiny thoughts, silly memories, quiet wishes, and in one very special heart that has chosen you. ❤️",
    Monday: "Even when Monday gets busy, I hope you carry one thought with you: somebody is ridiculously grateful that you are in her life. 💗",
    Tuesday: "Feeling loved today? Good. Keep that feeling close. You deserve affection that makes you feel safe, appreciated, and completely yourself.",
    Wednesday: "Here's a midweek reminder: you are not just loved on the good days. You are loved on the tired days, messy days, and confusing days too. 🫂",
    Thursday: "If your heart feels warm today, let it. Somewhere in this big world, your existence is making one girl's life a lot more beautiful. 🌷",
    Friday: "Friday love check: yes, you're still very, very loved. Now go enjoy your day with that information. 😌❤️",
    Saturday: "Saturday is perfect for extra love. So here's yours: one hug, two kisses, three forehead kisses, and an unlimited supply of 'I love you'. 💋💗"
  },
  sleepy: {
    Sunday: "Your eyes are saying goodnight already? 😴 Fine. Get comfortable, put the phone away, and sleep peacefully. Tomorrow can wait.",
    Monday: "Sleepy on Monday? Your body is filing a complaint. 😂 Please listen to it. Rest properly tonight, my love. You deserve good sleep.",
    Tuesday: "If you're yawning while reading this, that's your sign. Stop scrolling. Put your phone down. Close your eyes. Goodnight, sleepy boy. 🌙",
    Wednesday: "Midweek sleepiness is real. Don't fight it with endless scrolling. Give your brain the rest it is asking for. Sweet dreams whenever you go to bed. 💤",
    Thursday: "Your pillow is calling, Shyam. 📞😂 Go answer it. Tomorrow needs a rested version of you.",
    Friday: "Friday night + sleepy eyes = permission to become a blanket burrito. 🌯😴 Sleep well and wake up with a happy heart.",
    Saturday: "Sleepy Saturday? Absolutely approved. Get cozy, turn off the world for a while, and have the sweetest dreams. ❤️"
  }
};

let selectedEmotion = null;

const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildEmotionButtons() {
  const grid = document.getElementById("emotionGrid");
  grid.innerHTML = emotions.map(emotion => `
    <button class="emotion-btn" data-emotion="${emotion.id}">
      <span class="emotion-icon">${emotion.icon}</span>
      <span class="emotion-name">${emotion.name}</span>
      <span class="emotion-desc">${emotion.desc}</span>
    </button>
  `).join("");

  grid.querySelectorAll(".emotion-btn").forEach(button => {
    button.addEventListener("click", () => {
      selectedEmotion = emotions.find(e => e.id === button.dataset.emotion);
      document.getElementById("selectedEmotion").textContent =
        `${selectedEmotion.icon} ${selectedEmotion.name}`;
      showPage("dayPage");
    });
  });
}

function buildDayButtons() {
  const grid = document.getElementById("dayGrid");
  grid.innerHTML = days.map(day => `
    <button class="day-btn" data-day="${day}">
      <span class="day-heart">💗</span>${day}
    </button>
  `).join("");

  grid.querySelectorAll(".day-btn").forEach(button => {
    button.addEventListener("click", () => showMessage(button.dataset.day));
  });
}

function showMessage(day) {
  const emotionMessages = messages[selectedEmotion.id];
  const message = emotionMessages[day];

  document.getElementById("messageEmoji").textContent = selectedEmotion.icon;
  document.getElementById("messageLabel").textContent =
    `${selectedEmotion.name.toUpperCase()} • ${day.toUpperCase()}`;
  document.getElementById("messageTitle").textContent =
    `${day} feels a little softer now 💗`;
  document.getElementById("loveMessage").textContent = message;

  showPage("messagePage");
}

document.getElementById("enterBtn").addEventListener("click", checkName);

document.getElementById("nameInput").addEventListener("keydown", event => {
  if (event.key === "Enter") checkName();
});

function checkName() {
  const input = document.getElementById("nameInput");
  const error = document.getElementById("errorMessage");
  const card = document.querySelector(".login-card");
  const name = input.value.trim().toLowerCase();

  if (name === "shyam") {
    error.textContent = "";
    showPage("welcomePage");
  } else {
    error.textContent = "Wrong user! 🚫 No entry allowed. This little heart is reserved for Shyam. 💗";
    card.classList.remove("shake");
    void card.offsetWidth;
    card.classList.add("shake");
    input.focus();
  }
}

document.getElementById("startBtn").addEventListener("click", () => {
  showPage("emotionPage");
});

document.getElementById("backToEmotion").addEventListener("click", () => {
  showPage("emotionPage");
});

document.getElementById("backToDay").addEventListener("click", () => {
  showPage("dayPage");
});

document.getElementById("againBtn").addEventListener("click", () => {
  showPage("emotionPage");
});

function createFloatingHearts() {
  const container = document.querySelector(".floating-hearts");
  const heartChoices = ["♥", "♡", "💗", "💕", "✦"];
  for (let i = 0; i < 18; i++) {
    const span = document.createElement("span");
    span.textContent = heartChoices[Math.floor(Math.random() * heartChoices.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.animationDuration = `${8 + Math.random() * 10}s`;
    span.style.animationDelay = `${Math.random() * 8}s`;
    span.style.fontSize = `${12 + Math.random() * 15}px`;
    container.appendChild(span);
  }
}

buildEmotionButtons();
buildDayButtons();
createFloatingHearts();
