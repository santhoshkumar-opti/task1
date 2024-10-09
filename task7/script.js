(function () {
	function variation() {
		const {
			Core: { runWhenElementPresent, processRedirect },
			Utils,
		} = Kameleoon.API;

		function changeContent([elContainer]) {
			console.log('asdfasdfasdf');
			console.log(elContainer);

			elContainer.querySelector('a').href =
				'https://www.espacemembre.macsf.fr/simulateur-tarif/habitation';
			elContainer.querySelector('h3').innerText =
				'Habitation';
			elContainer.querySelector('img').src =
				'https://storage.kameleoon.com/MACSF/HPBlocDevis/habitation-loisirs.svg';
			elContainer.querySelector('img').width = '40';
			elContainer.querySelector('img').height = '40';
		}

		runWhenElementPresent('#rub-41723', changeContent);
	}

	setTimeout(variation, 5000);
})();
