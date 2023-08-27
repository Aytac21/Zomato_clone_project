from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404, redirect
from django_filters.rest_framework import DjangoFilterBackend
from .models import Variety, Food, RestaurantCategory
from django.db.models import Q
from .serializers import CuisineSerializer
from .models import Cuisine
from .serializers import ZomatoAppFormSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializers import FirstOrderSerializer
from .serializers import FoodSerializer
from django.http import JsonResponse
from rest_framework import generics
from .serializers import RestaurantSerializers
from .filters import RestaurantFilter
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated


class FoodListAPIView(generics.ListAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
    permission_classes = []


class FirstOrderListCreateView(generics.ListCreateAPIView):
    queryset = Variety.objects.all()
    serializer_class = FirstOrderSerializer
    permission_classes = []


class FirstOrderDeleteView(generics.DestroyAPIView):
    queryset = Variety.objects.all()
    serializer_class = FirstOrderSerializer
    permission_classes = []


@api_view(['POST'])
def your_view_name(request):
    if request.method == 'POST':
        print(request.data)
        serializer = ZomatoAppFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    permission_classes = []


class CuisineViewSet(generics.ListCreateAPIView):
    queryset = Cuisine.objects.all()
    serializer_class = CuisineSerializer
    permission_classes = []


def search(request):
    query = request.GET.get('q', '')
    results = []

    if query:
        model_results = RestaurantCategory.objects.filter(
            Q(name__icontains=query))

        for res in model_results:
            results.append({'id': res.id, 'name': res.name,
                           'restaurant_image': res.restaurant_image.url})

    return JsonResponse(results, safe=False)


# def delete_restaurant_place(request, pk):
#     restaurant_place = get_object_or_404(RestaurantPlace, pk=pk)

#     restaurant_id = restaurant_place.id

#     restaurant_place.id = None
#     restaurant_place.save()
#     restaurant_place.delete()
#     return redirect('success_url')


class RestaurantListView(generics.ListAPIView):
    queryset = RestaurantCategory.objects.all()
    serializer_class = RestaurantSerializers
    filter_backends = [DjangoFilterBackend]
    filterset_class = RestaurantFilter
    permission_classes = []


@api_view(["GET"])
@permission_classes([])
def get_detail(request, id):
    try:
        restaurant = RestaurantCategory.objects.get(id=id)
        serializer = RestaurantSerializers(restaurant)
        return Response(serializer.data)
    except RestaurantCategory.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@api_view(["POST"])
@permission_classes([])
def add_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        user = None  # Kullanıcıya bağlı olmadan yorum eklemek istediğinizi varsayalım
        serializer.save(user=user)  # Kullanıcıyı None olarak kaydediyoruz
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)



class CommentListAPIView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []
