# Generated by Django 4.1.5 on 2023-01-10 05:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0004_rename_fname_volunteer_namef_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='volunteer',
            name='namef',
        ),
        migrations.RemoveField(
            model_name='volunteer',
            name='namel',
        ),
    ]
