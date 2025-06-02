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

function validarCadastro() {
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;
  const confirmarSenha = document.querySelector("#confirmar_senha").value;
  const mensagemErro = document.querySelector("#mensagemErro");

  mensagemErro.style.display = "none";

  if (senha !== confirmarSenha) {
    mensagemErro.innerText = "As senhas não coincidem.";
    mensagemErro.style.display = "block";
    return;
  }

  fetch("register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken(),
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      senha: senha,
    }),
  })
    .then((res) => {
      return res.json()
    .then(data => ({ status: res.status, body: data }));
    })
    .then(({ status, body }) => {
      if (status === 200) {
        window.location.href = "/";
      } else {
        mensagemErro.innerText = body.erro || "Erro ao registrar.";
        mensagemErro.style.display = "block";
      }
    })
    .catch(() => {
      mensagemErro.innerText = "Erro de conexão com o servidor.";
      mensagemErro.style.display = "block";
    });
}


let iconeSenha = document.querySelector("#ver_senha");
    iconeSenha.addEventListener('click', ()=> {
        let input_senha = document.querySelector("#senha");

        if (input_senha.type === 'password') {
            input_senha.type = 'text';
            iconeSenha.classList.remove('fa-eye-slash');
            iconeSenha.classList.add('fa-eye');
        }
        else {
            input_senha.type = 'password';
            iconeSenha.classList.remove('fa-eye');
            iconeSenha.classList.add('fa-eye-slash');
        }
    });
   
    let icone_confirmeSenha = document.querySelector("#ver_confirme_senha");
    icone_confirmeSenha.addEventListener('click', ()=> {
    let input_confirmeSenha = document.querySelector("#confirmar_senha");
        
        if (input_confirmeSenha.type === 'password') {
            input_confirmeSenha.type = 'text';
            icone_confirmeSenha.classList.remove('fa-eye-slash');
            icone_confirmeSenha.classList.add('fa-eye');
        }
        else {
            input_confirmeSenha.type = 'password';
            icone_confirmeSenha.classList.remove('fa-eye');
            icone_confirmeSenha.classList.add('fa-eye-slash');
        }
    });

    //Entrada do nome
    let nome = document.querySelector("#nome");
    let labelNome = document.querySelector("#labelNome");
    let validarNome = false;

    //Entrada do Email
    let email = document.querySelector("#email");
    let labelEmail = document.querySelector("#labelEmail");
    let validarEmail = false;
    
    //Entrada do Senha
    let senha = document.querySelector("#senha");
    let labelSenha = document.querySelector("#labelSenha");
    let validarSenha = false;

    //Entrada do Confirmar Senha
    let confirmar_senha = document.querySelector("#confirmar_senha");
    let labelConfirmarSenha = document.querySelector("#labelConfirmarSenha");
    let validarConfirmarSenha = false;

    //mensagem de erro
    let mensagemErro = document.querySelector("#mensagemErro");

    nome.addEventListener('keyup', () => {
        if(nome.value.length <= 2){
            labelNome.setAttribute('style', 'color: red');
            labelNome.innerHTML = 'Nome *Insira no minimo 3 carecteres';
            nome.setAttribute('style', 'border-color: red');
            validarNome = false;
        } else {
            labelNome.setAttribute('style', 'color: green');
            labelNome.innerHTML = 'Nome';
            nome.setAttribute('style', 'border-color: green');
            validarNome = true;
        }
    });

    email.addEventListener('keyup', () => {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = regexEmail.test(email.value); // Verifica se o e-mail é válido
      
      if (isValid) {
          labelEmail.setAttribute('style', 'color: green');
          labelEmail.innerHTML = 'Email';
          email.setAttribute('style', 'border-color: green');
          validarEmail = true;
      } else {
          labelEmail.setAttribute('style', 'color: red');
          labelEmail.innerHTML = 'Email *Insira um Email Valido';
          email.setAttribute('style', 'border-color: red');
          validarEmail = false;
      }
  });

    senha.addEventListener('keyup', () => {
      if(senha.value.length <= 5){
          labelSenha.setAttribute('style', 'color: red');
          labelSenha.innerHTML = 'Senha *Insira no minimo 6 carecteres';
          senha.setAttribute('style', 'border-color: red');
          validarSenha = false;
      } else {
          labelSenha.setAttribute('style', 'color: green');
          labelSenha.innerHTML = 'Senha';
          senha.setAttribute('style', 'border-color: green');
          validarSenha = true;
      }
  });

  confirmar_senha.addEventListener('keyup', () => {
      if(senha.value != confirmar_senha.value){
          labelConfirmarSenha.setAttribute('style', 'color: red');
          labelConfirmarSenha.innerHTML = 'Confirmar Senhas *As senhas são diferentes';
          confirmar_senha.setAttribute('style', 'border-color: red');
          validarConfirmarSenha = false;
      } else {
          labelConfirmarSenha.setAttribute('style', 'color: green');
          labelConfirmarSenha.innerHTML = 'Confirmar Senha';
          confirmar_senha.setAttribute('style', 'border-color: green');
          validarConfirmarSenha = true;
      }
  });