# 测试部署
# 传到200服务器的 backend 后台项目里

# 打包
npm run build:test
# 静态资源
# scp -r dist/* limenglong@192.168.1.200:webroot/backend/{{ name }}
# 外网 ip
scp -r dist/* limenglong@58.132.182.142:webroot/backend/{{ name }}
