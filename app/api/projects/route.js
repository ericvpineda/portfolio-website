import { JSDOM } from "jsdom";

export async function GET() {
  try {
    const projectsFormatted = [];
    
    let response = await fetch("https://github.com/ericvpineda");
    let html = await response.text();

    let DOM = new JSDOM(html);
    let document = DOM.window.document;
    const documentProjects = document.querySelectorAll(
      "svg + span[data-view-component='true'] > a "
    );

    
    for (let project of documentProjects) {
      console.log("DEBUG: project=", project.href)
      response = await fetch("https://github.com" + project.href);
      html = await response.text();

      DOM = new JSDOM(html);
      document = DOM.window.document;
      const documentImage = document.querySelectorAll(
        "p[dir='auto'] > a > img"
      );
      const length = documentImage.length;
      const item = {
        name: "",
        image: ""
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
