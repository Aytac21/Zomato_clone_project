# Generated by Django 3.2 on 2023-07-28 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0003_firstorder'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=300)),
            ],
        ),
        migrations.DeleteModel(
            name='FirstOrder',
        ),
    ]
