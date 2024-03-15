from rest_framework import viewsets, permissions
from rest_framework.response import Response
from pessoa.services import PessoaService
from pessoa.serializer import PessoaSerializer
from pessoa.models import Pessoa


class PessoaController(viewsets.ViewSet):
    permission_classes = (permissions.AllowAny,)

    def create(self, request):
        return PessoaService().create_pessoa(request.data)

    def update(self, request, pk=None):
        return PessoaService().update_pessoa(request.data, pk)

    def destroy(self, request, pk=None):
        return PessoaService().delete_pessoa(request.data, pk)

    def retrieve(self, request, pk=None):
        return PessoaService().retrieve_pessoa(request.data, pk)
