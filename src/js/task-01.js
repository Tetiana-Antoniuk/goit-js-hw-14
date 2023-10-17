const categoriesLength = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesLength.length);

const findTitle = document.querySelectorAll(".item");

findTitle.forEach(element => {
  const title = element.firstElementChild.textContent;
  const value = element.lastElementChild.children.length;
  console.log(`Category: ${title}, Elements: ${value}`);
});
