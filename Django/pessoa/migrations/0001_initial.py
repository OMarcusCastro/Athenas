# Generated by Django 4.2.11 on 2024-03-15 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pessoa',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Nome', models.CharField(max_length=100)),
                ('Data_Nasc', models.DateField()),
                ('CPF', models.CharField(max_length=14)),
                ('Sexo', models.CharField(choices=[('M', 'M'), ('F', 'F')], max_length=1)),
                ('Altura', models.DecimalField(decimal_places=2, max_digits=3)),
                ('Peso', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
    ]