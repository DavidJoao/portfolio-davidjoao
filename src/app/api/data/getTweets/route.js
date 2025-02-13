import { Cheerio } from "cheerio";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const url = "https://x.com/tacodetripadev";

    try {
        const { data } = await axios.get(url)
        const $ = Cheerio.load(data);

        const posts = [];
        $('a').each((index, element) => {
          titles.push($(element).text());
        });

        return NextResponse.json({ data: posts }, { status: 200 });
    
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Error retreiving tweets", error })
    }
}