"""Nai_shuruwat_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from Home import urls
from Home import views

admin.site.site_header = "Nai_Shuruwat"
admin.site.site_title = "Nai_shuruwat"
admin.site.index_title = "Nai_Shuruwat"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('list/', views.HelpList.as_view()),
    path('checklist/', views.CheckList.as_view()),
    path('checkupdate/<int:pk>/', views.CheckUpdateView.as_view()),
    path('checkcreate/', views.CheckCreateView.as_view()),
    path('questionlist/', views.QuestionList.as_view()),
    path('questionupdate/<int:pk>/', views.QuestionUpdateView.as_view()),
    path('questioncreate/', views.QuestionCreateView.as_view()),
    path('', include ('Home.urls')),

]
