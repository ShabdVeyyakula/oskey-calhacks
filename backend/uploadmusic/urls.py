from django.contrib import admin
from django.urls import path, include
from uploadmusic.views import upload_music

urlpatterns = [
    path("music/", upload_music, name="music")
]