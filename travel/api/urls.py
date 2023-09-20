from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('destinations/', views.getDestinations, name="destinations"), 
    path('destinations/<str:pk>/', views.getDestination, name="destination"),
    path('services/', views.getServices, name="services"), 
    path('service_details/', views.getServicesDetails, name="service_details"),
]

