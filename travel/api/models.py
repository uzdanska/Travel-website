from django.db import models

# Create your models here.

class Destination(models.Model):
    name = models.CharField(max_length=100, unique=True, help_text="The name of the destination")
    country = models.CharField(max_length=50, help_text="The country where the destination is located")
    city = models.CharField(max_length=100)
    description = models.TextField(help_text="A brief description of the destination")
    image = models.ImageField(upload_to='destination_images/', help_text="A representative image of the destination")
    
    def __str__(self):
        return self.name + " " +self.country

class OurService(models.Model):
    image = models.ImageField(upload_to='service_images/', help_text="A representative image of the service")
    name = models.CharField(max_length=100, unique=True, help_text="The name of the service")
    description = models.TextField(help_text="A brief description of the service")

    def __str__(self):
        return self.name + " " + self.description
    
class ServiceDetail(models.Model):
    image = models.ImageField(upload_to='service_details')
    name = models.CharField(max_length=100, unique=True)
    number = models.IntegerField()

    def __str__(self):
        return self.name