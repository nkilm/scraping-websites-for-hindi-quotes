const { default: axios } = require("axios")
const cheerio = require("cheerio")


URL = "https://muskaanhindi.com/motivational-quotes-in-hindi/"

async function getInfo() {
    const {data} = await axios.get(URL);
    // console.log(data);
    const $ = await cheerio.load(data);
    $("blockquote").each((index,obj)=>{
        console.log(index);
    })

}

getInfo()