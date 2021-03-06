const fetch = require("node-fetch");
const express = require("express");
require('dotenv').config();

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`app is running at port ${port}`));

app.get('/reply/:keyword', async(req, res)=>{
    const encoded_keyword = encodeURI(req.params.keyword);
    const api_url = `http://api.qingyunke.com/api.php?key=free&appid=0&msg=${encoded_keyword}`;
    const api_res = await fetch(api_url);
    const json = await api_res.json();
    res.json(json.content);
});

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/index.html");
  });
  