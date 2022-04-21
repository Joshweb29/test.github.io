var user = document.getElementById('username');

var pass = document.getElementById('password');

function LogInButton() {
				console.log(user.value);
				console.log(pass.value);
				
				if(user.value=='admin' || pass.value=='123') {
								/*window.open('./hshs/sorry.html');*/
								location.href = "./hshs/sorry.html"
				}else {
							alert('Wrong username or password please check!!!');
				}
}
