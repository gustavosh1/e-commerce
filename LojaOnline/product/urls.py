from django.urls import path
from .views import smartphones, brand, accessories, promotion, launch, cart

urlpatterns = [
    path("smartphones/", smartphones, name="smartphones"),
    path("brand/", brand, name="brand"),
    path("accessories/", accessories, name="accessories"),
    path("promotion/", promotion, name="promotion"),
    path("launch/", launch, name="launch"),
    path("cart/", cart, name="cart")
]
