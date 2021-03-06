from django.db import models
from django.contrib.auth.models import User

choices = [
    ('личный', 'личный'),
    ('рабочий', 'рабочий'),
]


class Contact(models.Model):

    class Meta:
        ordering = ['-id']

    user = models.ForeignKey(
        User,
        related_name='contacts',
        on_delete=models.CASCADE
    )
    name = models.CharField(max_length=150)
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=50, null=True, blank=True)
    contact_type = models.CharField(
        max_length=100,
        choices=choices
    )
