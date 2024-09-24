setTimeout(() => {
  // attach the event listener to the products container
  window.Kameleoon.API.Core.runWhenElementPresent(
    '[data-testid="plan-selection-radio-group"]',
    ([element]) => {
        // added base class in body element
        document.body.classList.add('kam-Reihenfolge-Tarifvergleichsseite');  
    }
  );
}, 6000);
