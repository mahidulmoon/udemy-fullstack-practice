from django.urls import path
from .views import first#,Another
urlpatterns = [
    path('',first),
    #path('another/',Another.as_view())
]
