from django.shortcuts import render

def smartphones(request):
    return render(request, "smartphones/smartphones.html")

def brand(request):
    return render(request, "brands/brand.html")

def accessories(request):
    return render(request, "accessories/accessories.html")

def promotion(request):
    return render(request, "promotion/promotion.html")

def launch(request):
    return render(request, "launch/launch.html")

def cart(request):
    return render(request, "cart/cart.html")
