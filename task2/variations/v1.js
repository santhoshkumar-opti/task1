setTimeout(() => {
  // attach the event listener to the products container
  window.Kameleoon.API.Core.runWhenElementPresent(
    '[data-testid="plan-selection-radio-group"]',
    () => {
      console.log("kameleoon added");
      document.body.classList.add("kam-Reihenfolge-Tarifvergleichsseite");
    }
  );
}, 2000);
