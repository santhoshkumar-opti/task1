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
  let count = parseInt(localStorage.getItem("count")) || 0;
  let counterIntervalId;

  // attach the event listener to the products container
  window.Kameleoon.API.Core.runWhenElementPresent(
    "#main-collection-product-grid",
    ([element]) => {
      console.log('kamelooen console', element)
      // adding event listener to the container of product
      Kameleoon.API.Utils.addUniversalClickListener(element, function (event) {
        // check offsetParent will be container of product
        if (!event.target.offsetParent.classList.contains("card-wrapper")) {
          return;
        }
        const self = event.target.offsetParent;
        // only product that have batch we need to log here
        if (self.querySelectorAll(".badge.badge--bottom-left").length) {
          console.log("[T05] Klick Badge-Produkt");
          console.log("[T05] Verweildauer Badge POP", count);
        }

        // clear the counter interval when click on product to view
        counterIntervalId && clearInterval(counterIntervalId);
      });
    },
    null,
    true
  );

  // for running the
  window.Kameleoon.API.Core.runWhenElementPresent(
    ".card-wrapper",
    (elements) => {

      console.log('kamelooen badge', elements);

      const badgesElements = Kameleoon.API.Utils.querySelectorAll(".badge.badge--bottom-left");


      if (badgesElements.length) {

        counterIntervalId && clearInterval(counterIntervalId);

        // Start counting every second
        counterIntervalId = setInterval(() => {
          count++; // Increment the count
          localStorage.setItem("count", count); // Store the count in localStorage
        }, 1000);

      } else {
        counterIntervalId && clearInterval(counterIntervalId);
      }
    },
    null,
    true
  );
});
