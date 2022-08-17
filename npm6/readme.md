`mkdir npm6`
`cd npm6`

`npm install element-plus --save`
`npm install ant-design-vue --save`
`npm install dayjs@1.10.4 --save`

```
此时的目录结构：
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

然后执行命令
`npm dedupe`

> removed 2 packages, changed 1 package, and audited 64 packages in 2s

```
+-- node_modules
|   +-- ...
|   +-- ant-design-vue
|   +-- element-plus
|   +-- dayjs@1.11.5
|   +-- ...
+-- package.json
```

> Searches the local package tree and attempts to simplify the overall structure by moving dependencies further up the tree, where they can be more effectively shared by multiple dependent packages
