
from django.db import models

# Create your models here.


class Pessoa(models.Model):
    """Model definition for Pessoa."""

    id = models.AutoField(
        primary_key=True)
    pNome = models.CharField(max_length=100)
    pData = models.DateField()
    pCPF = models.CharField(max_length=14)
    pSexo = models.CharField(max_length=1,
                             choices=[('M', 'M'), ('F', 'F')])

    pAltura = models.DecimalField(max_digits=4, decimal_places=2)
    pPeso = models.DecimalField(max_digits=6, decimal_places=2)

    def CalcularPesoIdeal(self):
        if self.pSexo == 'M':
            return (72.7 * self.pAltura) - 58
        else:
            return (62.1 * self.pAltura) - 44.7

    def __str__(self):
        return str(self.pNome)
