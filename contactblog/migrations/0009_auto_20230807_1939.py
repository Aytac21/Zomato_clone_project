# Generated by Django 3.2 on 2023-08-07 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactblog', '0008_alter_blog_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='description',
            field=models.TextField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='blog',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]