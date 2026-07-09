// import { useState } from "react";

// import DashboardLayout
// from "@/layouts/DashboardLayout";

// import { Button }
// from "@/components/ui/button";

// import DocumentsTable
// from "../components/DocumentsTable";

// import UploadDocumentDialog
// from "../components/UploadDocumentDialog";

// import {
//   useDocuments,
// } from "../useDocuments";

// export default function DocumentsPage() {

//   const [
//     open,
//     setOpen,
//   ] = useState(false);

//   const {
//     data: documents = [],
//     isLoading,
//     isError,
//   } = useDocuments();

//   if (isLoading) {

//     return (

//       <DashboardLayout>

//         <div className="flex h-[60vh] items-center justify-center">

//           Loading Documents...

//         </div>

//       </DashboardLayout>

//     );

//   }

//   if (isError) {

//     return (

//       <DashboardLayout>

//         <div className="flex h-[60vh] items-center justify-center text-red-500">

//           Failed To Load Documents

//         </div>

//       </DashboardLayout>

//     );

//   }

//   return (

//     <DashboardLayout>

//       <div className="space-y-6">

//         <div
//           className="
//             flex
//             flex-col
//             gap-4

//             md:flex-row
//             md:items-center
//             md:justify-between
//           "
//         >

//           <div>

//             <h1 className="text-3xl font-bold">

//               Documents

//             </h1>

//             <p className="text-slate-500">

//               Manage contracts,
//               invoices,
//               quotations,
//               images and files.

//             </p>

//           </div>

//           <Button
//             onClick={() =>
//               setOpen(true)
//             }
//           >

//             Upload Document

//           </Button>

//         </div>

//         <DocumentsTable
//           documents={
//             documents
//           }
//         />

//         <UploadDocumentDialog
//           open={open}
//           onClose={() =>
//             setOpen(false)
//           }
//         />

//       </div>

//     </DashboardLayout>

//   );

// }