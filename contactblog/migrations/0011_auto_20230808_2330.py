# Generated by Django 3.2 on 2023-08-08 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactblog', '0010_auto_20230807_1940'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='comments',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='blog',
            name='question',
            field=models.TextField(blank=True, null=True),
        ),
    ]
