from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Book
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