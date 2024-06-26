/**
* by making 蓝鲸智云-用户管理(Bk-User) available.
* Copyright (C) 2017-2021 THL A29 Limited, a Tencent company. All rights reserved.
* Licensed under the MIT License (the "License");
* you may not use this file except in compliance with the License. You may obtain a copy of the License at
* http://opensource.org/licenses/MIT
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and limitations under the License.
*/
export default {
  // 权限
  无权限访问: 'Permission Denied',
  你没有相应资源的访问权限: 'You do not have permission to access the corresponding resources',
  去申请: 'to Apply for',
  该操作需要以下权限: 'This operation requires the following permissions',
  需要申请的权限: 'Permission to apply for',
  关联的资源实例: 'Associated resource instance',
  '权限申请单已提交？': 'Has the permission request been submitted',
  请在权限中心填写权限申请单: 'Please fill in the permission application form in the BlueKing-IAM, and refresh after submission',
  刷新页面: 'Refresh page',
  // 组织架构
  重命名: 'Rename',
  重命名成功: 'Rename successfully',
  目录名称: 'Category Name',
  组织名称: 'Organization Name',
  拉取已有用户: 'Pull existing user',
  添加用户: 'Add user',
  新增用户: 'New User',
  新增用户1: 'New user',
  查看更多: 'View more',
  收起: 'Collapse',
  联系BK助手: 'Contact BK-Helper',
  蓝鲸桌面: 'BlueKing Desktop',
  // 用户目录
  未完成: 'TODO',
  待完善: 'TODO',
  最小拉取周期为: 'The minimum pull cycle is 60s, 0 means no automatic periodic pull',
  请输入正确的拉取周期: 'Enter the correct pull cycle',
  用户: 'User(s)',
  组织: 'Organization',
  含: '—— Includes ',
  个组织: ' organizations with ',
  人: ' people ——',
  新增目录: 'New category',
  目录名: 'Category name',
  '目录未完成配置，无法操作': 'Category not completed configuration, unable to operate',
  空目录无需导出: 'No need to export empty directories',
  类型: 'Type',
  更新时间: 'Modified at',
  最近一次同步成功时间: 'Last successful sync time',
  '启/停': 'Enable/Disable',
  默认目录不能被禁用: 'The default category cannot be disabled',
  默认目录不能被删除: 'The default category cannot be deleted',
  启用成功: 'Enable successfully',
  停用成功: 'Disable successfully',
  操作: 'Action',
  导出: 'Export',
  导入: 'Import',
  导出用户: 'Export user',
  导入用户: 'Import user',
  '搜索结果为空！': 'Search result is empty!',
  建议检查关键字是否准确: 'Recommend checking keywords for accuracy.',
  删除: 'Delete',
  删除成功: 'Delete successfully',
  同步: 'Sync',
  同步成功: 'Sync successfully',
  确定停用该用户目录: 'Confirm to disable the directory?',
  停用目录1: 'After stopping ',
  停用目录2: ' , all accounts in this directory cannot log in to the "BlueKing". Please be cautious!',
  确定删除该用户目录: 'Delete the category?',
  删除目录1: 'Users in the directory of ',
  删除目录2: ' will also be deleted, please be cautious!',
  正在: 'Loading',
  正在上传: 'Uploading',
  // 新增用户目录页面
  新增用户目录: 'New Category',
  选择目录类型: 'Select category type',
  取消: 'Cancel',
  返回列表: 'Back to list',
  '您尚未完成所有设置，确定离开页面？': 'Leave this page without settings completed?',
  继续: 'Continue',
  前往申请权限: 'Go to apply for',
  // 新增本地用户
  基本设置: 'Basic settings',
  密码设置: 'Password settings',
  连接设置: 'Connection settings',
  字段配置: 'Field',
  上一步: 'Previous',
  下一步: 'Next',
  提交: 'Submit',
  保存: 'Save',
  保存成功: 'Save successfully',
  请输入: 'Enter',
  请选择: 'Select',
  启用目录: 'Enable category',
  启用目录提示: 'Users can only log in normally if the directory is enabled',
  登录域: 'Login domain',
  登录域错误: 'Consists of 1-16 letters, numbers, periods (.), and minus (-) characters, beginning with a letter or number',
  登录域描述: 'Domain names are used to distinguish user sources, such as "example.com", which cannot be modified after saving.',
  // 新增 mad 用户
  连接地址: 'Connection url',
  SSL加密方式: 'SSL encryption',
  秒: 's',
  超时设置: 'Timeout setting',
  拉取周期: 'Pull cycle',
  '根目录（Base DN）': 'Base DN',
  '用户名（Username）': 'Username',
  '密码（Password）': 'Password',
  测试连接: 'Test connection',
  连接测试成功: 'Test connection successfully',
  '连接测试失败，请重试': 'Test connection failed, please try again',
  请先完善表单内容: 'Please improve the form content first.',
  展开: 'Expand',
  用户基础字段: 'Basic field',
  用户扩展字段: 'Extend field',
  用户组字段: 'Goup field',
  选择拉取节点: 'Select pull node',
  选择拉取节点描述: 'Pull data from the specified organization. Input the corresponding "distinguished name", such as "ou=org1,dc=example,dc=org"',
  用户对象类: 'User object class',
  用户对象过滤: 'User object filter',
  组织架构类: 'Organization class',
  用户名字段: 'Username field',
  用户名字段描述: 'User name field description',
  中文名字段: 'Chinese name field',
  邮箱字段: 'Email field',
  手机号字段: 'Telephone field',
  蓝鲸用户管理: 'BlueKing User Management',
  蓝鲸用户管理字段: 'BlueKing user manage field',
  对应字段1: 'Map ',
  对应字段2: ' Field',
  用户组对象类: 'User group object class',
  用户组配置描述: 'If you do not need user groups, leave the following fields blank',
  用户组关联字段描述: 'Some LDAP services, such as OpenDJ, need to be specified as isMemberOf',
  用户组对象过滤: 'User group object filter',
  用户组名字段: 'User group name filed',
  用户组描述字段: 'User group description field',
  用户组关联字段: 'User group associated field',
  自定义字段: 'Custom Field',
  // 密码设置
  密码长度: 'Password length',
  至32位: 'to 32',
  密码必须包含: 'Password must includes',
  密码规则不得为空: 'Password rules cannot be empty',
  自动解锁时间: 'Auto unlock time',
  自动解锁时间提示: 'Too many trial and error passwords, re-unlock time',
  初始密码提示1: 'Unified initial password: All created accounts use the initial password that is set uniformly, and no email is sent',
  初始密码提示2: 'Mail random password: After the account is created, the random password is sent by email, provided that the email gateway needs to be ',
  初始密码提示3: 'configured',
  初始密码提示4: ' first.',
  请完善模板内容: 'Please improve the template content',
  '密码的长度为8-32位': 'The password is 8-32 bits long',
  自动解锁时间应不少于30秒: 'Automatic unlock time should be no less than 30 seconds',
  // header
  组织架构: 'Organization',
  用户目录: 'Category',
  审计: 'Audit',
  设置: 'Settings',
  版本日志: 'Release note',
  产品文档: 'Documentation',
  问题反馈: 'Feedback',
  版本更新明细: 'Version update details',
  新增: '[Feature]',
  修复: '[Fixed]',
  优化: '[Improved]',
  // 密码
  原密码: 'Old password',
  重置密码: 'Reset password',
  密码长度为: 'Password length is',
  '-32个字符，必须包含': '-32 characters, it must be included',
  大小写字母: 'Uppercase and lowercase letters',
  大写字母: 'Uppercase letters',
  小写字母: 'Lowercase letters',
  数字: 'Number',
  '特殊字符（除空格）': 'Special characters (except spaces)',
  '请输入账户绑定的邮箱，我们将为您发送密码重置邮件': 'Enter your account bound email address and we will send you a password reset email',
  '请输入账号信息，我们将为您发送重置密码短信': 'Enter your account information, and we will send you a message to reset your password',
  '请输入用户名/手机号': 'Enter username or telephone number',
  发送验证码: 'Send verification code',
  请输入验证码: 'Enter the verification code',
  请输入邮箱: 'Enter email address',
  后: 'after',
  重新发送: 'Resend',
  '邮箱格式错误，请重新输入': 'Invalid email format, please re-enter',
  发送密码重置邮件: 'Send a password reset message',
  已发送密码重置邮件: 'A password reset message has been sent',
  已发送至您的邮箱: 'It has been sent to your email',
  请查看邮件并根据提示进行操作: 'Please check your email and follow the instructions',
  前往邮箱: 'Go to email',
  更改密码: 'Change password',
  旧密码: 'Old password',
  新密码: 'New password',
  确认新密码: 'Confirm new password',
  '两次输入的密码不一致，请重新输入': 'The passwords entered twice do not match. Please re-enter them',
  设置新密码: 'Set new password',
  请输入新密码进行密码重设: 'Enter a new password for password reset',
  请输入原密码: 'Enter old password',
  请输入新密码: 'Enter a new password',
  请再次确认新密码: 'Please confirm the new password again',
  密码修改成功: 'Password changed successfully',
  您现在可以用新密码登录了: 'You can now sign in with your new password',
  登录账户: 'Login account',
  点击确定后将跳到蓝鲸登录页面: 'Click ok to jump to the bluking login page',
  更多操作: 'More',
  // 设置
  '该内置字段，不支持修改': 'The built-in field does not support modification',
  '内置字段，不能删除': 'Built-in field, cannot be deleted',
  密码规则校验失败: 'Password rule verification failed',
  首次登录强制修改密码: 'Forced password change for first login',
  连续: 'Continuous',
  天: 'day(s)',
  未登录自动冻结_冻结后用户无法登录_: 'automatic freeze without login (Users cannot log in after being frozen)',
  请填写正确的登录天数: 'Please input in the correct login days',
  编辑邮件模板: 'Edit mail template',
  邮箱发送随机密码: 'Send random password via email',
  请输入密码: 'Enter password',
  初始密码获取方式: 'Initial password acquisition method',
  日期: 'Date',
  用户字段设置: 'Field Settings',
  添加字段: 'Add Fields',
  添加字段1: 'Add fields',
  添加字段成功: 'Add fields successfully',
  删除字段成功: 'Delete fields successfully',
  字段名称: 'Field names',
  '字段名称输入有误，请重新填写': 'Field name input error, please fill in again',
  英文标识: 'Field id',
  字段类型: 'Field type',
  必填: 'Required',
  唯一: 'Unique',
  可编辑: 'Editable',
  编辑: 'Edit',
  内置: 'Built-in',
  字符串: 'String',
  枚举: 'Enumeration',
  布尔值: 'Boolean',
  数值: 'Numerical',
  编辑字段: 'Edit Field',
  '确认要删除吗？': 'Confirm to delete?',
  '英文名称输入有误，请重新填写': 'English name input error, please re-enter',
  枚举设置: 'Enumeration set',
  枚举类型: 'Enumerated type',
  单选: 'Radio',
  多选: 'Multi-select',
  默认选项: 'Default option',
  选项值: 'Option value',
  该字段是必填项: 'This field is required',
  该字段在用户信息里必须填写: 'This field is required in in the user information',
  该字段在不同用户信息里不能相同: 'This field cannot be the same in different user information',
  该字段在用户信息里可编辑: 'This field is editable in user information',
  统一初始密码: 'Unified initial password',
  密码有效期: 'Password validity',
  密码试错次数: 'Password retry limit',
  一个月: '1 month',
  三个月: '3 months',
  六个月: '6 months',
  一年: '1 year',
  次: ' time(s)',
  永久: 'Permanent',
  标题: 'Title',
  发件人: 'Sender',
  正文: 'Body',
  创建账户邮件: 'Create account email',
  重设密码后的邮件: 'Reset password email',
  '最多不得超过12个字符（6个汉字）': 'No more than 12 characters (6 Chinese characters)',
  // audit 审计
  昨天: 'Yesterday',
  最近一周: 'Last week',
  最近一个月: 'Last month',
  最近三个月: 'Last 3 months',
  时间: 'Time',
  操作人员: 'The operator',
  操作用户: 'The operator',
  用户全名: 'Full name',
  操作对象: 'Object',
  操作类型: 'Operation type',
  用户目录管理无权限访问: 'No permission to access "Directory Management"',
  '搜索操作用户、操作对象、操作类型': 'Search by Operation User / Operation Object / Operation Type',
  // user
  添加根组织: 'Add organization',
  暂无组织成员: 'No organization members',
  '如需添加组织成员，可通过以下两种方式进行': 'There are two ways to add organization members',
  未找到相符的组织成员: 'No matching organization members found',
  重置密码成功: 'Reset password successfully',
  按Enter键确认添加: 'Press Enter to confirm',
  '搜索用户名/账户': 'Search for username/account',
  '输入用户名/全名，按Enter搜索': 'Search username/display_name',
  请输入账户: 'Enter account',
  搜索: 'Search',
  没有找到相关的结果: 'Search result is empty',
  添加下级组织: 'Add sub-organization',
  成功添加下级组织: 'Successfully added subordinate organization',
  上移: 'Move up',
  下移: 'Move down',
  复制组织ID: 'Copy organization ID',
  最多只能添加十级: 'You can add up to ten levels',
  已经是最顶层: 'It\'s already at the top',
  已经是最底层: 'It\'s already at the bottom',
  请选择组织: 'Select organization',
  设置成功: 'Setup successful',
  非空组织不能删除: 'Nonempty organization can\'t be deleted',
  复制id成功: 'Copy id successfully',
  复制id失败: 'Copy id failed',
  设置列表字段: 'Set List Field',
  '长度为1-64位': 'The length is between 1-64',
  上级组织: 'superior organization',
  '最多显示 10 个字段，已选': 'Displays up to 10 fields, selected',
  个字段: 'fields',
  设置所在组织: 'Organization setting',
  批量删除: 'Multi-delete',
  仅显示本级组织成员: 'Show members of this organization',
  编辑成功: 'Edit successfully',
  '账户创建成功，登录方式已发送至用户邮箱': 'The account was created successfully and the login method has been sent to the user\'s email.',
  账户创建成功: 'The account was created successfully.',
  '可随时修改，长度为1-32个字符': ' can be modified at any time, the length of characters is between 1-32',
  '由1-32位字母、数字、下划线(_)、点(.)、减号(-)字符组成，以字母或数字开头': 'Consists of 1-32 alphanumeric characters, underscores (_), dot (.), minus (-) characters, beginning with a letter or number',
  请选择日期: 'Date pick',
  请填写正确的: 'Please input in the correct ',
  用户信息: 'User information',
  用户设置: 'User settings',
  所在组织: 'Organization',
  直接上级: 'Leader',
  确认: 'Confirm',
  点击查看: 'Click to view',
  禁用: 'Disable',
  启用: 'Enable',
  成功: ' SUCCESS',
  已禁用: 'Disabled',
  已锁定: 'Locked',
  '仅支持xls、xlsx格式文件': 'Support only XLS, XLSX format files',
  下载模板: 'Download template',
  请选择正确格式的文件上传: 'Select the correct file format to upload',
  请选择文件再上传: 'Select the file before uploading',
  '删除后会保留用户的数据，以便需要时审查': 'After deletion, the user\'s data is retained for review as needed',
  头像: 'Avatar',
  头像剪裁: 'Avatar cropping',
  删除后会保留该组织的数据: 'The organization\'s data is preserved after deletion',
  复制组织名称: 'Copy organization name',
  复制组织名称成功: 'Copy organization name successfully',
  复制组织名称失败: 'Copy organization name failed',
  确定: 'Confirm',
  搜索组织: 'Search organization',
  待选择列表: 'List to be selected',
  已选择列表: 'Selected list',
  清空: 'Clear',
  完善关键字搜索更多内容: 'Improve keyword search for more content...',
  共计: 'Total',
  页: 'pages',
  加载中: 'Loading...',
  页面找不到了: 'Not Found!',
  操作审计: 'Operation audit',
  登录审计: 'Login audit',
  登录用户: 'Login user',
  登录时间: 'Login time',
  登录来源IP: 'Login IP',
  登录状态: 'Login status',
  失败: 'FAILURE',
  '来源 IP': 'Source IP',
  开始时间: 'Start time',
  耗时: 'Time consumed',
  操作人: 'operator ',
  触发类型: 'Trigger type',
  目标目录: 'Target directory',
  状态: 'Status',
  数据更新记录: 'Update log',
  日记详细: 'Log in detail',
  同步中: 'In sync',
  失败重试中: 'Retrying',
  用户数据更新: 'User data update',
  组织数据更新: 'Organizing data updates',
  用户间关系数据更新: 'Update relationship data between users',
  用户和组织关系数据更新: 'Update user and organization relationship data',
  手动触发: 'Manual trigger',
  定时触发: 'Scheduled trigger',
  分钟: 'Minute',
  小时: 'Hour',
  日志详细: 'Detail log',
  正在发起同步任务: 'Initiating sync task',
  请在数据更新记录中查看具体详细: 'Please check the data update log for details',
  审计导出: 'Export audit',
  创建时间: 'Created at',
  最近一次登录时间: 'Last login at',
  请输入关键字进行搜索: 'Enter keywords to search',
  用户名: 'Username ',
  全名: 'Full name',
  手机号: 'Tel',
  邮箱: 'Email',
  账户状态: 'Account status',
  在职状态: 'Employment status',
  最近登录: 'Last login',
  最近未登录: 'Not logged in recently',
  正常: 'NORMAL',
  被禁用: 'DISABLED',
  已删除: 'DELETED',
  已冻结: 'LOCKED',
  被冻结: 'LOCKED',
  被删除: 'DELETED',
  在职: 'Employed',
  离职: 'Resigned',
  两个月: '2 months',
  '审计日志为空, 无法导出': 'the audit log is empty and cannot be exported',
  请输入数字: 'Enter a number',
  对应: 'The corresponding',
  目录字段: 'Category field',
  密码不允许连续: 'Passwords cannot be consecutive',
  位: 'position',
  出现: 'appear',
  '不能小于3位，大于8位': 'No less than 3 bits, no more than 8 bits',
  键盘序: 'Keyboard sequence',
  连续字母序: 'Continuous alphabetic order',
  连续数字序: 'Continuous numeric sequence',
  连续特殊符号序: 'Continuous special sign order',
  '重复字母、数字、特殊符号': 'Repeat letters, numbers, special symbols',
  恢复: 'restore',
  修改密码时不能重复前: 'Do not repeat the preceding part when changing the password',
  用过的密码: 'Used password',
  请输入手机号: 'Enter your telephone number',
  字段的值应该是数值或字符串: 'The field value should be a number or string',
  字段的值应该是数组: 'The field value should be an array',
  被锁定: 'LOCKED',
  员工: 'Employees',
  组长: 'Leader',
  请输入合法的ldap地址: 'Enter a valid LDAP address',
  例如: 'such as',
  请选择正确的加密方式: 'Select the correct encryption mode',
  账号设置: 'Account settings',
  账号有效期: 'Account validity',
  账号到期提醒时间: 'Account expiration notification time',
  账号快到期前提醒_如选择_7天__则在账号到期七天前提醒一次: 'Account before expiring reminds, if choose "7 days", will expire in account 7 days ago to remind',
  '1天': '1 day',
  '7天': '7 days',
  '15天': '15 days',
  账号到期提醒通知方式: 'Account expiration reminder notification method',
  编辑通知模板: 'Edit notification template',
  即将到期提醒: 'Expiration reminder',
  已过期提醒: 'Expired reminder',
  不能小于1次: 'It can\'t be less than once',
  账号过期时间: 'Account expiration at',
  短信: 'SMS',
  账号到期提醒时间不得为空: 'The account expiration reminder time cannot be empty',
  请输入内容: 'Enter the content',
  基础规则: 'Basic rules',
  初始密码: 'Initial password',
  获取方式: 'Access',
  发送随机密码: 'Send a random password',
  密码到期提醒: 'Password expiration reminder',
  提醒时间: 'Reminder time',
  密码快到期前提醒_如选择_7天__则在密码到期七天前提醒一次: 'If you select 7 days, the password will be notified 7 days before the expiration date',
  通知方式: 'Notification method',
  开启账号登录: 'Enabling account login',
  密码错误输入次数超过该值时_账号自动锁定: 'If the number of incorrect password attempts exceeds the threshold, the account is automatically locked',
  锁定时间: 'Locking time',
  退出登录: 'Sign out',
  确认退出登录_: 'Confirm "sign out"?',
  _需要设置新密码: ', You need to set a new password',
  导入覆盖提升: 'After checking, it is allowed to edit the personal information of existing users, and the existing user information will face the risk of being modified, so be cautious.',
  允许对同名用户覆盖更新: 'Allow overwriting update of users with same name',
  已过期: 'EXPIRED',
  未知: 'UNKNOWN',
  已过期_过期时间_: 'Expired (expiration time:',
  天_过期时间_: 'Days (expiration time:',
  过期时间_: 'Expiration date:',
  必填项: 'Required field(s)',
  不能多于32个字符: 'The value contains a maximum of 32 characters',
  请输入正确的邮箱地址: 'Enter the correct email address',
  请输入正确的手机号: 'Enter the correct telephone number',
  请选择账户状态: 'Select the account status',
  请选择在职状态: 'Select active status',
  用户详情: 'User Details',
  编辑用户: 'Edit User',
  暂无数据: 'No data',
  可以尝试_调整关键词_或: 'Try adjusting keywords or',
  清空筛选条件: 'Clear filter',
  数据获取异常: 'Data acquisition exception',
  刷新: 'Refresh',
  '确认离开当前页？': 'Confirm to leave the current page?',
  离开将会导致未保存信息丢失: 'Leaving will result in the loss of unsaved information',
  离开: 'LEAVE',
  '字母、数字、下划线(_)、点(.)、减号(-)字符组成，以字母或数字开头': 'By letters, numbers, (_), (.) , (-), starting with a letter or digit',
  所在公司: 'Company',
  将文件拖到此处或: 'Drag and drop your files here or',
  点击上传: 'Choose file',
  提交1: 'OK',
  已重试: 'Retry ',
  第: 'The ',
  '同步操作失败，请在用户管理后台 API 日志中查询详情': 'The synchronization operation failed. Please check the API logs for details',
  确认删除1: 'OK, delete it.',
  确认停用1: 'OK, deactivate it.',
  中文: 'Chinese',
  不可用目录: 'Unavailable directory',
  '目录类型：': 'Directory type:',
  '登录域：': 'Login domain:',
  '目录状态：': 'Directory status:',
  '更新时间：': 'Update time:',
  目录配置: 'Directory configuration',
  停用: 'Disable',
  停用1: 'DISABLE',
  搜索结果为空: 'The search result is empty',
  '可以尝试 调整关键词 或 ': 'Try adjusting keywords or',
  清空筛选条件: 'Clear filter',
  默认目录不能被停用: 'The default directory cannot be disabled',
  '请先停用，方可删除目录': 'Disable the directory before deleting it',
  'delete-directory': 'Delete the {name} directory?',
  '删除后，该目录下的数据将为你保存': 'After deletion, the data under the directory will be saved for you',
  '天。': 'days.',
  你可以在: 'You can visit',
  '回收站中查看已删除的目录数据，并进行还原、彻底删除的操作。': 'View the deleted directory data in the Recycle bin and restore or delete it completely.',
  'delete-organization': 'Delete the {name} organization?',
  '确认要删除当前用户？': 'Delete the current users?',
  'delete-user': 'Delete the {name} user?',
  '删除后，跨组织的用户数据将不会受到影响；': 'After the deletion, user data across the organization will not be affected.',
  该用户将为你保存: 'The user will save it for you',
  '天，你可以在': 'days, You can be in',
  '回收站中查看已删除的组织数据，并进行还原、彻底删除的操作。': 'In the Recycle bin, view the deleted organization data and restore or completely delete it.',
  蓝鲸智云: 'BLUEKING',
  发送成功: 'Sent successfully',
  已向: 'To',
  '搜索操作用户、操作对象、操作类型': 'Search for an operation user, object, or type',
  回收站: 'Recycling Station',
  回收站将自动保存: 'The recycle bin will save automatically',
  '内删除的数据，数据过期后将无法找回。': 'The deleted data cannot be retrieved after it expires.',
  最近删除用户: 'Recently deleted user',
  最近删除组织: 'Recently deleted organization',
  最近删除目录: 'Recently deleted directory',
  还原: 'Reduction',
  永久删除: 'Permanent deletion',
  '搜索用户名、全名': 'Search for the user name and full name',
  天后: 'days later',
  所属目录: 'Owning directory',
  所属组织: 'Affiliated organization',
  删除操作者: 'Remove operator',
  过期时间: 'Expiration time',
  '该操作会彻底清理当前用户数据，永久无法恢复，请谨慎操作。': 'This operation will completely clear the current user data and cannot be recovered. Therefore, exercise caution when performing this operation.',
  '如需继续操作，请输入【确认删除】进行二次验证：': 'If you need to continue the operation, please enter [Confirm deletion] for secondary verification:',
  '请输入【确认删除】进行确认': 'Please enter [Confirm deletion] to confirm',
  确认删除: 'Confirm deletion',
  请先处理错误项: 'Please handle the error item first',
  执行还原: 'Perform restore',
  '确认要永久删除当前用户？': 'Permanently delete the current user?',
  用户还原预览: 'User Reduction Preview',
  搜索组织名: 'Search organization name',
  '该操作会彻底清理当前组织数据，包括组织下的用户数据及其组织关系，永久无法恢复，请谨慎操作。': 'This operation will completely clear the current organization data, including the user data in the organization and the organization relationship, and cannot be recovered. Therefore, exercise caution when performing this operation.',
  '确认要永久删除当前组织？': 'Permanently delete the current organization?',
  组织还原预览: 'Tissue Reduction Preview',
  组织名: 'Organization name',
  所属父组织: 'Parent organization',
  子组织数: 'Subtissue number',
  用户数: 'Number of users',
  '搜索目录名、登录域': 'Search for the directory name and login domain',
  '该操作会彻底清理当前目录数据，包括目录下的的所有用户数据及相关配置，永久无法恢复，请谨慎操作。': 'This operation will completely clear the data of the current directory, including all user data and related configurations in the directory. Therefore, this operation cannot be recovered. Exercise caution when performing this operation.',
  '确认要永久删除当前目录？': 'Delete the current directory permanently?',
  目录还原预览: 'Directory Reduction Preview',
  组织数: 'Tissue number',
  可还原: 'Reducible',
  '由 admin 在 [回收策略设置] 中统一配置': 'This parameter is centrally configured by admin in Reclamation Policy Settings',
  暂不支持该操作: 'This operation is not supported',
  回收策略: 'Recovery Strategy',
  回收策略设置: 'Reclamation Policy Setting',
  回收站数据保留天数: 'Number of days to retain data in the recycle bin',
  重置: 'Reset',
  回收策略保存成功: 'The reclamation policy is saved successfully.',
  回收策略重置成功: 'The reclamation policy is reset successfully.',
  '30天': '30 days',
  '90天': '90 days',
  '180天': '180 days',
  '1年': '1 year',
  拖拽到此处上传或: 'Drag here to upload or',
  点击上传: 'Click upload',
  '还原成功，已恢复': 'Restore successfully, restored ',
  个目录: ' directories',
  '错误：': 'Error:',
  目录还原成功: 'Directory restoration successfully',
  目录删除成功: 'Directory deletion successfully',
  '确认要还原当前目录？': 'Restore the current directory?',
  无该应用访问权限: 'No access permission for the application',
  返回上一页: 'Return to previous page',
  新建目录: 'New directory',
};
