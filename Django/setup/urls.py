from django.contrib import admin
from django.urls import path, include
from pessoa.views import PessoaController

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pessoa/', PessoaController.as_view(), name='pessoa-list'),
    path('pessoa/<int:pk>/', PessoaController.as_view(), name='pessoa-detail'),
]
