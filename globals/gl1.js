function waitUntil(predicate, time = 10000) {
  return new Promise((resolve) => {
    let int = setInterval(() => {
      if (predicate()) {
        resolve(predicate());
        clearInterval(int);
        int = null;
      }
    }, 15);
    setTimeout(() => {
      if (int !== null) {
        clearInterval(int);
        console.log("condition false");
      }
    }, time);
  });
}

waitUntil(() => window.Kameleoon).then(() => {
  // log when item is added to cart
  window.Kameleoon.API.Core.runWhenElementPresent(
    ".cart-notification.active",
    () => {
      console.log('kameleoon logged')
      const elementProductID =  Kameleoon.API.Utils.querySelectorAll("photo-grid")[0].getAttribute('data-product-id');
      console.log('kameleoon element product', elementProductID);
      const localStoredProductID = Kameleoon.API.Data.readLocalData("clickedOnBadged");
      console.log('kameleoon local storage product', localStoredProductID);

      // when batch is present on product
      if (
        elementProductID == localStoredProductID
      ) {
        console.log("[T05] Add2Cart Badge-Produkt");
      }
    },
    null,
    true
  );

  // attach the event listener to the products container
  window.Kameleoon.API.Core.runWhenElementPresent(
    "#main-collection-product-grid",
    ([element]) => {
      console.log('kameleoon logged')

      // adding event listener to the container of product
      Kameleoon.API.Utils.addUniversalClickListener(element, function (event) {
        // check offsetParent will be container of product
        if (!event.target.offsetParent.classList.contains("card-wrapper")) {
          return;
        }
        const self = event.target.offsetParent;

        let productID = '';
        // only product that have batch we need to log here
        if (self.querySelectorAll(".badge.badge--bottom-left").length) {
          productID = self.parentElement.getAttribute('data-id')

        }
        console.log('kameleoon product', productID);

        const idTimeout = setTimeout(() => {
          Kameleoon.API.Data.writeLocalData("clickedOnBadged", productID);
          console.log('kameleoon successfully stored product', productID);

          idTimeout && clearTimeout(idTimeout);
        }, 100)

      });
    },
    null,
    true
  );
});