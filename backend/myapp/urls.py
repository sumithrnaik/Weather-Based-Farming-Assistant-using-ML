from django.urls import path
from . views import get_current_data,get_forecast_data

urlpatterns=[
    path('current/<str:location>/',get_current_data,name='get_current_data'),
    path('forecast/<str:location>/',get_forecast_data,name='get_forecast_data'),
]