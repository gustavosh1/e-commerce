from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

def welcome(request):
    return render(request, "login_register/login_register.html")

def login(self, request):
    dados = request.data
    email = dados.get('email')
    senha = dados.get('senha')
    
    if not email or not senha:
        return JsonResponse({'erro': 'Email e senha são obrigatórios'}, status=400)
    
    user = authenticate(username=email, password=senha)
    
    if user is not None:
        print("User: ", user)
        login(request, user)
        return JsonResponse({'mensagem': 'Login realizado com sucesso'})
    else:
        return JsonResponse({'erro': 'Credenciais inválidas'}, status=401)

def register(self, request):
    dados = request.data
    nome = dados.get("nome")
    email = dados.get("email")
    senha = dados.get("senha")
    
    try:
        validate_email(email)
    except ValidationError:
        return JsonResponse({'erro': 'Email inválido'}, status=400)
    
    if not nome or email or senha:
        return JsonResponse({'erro': 'Todos os campos são obrigatórios'}, status=400)
    
    
    