fetch("http://localhost:3000/images")
  .then(res => res.json())
  .then(data => {
    const imageData = data[0]; // get the first image
    title.textContent = imageData.title;
    image.src = imageData.image;
    likeCount.textContent = imageData.likes;

    likeButton.addEventListener("click", () => {
      imageData.likes += 1;
      likeCount.textContent = imageData.likes;

      fetch(http://localhost:3000/images/${imageData.id}, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: imageData.likes })
      });
    });
  });