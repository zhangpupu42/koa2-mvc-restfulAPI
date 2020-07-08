# koa2-mvc

拉取下来之后 直接 npm install 就能用

koa2 sequelize mysql

目录结构介绍(这里不介绍 koa2 项目模板生成的目录)：
```
config/config.js  |-- 一些配置写这儿
config/db.js  |-- sequelize链接数据库的配置
controller/base.controller.js  |-- C层 Controller 的基类，暂时放的是所有的 Model
controller/...  |-- 其他 controller
model/base.model.js  |-- M层 Model 的基类，暂时只有所有的 sequelize 对应的 schema
model/...  |-- M层其他 model
routes/...  |-- koa-router 标准的 router 写法，也有对应的 Controller 使用例子
schema/...  |-- sequelize-auto 生成的所有表对应的模型，这里叫 schema 不自定义的话，默认应该是 models
sequelize-auto-files/...  |-- sequelize-auto 生成模型要使用到的文件，里面有一个简单的介绍文件
controller.js  |-- routes 里面使用的 controller 直接调用的这个文件
model.js  |-- base.controller.js 里面使用的 Model 就是这里的
rest.js  |-- restFulAPI
router.js  |-- app.js 里直接引入的这个文件，所有路由在这里注册上去的
templating.js  |-- app.js 引入这个文件，在这个文件里注册的 art-template
```
**提示，这个也就适合新手过来玩玩，大神请飘过**


记录一下创建的时候怎么把代码提到对应的库上的指令
Quick setup — if you’ve done this kind of thing before
or	
HTTPS
SSH
https://github.com/zhangpupu42/koa2-mvc.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# koa2-mvc" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/zhangpupu42/koa2-mvc.git
git push -u origin master
                
…or push an existing repository from the command line
git remote add origin https://github.com/zhangpupu42/koa2-mvc.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.