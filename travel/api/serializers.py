from rest_framework.serializers import ModelSerializer
from .models import Destination, OurService, ServiceDetail

class DestinationSerializer(ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'

class OurServiceSerializer(ModelSerializer):
    class Meta:
        model = OurService
        fields = '__all__'

class ServiceDetailSerializer(ModelSerializer):
    class Meta:
        model = ServiceDetail
        fields = '__all__'