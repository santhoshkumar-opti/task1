(function () {
  const template = `    <div class="kam-t53-wrapper">
        <div class="kam-t53-container">
            <div class="kam-product-list">
                <div class="kam-product">
                    <div class="kam-img-wrapper">
                        <img class="kam-img" src="https://images.ernstings-family.com/product_detail/8503410265.png">
                    </div>
                    <div class="kam-product-info">
                        <div class="kam-name">Mädchen Hoodie mit Pferde-Motiv</div>
                        <div class="kam-color">rosa</div>
                        <div class="kam-price">
                            <div class="kam-original">
                                19,99 €
                            </div>
                        </div>
                        <div class="kam-extra">
                            Größe: 146/152 | Anzahl: 1
                        </div>
                    </div>
                </div>

                <div class="kam-product">
                    <div class="kam-img-wrapper">
                        <img class="kam-img" src="https://images.ernstings-family.com/product_detail/8503410298.png">
                    </div>
                    <div class="kam-product-info">
                        <div class="kam-name">Mädchen Hoodie mit Pferde-Motiv</div>
                        <div class="kam-color">dunkelblau</div>
                        <div class="kam-price">
                            <div class="kam-original">
                                19,99 €
                            </div>
                        </div>
                        <div class="kam-extra">
                            Größe: 122/128 | Anzahl: 1
                        </div>
                    </div>
                </div>
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
    </div>`;

  function variation() {
    const {
      Core: { runWhenElementPresent },
      Utils,
    } = Kameleoon.API;

    function listenEvents(bodyElement) {
  
      const [popupWrapper] = Utils.querySelectorAll(
        "body.kam-t53-handled > .kam-t53-wrapper"
      );

      Utils.addUniversalClickListener(popupWrapper, ({ target }) => {
        if (target.closest(".kam-close-icon-wrapper")) {
          console.log("close icon clicked");
          bodyElement.classList.remove("kam-t53-handled");
          popupWrapper.remove();
        } else if (target.closest(".kam-wish-btn")) {
          console.log("wish clicked");
        } else if (target.closest(".kam-add-cart-btn")) {
          console.log("cart clicked");
        } else if (target.classList.contains("kam-t53-wrapper")) {
          bodyElement.classList.remove("kam-t53-handled");
          popupWrapper.remove();
        }
      });
    }

    function preparePopup([bodyElement]) {
      bodyElement.classList.add("kam-t53-handled");

      bodyElement.insertAdjacentHTML("afterbegin", template);

      listenEvents(bodyElement);
    }

    runWhenElementPresent("body", preparePopup);
  }

  setTimeout(variation, 5000);
})();
