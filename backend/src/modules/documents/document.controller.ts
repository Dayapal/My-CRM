// import {
//   Request,
//   Response,
// } from "express";

// import { asyncHandler }
// from "../../utils/asyncHandler.js";

// import * as DocumentService
// from "./document.service.js";

// export const uploadDocument =
//   asyncHandler(
//     async (
//       req: Request,
//       res: Response
//     ) => {

//       if (!req.file) {
//         return res.status(400).json({
//           success: false,
//           message: "File is required",
//         });
//       }

//       const document =
//         await DocumentService.uploadDocument(
//           req.body,
//           req.file,
//           req.user.organizationId,
//           req.user.userId
//         );

//       res.status(201).json({
//         success: true,
//         message:
//           "Document uploaded successfully",
//         data: document,
//       });

//     }
//   );

// export const getDocuments =
//   asyncHandler(
//     async (
//       req: Request,
//       res: Response
//     ) => {

//       const documents =
//         await DocumentService.getDocuments(
//           req.user.organizationId
//         );

//       res.json({
//         success: true,
//         data: documents,
//       });

//     }
//   );

// export const getEntityDocuments =
//   asyncHandler(
//     async (
//       req: Request,
//       res: Response
//     ) => {

//       const documents =
//         await DocumentService.getEntityDocuments(
//           req.params.entityType,
//           req.params.entityId,
//           req.user.organizationId
//         );

//       res.json({
//         success: true,
//         data: documents,
//       });

//     }
//   );

// export const deleteDocument =
//   asyncHandler(
//     async (
//       req: Request,
//       res: Response
//     ) => {

//       await DocumentService.deleteDocument(
//         req.params.id,
//         req.user.organizationId
//       );

//       res.json({
//         success: true,
//         message:
//           "Document deleted successfully",
//       });

//     }
//   );