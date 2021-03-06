# Generated by Django 2.1.7 on 2020-04-19 23:15

import datetime
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import mdeditor.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, validators=[django.core.validators.MinLengthValidator(1)], verbose_name='标题')),
                ('digest', models.TextField(blank=True, null=True, verbose_name='摘要')),
                ('content', mdeditor.fields.MDTextField(verbose_name='内容')),
                ('image', models.ImageField(blank=True, null=True, upload_to='image/', verbose_name='封面图片')),
                ('style', models.SmallIntegerField(blank=True, choices=[[0, '仅摘要'], [1, '图片置顶'], [2, '图片居中'], [3, '仅正文']], default=0, null=True, verbose_name='首页展示风格')),
                ('sidebar', models.SmallIntegerField(blank=True, choices=[[0, '否'], [1, '是']], default=0, null=True, verbose_name='启用内页导航')),
                ('search', models.SmallIntegerField(blank=True, choices=[[0, '否'], [1, '是']], default=0, null=True, verbose_name='是否创建搜索此文章')),
                ('clicks', models.IntegerField(blank=True, default=0, null=True, verbose_name='点击量')),
                ('create_time', models.DateTimeField(default=datetime.datetime.now, verbose_name='发布时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('author', models.ForeignKey(blank=True, default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='作者')),
            ],
            options={
                'verbose_name': '文章',
                'verbose_name_plural': '文章',
                'db_table': 'tb_article',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='分类名称')),
            ],
            options={
                'verbose_name': '分类',
                'verbose_name_plural': '分类',
                'db_table': 'tb_category',
            },
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(verbose_name='评论内容')),
                ('author', models.CharField(max_length=12, verbose_name='评论作者')),
                ('mail', models.EmailField(max_length=254, verbose_name='邮箱')),
                ('url', models.CharField(blank=True, max_length=64, null=True, verbose_name='站点地址')),
                ('re_mail', models.SmallIntegerField(blank=True, choices=[[0, '否'], [1, '是']], default=1, null=True, verbose_name='邮件通知')),
                ('is_read', models.SmallIntegerField(blank=True, choices=[[0, '否'], [1, '是']], default=0, null=True, verbose_name='是否已读')),
                ('create_time', models.DateTimeField(default=datetime.datetime.now, verbose_name='发布时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment', to='articles.Article', verbose_name='文章评论')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='child', to='articles.Comments', verbose_name='父级评论')),
            ],
            options={
                'verbose_name': '评论',
                'verbose_name_plural': '评论',
                'db_table': 'tb_comments',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='标签名称')),
            ],
            options={
                'verbose_name': '标签',
                'verbose_name_plural': '标签',
                'db_table': 'tb_tag',
            },
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='articles.Category', verbose_name='文章分类'),
        ),
        migrations.AddField(
            model_name='article',
            name='tag',
            field=models.ManyToManyField(to='articles.Tag', verbose_name='文章标签'),
        ),
    ]
