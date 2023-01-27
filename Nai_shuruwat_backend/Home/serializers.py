from rest_framework import serializers
from Home.models import Help
from Home.models import Check
from Home.models import Question

class HelpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Help
        fields = ('id', 'First_name', 'Last_name', 'Email', 'Phone_number', 'House_No', 'City', 'State', 'Pincode', 'Message')

class CheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Check
        fields = ('id', 'volunteer_fname', 'volunteer_lname','volundeer_gender','volunteer_age','volunteer_home_no','volunteer_city','volunteer_state','volunteer_pincode','volunteer_phone','volunteer_email','volunteer_date','volunteer_interested_at','volunteer_available_at','volunteer_interested_for','volunteer_experience')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('user_email', 'user_question')