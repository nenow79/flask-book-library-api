const user = document.getElementById('user');
const login = document.getElementById('login');
const logout = document.getElementById('logout');
const url = '/api/v1/auth/me';

window.addEventListener('load', (event) => {
	console.log('page is fully loaded');
	let token = sessionStorage.getItem('token');
	if (token) {
		fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res.data.username);
				user.innerHTML = res.data.username;
				login.setAttribute('style', 'display:none;');
				logout.setAttribute('style', 'display:inline;');
			})
			.catch((error) => console.log('Błąd: ', error));
	} else {
		console.log('Unknown user');
		user.innerHTML = 'Unknown user';
		login.setAttribute('style', 'display:inline;');
		logout.setAttribute('style', 'display:none;');
	}
});

logout.addEventListener('click', (event) => {
	sessionStorage.clear();
	window.location.href = 'http://127.0.0.1:5000/book-library/';
});
