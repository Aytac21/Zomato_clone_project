# Generated by Django 3.2 on 2023-07-28 20:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0008_rename_first_order_firstorder'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='FirstOrder',
            new_name='Variety',
        ),
    ]