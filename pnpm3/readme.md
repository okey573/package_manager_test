模拟从代码仓库clone代码：拷贝npm3下的package.json过来， 然后安装依赖
`pnpm install`

会看到报错:
> Unmet peer dependencies
> 
> Peer dependencies that should be installed:
> 
> vue@">=3.2.0 <4.0.0"

此时需要添加vue依赖
`pnpm add vue --save`

然后再install后成功


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
pnpm3的目录结构：
+-- node_modules
|   +-- .pnpm
|   |   +-- ...
|   |   +-- ant-design-vue@3.2.11
|   |   |   +-- node_modules
|   |   |   |   +-- ...
|   |   |   |   +-- dayjs@1.11.5
|   |   |   |   +-- ...
|   |   +-- dayjs@1.11.5
|   |   +-- element-plus@2.2.13
|   |   |   +-- node_modules
|   |   |   |   +-- ...
|   |   |   |   +-- dayjs@1.11.5
|   |   |   |   +-- ...
|   +-- ant-design-vue
|   +-- dayjs
|   +-- element-plus
|   +-- vue
+-- package.json
+-- pnpm-lock.yaml
```

在文件资源管理器里可以看到ant-design-vue, dayjs 这些重复依赖都是以符号链接的形式存在
