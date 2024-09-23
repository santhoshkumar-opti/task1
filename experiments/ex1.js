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
  // attach the event listener to the product
  window.Kameleoon.API.Core.runWhenElementPresent(
    "#main-collection-product-grid",
    ([element]) => {
      // adding event listener to the container of product
      Kameleoon.API.Utils.addUniversalClickListener(element, function (event) {
        // w
        if (event.target.offsetParent.classList.contains("card-wrapper")) {
          const self = event.target.offsetParent;
          // only product that have batch we need to log here
          if (self.querySelectorAll(".badge.badge--bottom-left").length) {
            console.log("[T05] Klick Badge-Produkt");
          }
        }
      });
    },
    null,
    true
  );
});
