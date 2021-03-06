# Generated by Django 2.1.7 on 2020-04-20 19:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BangumiModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=64, null=True, verbose_name='番名')),
                ('num', models.IntegerField(verbose_name='番号id')),
                ('status', models.IntegerField(blank=True, default=0, null=True, verbose_name='已看数')),
                ('count', models.IntegerField(blank=True, null=True, verbose_name='总集数')),
                ('create_time', models.DateTimeField(default=datetime.datetime.now, verbose_name='发布时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
            ],
            options={
                'verbose_name': '追番',
                'verbose_name_plural': '追番',
                'db_table': 'tb_bangumi',
                'ordering': ['-update_time', '-id'],
            },
        ),
    ]
