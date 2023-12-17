import { JSDOM } from "jsdom";
import axios from "axios";
import { unstable_noStore as noStore } from 'next/cache';

const GITHUB_URL = "https://github.com/ericvpineda";

export async function GET() {
  const projectsFormatted = [];
  noStore()
  try {
    let { data } = await axios.get(GITHUB_URL, {cache: false});
    let DOM = new JSDOM(data);
    let document = DOM.window.document;
    const documentProjects = document.querySelectorAll(
      "svg + span[data-view-component='true'] > a "
    );

    for (let project of documentProjects) {
      const url = "https://github.com" + project.href;
      let { data } = await axios.get(url, {cache: false});

      DOM = new JSDOM(data);
      document = DOM.window.document;
      const documentImage = document.querySelectorAll(
        "p[dir='auto'] > a > img"
      );
      const length = documentImage.length;
      const item = {
        name: "",
        image: "",
        url,
      };
      
      item["name"] = project.textContent.replaceAll("\n", "");

      if (length > 0) {
        const imageSrc = documentImage[length - 1].src;
        item["image"] = "https://www.github.com" + imageSrc;
      }
      projectsFormatted.push(item);
    }

    return new Response(JSON.stringify(projectsFormatted), { status: 200 });
  } catch (error) {
    return new Response("Unable to fetch projects.", { status: 500 });
  }
}
