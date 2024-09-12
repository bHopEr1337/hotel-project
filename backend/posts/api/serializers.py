from rest_framework.serializers import ModelSerializer
from ..models import Post, Image

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body')

class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'title', 'image', 'created_at')