import { GET, POST } from './api.js'
import { q, createCard, uuidv4 } from './utils.js'

const ul = q(".cards__list")
const form = document.forms.pokemon;
const elements = form.elements


const url = "http://localhost:3000/pokemon"


form.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = {
		id: uuidv4(),
		name: elements.name.value === "" ? "pippo" : elements.name.value,
		type: elements.type.value
	}

	POST(url, data)
		.then(() => location.reload())
})


window.onload = GET(url)
	.then(res => res.map(pkm => createCard(url, ul, pkm?.name, pkm?.type, pkm?.id)))
