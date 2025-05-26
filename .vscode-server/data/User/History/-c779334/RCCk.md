# Flatagram

Flatagram is a simple front-end web app that displays an image, allows users to like it, and post comments.  
This project is built using HTML, CSS, and JavaScript, and uses a local JSON server for data.

---

## Features

- Display an image with a title  
- Like button with live like counter  
- Add and display comments  
- Data persistence using JSON Server

---

## Tech Stack

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- JSON Server

---

## Installation

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/flatagram-abiud-makokha.git
cd flatagram-abiud-makokha

---


### 2. Install JSON Server
bash
npm install -g json-server

---

### 3. Start the JSON Server
bash
json-server --watch db.json

This will start the server at:
http://localhost:3000

### 4. Run the App
Open the index.html file using Live Server in VS Code

OR double-click index.html to open it in your browser

Sample JSON (db.json)
json
Copy
Edit
{
  "images": [
    {
      "id": 1,
      "title": "Flatiron Building",
      "image": "https://example.com/image.jpg",
      "likes": 5
    }
  ],
  "comments": [
    {
      "id": 1,
      "imageId": 1,
      "content": "Awesome shot!"
    }
  ]

Author
Abiud Makokha

Built with love and coding skills

License
This project is open source and free to use.