from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.SimpleRouter()
router.register('usuario', views.ListarClientes)
router.register('generos', views.GeneroView)
router.register('editoras', views.EditoraView)
router.register('produtos', views.produtosView)
urlpatterns = router.urls