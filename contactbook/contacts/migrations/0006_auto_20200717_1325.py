# Generated by Django 3.0.8 on 2020-07-17 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0005_auto_20200717_1318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='contact_type',
            field=models.CharField(choices=[('личный', 'личный'), ('рабочий', 'рабочий')], max_length=100),
        ),
    ]
