 function showLogin() {
            document.getElementById('loginForm').classList.remove('hidden');
            document.getElementById('signupForm').classList.add('hidden');
        }

function showSignup() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
}

function showForgotPassword() {
    alert('Funcionalidade de recuperação de senha ainda não implementada.\nEm um sistema real, isso redirecionaria para a página de recuperação.');
}

function handleSignup(event) {  
    setTimeout(() => {
    const successMsg = document.getElementById('signupSuccessMessage');
    successMsg.innerHTML = `✅ Cadastro realizado com sucesso!<br>Bem-vindo, ${name}!`;
    successMsg.style.display = 'block';
                
    setTimeout(() => {
        successMsg.style.display = 'none';
        showLogin();
        }, 2000);
    }, 500);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const activeForm = document.querySelector('.form:not(.hidden)');
        const submitBtn = activeForm.querySelector('.btn');
        submitBtn.click();
    }
});

async function loginUsuario() {

    const dados = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    }
    
    const response = await fetch("login/", {
        method: "POST",
        headers: {"Content-Type": "application/json",
            //"X-CSRFToken": getCSRFToken()
        },
        body: JSON.stringify(dados)
    })

    const data = await response.json()

    if(data){
        window.location.href = menu
    }
}

async function validarCadastro() {
    
    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        confirmarSenha: document.getElementById("confirmar_senha").value,
    }

    if(dados.senha != dados.confirmarSenha){

    }

    const response = await fetch("register/", {
        method: "POST",
        headers: {"Content-Type": "application/json", 
            //X-CSRFToken
        },
        body: JSON.stringify(dados)
    })

    const data = await response.json()
   
    if(data){
        showLogin()
    }
}