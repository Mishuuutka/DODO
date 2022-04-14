const Login = ({setAuth}) => {
    const loginHandle = async (event) => {
        event.preventDefault()

        const body = await JSON.stringify({
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value,
        });

        const response = await fetch('/api/user/login', {method: 'POST', body, headers: {'Content-Type': 'application/json'}});
        const responseJson = await response.json();
        const user = {username: responseJson.username, password: responseJson.password, status: responseJson.status}

        if (user.status) {
            setAuth(user)
        }

        localStorage.setItem('user', JSON.stringify(user));
    }

    return (
        <div className="login-block">
            <div className="block-form">
                <form>
                    <p className="login-text">Логин</p>
                    <input type="text" id="username" className="input-login"/>

                    <p className="login-text">Пароль</p>
                    <input type="text" id="password" className="input-login"/>

                    <button onClick={loginHandle} id="login-button">Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Login;