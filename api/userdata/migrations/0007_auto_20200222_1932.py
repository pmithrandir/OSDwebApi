# Generated by Django 2.2.9 on 2020-02-22 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userdata', '0006_roleallocations'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='licenceAccepted',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
