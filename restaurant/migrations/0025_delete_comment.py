# Generated by Django 4.2.4 on 2023-08-25 13:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0024_comment_user_cuisine_user_food_user_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Comment',
        ),
    ]
