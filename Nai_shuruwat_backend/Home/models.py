from django.db import models
from datetime import date

# Create your models here.

class Help(models.Model):
    First_name = models.CharField(max_length=50)
    Last_name = models.CharField(max_length=50, null=True, blank=True)
    Email = models.EmailField(max_length = 254)
    Phone_number = models.CharField(max_length=12)    # In future we have to use any other format for proper validation
    House_No = models.CharField(max_length=30, null=True, blank=True)
    City = models.CharField(max_length=50, null=True, blank=True)
    State = models.CharField(max_length=50, null=True, blank=True)
    Pincode = models.IntegerField(null=True, blank=True)
    Message = models.TextField()

    def __str__(self):
        return self.Email




class Check(models.Model):
    volunteer_fname = models.CharField(max_length=50);
    volunteer_lname = models.CharField(max_length=50,default="none",null=True);
    volunteer_gender = models.CharField(max_length=50,default="male",null=True);
    volunteer_age = models.CharField(max_length=50,default="18",null=True)
    volunteer_home_number = models.CharField(max_length=50,default="none",null=True)
    volunteer_city = models.CharField(max_length=50,default="none",null=True)
    volunteer_state = models.CharField(max_length=50,default="none",null=True)
    volunteer_pincode = models.CharField(max_length=50,default="none",null=True)
    volunteer_phone = models.CharField(max_length=50,default="none",null=True)
    volunteer_email = models.EmailField(max_length=254,default="none@gmail.com",null=True)
    volunteer_date = models.DateField(default=date.today(),null=True)
    volunteer_interested_at = models.CharField(max_length=50,default="none",null=True)
    volunteer_available_at = models.CharField(max_length=50,default="none",null=True)
    volunteer_interested_for = models.CharField(max_length=50,default="none",null=True)
    volunteer_experience = models.TextField(default="Pata Nahi",null=True)



