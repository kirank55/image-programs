export async function downloadZipofimages(convertedFiles) {
  const JSZip = await import("jszip").then((m) => m.default);

  const zip = new JSZip();

  convertedFiles.forEach((file) => {
    if (!file.error) {
      zip.file(file.name, file.src.split("base64,")[1], { base64: true });
    }
  });

  // console.log(zip);

  zip.generateAsync({ type: "blob" }).then((content) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "converted_images.zip";

    // appending is necessary for firefox
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

export async function downloadZipofPDFs(convertedFiles) {
  const JSZip = await import("jszip").then((m) => m.default);

  const zip = new JSZip();

  convertedFiles.forEach((file) => {
    // var doc = file.doc;
    const { doc, name } = file;

    if (typeof doc !== "undefined") {
      try {
        zip.file(name, doc.output("blob"));
      } catch (e) {
        console.error(e);
      }
    }
  });

  zip.generateAsync({ type: "blob" }).then((content) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "converted_images.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
