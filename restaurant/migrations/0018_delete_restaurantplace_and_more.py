# Generated by Django 4.2.4 on 2023-08-17 06:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0017_restaurantcategory'),
    ]

    operations = [
        migrations.DeleteModel(
            name='RestaurantPlace',
        ),
        migrations.DeleteModel(
            name='RestaurantPlaceDiningOut',
        ),
        migrations.DeleteModel(
            name='RestaurantPlaceNightLife',
        ),
    ]
