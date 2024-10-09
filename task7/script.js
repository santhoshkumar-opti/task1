(function () {
	function variation() {
		const {
			Core: { runWhenElementPresent, processRedirect },
			Utils,
		} = Kameleoon.API;

		function changeGridContent([elContainer]) {
			elContainer.querySelector('a').href =
				'https://www.espacemembre.macsf.fr/simulateur-tarif/habitation';
			elContainer.querySelector('h3').innerText = 'Habitation';
			elContainer.querySelector('img').src =
				'https://storage.kameleoon.com/MACSF/HPBlocDevis/habitation-loisirs.svg';
			elContainer.querySelector('img').width = '40';
			elContainer.querySelector('img').height = '40';
		}

		function changeAccordianElement([aElement]) {

			aElement.href = "https://www.espacemembre.macsf.fr/simulateur-tarif/auto";
			aElement.replaceChildren('Assurance auto', aElement.children[0])
			
		}

		runWhenElementPresent('#rub-41723', changeGridContent);
		runWhenElementPresent(
			'#block-contrat #flush-collapseOne .col:first-child .block-contrat-liens:first-child a:nth-child(2)',
			changeAccordianElement
		);
	}

	setTimeout(variation, 5000);
})();
