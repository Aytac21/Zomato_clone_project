from django.db import models
from django.contrib.auth.models import User


class Food(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()


class Variety(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=300)

    def __str__(self):
        return self.name


class ZomatoAppForm(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    contactOption = models.CharField(max_length=10)
    email = models.EmailField(blank=True, null=True)
    selectedCountryCode = models.CharField(
        max_length=10, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.contactOption


class Cuisine(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    option = models.CharField(max_length=100)

    def __str__(self):
        return self.option


class RestaurantCategory(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    CATEGORY_CHOICES = [
        ('delivery', 'Delivery'),
        ('diningout', 'Dining Out'),
        ('nightlife', 'Night Life'),
    ]
    name = models.CharField(max_length=100)
    restaurant_image = models.ImageField(upload_to='nightlife/')
    cuisine = models.CharField(max_length=100, blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    cost = models.DecimalField(max_digits=6, decimal_places=2)
    discount_price = models.DecimalField(
        max_digits=6, decimal_places=2, null=True, blank=True)
    minute = models.PositiveIntegerField()
    meals = models.CharField(max_length=200)
    context = models.CharField(max_length=50000)
    category = models.CharField(
        max_length=15, choices=CATEGORY_CHOICES, blank=True, null=True)

    def __str__(self):
        return self.name


class Comment(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} at {self.created_at}"
