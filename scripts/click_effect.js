let last_element = null;

function add_efect_to_topic(topico) {
	console.log(topico);

	if (topico) {
		last_element?.classList.remove('topic_selected');

		const element = document.getElementById(topico);
		console.log(element);

		element?.classList.add('topic_selected');
		last_element = element;
	}
}

window.addEventListener("load", () => {
	const topic = document.location.href.split('#');
	console.log(topic);

	if (topic.length > 1) {
		add_efect_to_topic(topic[1]);
	}

	document.querySelectorAll("a").forEach(a => {
		a.addEventListener("click", (ev) => {
			const topico = a.getAttribute('href').replace('#', '');
			add_efect_to_topic(topico);
		});
	});
})
