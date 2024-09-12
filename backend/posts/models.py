from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return f"Post: {self.title}"

class Image(models.Model):
    image = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200, default="default image")
    created_at = models.DateTimeField(auto_now_add=True)




from rest_framework import serializers
from .models import Image
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'image', 'created_at', 'title')

