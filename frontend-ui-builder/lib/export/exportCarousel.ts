import JSZip from "jszip";
import { saveAs } from "file-saver";

export async function exportCarousel(
    html: string,
    css: string,
    js: string
) {
    const zip = new JSZip();

    zip.file("index.html", html);
    zip.file("styles.css", css);
    zip.file("script.js", js);

    const content = await zip.generateAsync({
        type: "blob",
    });

    saveAs(content, "carousel.zip");
}