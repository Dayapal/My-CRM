// import { v2 as cloudinary }
// from "cloudinary";

// import { CRMDocument }
// from "./document.model.js";

// import {
//   createActivity,
// } from "../activities/activity.service.js";

// import {
//   ACTIVITY_TYPES,
// } from "../../constants/activity-types.js";

// export const uploadDocument =
//   async (
//     payload: any,
//     file: Express.Multer.File,
//     organizationId: string,
//     userId: string
//   ) => {

//     const result =
//       await cloudinary.uploader.upload(
//         file.path,
//         {
//           folder:
//             "crm-documents",
//           resource_type:
//             "auto",
//         }
//       );

//     const document =
//       await CRMDocument.create({

//         title:
//           payload.title,

//         originalName:
//           file.originalname,

//         fileUrl:
//           result.secure_url,

//         publicId:
//           result.public_id,

//         mimeType:
//           file.mimetype,

//         size:
//           file.size,

//         entityType:
//           payload.entityType,

//         entityId:
//           payload.entityId,

//         uploadedBy:
//           userId,

//         organization:
//           organizationId,

//       });

//     await createActivity({

//       organization:
//         organizationId,

//       user:
//         userId,

//       type:
//         ACTIVITY_TYPES.DOCUMENT_UPLOADED,

//       entityType:
//         "Document",

//       entityId:
//         document._id.toString(),

//       description:
//         `Uploaded document "${document.title}"`,

//     });

//     return document;

//   };

// export const getDocuments =
//   async (
//     organizationId: string
//   ) => {

//     return CRMDocument.find({

//       organization:
//         organizationId,

//     })

//       .populate(
//         "uploadedBy",
//         "firstName lastName"
//       )

//       .sort({
//         createdAt: -1,
//       });

//   };

// export const getEntityDocuments =
//   async (
//     entityType: string,
//     entityId: string,
//     organizationId: string
//   ) => {

//     return CRMDocument.find({

//       entityType,

//       entityId,

//       organization:
//         organizationId,

//     })

//       .populate(
//         "uploadedBy",
//         "firstName lastName"
//       )

//       .sort({
//         createdAt: -1,
//       });

//   };

// export const deleteDocument =
//   async (
//     id: string,
//     organizationId: string
//   ) => {

//     const document =
//       await CRMDocument.findOne({

//         _id: id,

//         organization:
//           organizationId,

//       });

//     if (!document) {
//       throw new Error(
//         "Document not found"
//       );
//     }

//     await cloudinary.uploader.destroy(
//       document.publicId,
//       {
//         resource_type:
//           "raw",
//       }
//     );

//     await CRMDocument.findByIdAndDelete(
//       id
//     );

//     return true;

//   };