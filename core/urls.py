from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from restaurant import views
from contactblog.views import *
from restaurant.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('djoser.urls')),
    path('api/', include('users.urls')),
    path('contacts/', contact_view, name='contact'),
    path("", TemplateView.as_view(template_name="base.html")),
    path("blogs/", BlogListView.as_view(), name="blog"),
    path("restaurants/", RestaurantListView.as_view(), name="restaurants"),
    re_path(r'^details/(?P<id>\d+)/$', get_detail, name='get_detail'),
    re_path(r'^article/(?P<id>\d+)/$', get_article, name='get_article'),
    path('api/', include('restaurant.urls')),
    re_path(r'^(?P<path>.*)/$', TemplateView.as_view(template_name='base.html')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
