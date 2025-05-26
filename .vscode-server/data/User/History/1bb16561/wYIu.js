const imageUrl = "http://localhost:3000/images";
const commentsUrl = "http://localhost:3000/comments?imageId=1";

const title = document.getElementById("title");
const image = document.getElementById("image");
const likeButton = document.getElementById("like-button");
const likeCount = document.getElementById("like-count");
const commentsList = document.getElementById("comments-list");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");

// Fetch image
fetch(imageUrl)
  .then(res => res.json())
  .then(data => {
    const imageData = data[0]; // first image from array
    title.textContent = imageData.title;
    image.src = imageData.image;
    likeCount.textContent = imageData.likes;

    likeButton.addEventListener("click", () => {
      imageData.likes += 1;
      likeCount.textContent = imageData.likes;

      fetch(`http://localhost:3000/images/${imageData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: imageData.likes })
      });
    });
  });

// Fetch comments
fetch(commentsUrl)
  .then(res => res.json())
  .then(comments => {
    comments.forEach(renderComment);
  });

// Render comment helper
function renderComment(comment) {
  const li = document.createElement("li");
  li.textContent = comment.content;
  commentsList.appendChild(li);
}

// Add new comment
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = commentInput.value;

  fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: 1, content })
  })
    .then(res => res.json())
    .then(comment => {
      renderComment(comment);
      commentInput.value = "";
    });
});
