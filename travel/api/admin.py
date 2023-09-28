from django.contrib import admin
from .models import Destination, OurService, ServiceDetail, Country
# Register your models here.
admin.site.register(Country)
admin.site.register(Destination)
admin.site.register(OurService)
admin.site.register(ServiceDetail)