# 🖼️ Background Remover (AI Powered)

🚀 A lightweight and fast **web-based background remover** built with **HTML, CSS, and JavaScript**, integrated with the **remove.bg API** to automatically remove image backgrounds.  
The app displays both the **original** and **background-removed** images side-by-side.

---

## ⚙️ Features

✅ Upload any image (JPG, PNG, JPEG)  
✅ AI-based background removal using **remove.bg API**  
✅ Instant **Before / After** comparison  
✅ Option to **download** the background-removed image  
✅ 100% Frontend — No backend setup required  

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure & Layout |
| **CSS3** | Styling & Responsiveness |
| **JavaScript (Vanilla JS)** | Logic, API Integration, and UI Handling |
| **Remove.bg API** | Background Removal Engine |

---

## 🧠 How It Works

1. User uploads an image.  
2. JavaScript sends it to the **remove.bg API** using `fetch()` with your **API key**.  
3. The API returns a new image with the background removed.  
4. The app shows both:
   - The **original image**
   - The **background-removed image**  
5. User can **download** the processed image.

---

## ⚙️ API Setup (remove.bg)

1. Go to 👉 [https://www.remove.bg/api](https://www.remove.bg/api)  
2. Sign up and get your **free API key**.  
3. Replace `YOUR_API_KEY_HERE` in `script.js` with your key:

```js
const apiKey = "YOUR_API_KEY_HERE";
