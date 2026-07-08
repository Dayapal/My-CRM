import multer from "multer";

import path
from "path";

const storage =
  multer.diskStorage({

    destination(
      req,
      file,
      cb
    ) {

      cb(
        null,
        "uploads/"
      );

    },

    filename(
      req,
      file,
      cb
    ) {

      cb(

        null,

        `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2)}${path.extname(
          file.originalname
        )}`

      );

    },

  });

const fileFilter =
(
  req: any,
  file: any,
  cb: any
) => {

  const allowed = [

    "image/jpeg",

    "image/png",

    "image/webp",

    "application/pdf",

    "application/msword",

    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    "application/vnd.ms-excel",

    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

    "application/vnd.ms-powerpoint",

    "application/vnd.openxmlformats-officedocument.presentationml.presentation",

  ];

  if (
    allowed.includes(
      file.mimetype
    )
  ) {

    cb(
      null,
      true
    );

  } else {

    cb(
      new Error(
        "Unsupported file type"
      )
    );

  }

};

const upload =
  multer({

    storage,

    fileFilter,

    limits: {

      fileSize:
        20 *
        1024 *
        1024,

    },

  });

export default upload;