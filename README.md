# webpackPractice

# 知识点说明
## devServer表示服务，其中inline表示可以做到热更新，即不用手动刷新页面，当页面中有改动时，会自动刷新

## devtool:  'eval'  表示开发环境
## devtool:  'production' 表示生产环境


# plugin中
## CopyWebpackPlugin 函数中表示可以复制哪个文件到目标目录当中，但是法制的文件在目标目录中不显示，包括从入口文件（ertry）生成的output文件，在目标目录中也不显示