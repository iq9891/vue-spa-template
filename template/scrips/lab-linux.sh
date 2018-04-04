# lab 部署
# 打包之后拷贝

# 打包
npm run build:lab
# 静态资源
cp -r dist/* ../../{{ name }}
