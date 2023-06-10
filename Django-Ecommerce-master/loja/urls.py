from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.SimpleRouter()
router.register('usuario', views.ListarClientes)
router.register('categorias', views.CategoriaView)

urlpatterns = router.urls