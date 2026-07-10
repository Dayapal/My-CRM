import {

FileText,

Image,

FileSpreadsheet,

FileArchive,

Presentation,

} from "lucide-react";

interface Props{

mimeType:string;

}

export default function FileTypeIcon({

mimeType,

}:Props){

if(

mimeType.includes("image")

){

return(

<Image

className="h-10 w-10 text-green-600"

/>

);

}

if(

mimeType.includes("pdf")

){

return(

<FileText

className="h-10 w-10 text-red-600"

/>

);

}

if(

mimeType.includes("sheet")

||

mimeType.includes("excel")

){

return(

<FileSpreadsheet

className="h-10 w-10 text-green-700"

/>

);

}

if(

mimeType.includes("presentation")

||

mimeType.includes("powerpoint")

){

return(

<Presentation

className="h-10 w-10 text-orange-600"

/>

);

}

return(

<FileArchive

className="h-10 w-10 text-slate-600"

/>

);

}