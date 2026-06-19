import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as ContactService
from "./contact.service.js";

export const createContact =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const contact =
        await ContactService.createContact(
          req.body,
  req.user.organizationId,
  req.user.userId
        );

      res.status(201).json({
        success: true,
        message:
          "Contact created",
        data: contact,
      });
    }
  );

  export const getContacts =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const contacts =
        await ContactService.getContacts(
          req.user
            .organizationId,
          req.query
        );

      res.json({
        success: true,
        data: contacts,
      });
    }
  );

  export const getContact = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const contact =
      await ContactService.getContactById(
        req.params.id as string,
        req.user.organizationId
      );

    res.json({
      success: true,
      data: contact,
    });
  }
);

export const updateContact = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const contact =
      await ContactService.updateContact(
         req.params.id as string,
  req.user.organizationId,
  req.body,
  req.user.userId
      );

    res.json({
      success: true,
      message: "Contact updated",
      data: contact,
    });
  }
);


export const deleteContact = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    await ContactService.deleteContact(
      req.params.id as string,
      req.user.organizationId
    );

    res.json({
      success: true,
      message: "Contact deleted",
    });
  }
);