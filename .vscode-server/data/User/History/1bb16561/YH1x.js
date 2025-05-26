fetch("http://localhost:3000/images")
  .then(res => res.json())
  .then(data => console.log(data));
