fetch("http://localhost:3000/images")
  .then(res => res.json())
  .then(data => console.log(data));

  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);
  