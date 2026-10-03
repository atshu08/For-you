# 💗 Atsu Ma's Love Website — For Shyam

A cute interactive love website made specially for Shyam.

## Features

1. **Secret boyfriend gate**
   - The first page asks: "Who is Atsu Ma's boyfriend?"
   - Only `Shyam` is accepted.
   - Any other name shows a "Wrong user / No entry allowed" message.

2. **Welcome page**
   - Welcomes Shyam into his own little corner of the website.

3. **Emotion selection**
   - Happy
   - Excited
   - Sad
   - Angry
   - Worried
   - Overthinking
   - Tired
   - Lonely
   - Calm
   - Confused
   - Loved
   - Sleepy

4. **Day selection**
   - Sunday through Saturday.

5. **Personalized messages**
   - Every emotion + every weekday combination has a unique message.
   - There are 12 emotions × 7 days = 84 unique messages.

6. **Cute UI**
   - Responsive design
   - Floating hearts
   - Soft pink theme
   - Animations
   - Mobile-friendly layout
   - Back buttons so the user can change choices

## How to run in Visual Studio / VS Code

### Easiest method

1. Extract the ZIP.
2. Open the extracted folder in Visual Studio Code.
3. Open `index.html`.
4. Double-click `index.html`, or use a browser to open it.

### If you use VS Code

You can install the **Live Server** extension and then:
- Right-click `index.html`
- Choose **Open with Live Server**

No Node.js, Java, Maven, MySQL, Docker, or backend is required.

## Project structure

```text
Atshu_Love_Website/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Important

The name check is intentionally frontend-only. This is a cute personal website, not a secure authentication system. Someone who knows how to inspect the JavaScript could see the accepted name.

## Easy customization

All emotion/day messages are inside `script.js` in the `messages` object.

For example:

```javascript
happy: {
  Sunday: "Your Sunday message here...",
  Monday: "Your Monday message here..."
}
```

You can replace any message with your own personal message without changing the HTML.

The accepted name is also easy to change in `script.js`:

```javascript
if (name === "shyam") {
```

Change `"shyam"` to another name if needed.
