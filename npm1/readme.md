`mkdir npm1`

`cd npm1`

`npm install dayjs@1.11.2 --save`

```
此时node_modules下的dayjs版本为1.11.2
+-- node_modules
|   +-- dayjs@1.11.2
+-- package.json
```

`npm install element-plus --save`

安装完成后，dayjs版本升级为1.11.5

```
+-- node_modules
|   +-- dayjs@1.11.5
|   +-- element-plus@2.2.13
+-- package.json
```

在element-plus的package.json中看到，element-plus也依赖了dayjs
element-plus声明依赖dayjs的最低版本为1.11.3，项目中声明dayjs的最低版本为1.11.2，所以提升到当前的最新版本1.11.5
