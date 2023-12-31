# Generated by Django 3.2 on 2023-07-29 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0009_rename_firstorder_variety'),
    ]

    operations = [
        migrations.CreateModel(
            name='RestaurantPlace',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('restaurant_image', models.ImageField(upload_to='restaurant_images/')),
                ('cuisine', models.CharField(max_length=100)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=3)),
                ('cost', models.DecimalField(decimal_places=2, max_digits=6)),
                ('discount_price', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('minute', models.PositiveIntegerField()),
                ('meals', models.CharField(max_length=200)),
                ('context', models.CharField(max_length=600)),
            ],
        ),
        migrations.DeleteModel(
            name='Restaurant',
        ),
    ]
