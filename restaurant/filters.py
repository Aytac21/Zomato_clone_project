from .models import RestaurantCategory
import django_filters


class RestaurantFilter(django_filters.FilterSet):
    class Meta:
        model = RestaurantCategory
        fields = {
            'category': ['exact'],
        }
