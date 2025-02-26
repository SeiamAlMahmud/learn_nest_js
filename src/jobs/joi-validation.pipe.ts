import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: Record<string, any>) {
    const { error } = this.schema.validate(value);

    if (error) {
      console.log(error);
      throw new BadRequestException({
        error: 'Validation failed',
        message: error.message.replace(/("|[\d])/g, ''),
      });
    }
    return value;
  }
}
