import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { JobType } from '../jobs.contants';
import { Type } from 'class-transformer';

export class LocationDTO {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}
export class CreateJobDTO {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEmail()
  email: string;

  @IsIn(Object.keys(JobType))
  type?: JobType; //    Optional

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsInt()
  @IsNotEmpty()
  experience: number;

  // @IsOptional() // if we don't use ArrayMinSize
  @ArrayMinSize(1)
  @IsString({ each: true })
  tags?: string[];

  @IsBoolean()
  @IsOptional()
  active?: boolean;

  // if location is an Object
  // @ValidateNested()
  // @IsObject()
  // @Type(() => LocationDTO) // First it transform types
  // location: LocationDTO;

  // if location is an array
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => LocationDTO) // First it transform types
  location: LocationDTO[];
}
