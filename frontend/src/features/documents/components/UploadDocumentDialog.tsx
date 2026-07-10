import {
  useState,
} from "react";

import {

Dialog,

DialogContent,

DialogHeader,

DialogTitle,

} from "@/components/ui/dialog";

import {

Button,

} from "@/components/ui/button";

import {

uploadDocument,

} from "../documents.api";

interface Props {

open:boolean;

onClose:()=>void;

}

export default function UploadDocumentDialog({

open,

onClose,

}:Props){

const [formData,setFormData]=

useState({

title:"",

entityType:"Lead",

entityId:"",

file:null as File | null,

});

const handleUpload=

async(

e:React.FormEvent

)=>{

e.preventDefault();

if(!formData.file){

alert("Please Select File");

return;

}

try{

await uploadDocument(formData);

alert("Document Uploaded");

onClose();

window.location.reload();

}catch(err){

console.log(err);

alert("Upload Failed");

}

};

return(

<Dialog

open={open}

onOpenChange={onClose}

>

<DialogContent className="sm:max-w-xl">

<DialogHeader>

<DialogTitle>

Upload Document

</DialogTitle>

</DialogHeader>

<form

onSubmit={handleUpload}

className="space-y-4"

>

<input

className="w-full rounded border p-3"

placeholder="Document Title"

value={formData.title}

onChange={(e)=>

setFormData({

...formData,

title:e.target.value,

})

}

/>

<select

className="w-full rounded border p-3"

value={formData.entityType}

onChange={(e)=>

setFormData({

...formData,

entityType:e.target.value,

})

}

>

<option value="Lead">

Lead

</option>

<option value="Contact">

Contact

</option>

<option value="Company">

Company

</option>

<option value="Deal">

Deal

</option>

<option value="Task">

Task

</option>

<option value="Meeting">

Meeting

</option>

</select>

<input

className="w-full rounded border p-3"

placeholder="Entity Id"

value={formData.entityId}

onChange={(e)=>

setFormData({

...formData,

entityId:e.target.value,

})

}

/>
<input

type="file"

className="w-full"

accept="

.pdf,

.doc,

.docx,

.xls,

.xlsx,

.ppt,

.pptx,

.png,

.jpg,

.jpeg,

.webp

"

onChange={(e)=>

setFormData({

...formData,

file:

e.target.files

?e.target.files[0]

:null,

})

}

/>

<div className="flex justify-end gap-3">

<Button

type="button"

variant="outline"

onClick={onClose}

>

Cancel

</Button>

<Button

type="submit"

>

Upload

</Button>

</div>

</form>

</DialogContent>

</Dialog>

);

}