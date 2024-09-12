from django.contrib import admin
from django import forms
from django.forms.utils import flatatt
from django.utils.html import format_html
from .models import Post, Image

# Register your models here.
admin.site.register(Post)
admin.site.register(Image)
