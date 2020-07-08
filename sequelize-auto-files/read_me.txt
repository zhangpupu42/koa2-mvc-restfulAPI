全局安装 sequelize-auto mysql2 之后，自动生成 schema（sequelize对应的模型文件）
`
sequelize-auto -h 127.0.0.1 -d 数据库名 -u 用户名 -x 密码 -o 输出目录 -a sequelize-auto-file/additional.json(对应的additional.json文件) -c sequelize-auto-file/config.json(对应的config文件)
`

使用sequelize-auto 生成mysql 表时主键没有 autoIncrement: true 属性，这会导致插入数据时报错。看git上面是已经解决了的，解决方法是修改查询语句模板。我用的是最新版，不懂为何没有修复这个问题

https://github.com/sequelize/sequelize-auto/pull/359/commits/bd15c8108e6bb6058734e5ad4e4cd4ee14a8736d

在第45行,  C.extra \   改为  , C.EXTRA AS extra \

npm 包的全局路径如下

Windows XP - %USERPROFILE%\AppData\npm\node_modules
Windows 7, 8 and 10 - %USERPROFILE%\AppData\Roaming\npm\node_modules

找到sequelize-auto路径下的文件 lib/dialects/index.js 修改后重新生成实体就可以了
