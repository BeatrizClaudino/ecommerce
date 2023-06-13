from rest_framework import serializers
from .models import *
from rest_framework.permissions import IsAuthenticated

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ['id', 'nome']
class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = ['id', 'nome', 'descricao', 'preco', 'qtd_estoque', 'foto', 'categoria','autor', 'editora']
class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields=['id', 'nome', 'cpf', 'email', 'data_nascimento', 'telefone', 'password']
class EnderecosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enderecos
        fields = ['id', 'logradouro', 'numero', 'cliente']
        
class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = ['id', 'metodo', 'data_pedido', 'preco_total']
    
class EditoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Editora
        fields = ['id', 'nome']

class PedidosItensSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidosItens
        fields = ['id', 'produto', 'quantidade', 'preco_total', 'pedido']
