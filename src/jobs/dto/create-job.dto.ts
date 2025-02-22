import { JobType } from '../jobs.contants';

export class CreateJobDTO {
  id?: number;
  companyName: string;
  title: string;
  salary: number;
  experience: number;
  email: string;
  type?: JobType; //    Optional
  active?: boolean;
  tags?: string[];
}
