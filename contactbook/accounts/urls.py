from django.urls import path
from .api import LoginView, RegisterView, UserAPIView

urlpatterns = [
    path('api/accounts/login/', LoginView.as_view()),
    path('api/accounts/register/', RegisterView.as_view()),
    path('api/accounts/user/', UserAPIView.as_view()),
]
