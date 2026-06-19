import { Company }from "./company.model.js";
import { Contact }from "../contacts/contact.model.js";

export const createCompany =
  async (
    payload: any,
    organizationId: string
  ) => {
    return Company.create({
      ...payload,
      organization:
        organizationId,
    });
  };

export const getCompanies =
  async (
    organizationId: string,
    query: any
  ) => {
    const {
      search,
      page = 1,
      limit = 10,
    } = query;

    const filter: any = {
      organization:
        organizationId,
    };

    if (search) {
      filter.$text = {
        $search: search,
      };
    }

    const skip =
      (Number(page) - 1) *
      Number(limit);

    const companies =
      await Company.find(filter)
        .skip(skip)
        .limit(Number(limit))
        .sort({
          createdAt: -1,
        });

    const total =
      await Company.countDocuments(
        filter
      );

    return {
      companies,
      total,
      page: Number(page),
    };
  };

  export const getCompanyById =
  async (
    companyId: string,
    organizationId: string
  ) => {
    return Company.findOne({
      _id: companyId,
      organization:
        organizationId,
    });
  };


  export const updateCompany =
  async (
    companyId: string,
    organizationId: string,
    payload: any
  ) => {
    return Company.findOneAndUpdate(
      {
        _id: companyId,
        organization:
          organizationId,
      },
      payload,
      {
        new: true,
        runValidators: true,
      }
    );
  };


  export const deleteCompany =
  async (
    companyId: string,
    organizationId: string
  ) => {
    return Company.findOneAndDelete({
      _id: companyId,
      organization:
        organizationId,
    });
  };

  
  export const getCompanyDetails =
  async (
    companyId: string,
    organizationId: string
  ) => {
    const company =
      await Company.findOne({
        _id: companyId,
        organization:
          organizationId,
      });
  if (!company) {
      return null;
    }
    const contacts =
      await Contact.find({
        company: companyId,
        organization:
          organizationId,
      });

    return {
      company,
      contacts,
    };
  };