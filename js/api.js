const GET = async (URL) => {
	const response = await fetch(URL);
	return await response.json()
}

const POST = async (URL, body) => {
	return await fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	})
}

const DELETE = async (URL, id) => {
	return await fetch(`${URL}/${id}`, {
		method: "DELETE"
	})
}

export { GET, POST, DELETE }