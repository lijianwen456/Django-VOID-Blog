# Generated by Django 2.1.7 on 2020-04-22 01:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LinksModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='伙伴名')),
                ('site_name', models.CharField(max_length=64, null=True, verbose_name='站点名')),
                ('site_url', models.URLField(verbose_name='站点url')),
                ('image_url', models.URLField(verbose_name='站点头像url')),
                ('status', models.IntegerField(choices=[[0, '是个小伙伴'], [1, '是个大佬']], default=0, verbose_name='大佬或小伙伴')),
                ('text', models.TextField(blank=True, null=True, verbose_name='备注')),
                ('create_time', models.DateTimeField(default=datetime.datetime.now, verbose_name='发布时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
            ],
            options={
                'verbose_name': '友链',
                'verbose_name_plural': '友链',
                'db_table': 'tb_links',
            },
        ),
    ]
