`mkdir npm2`

`cd npm2`

`npm install element-plus --save`
`npm install ant-design-vue --save`

```
+-- node_modules
|   +-- ...
|   +-- ant-design-vue
|   +-- element-plus
|   +-- dayjs@1.11.5
|   +-- ...
+-- package.json
```

`npm install dayjs@1.10.4 --save`

```
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

依赖的依赖不共享
