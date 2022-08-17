模拟从代码仓库clone代码：拷贝npm3下的package.json过来， 然后安装依赖
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
npm4的目录结构：
+-- node_modules
|   +-- ...
|   +-- dayjs@1.11.5
|   +-- ant-design-vue
|   +-- element-plus
|   +-- ...
+-- package.json
```

同样的代码，同样的脚本，但是生成的依赖不同，这是因为没有锁定版本。
