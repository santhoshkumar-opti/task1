const newSVGPath = `<svg class="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
        <circle class="circle" fill="#3ca837" cx="24" cy="24" r="22"/>
        <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/>
    </svg>`;

const selector = {
    mainContainer: '.offcanvas-cart-header.offcanvas-cart-header-add',
    svgContainer: '.offcanvas-cart-header-icon > span.icon.icon-checkmark',
    title: 'h6.offcanvas-cart-header-title',
    infoText: 'p.offcanvas-cart-update-status-info',
    productName: '.offcanvas-cart-product-name'
}

setTimeout(function () {
  function changeSVGElement(cartSuccessContainer) {
    const svgElement = cartSuccessContainer.querySelector(
      selector.svgContainer
    );
    svgElement.innerHTML = newSVGPath;
  }

  function changeAndInsertText(cartSuccessContainer) {
    const statuText = cartSuccessContainer.querySelector(
      selector.infoText
    );
    const titleEl = cartSuccessContainer.querySelector(
     selector.title
    );
    const productNameEl = cartSuccessContainer.querySelector(selector.productName);
    // only create if element not present
    if (!statuText) {
      const pEl = document.createElement("p");
      pEl.className = "offcanvas-cart-update-status-info";
      pEl.innerText = "Gute Wahl!";

      //insert before the title element
      cartSuccessContainer.insertBefore(pEl, titleEl);
    }

    titleEl.replaceChildren(document.createTextNode('Du hast '), productNameEl, document.createTextNode(' in deinen Warenkorb gelegt.'))
  }

  function changeContent(cartSuccessContainer) {
    // add class to the body for identification
    document.body.classList.add('kamt1078');
    // modifying content starts here
    changeSVGElement(cartSuccessContainer);
    changeAndInsertText(cartSuccessContainer);
  }

  Kameleoon.API.Core.runWhenElementPresent(
    selector.mainContainer,
    ([cartSuccessElement]) => changeContent(cartSuccessElement),
    null,
    true
  );
}, 2000);
