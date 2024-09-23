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
    ([]) => {
      // when batch is present on product
      if (
        localStorage.getItem("clickedOnBadged") &&
        localStorage.getItem("clickedOnBadged") == 1
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
      // adding event listener to the container of product
      Kameleoon.API.Utils.addUniversalClickListener(element, function (event) {
        // check offsetParent will be container of product
        if (!event.target.offsetParent.classList.contains("card-wrapper")) {
          return;
        }
        const self = event.target.offsetParent;
        // only product that have batch we need to log here
        if (self.querySelectorAll(".badge.badge--bottom-left").length) {
          localStorage.setItem("clickedOnBadged", "1");
          return;
        }
        localStorage.setItem("clickedOnBadged", "0");
      });
    },
    null,
    true
  );
});
