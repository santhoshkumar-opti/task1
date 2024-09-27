// Function to create the title container

const images = {
  slide1: "https://storage.kameleoon.com/petitBateau/matiere/Laine.png",
  slide2: "https://storage.kameleoon.com/petitBateau/matiere/Molleton.png",
  slide3: "https://storage.kameleoon.com/petitBateau/matiere/tubique.png",
  slide4: "https://storage.kameleoon.com/petitBateau/matiere/Velours.png",
  vector: "https://storage.kameleoon.com/petitBateau/matiere/Vector.png",
};

const vectorSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
<path d="M1 6.5L17 6.5M17 6.5L12.3333 1.5M17 6.5L12.3333 11.5" stroke="#002E5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const hardCodedData = [
  {
    id: "laine",
    name: "laine",
    img: images.slide1,
  },
  {
    id: "molleton",
    name: "molleton",
    img: images.slide2,
  },
  {
    id: "tubique",
    name: "tubique",
    img: images.slide3,
  },
  {
    id: "velours",
    name: "velours",
    img: images.slide4,
  },
];

const subLinkText = "Voir tout";

function createTitleContainer() {
  const titleContainer = document.createElement("div");
  titleContainer.className = "kambloc-title-container";

  const title = document.createElement("h3");
  title.className = "kambloc-title";
  title.textContent = "Notre sélection par matière";

  titleContainer.appendChild(title);

  return titleContainer;
}

function createWrapper(data) {
  const wrapper = document.createElement("div");
  wrapper.id = data.id;
  wrapper.className = "kambloc-wrapper";

  const imageContainer = document.createElement("div");
  imageContainer.className = "kambloc-image-container";

  const image = document.createElement("img");
  image.src = data.img;

  imageContainer.appendChild(image);

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "kambloc-wrapper-content";

  const wrapperTitle = document.createElement("p");
  wrapperTitle.className = "kambloc-wrapper-title";
  wrapperTitle.textContent = data.name;

  const visitLinkContainer = document.createElement("div");
  visitLinkContainer.className = "kambloc-visit-link-container";

//   const visitLinkTitle = document.createElement("p");
//   visitLinkTitle.className = "kambloc-visit-link-title";
//   visitLinkTitle.textContent = subLinkText;

//   const visitLinkImage = document.createElement("img");
//   visitLinkImage.src = vectorSvg;

  visitLinkContainer.innerHTML = createSubLinkContent();
//   visitLinkContainer.appendChild(visitLinkImage);

  contentWrapper.appendChild(wrapperTitle);
  contentWrapper.appendChild(visitLinkContainer);

  wrapper.appendChild(imageContainer);
  wrapper.appendChild(contentWrapper);

  return wrapper;
}



function createSubLinkContent() {
    return `<div class="kambloc-visit-link-container"><p class="kambloc-visit-link-title">Voir tout</p>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
<path d="M1 6.5L17 6.5M17 6.5L12.3333 1.5M17 6.5L12.3333 11.5" stroke="#002E5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`
}
function createWrapperContainer() {

  const wrapperContainer = document.createElement("div");
  wrapperContainer.className = "kambloc-wrapper-container";
  hardCodedData.forEach((value) => 
    wrapperContainer.appendChild(createWrapper(value)));

  return wrapperContainer;
}

function createDivElement() {
  // Create a new div element
  const div = document.createElement("div");

  // Set styles
  div.classList.add("kambloc-container");

  // Set the inner text
  div.appendChild(createTitleContainer());
  div.appendChild(createWrapperContainer());

  return div;
}

function variation() {
  const {
    Core: { runWhenElementPresent },
  } = Kameleoon.API;

  function findWhichProductElement(productsContainer, columns) {
    const totalProductLists = productsContainer.querySelectorAll(
      ".grid-tile.product-tile-container"
    );

    // for desktop
    return totalProductLists[columns === 4 ? 16 : 8];
  }

  function insertContainer(productsContainer) {
    const columns =
      getComputedStyle(productsContainer).gridTemplateColumns.split(" ").length;

    const productElement = findWhichProductElement(productsContainer, columns);
    console.log("Elements", columns);

    productsContainer.insertBefore(createDivElement(), productElement);
  }

  runWhenElementPresent("#search-result-items", ([plpListsElement]) =>
    insertContainer(plpListsElement)
  );
}

setTimeout(variation, 6000);
