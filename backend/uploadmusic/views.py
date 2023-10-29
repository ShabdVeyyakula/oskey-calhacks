from django.shortcuts import render
from django.http import HttpResponse
from .forms import UploadFileForm

# Create your views here.
def upload_music(request):
    return HttpResponse("HELLO")