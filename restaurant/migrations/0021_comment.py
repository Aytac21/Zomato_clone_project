# Generated by Django 4.2.4 on 2023-08-20 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0020_alter_restaurantcategory_context'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
