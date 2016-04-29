# ThinkPHP种子项目

## 项目介绍
框架为ThinkPHP

	配置好了gulp，能执行js的混淆压缩及代码检查，sass的编译，css自动添加前缀等功能


## 项目架构

前端开发workflow:

src中为js和scss的源代码。通过gulp实时将js和scss文件编译到Public/static目录下,并生成maps到maps/app.css.map,生成的静态资源目录结构如下：
```javascript
Public
	|----static
	|		|----maps
	|		|		|-----app.css.map // css的map文件
	|		|----app.css // css 压缩文件
	|		|----app.js // js 压缩文件
```

#### 忽略文件
```javascript
.phpintel // sublime text 生成的项目文件
.idea // phpstorm生成的项目文件
App/Runtime // thinkphp生成的缓存文件
node_modules // gulp依赖的npm包
bower_components // 这里有问题？我如何引入第三方包。 
sftp-config.json　// sublime text sftp插件配置文件
```
## 编码规范
## 模块详情
## 测试
## 备注