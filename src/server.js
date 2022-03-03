import express from 'express'

const app = express();

console.log("hi");

app.set("view engine", "pug"); // view 파일 형식
app.set("views", __dirname + "/views") // view파일들의 경로 설정, __dirname = 현재 폴더위치 (scpark_node/src)
app.use("/public", express.static(__dirname+"/public")); // /public 으로 요청 보낼 시, 현재 위치/public 경로에서 찾으라

function handelReq(req, res) {
    res.render("home"); // home(view파일)을 렌더링 해줘라
}

app.get("/", handelReq)

app.listen(3000);
