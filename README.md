# Image Carousel

A simple responsive image carousel built with **HTML**, **CSS**, and **JavaScript**.  
The carousel allows users to navigate through images using left/right buttons and also auto-plays every 3 seconds.

---

## 🚀 Features
- Responsive layout with centered carousel container.
- Smooth sliding animation using CSS transitions.
- Left (`‹`) and right (`›`) navigation buttons.
- Auto-play functionality with configurable interval.
- Hover effect on navigation buttons.

---

## 📂 Project Structure
project-root/
│
├── index.html            # Main HTML file (structure)
├── style.css              # External CSS file (styling)
├── script.js              # External JavaScript file (carousel logic)
└── README.md              # Documentation

Код

---

## 🛠️ Technologies Used
- **HTML5** for structure
- **CSS3** for styling and transitions
- **JavaScript (ES6)** for carousel functionality

---

## 📋 How It Works
1. The carousel displays a set of images inside a flex container.
2. Clicking the **right button** (`›`) moves to the next image.
3. Clicking the **left button** (`‹`) moves to the previous image.
4. The carousel automatically advances every 3 seconds.
5. The sliding effect is achieved by updating the `transform: translateX()` property of the image container.

---

## ▶️ Usage
1. Clone or download the repository.
2. Ensure `index.html` links to `style.css` and `script.js`:
   ```html
   <link rel="stylesheet" href="style.css">
   <script src="script.js" defer></script>
Open index.html in any modern browser.

Use the navigation buttons or wait for auto-play to cycle through images.

📸 Demo
Carousel starts at the first image.

Auto-slides every 3 seconds.

Manual navigation available via buttons.

📌 Notes
Images are currently loaded from external URLs. Replace them with your own images if desired.

Auto-play interval can be adjusted in script.js by changing:

js
setInterval(() => {
  idx++;
  show();
}, 3000); // 3000ms = 3 seconds
📜 License
This project is open-source and available under the MIT License.
