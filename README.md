# 🖼️ Background Remover (AI + Web)

🚀 A simple and beautiful **web app** built with **HTML, CSS, and JavaScript** that removes image backgrounds using the **remove.bg API**.  
The app shows both the **original image** (without background removed) and the **processed image** (with background removed) side by side.

---

## ⚙️ Features

✅ Upload any image (JPG, PNG, JPEG)  
✅ Uses **AI-powered background removal** from remove.bg API  
✅ Shows both **Before (Original)** and **After (Background Removed)** images  
✅ Option to **download** the background-removed image  
✅ Clean and responsive web interface  
✅ Works entirely on the frontend — no backend required  

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure and layout |
| **CSS3** | Styling and responsive design |
| **JavaScript (Vanilla)** | Logic + API integration |
| **remove.bg API** | Background removal engine |

---

## 🧠 How It Works

1. Upload any image.  
2. JavaScript sends it to the **remove.bg API** using your API key.  
3. The API removes the background and sends back the processed image.  
4. Both images are displayed:  
   - 🖼️ **Original Image (Without BG Remove)**  
   - 🧠 **Background Removed Image (With BG Remove)**  

---

## 📸 Preview

| Without BG Remove | With BG Remove |
|------------------|------------------|
| ![Original](./samples/original.jpg) | ![Removed](./samples/removed.png) |

*(Replace these with your own example images from your project.)*

---

## ⚙️ API Setup (remove.bg)

1. Visit: [https://www.remove.bg/api](https://www.remove.bg/api)  
2. Create an account and get your **free API key**.  
3. In your `script.js`, replace `YOUR_API_KEY_HERE` with your actual key.

Example:
```js
const apiKey = "YOUR_API_KEY_HERE";
