const categoriesLength = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesLength.length);

const findTitle = document.querySelectorAll(".item");

findTitle.forEach(element => {
  const title = element.querySelector("h2").textContent;
  const value = element.querySelectorAll("li").length;
  console.log(`Category: ${title}, Elements: ${value}`);
});
