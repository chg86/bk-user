# -*- coding: utf-8 -*-
"""
TencentBlueKing is pleased to support the open source community by making 蓝鲸智云-用户管理(Bk-User) available.
Copyright (C) 2017-2021 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""
# Generated by Django 1.11.23 on 2019-11-08 16:59
from __future__ import unicode_literals

from django.db import migrations

from bkuser_core.categories.constants import CategoryType
from bkuser_core.user_settings.constants import SettingsEnableNamespaces


def forwards_func(apps, schema_editor):
    """添加默认用户目录"""
    SettingMeta = apps.get_model("user_settings", "SettingMeta")

    ldap_connection_settings = [
        dict(key="connection_url", example="ldap://127.0.0.1:389"),
        dict(key="ssl_encryption", choices=["无", "SSL"], default="无"),
        dict(key="timeout_setting", example=120, default=120),
        dict(key="pull_cycle", example=60, default=60),
        dict(key="base_dn", example="CN"),
        dict(key="user", example="username"),
        dict(key="password", example="password"),
    ]

    for x in ldap_connection_settings:
        SettingMeta.objects.create(
            namespace=SettingsEnableNamespaces.CONNECTION.value,
            category_type=CategoryType.LDAP.value,
            required=True,
            **x
        )

    basic_fields_connection_settings = [
        dict(key="basic_pull_node", choices=[]),
        dict(key="user_class", example="inetorgperson", default="inetorgperson"),
        dict(
            key="user_filter",
            example="(objectclass=inetorgperson)",
            default="(objectclass=inetorgperson)",
        ),
        dict(
            key="organization_class",
            example="organizationalUnit",
            default="organizationalUnit",
        ),
        dict(key="username", default="cn"),
        dict(key="display_name", example="displayName", default="displayName"),
        dict(key="email", example="email", default="email"),
        dict(key="telephone", example="telephonenumber", default="telephonenumber"),
    ]

    for x in basic_fields_connection_settings:
        SettingMeta.objects.create(
            namespace=SettingsEnableNamespaces.FIELDS.value,
            category_type=CategoryType.LDAP.value,
            required=True,
            region="basic",
            **x
        )

    extend_fields_connection_settings = [
        dict(key="bk_fields", choices=["职务", "性别", "年龄", "工作年限", "婚姻状态", "籍贯"]),
        dict(key="mad_fields", choices=["job", "gender", "age", "year", "marry", "home"]),
    ]

    for x in extend_fields_connection_settings:
        SettingMeta.objects.create(
            namespace=SettingsEnableNamespaces.FIELDS.value,
            category_type=CategoryType.LDAP.value,
            required=True,
            region="extend",
            **x
        )

    group_fields_connection_settings = [
        dict(
            key="user_group_class",
            example="groupOfUniqueNames",
            default="groupOfUniqueNames",
        ),
        dict(
            key="user_group_filter",
            example="(objectclass=groupOfUniqueNames)",
            default="(objectclass=groupOfUniqueNames)",
        ),
        dict(
            key="user_group_name",
            example="cn",
            default="cn",
        ),
        dict(
            key="user_group_description",
            example="description",
            default="description",
        ),
    ]

    for x in group_fields_connection_settings:
        SettingMeta.objects.create(
            namespace=SettingsEnableNamespaces.FIELDS.value,
            category_type=CategoryType.LDAP.value,
            required=True,
            region="group",
            **x
        )


class Migration(migrations.Migration):

    dependencies = [
        ("user_settings", "0002_auto_20191104_1600"),
    ]

    operations = [migrations.RunPython(forwards_func)]
