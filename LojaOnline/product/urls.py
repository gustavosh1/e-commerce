from django.urls import path
from .views import smartphones, brand, accessories, promotion, launch, cart, smartphones_marca

urlpatterns = [
    path("smartphones/", smartphones, name="smartphones"),
    path("smartphones/<str:marca>", smartphones_marca, name="smartphones_marca"),
    path("smartphones/<str:categoria>", smartphones_marca, name="smartphones_categoria"),
    path("smartphones/<str:acessorio>", smartphones_marca, name="smartphones_acessorio"),
    path("brand/", brand, name="brand"),
    path("accessories/", accessories, name="accessories"),
    path("promotion/", promotion, name="promotion"),
    path("launch/", launch, name="launch"),
    path("cart/", cart, name="cart")
]
