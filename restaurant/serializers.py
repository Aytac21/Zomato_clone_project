from rest_framework import serializers
from .models import Cuisine, Food, Variety, ZomatoAppForm, RestaurantCategory, Comment


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'


class FirstOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variety
        fields = ('id', 'name', 'image')


class ZomatoAppFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ZomatoAppForm
        fields = '__all__'


class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = '__all__'


class RestaurantSerializers(serializers.ModelSerializer):
    class Meta:
        model = RestaurantCategory
        fields = '__all__'



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'comment', 'created_at']
