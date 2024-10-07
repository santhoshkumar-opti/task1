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
    const { Utils } = Kameleoon;

    const [bodyElement] = Utils.querySelectorAll("body");

    bodyElement.classList.add("kam-t53-handled");

    bodyElement.insertAdjacentHTML("afterbegin", template);
  }

  setTimeout(variation, 5000);
})();
