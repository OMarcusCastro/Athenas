from rest_framework.views import APIView
from rest_framework.response import Response
from pessoa.services import PessoaService
from pessoa.serializer import PessoaSerializer
from pessoa.models import Pessoa
from rest_framework import status


class PessoaController(APIView):

    def post(self, request):
        return PessoaService().create_pessoa(request.data)

    def put(self, request, pk=None):
        return PessoaService().update_pessoa(request.data, pk)

    def delete(self, request, pk=None):
        return PessoaService().delete_pessoa(request.data, pk)

    def get(self, request):
        print(request.query_params)
        if request.query_params.get('calcula_ideal', None) == 'true':

            id_var = request.query_params.get('id', None)
            print("ID: ", id_var)
            return PessoaService().calcula_peso(id_var)
        # data = request.data
        filtro = request.query_params.get('pNome', None)
        return PessoaService().get_pessoa(filtro)
