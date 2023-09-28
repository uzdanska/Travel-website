from django.db import models

# Create your models here.

class Country(models.Model):
    name = models.CharField(max_length=50, help_text="The country where the destination is located")

    def __str__(self):
        return self.name
class Destination(models.Model):
    name = models.CharField(max_length=100, unique=True, help_text="The name of the destination")
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    city = models.CharField(max_length=100)
    description = models.TextField(help_text="A brief description of the destination")
    image = models.ImageField(upload_to='destination_images/', help_text="A representative image of the destination")
    reservations = models.PositiveIntegerField(default=0)
    average_rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)

    def is_popular(self):
        return self.reservations > 100 and self.average_rating >= 4.0

    
    def __str__(self):
        return self.name

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
