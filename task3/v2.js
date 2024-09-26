const newSVGPath = `<svg class="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
        <circle class="circle" fill="#3ca837" cx="24" cy="24" r="22"/>
        <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/>
    </svg>`;

setTimeout(function () {
  function changeSVGElement(cartSuccessContainer) {
    const svgElement = cartSuccessContainer.querySelector(
      ".icon.icon-checkmark.icon-hidden"
    );
    svgElement.innerHTML = newSVGPath;
  }

  function changeAndInsertText(cartSuccessContainer) {
    const statuText = cartSuccessContainer.querySelector(
      "p.cart-update-status-info"
    );
    const titleEl = cartSuccessContainer.querySelector(
      "h6.cart-update-status-title"
    );
    const productNameEl = cartSuccessContainer.querySelector('.cart-update-status-title>span.cart-update-status-title-product-name.is--cart-update-product-name');
    // only create if element not present
    if (!statuText) {
      const pEl = document.createElement("p");
      pEl.className = "cart-update-status-info";
      pEl.innerText = "Gute Wahl!";

      //insert before the title element
      cartSuccessContainer.insertBefore(pEl, titleEl);
    }

    titleEl.replaceChildren(document.createTextNode('Du hast '), productNameEl, document.createTextNode(' in deinen Warenkorb gelegt.'))
  }

  function changeContent(cartSuccessContainer) {
    changeSVGElement(cartSuccessContainer);
    changeAndInsertText(cartSuccessContainer);
  }

  Kameleoon.API.Core.runWhenElementPresent(
    ".cart-update-status.is--cart-update-status-success:not(.hidden)",
    ([cartSuccessElement]) => changeContent(cartSuccessElement),
    null,
    true
  );
}, 2000);
