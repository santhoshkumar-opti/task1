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


const goalsNames = {
  common: 'Taux de clics sur les encarts matières',
  laine: 'Clic Bloc Laine',
  molleton: 'Clic Bloc Molletion',
  tubique: 'Clic Bloc Tubique',
  velours: 'Clic Bloc Velours'
}

const hardCodedData = [
  {
    id: "laine",
    name: "laine",
    img: images.slide1,
    goal: goalsNames.laine,
  },
  {
    id: "molleton",
    name: "molleton",
    img: images.slide2,
    goal: goalsNames.molleton,
  },
  {
    id: "tubique",
    name: "tubique",
    img: images.slide3,
    goal: goalsNames.tubique,
  },
  {
    id: "velours",
    name: "velours",
    img: images.slide4,
    goal: goalsNames.velours,
  },
];


const redirectUrls = {
  laine: "https://www.petit-bateau.fr/collection/s-equiper-pour-l-hiver/filtre/laine/?srule=rank1&selectedRefinementID=expand-link-PB_material",
  molleton: "https://www.petit-bateau.fr/collection/s-equiper-pour-l-hiver/filtre/molleton/?srule=rank1&selectedRefinementID=expand-link-PB_material",
  velours: "https://www.petit-bateau.fr/collection/s-equiper-pour-l-hiver/filtre/velours/?srule=rank1&selectedRefinementID=expand-link-PB_material",
  tubique: "https://www.petit-bateau.fr/collection/s-equiper-pour-l-hiver/filtre/tubique/?srule=rank1&selectedRefinementID=expand-link-PB_material"
}


const varientGoals = {
  [goalsNames.common]: 1,
  [goalsNames.laine]: 2,
  [goalsNames.molleton]: 3,
  [goalsNames.tubique]: 4,
  [goalsNames.velours]: 5
}


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


  visitLinkContainer.innerHTML = createSubLinkContent();

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

function createMainContainerElement() {
  // Create a new div element
  const div = document.createElement("div");

  // Set styles
  div.classList.add("kambloc-container");

  // Set the inner text
  div.appendChild(createTitleContainer());
  div.appendChild(createWrapperContainer());

  return div;
}

function findWhichProductElement(productsContainer, columns) {
  const totalProductLists = productsContainer.querySelectorAll(
    ".grid-tile.product-tile-container"
  );

  // for desktop
  return totalProductLists[columns === 4 ? 16 : 8];
}

function variation() {


  const {
    Core: { runWhenElementPresent, processRedirect },
    Utils,
    Goals: {processConversion}
  } = Kameleoon.API;


  function sendGoalsAndRedirect() {
    const linksWrapper = Utils.querySelectorAll('.kambloc-container > .kambloc-wrapper-container')[0];

    debugger
    Utils.addUniversalClickListener(linksWrapper, ({target}) => {

      debugger

      const clickOnSegement = hardCodedData.find((value) => target.closest(`#${value.id}`));

      if (clickOnSegement) {

        // common goal
        processConversion(varientGoals[goalsNames.common]);
        // seperate goal
        processConversion(varientGoals[clickOnSegement.goal]);
        // redirect to the specific segments
        processRedirect(redirectUrls[clickOnSegement.id])

      }
    });
  }


  function insertContainer(productsContainer) {
    const columns =
      getComputedStyle(productsContainer).gridTemplateColumns.split(" ").length;

    const productElement = findWhichProductElement(productsContainer, columns);

    productsContainer.insertBefore(createMainContainerElement(), productElement);


    sendGoalsAndRedirect(); 
  }

  runWhenElementPresent("#search-result-items", ([plpListsElement]) =>
    insertContainer(plpListsElement)
  );
}

setTimeout(variation, 6000);
