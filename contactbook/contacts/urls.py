from django.urls import path
from .api import ContactList

urlpatterns = [
    path('api/contacts/', ContactList.as_view())
]