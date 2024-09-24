
setTimeout(() => {
  let counterIntervalId;

  // attach the event listener to the products container
  window.Kameleoon.API.Core.runWhenElementPresent(
    "#main-collection-product-grid",
    ([element]) => {
      // adding event listener to the container of product
      Kameleoon.API.Utils.addUniversalClickListener(element, function (event) {
        if (
          event.target
            .closest(".grid__item")
            ?.querySelector(".badge.badge--bottom-left")
        ) {
          console.log("[T05] Klick Badge-Produkt");
        }
        console.log("[T05] Verweildauer Badge POP",  Kameleoon.API.Data.readLocalData("countUpForProductsHaveBadge"));
        // clear the counter interval when click on product to view
        counterIntervalId && Kameleoon.API.Utils.clearInterval(counterIntervalId);
      });
    },
    null,
    true
  );

  // for running the
  window.Kameleoon.API.Core.runWhenElementPresent(
    ".badge.badge--bottom-left",
    (elements) => {
      if (elements.length) {
        counterIntervalId = Kameleoon.API.Utils.setInterval(() => {
          const count =
            Kameleoon.API.Data.readLocalData("countUpForProductsHaveBadge") ||
            0;
          Kameleoon.API.Data.writeLocalData(
            "countUpForProductsHaveBadge",
            count + 1
          );
        }, 1000);
      }
    },
    null,
    true
  );
}, 6000);
