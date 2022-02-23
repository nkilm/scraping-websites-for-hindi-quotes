const { default: axios } = require("axios")
const cheerio = require("cheerio")


URL = "https://muskaanhindi.com/motivational-quotes-in-hindi/"


async function getInfo() {
    const {data} = await axios.get(URL);
    const $ = await cheerio.load(data);
    const quotes = await $("blockquote p");
    quotes.each((index,ele)=>{
        console.log(`${$(ele).text()}\n`);
    })
}

getInfo();
