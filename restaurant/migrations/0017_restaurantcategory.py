# Generated by Django 4.2.4 on 2023-08-16 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0016_auto_20230803_1717'),
    ]

    operations = [
        migrations.CreateModel(
            name='RestaurantCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('restaurant_image', models.ImageField(upload_to='nightlife/')),
                ('cuisine', models.CharField(blank=True, max_length=100, null=True)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=3)),
                ('cost', models.DecimalField(decimal_places=2, max_digits=6)),
                ('discount_price', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('minute', models.PositiveIntegerField()),
                ('meals', models.CharField(max_length=200)),
                ('context', models.CharField(max_length=600)),
                ('category', models.CharField(blank=True, choices=[('delivery', 'Delivery'), ('diningout', 'Dining Out'), ('nightlife', 'Night Life')], max_length=15, null=True)),
            ],
        ),
    ]