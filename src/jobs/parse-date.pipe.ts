import {
  ArgumentMetadata,
  BadGatewayException,
  Injectable,
  Optional,
  PipeTransform,
} from '@nestjs/common';

interface ParseDateOptions {
  fromTimeStamp: boolean;
  errorMsg: string;
}
@Injectable()
export class ParseDatePipe implements PipeTransform {
  private fromTimeStamp: boolean;
  private errorMsg: string;

  constructor(@Optional() options: ParseDateOptions) {
    this.fromTimeStamp =
      options?.fromTimeStamp !== undefined ? options.fromTimeStamp : true;
    this.errorMsg = options?.errorMsg || 'Invalid date';
  }
  transform(value: string | number, metadata: ArgumentMetadata) {
    const { data: isKeyGiven } = metadata;
    if (isKeyGiven) {
      // value is already assigned
    } else {
      if (typeof value === 'object' && 'timestamp' in value) {
        value = value['timestamp'];
      } else {
        throw new BadGatewayException('Invalid value format');
      }
    }
    const date = this.fromTimeStamp
      ? this.convertTimeStamp(value)
      : new Date(value);

    if (!date || isNaN(+date)) {
      const errorMsg = isKeyGiven ? `${isKeyGiven} is invalid` : this.errorMsg;
      throw new BadGatewayException(errorMsg);
    }
    // check metadata
    const { metatype } = metadata;
    switch (metatype) {
      case String:
        return date.toISOString();
      case Number:
        return date.getTime();
      case Date:
        return date;
      default:
        return date;
    }
  }

  private convertTimeStamp(timestamp: string | number) {
    timestamp = +timestamp;

    const isSecond = !(timestamp > (Date.now() + 24 * 60 * 60 * 1000) / 1000);
    return isSecond ? new Date(timestamp * 1000) : new Date(timestamp);
  }
}
