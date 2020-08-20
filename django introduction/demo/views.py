from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Book
from rest_framework import viewsets
from .serializers import BookSerializer,BookMiniSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.

# class Another(View):
#     # books = Book.objects.all()
#     # books = Book.objects.get(id=1)
#     books = Book.objects.filter(is_published=True)
#     output = ''
#     for book in books:
#         output += f"we have {book.title} book with ID {book.id}<br>"


#     def get(self,request):
#         return HttpResponse(self.output)





def first(request):
    books = Book.objects.all()
    return render(request,'first_temp.html',{'books':books})



class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookMiniSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def retrieve(self,request,*args,**kwargs):
        isinstance = self.get_object()
        serializer = BookSerializer(isinstance)
        return Response(serializer.data)
