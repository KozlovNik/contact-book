from django.urls import path
from .api import LoginView, RegisterView

urlpatterns = [
    path('api/accounts/login/', LoginView.as_view()),
    path('api/accounts/register/', RegisterView.as_view()),
]
