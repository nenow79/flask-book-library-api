const url = '/api/v1/auth/register';
const btn_submit = document.querySelector('#btn1');
const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const email = document.querySelector('#email');

function handleSubmitClick() {
	console.log('Submit button clicked!');
	let obj = {
		username: userName.value,
		password: password.value,
		email: email.value,
	};
	postData((data = obj));
}

function postData(data) {
	console.log('Posting...');
	console.log(data);
}

btn_submit.addEventListener('click', handleSubmitClick);
