import express from "express";
const app= express();
const port= 3000;

app.get("/",(req,res)=>{
res.send("<h1> Hello </h1>");
})

app.get("/about",(req,res)=>{
  res.send("<h1> About me </h1> <p> Hi my name is Isha <p>");
  })

app.get("/contact",(req,res)=>{
  res.send("<h1> Contact Me </h1> <ul> <li> Number-8824042331</li> <li> Email- isha@gmail.com</li> </ul> ");
  })
  
app.get("/", (req, res) =>{
  console.log(req.rawHeaders);
})


app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
}
)
