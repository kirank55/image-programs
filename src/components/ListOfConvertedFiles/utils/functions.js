// functions related to ListOfConvertedFiles component

export function TextAbstract(name, toext) {
  if (name == null) {
    return "converted file";
  }
  if (name.length <= 40) {
    return name;
  }

  name = name.substring(0, 40);
  var last = name.lastIndexOf(" ");
  name = name.substring(0, last);
  return name + "..." + toext;
}

export function SyncLoadingState({ arg1, arg2, setLoading }) {
  if (arg1 === arg2) {
    console.log("UploadedFiles is equal to converted file data");
    console.log("So, turned off loading. & continue to rendering ");
    setLoading(false);
  } else {
    console.log("UploadedFiles is not equal to converted file data");
    console.log("loading... & converting");
    setLoading(true);
  }
}

export const newfilename = (name, toext) =>
  name && name.slice(0, name.lastIndexOf(".")) + "." + toext;

export function AdjustScrollView(uuid) {
  const nextSibling = document.getElementById(uuid).nextSibling;
  if (nextSibling != null) {
    nextSibling.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const previousSibling = document.getElementById(uuid).previousSibling;
  if (previousSibling != null) {
    previousSibling.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  return;
}
