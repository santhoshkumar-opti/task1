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

		function changeTextContent([bubbleText]) {
			const aLink = bubbleText.querySelector('a#infoDonneePerso').outerHTML;
			
			const newContent = `✏️ &nbsp; Détaillez votre demande et recevez
			<strong>️&nbspusqu’à 3 devis des top professionnelss</strong>
			 &nbsp;
			sélectionnés par PagesJaunes  &nbsp; 💌 ${aLink}
			`
			
			bubbleText.innerHTML = newContent
		}

		runWhenElementPresent(
			'.head-main-content .container-pq > .bulle',
			hideBubble
		);
		runWhenElementPresent(
			'.head-main-content .container-pq > .dialogue-globale  .pq-carousel > div:nth-child(3)',
			changeTextContent
		);
	}

	setTimeout(variation, 5000);
})();
