# Generated by Django 4.1.5 on 2023-01-27 03:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0012_alter_check_volunteer_age_alter_check_volunteer_city_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_email', models.EmailField(default='none@gmail.com', max_length=250, null=True)),
                ('user_question', models.TextField(default='Pata Nahi', null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='check',
            name='volunteer_date',
            field=models.DateField(default=datetime.date(2023, 1, 27), null=True),
        ),
    ]
