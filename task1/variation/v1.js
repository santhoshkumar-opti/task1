setTimeout(() => {
  window.Kameleoon.API.Core.runWhenElementPresent(
    ".badge.badge--bottom-left",
    (elements) => {
      // add the identification class to body class
      document.body.classList.add("test-batch-badge-variations");
      // checking the new batch in both detuch and english language
      const regex = /\b(Neu|New)\b/i;

      // looping through each span element
      elements.forEach((spanEle) => {
        // checking text with regex
        if (regex.test(spanEle.innerText)) {
          // adding class to parent element, for moving to the bottom
          spanEle.parentElement.classList.add("bottom-badge");
        }
      });
    },
    null,
    true
  );
}, 6000);
