# Generated by Django 5.1 on 2024-08-31 08:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_image_delete_images'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='title',
            field=models.CharField(default='default image', max_length=200),
        ),
    ]
