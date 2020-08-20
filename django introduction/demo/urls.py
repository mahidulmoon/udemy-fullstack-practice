from django.urls import path,include
from .views import first#,Another
from rest_framework import routers
from .views import BookViewSet


router = routers.DefaultRouter()
router.register('books',BookViewSet)

urlpatterns = [
    #path('',first),
    path('',include(router.urls))
    #path('another/',Another.as_view())
]
