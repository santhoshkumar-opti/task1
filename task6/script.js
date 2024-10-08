(function () {
	function variation() {
		const {
			Core: { runWhenElementPresent, processRedirect },
			Utils,
		} = Kameleoon.API;

		function hideBubble(bubblesEl) {
			// console.log('adfadfasdf');
			document.body.classList.add('kam-pj');

			bubblesEl.forEach((bubble) => {
				bubble.classList.add('kam-hide-bubble');
			});
		}

		function changeTextContent(bubbleText) {
			const aLink = bubbleText.querySelector('a#infoDonneePerso').outerHTML;

			const newContent = `✏️ &nbsp; Détaillez votre demande et recevez
			<strong>️&nbsp; jusqu’à 3 devis des top professionnelss</strong>
			 &nbsp;
			sélectionnés par PagesJaunes  &nbsp; 💌 ${aLink}
			`;

			bubbleText.innerHTML = newContent;
		}

		function modifyContent([bubble1, sliderContainer, bubble2]) {
      // if bubble chat is not there need to hide the inside the box
			if (
				!bubble1
					.closest('.container-pq')
					.querySelectorAll('.container-pq > .bulle').length
			) {
				document.body.classList.add('kam-pj');
				bubble1.classList.add('kam-hide-bubble');
				sliderContainer.classList.add('kam-hide-bubble');
			}
			changeTextContent(bubble2);
		}

		runWhenElementPresent(
			'.head-main-content .container-pq > .bulle',
			hideBubble
		);
		runWhenElementPresent(
			'.head-main-content .container-pq > .dialogue-globale  .pq-carousel > div',
			modifyContent
		);
	}

	setTimeout(variation, 5000);
})();