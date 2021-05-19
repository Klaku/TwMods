import Express from "express";
import cors from "cors";
var app = Express();
app.use(cors());
app.get('/',(req,rep)=>{
    rep.sendFile(__dirname+'/html/index.html');
});
app.get('/script', (req,rep)=>{
    rep.sendFile(__dirname+'/main.js');
})
app.use(Express.static(__dirname));
app.listen(8080);