from django.urls import path
from . views import get_current_data

urlpatterns=[
    path('current/<str:location>/',get_current_data,name='get_current_data'),
]