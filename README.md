# 📥 Code with Mosh Auto Downloader Extension

This Chrome extension automates downloading videos from the Code with Mosh platform — saving videos into properly named folders by section and lecture title.

Perfect for offline learning with organized structure.

---

## 🧠 Features

- ✅ Automatically downloads all videos in a course.
- 📂 Saves each video in its respective **section folder** with a **numbered prefix**.
- 📝 Filenames include lecture number and title.
- 🕐 Adds delay between downloads to prevent overloading.

---

## 🔧 Installation (Unpacked Extension)

> You must enable Developer Mode in Chrome to install unpacked extensions.

1. **Download the extension files**  
   Clone or download this repo to your computer.

2. **Open Chrome** and go to:  
   `chrome://extensions/`

3. **Enable Developer Mode**  
   Toggle the switch in the top right.

4. **Click "Load unpacked"**

5. **Select the folder** where this extension’s files are located.

You should now see the extension added to your browser.

---

## 📌 How to Use

1. **Login** to [https://codewithmosh.com](https://codewithmosh.com) and open any course.

2. **Open the course page** where the full list of video lectures is visible where you can play videos

3. Play the first video of the course

4. **Click the Extension icon** in Chrome’s toolbar.

5. The extension will:
   - Go through each video in the course.
   - Download the video with a clean title.
   - Create folders by section (e.g., `1. Getting Started`, `2. React Basics`).

⚠️ Keep the course page open while the extension runs.

---

## ⚠️ Notes

- The extension respects download delays (default is ~5 seconds between videos). Adjust this in the extension code if needed from `content.js`
- Downloads are saved in your Chrome default download folder, within: `Mosh Course/` folder
- If you're seeing issues:
- Try refreshing the course page and running again.
- Make sure you're on the main course page (with full lecture list).
- Check if Chrome is blocking multiple downloads.

---

## 🧪 Development / Customization

- Modify `content.js` for:
- Changing delay between downloads
- Skipping specific sections
- Custom folder names

---

## 🛡️ Disclaimer

This tool is for **personal offline learning only**. Please ensure you’ve purchased the course and respect the platform's terms of service.

---

## 💬 Support

Feel free to open an issue or submit a pull request for improvements.

---

📚 Happy learning!
