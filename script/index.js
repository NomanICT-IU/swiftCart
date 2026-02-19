const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element);
    });
  });
