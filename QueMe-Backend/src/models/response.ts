import { Response } from "express";
export const ResponseModel = (
  res: Response,
  code: number,
  data: Object | null,
  error: Object | null
) =>
  res.status(code).send({
    status: code,
    data,
    error,
  });
