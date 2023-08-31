// const base_url = 'http://127.0.0.1:5000';
const base_url = '';
const url = '/api/v1/authors';

function build_table(data) {
	console.log('Building table...');
	let table = document.getElementById('myTable');
	for (let i = 0; i < data.length; i++) {
		let row = `<tr>
        <td>${data[i].first_name}</td>
        <td>${data[i].last_name}</td>
        <td>${data[i].birth_date}</td>
        </tr>`;
		table.innerHTML += row;
	}
}

window.addEventListener('load', (event) => {
	console.log('page is fully loaded');
	fetch(base_url + url)
		.then((res) => res.json())
		.then((res) => {
			console.log(res['data']);
			build_table(res['data']);
		})
		.catch((error) => console.log('Błąd: ', error));
});
