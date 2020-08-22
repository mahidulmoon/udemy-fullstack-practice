from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from .models import Movie,Rating
from .serializers import MovieSerializer,RatingSerializer,UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


    @action(detail=True,methods=['POST'])
    def rate_movie(self,request,pk=None):
        response = {'message':'its working'}
        return Response(response,status=status.HTTP_200_OK)



class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def update(self,request,*args,**kwargs):
        response = {'message':'you cant update this like that'}
        return Response(response,status=status.HTTP_400_BAD_REQUEST)


    def create(self,request,*args,**kwargs):
        response = {'message':'you cant create this like that'}
        return Response(response,status=status.HTTP_400_BAD_REQUEST)