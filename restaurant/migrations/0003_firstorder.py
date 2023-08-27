# Generated by Django 3.2 on 2023-07-28 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_food'),
    ]

    operations = [
        migrations.CreateModel(
            name='FirstOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='first_order_images/')),
            ],
        ),
    ]
