# Generated by Django 4.2.4 on 2023-08-20 07:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0021_comment'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Comment',
        ),
    ]
