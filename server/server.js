const PORT=process.env.PORT || 4000;
const app=require('./src/app')
const http=require('http')

const server=http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Now stream on ${PORT}`);
});