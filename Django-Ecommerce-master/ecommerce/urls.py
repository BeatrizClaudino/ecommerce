
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path(r'auth/', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.jwt')),
    path('admin/', admin.site.urls),
    path('app/', include('loja.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
