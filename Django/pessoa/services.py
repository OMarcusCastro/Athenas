from pessoa.models import Pessoa
from pessoa.serializer import PessoaSerializer
from rest_framework.response import Response


class PessoaService:
    def create_pessoa(self, data):
        serializer = PessoaSerializer(data=data)
        if serializer.is_valid():
            Pessoa.objects.create(**serializer.validated_data)

            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def update_pessoa(self, data, pk):
        pessoa = Pessoa.objects.get(pk=pk)
        serializer = PessoaSerializer(pessoa, data=data)
        if serializer.is_valid():
            pessoa_data = serializer.validated_data
            for key, value in pessoa_data.items():
                setattr(pessoa, key, value)
            pessoa.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete_pessoa(self, data, pk):
        pessoa = Pessoa.objects.get(pk=pk)
        pessoa.delete()
        return Response(status=204)

    def retrieve_pessoa(self, data, pk):
        pessoa = Pessoa.objects.get(pk=pk)
        serializer = PessoaSerializer(pessoa)
        return Response(serializer.data, status=200)
