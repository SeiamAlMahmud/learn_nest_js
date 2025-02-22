import * as joi from 'joi';
import { JobType } from './jobs.contants';

export const createJobSchema = joi.object({
  companyId: joi.string().required(),
  companyName: joi.string().required(),
  title: joi.string().required(),
  email: joi.string().email().required(),
  type: joi.string().valid(...Object.keys(JobType)),
  experience: joi.number().required(),
  salary: joi.number().required(),
  tags: joi.array().items(joi.string()).min(0),
  isActive: joi.boolean(),
});
