from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email must be set")

        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email, password, **extra_fields)

class Cliente(AbstractBaseUser):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    data_nascimento = models.DateField()
    cpf = models.CharField(max_length=14)
    data_cadastro = models.DateField(auto_now=True)
    telefone = models.CharField(max_length=11)

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome', 'telefone', 'data_nascimento', 'cpf']

    objects = CustomUserManager()

    def get_full_name(self):
        return self.nome

    def get_short_name(self):
        return self.nome

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser


class Genero(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return self.nome

class Editora(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return self.nome

class Produtos(models.Model):
    nome = models.CharField(max_length=100)
    autor = models.CharField(max_length=50, blank=True)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=6, decimal_places=2)
    qtd_estoque = models.PositiveIntegerField()
    disponibilidade = models.BooleanField(default=True)
    foto = models.ImageField(upload_to="produtos")
    editora = models.ForeignKey(Editora, on_delete=models.CASCADE)
    categoria = models.ForeignKey(Genero, on_delete=models.CASCADE)


class Enderecos(models.Model):
    logradouro = models.CharField(max_length=255)
    numero = models.CharField(max_length=10)
    bairro = models.CharField(max_length=50)
    complemento = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    uf = models.CharField(max_length=2)
    cep = models.CharField(max_length=8)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

class Pedidos(models.Model):
    STATUS_PAGAMENTO_PENDENTE = 'P'
    STATUS_PAGAMENTO_APROVADO = 'A'
    STATUS_PAGAMENTO_NEGADO = 'N'

    LISTA_STATUS_PAGAMENTO = [
        (STATUS_PAGAMENTO_PENDENTE, 'Pendente'),
        (STATUS_PAGAMENTO_APROVADO, 'Aprovado'),
        (STATUS_PAGAMENTO_NEGADO, 'Negado'),
    ]

    STATUS_PEDIDO_CANCELADO = 'C'
    STATUS_PEDIDO_ENTREGUE = 'E'
    STATUS_PEDIDO_PREPARACAO = 'P'
    STATUS_PEDIDO_AGUARDANDO = 'A'
    STATUS_PEDIDO_TRANSPORTE = 'T'

    LISTA_STATUS_PEDIDO = [
        (STATUS_PEDIDO_CANCELADO, 'Cancelado'),
        (STATUS_PEDIDO_ENTREGUE, 'Entregue'),
        (STATUS_PEDIDO_PREPARACAO, 'Preparação'),
        (STATUS_PEDIDO_AGUARDANDO, 'Aguardando'),
        (STATUS_PEDIDO_TRANSPORTE, 'Transporte'),
    ]

    PAGAMENTO_PIX = 'P'
    PAGAMENTO_BOLETO = 'B'
    PAGAMENTO_CARTAO = 'C'
    LISTA_PAGAMENTO = [
        (PAGAMENTO_PIX, 'Pix'),
        (PAGAMENTO_BOLETO, 'Boleto'),
        (PAGAMENTO_CARTAO, 'Cartão'),
    ]

    metodo = models.CharField(max_length=1, choices=LISTA_PAGAMENTO, default=PAGAMENTO_PIX)
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    endereco = models.ForeignKey(Enderecos, on_delete=models.PROTECT)
    data_pedido = models.DateField(auto_now=True)
    preco_total = models.DecimalField(max_digits=10, decimal_places=2)
    status_pagamento = models.CharField(max_length=1, choices=LISTA_STATUS_PAGAMENTO, default=STATUS_PAGAMENTO_PENDENTE)
    status_pedido = models.CharField(max_length=1, choices=LISTA_STATUS_PEDIDO, default=STATUS_PEDIDO_AGUARDANDO)


class PedidosItens(models.Model):
    produto = models.ForeignKey(Produtos, on_delete=models.PROTECT)
    quantidade = models.PositiveIntegerField()
    preco = models.DecimalField(max_digits=6, decimal_places=2)
    preco_total = models.DecimalField(max_digits=10, decimal_places=2)
    pedido = models.ForeignKey(Pedidos, on_delete=models.CASCADE )
