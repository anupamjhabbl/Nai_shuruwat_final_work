from django.contrib import admin
from Home.models import Help
from Home.models import Check
from Home.models import Question

# Register your models here.

admin.site.register(Help)
admin.site.register(Check)
admin.site.register(Question)
