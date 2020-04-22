# Generated by Django 2.1.7 on 2020-04-21 18:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MusicModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('list_num', models.IntegerField(verbose_name='歌单编号')),
                ('server', models.CharField(max_length=12, verbose_name='歌单服务商')),
                ('create_time', models.DateTimeField(default=datetime.datetime.now, verbose_name='发布时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
            ],
            options={
                'verbose_name': '音乐',
                'verbose_name_plural': '音乐',
                'db_table': 'tb_music',
                'ordering': ['-update_time', '-id'],
            },
        ),
    ]