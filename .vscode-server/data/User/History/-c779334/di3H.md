2. Install JSON Server
bash
Copy
Edit
npm install -g json-server
3. Start the JSON Server
bash
Copy
Edit
json-server --watch db.json
This will start the server at:
http://localhost:3000

4. Run the App
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
}
Author
Abiud Makokha

Built with love and coding skills

