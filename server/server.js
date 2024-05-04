let express = require("express");
let app = express();
let http = require("http").createServer(app);
let io = require("socket.io")(http);
let port = process.env.PORT || 8080;
let cors = require("cors");
let config = {
    origin: "https://reactchat-pmf5.onrender.com",
    credentials: true,

}
app.use(cors(config));
app.get("/", (req, res) => {
    res.send("hello");
})
//////ios
let users = 0;
io.on("connection", (socket) => {
    //    //
    socket.on("chat", (data, name) => {

        console.log(data, name);
        socket.emit("chat", data);

        socket.broadcast.emit("chat", ` ${data} `, name)
    });
    socket.on("discoonect", () => {
        users--;
        io.emit("users", users)

    })

})
//io.listen(http)
http.listen(port);
