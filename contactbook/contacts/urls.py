from django.urls import path
from .api import ContactList
from .api import ContactDetail

urlpatterns = [
    path('api/contacts/', ContactList.as_view()),
    path('api/contacts/<int:pk>/', ContactDetail.as_view())
]