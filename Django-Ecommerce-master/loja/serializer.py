from rest_framework import serializers
from .models import *
from rest_framework.permissions import IsAuthenticated

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ['id', 'nome']
class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = ['id', 'nome', 'descricao', 'preco', 'qtd_estoque', 'foto', 'categoria']
class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields=['user_id', 'nome', 'cpf', 'email', 'data_nascimento', 'telefone', 'password']
class EnderecosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enderecos
        fields = ['id', 'logradouro', 'numero', 'cliente']
class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = ['id', 'metodo', 'data_pedido', 'preco_total']
class PedidosItensSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidosItens
        fields = ['id', 'produto', 'quantidade', 'preceo_total', 'pedido']
