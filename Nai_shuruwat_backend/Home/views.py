from django.shortcuts import render, HttpResponse
from Home.models import Help
from Home.models import Check
from Home.serializers import HelpSerializer
from Home.serializers import CheckSerializer
from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,UpdateAPIView
from rest_framework import viewsets
from datetime import datetime


# Create your views here.

class HelpList(ListAPIView):
    queryset = Help.objects.all()
    serializer_class = HelpSerializer

class HelpDetailView(RetrieveAPIView):
    queryset = Help.objects.all()
    serializer_class = HelpSerializer

class HelpCreateView(CreateAPIView):
    queryset = Help.objects.all()
    serializer_class = HelpSerializer

class HelpUpdateView(UpdateAPIView):
    queryset = Help.objects.all()
    serializer_class = HelpSerializer

class CheckList(ListAPIView):
    queryset = Check.objects.all()
    serializer_class = CheckSerializer

class CheckDetailView(RetrieveAPIView):
    queryset = Check.objects.all()
    serializer_class = CheckSerializer

class CheckCreateView(CreateAPIView):
    queryset = Check.objects.all()
    serializer_class = CheckSerializer

class CheckUpdateView(UpdateAPIView):
    queryset = Check.objects.all()
    serializer_class = CheckSerializer






def index(request):
    return render(request,'index.html');
    # return HttpResponse("Hello")

def help_form_submit(request):
    if request.method == "GET":
        f_name = request.GET.get('f_name')
        l_name = request.GET.get('l_name')
        email = request.GET.get('email')
        phone = request.GET.get('phone')
        house = request.GET.get('house')
        city = request.GET.get('city')
        state = request.GET.get('state')
        pincode = request.GET.get('Pincode')
        message = request.GET.get('message')
        help = Help(First_name=f_name, Last_name=l_name, Email=email, Phone_number=phone, House_No=house, State=state, Pincode=pincode, Message=message)
        help.save()
        return render(request,'index.html')

def volunteer_submit(request):
    if request.method == "GET":
        val1 = request.GET.get('f_name')
        val2 = request.GET.get('l_name')
        gender = request.GET.get('gender')
        age = request.GET.get('Age')
        home = request.GET.get('Home_number')
        city = request.GET.get('City')
        state = request.GET.get('State')
        pin = request.GET.get('Pincode')
        phone = request.GET.get('Contact_number')
        email = request.GET.get('Email')
        date = request.GET.get('Date')
        interested_at = request.GET.get('Interested_at')
        available_at = request.GET.get('Available_at')
        interested_for = request.GET.get('Interested_for')
        experience_value = request.GET.get('experience')
        check = Check(volunteer_fname=val1, volunteer_lname=val2,volunteer_gender=gender,volunteer_age=age,volunteer_home_number=home,volunteer_city=city,volunteer_state=state,volunteer_pincode=pin,volunteer_phone=phone,volunteer_email=email,volunteer_date=date,volunteer_interested_at=interested_at,volunteer_available_at=available_at,volunteer_interested_for=interested_for,volunteer_experience=experience_value);
        check.save()
        return render(request,'index.html')


