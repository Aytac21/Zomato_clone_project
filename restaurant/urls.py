# from .views import CommentViewSet
# from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import FoodListAPIView, FirstOrderListCreateView, FirstOrderDeleteView, your_view_name, CuisineViewSet, CommentListAPIView, add_comment
from . import views

# router = DefaultRouter()
# router.register(r'comments', CommentViewSet)

urlpatterns = [

    path('foods/', FoodListAPIView.as_view(), name='food-list'),
    path('firstorder/', FirstOrderListCreateView.as_view(),
         name='first-order-list-create'),
    path('firstorder/<int:pk>/', FirstOrderDeleteView.as_view(),
         name='first-order-delete'),
    path('endpoint/', your_view_name, name='your-view-name'),
    path('cuisine/', CuisineViewSet.as_view(), name='cuisine-view-set'),
    path('search/', views.search, name='search'),
    path('comments/', CommentListAPIView.as_view(), name='comment-list'),
    path('add_comment/', add_comment, name="add_comment"),

]
