function getCSRFToken() {
    let name = "csrftoken";
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                cookieValue = decodeURIComponent(cookie.slice(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function loginUsuario() {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const mensagemErro = document.querySelector("#mensagemErro");

    mensagemErro.style.display = "none";

    fetch("/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCSRFToken(),
        },
        body: JSON.stringify({
            email: email,
            senha: senha,
        }),
    })
    .then((res) => res.json())  // Aguarda a resposta JSON
    .then((data) => {
        if (data.mensagem) {
            // Se o login foi bem-sucedido, redireciona para o menu
            window.location.href = "/menu/";
        } else {
            // Se houve erro
            mensagemErro.innerText = data.erro || "Erro ao fazer login.";
            mensagemErro.style.display = "block";
        }
    })
    .catch(() => {
        mensagemErro.innerText = "Erro de conexão com o servidor.";
        mensagemErro.style.display = "block";
    });
}


let icone = document.querySelector('.fa-eye-slash');

icone.addEventListener('click', ()=> {
    let input = document.querySelector('#senha');
    if (input.type == 'password') {
        input.type = 'text';
        icone.classList.remove('fa-eye-slash');
        icone.classList.add('fa-eye');
    }
    else {
        input.type = 'password';
        icone.classList.remove('fa-eye');
        icone.classList.add('fa-eye-slash');
    }
})

email.addEventListener('keyup', () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regexEmail.test(email.value); // Verifica se o e-mail é válido
    
    if (isValid) {
        labelEmail.setAttribute('style', 'color: black');
        labelEmail.innerHTML = 'Email';
        email.setAttribute('style', 'border-color: black');
        validarEmail = true;
    } else {
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = 'Email *Insira um Email Valido';
        email.setAttribute('style', 'border-color: red');
    }
});