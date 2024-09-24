setTimeout(() => {
  function monitorBadgeProductFetch() {
    window.Kameleoon.API.Core.runWhenElementPresent(
      ".cart-notification.active",
      () => {
        console.log("[T05] Add2Cart Badge-Produkt");
      },
      null,
      true
    );
  }

  // log when item is added to cart
  window.Kameleoon.API.Core.runWhenElementPresent(
    `[data-product-id="${Kameleoon.API.Data.readLocalData(
      "clickedOnBadged"
    )}"]`,
    monitorBadgeProductFetch
  );

  // attach the event listener to the products container
  window.Kameleoon.API.Core.runWhenElementPresent(
    "#main-collection-product-grid",
    ([element]) => {

      // adding event listener to the container of product
      Kameleoon.API.Utils.addUniversalClickListener(element, function (event) {

        event.stopPropagation()

        // check offsetParent will be container of product
        if (
          event.target
            .closest(".grid__item")
            ?.querySelector(".badge.badge--bottom-left")
        ) {
          const productID = event.target
            .closest(".grid__item")
            .getAttribute("data-id");
          Kameleoon.API.Data.writeLocalData("clickedOnBadged", productID);
        }
      });
    }
  );
}, 6000);
