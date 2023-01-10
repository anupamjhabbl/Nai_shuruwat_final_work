from django.contrib import admin
from django.urls import path
from Home import views

urlpatterns = [
    path('', views.index, name = "index"),
    path('form', views.help_form_submit, name = "help_form_submit"),
    path('volunteer_form', views.volunteer_submit, name="volunteer_submit")
]