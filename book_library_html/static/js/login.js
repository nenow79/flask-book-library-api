const url = '/api/v1/auth/login';

const userName = document.querySelector('#userName');
const password = document.querySelector('#password');

const btn_submit = document.querySelector('#btn1');

function handleSubmitClick() {
	console.log('Submit button clicked!');
	let obj = {
		username: userName.value,
		password: password.value,
	};
	postData((data = obj));
}

function postData(data) {
	console.log('Posting...');
	// console.log(data);
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((res) => {
			sessionStorage.setItem('token', res.token);
			console.log('token:');
			console.log(sessionStorage.getItem('token'));
			window.location.href = 'http://127.0.0.1:5000/book-library/';
		})
		.catch((error) => console.log('Błąd: ', error));
}

btn_submit.addEventListener('click', handleSubmitClick);
