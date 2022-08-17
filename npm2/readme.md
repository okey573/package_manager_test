`mkdir npm2`

`cd npm2`

`npm install element-plus --save`

```
+-- node_modules
|   +-- ...
|   +-- element-plus
|   +-- dayjs@1.11.5
|   +-- ...
+-- package.json
```

`npm install dayjs@1.11.2 --save`

```
+-- node_modules
|   +-- ...
|   +-- dayjs@1.11.2
|   +-- element-plus
|   |   +-- node_modules
|   |   |   +-- dayjs@1.11.5
|   +-- ...
+-- package.json
```

就算当前项目中已通过间接依赖存在了dayjs，若再安装指定版本，还是会优先安装指定的版本。

若指定版本不满足其他包的版本要求，则会在对应包下再安装一份满足条件的版本；
若指定版本满足其他包的版本要求，则会统一使用新的依赖版本

若当时dayjs时指定版本为1.11.4
`npm install dayjs@1.11.4 --save`

```
+-- node_modules
|   +-- ...
|   +-- dayjs@1.11.4
|   +-- element-plus
|   +-- ...
+-- package.json
```
