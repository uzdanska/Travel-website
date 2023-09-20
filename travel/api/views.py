from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Destination, OurService
from .serializers import DestinationSerializer, OurServiceSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/destinations/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of destination'
        },
        {
            'Endpoint': '/destinations/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single destination object'
        },
        {
            'Endpoint': '/destinations/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new destination with data sent in post request'
        },
        {
            'Endpoint': '/destinations/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing destination with data sent in post request'
        },
        {
            'Endpoint': '/destinations/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting destination'
        },
        {
            'Endpoint': '/C/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of service'
        },
        {
            'Endpoint': '/services/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single service object'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def getDestinations(request):
    destinations = Destination.objects.all()
    serializer = DestinationSerializer(destinations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getDestination(request, pk):
    destinations = Destination.objects.get(id=pk)
    serializer = DestinationSerializer(destinations, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getServices(request):
    services = OurService.objects.all()
    serializer = OurServiceSerializer(services, many=True)
    return Response(serializer.data)
