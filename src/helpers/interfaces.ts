import { FILE_TYPE } from "@/helpers/enums";

export interface IParams {
  page?: number;
  perPage?: number;
  sort?: ISort;
  filter?: IFilter[];
}

export interface ISort {
  name?: string;
  direction?: "asc" | "desc";
}

export interface IFilter {
  key: string;
  operation: ">" | ">=" | "<" | "<=" | "=" | "!=" | "%_%" | "%_" | "_%" | "in";
  value: string | number | string[] | number[] | any;
  type: "STRING" | "NUMBER" | "JSON" | "BOOL";
}

export interface IMeta {
  totalPages: number;
  totalItems: number;
  current: number;
  perPage: number;
}

export interface IFile {
  id: string;
  name: string;
  url: string;
  size: string;
  type: FILE_TYPE;
  extension: string;
  uuid: string;
}

export interface IMinFile {
  id: string;
  name: string;
  url: string;
  uuid: string;
}

export interface IMultiName {
  uz: string;
  en: string;
  ru: string;
}

export interface IIdAndMultiName {
  id: string;
  name: IMultiName;
}

export interface IIdAndName {
  id: string;
  name: string;
}
