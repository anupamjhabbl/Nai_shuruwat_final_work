# Generated by Django 4.1.5 on 2023-01-10 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0006_remove_volunteer_gender'),
    ]

    operations = [
        migrations.CreateModel(
            name='Check',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value1', models.CharField(max_length=50)),
                ('value2', models.CharField(max_length=50)),
            ],
        ),
        migrations.DeleteModel(
            name='Volunteer',
        ),
    ]