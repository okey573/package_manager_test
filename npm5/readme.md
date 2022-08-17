模拟从代码仓库clone代码：拷贝npm3下的package.json和package-lock.json过来， 然后安装依赖
`npm install`

```
npm3的目录结构：
+-- node_modules
|   +-- ...
|   +-- dayjs@1.10.4
|   +-- ant-design-vue
|   |   +-- node_modules
|   |   |   +-- dayjs@1.11.5
|   +-- element-plus
|   |   +-- node_modules
|   |   |   +-- dayjs@1.11.5
|   +-- ...
+-- package.json
```

```
npm5的目录结构：
+-- node_modules
|   +-- ...
|   +-- dayjs@1.10.4
|   +-- ant-design-vue
|   |   +-- node_modules
|   |   |   +-- dayjs@1.11.5
|   +-- element-plus
|   |   +-- node_modules
|   |   |   +-- dayjs@1.11.5
|   +-- ...
+-- package.json
```

两个工程的依赖结构完全相同
上传package-lock.json这类lockFile是很有必要的，比如前段时间发布的vue2的最后一个版本vue2.7（代号Naruto）支持了Composition Api 这就是同一个大版本中的重大更新
