# Generated by Django 3.0.8 on 2020-07-17 08:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0003_auto_20200717_1150'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'ordering': ['-id']},
        ),
    ]
