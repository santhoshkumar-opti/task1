function createNewProductDesign(data) {
    return `
      <div class="kam-product">
          <div class="kam-img-wrapper">
              <img class="kam-img" src="${data.img}">
          </div>
          <div class="kam-product-info">
              <div class="kam-name">${data.title}</div>
              <div class="kam-color">${data.color}</div>
              <div class="kam-price">
                  <div class="kam-original">${data.price}</div>
              </div>
              <div class="kam-extra">
                  ${data.extra}
              </div>
          </div>
      </div>`;
  }


  function createPopupTemplate(productContents) {
    return `<div class="kam-t53-wrapper">
        <div class="kam-t53-container">
            <div class="kam-product-list">
                    ${productContents.join('')}
            </div>
            <div class="kam-headline">Gute Wahl!</div>
            <div class="kam-subline">
                Auf diese Artikel haben Sie bereits ein Auge geworfen - gute Wahl! Sichern Sie sich Ihre Favoriten vom Merkzettel, bevor sie vergriffen sind.
            </div>
            <div class="kam-wish-btn">
                Zum Merkzettel
                <i data-icon="arrow-right" class="icon-arrow-right base-icon d-flex"></i>
            </div>
            <div class="kam-add-cart-btn">
                Alles in den Warenkorb
                <i data-icon="navigation-items-cart" class="icon-navigation-items-cart" style="font-size: 1.125rem; line-height: 1; color: inherit;"></i>
            </div>
            <div class="kam-close-icon-wrapper">
                <div class="kam-close-icon">
                    <div class="kam-icon-extra"></div>
                    <svg class="kam-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/wcsstore/ErnstingsStorefrontAssetStore/svg/efa.svg#close"></use>
                    </svg>
                </div>
            </div>
            <div class="kam-wish-icon-wrapper">
                <div class="kam-wish-icon">
                    <div class="kam-icon-extra"></div>
                    <i style="line-height:1;color:#d71f85" data-icon="navigation-items-heart" class="kam-icon icon-navigation-items-heart base-icon d-flex justify-content-center align-items-center quick-navigation_component_iconSize__LDAfd"></i>
                </div>
            </div>
        </div>
    </div>`
  }

  
(function () {
  function variation() {
    const {
      Core: { runWhenElementPresent },
      Utils,
    } = Kameleoon.API;


    function listenEvents() {

  
        const [popupWrapper] = Utils.querySelectorAll(
          "body.kam-t53-handled > .kam-t53-wrapper"
        );
  
        Utils.addUniversalClickListener(popupWrapper, ({ target }) => {
          if (target.closest(".kam-close-icon-wrapper")) {
            console.log("close icon clicked");
            document.body.classList.remove("kam-t53-handled");
            popupWrapper.remove();
          } else if (target.closest(".kam-wish-btn")) {
            console.log("wish clicked");
          } else if (target.closest(".kam-add-cart-btn")) {
            console.log("cart clicked");
          } else if (target.classList.contains("kam-t53-wrapper")) {
            document.body.classList.remove("kam-t53-handled");
            popupWrapper.remove();
          }
        });
      }



    function getWishListProductData(productLists) {

        const lastProducts = productLists.slice(productLists.length - 2);

        const newProductDesignTEXTHTML = [];

        lastProducts.forEach((product) => {
            const collectedData = {
                img: product.querySelector('img').src,
                title: product.querySelector('[data-entity="product-name"]').innerText,
                color: product.querySelector('a.link-wrapper ~ span').innerText,
                price: product.querySelector('[data-entity="product-price-wrapper"] > span').innerText,
                extra: product.querySelector('a.link-wrapper ~ span ~ div ~ span').innerText
            }

            newProductDesignTEXTHTML.push(createNewProductDesign(collectedData));
        });
    
        document.body.insertAdjacentHTML('afterbegin', createPopupTemplate(newProductDesignTEXTHTML))


        listenEvents()
    }

    function listenWishListClick([wishListEl]) {
      document.body.classList.add("kam-t53-handled");

      Utils.addUniversalClickListener(wishListEl, () => {
        console.log("wishListEvent");

        runWhenElementPresent(
          "#offcanvas-outlet .offcanvas-body > div > div:first-child > div:first-child > div > div:nth-child(n)",
          getWishListProductData
        );
      });
    }

    runWhenElementPresent(
      '[data-entity="open-wishlist-offcanvas-btn"]',
      listenWishListClick
    );
  }

  setTimeout(variation, 5000);
})();
