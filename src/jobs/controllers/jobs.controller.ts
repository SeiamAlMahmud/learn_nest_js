import { HttpStatus } from 'http-status-string';
import { JobsService } from './../services/jobs.service';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
  // UsePipes,
} from '@nestjs/common';
import { CreateJobDTO } from '../dto/create-job.dto';
// import { JoiValidationPipe } from '../joi-validation.pipe';
// import { createJobSchema } from '../create-job.schema';

@Controller()
export class JobsController {
  constructor(private readonly JobsService: JobsService) {
    console.log('JobsController initialized');
  }
  @Post('/createJob')
  // @UsePipes(ValidationPipe) // if geeting as an Object
  // createJob(@Body() createJobDto: CreateJobDTO) {
  // if geeting as an Object
  createJob(
    @Body(new ParseArrayPipe({ items: CreateJobDTO }), ValidationPipe)
    createJobDto: CreateJobDTO,
  ) {
    // console.log(createJobDto);
    return createJobDto;
    //  this.JobsService.createJob(createJobDto);
  }
  @Get('user/:id')
  findJobById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST_400 }),
    )
    id: number,
  ) {
    // findJobById(@Param('id', ParseIntPipe) id: number) {
    // make params string to id
    console.log(id);
    return this.JobsService.findJobById(id);
  }

  @Put('/salary/:id')
  // @UsePipes(ParseIntPipe) //float value are not supported
  // incSalary(@Param('id') id: number, @Query('increment') inc: number) {
  incSalary(
    @Param('id', ParseIntPipe) id: number,
    @Query('increment', ParseFloatPipe) inc: number,
  ) {
    return this.JobsService.incSalary(id, inc);
  }

  @Put('/status/:id')
  toggleJobStatus(
    @Param('id', ParseIntPipe) id: number,
    @Query('active', ParseBoolPipe) active: boolean,
  ) {
    return this.JobsService.toggleJobStatus(id, active);
  }
  @Put('exp/:id')
  setUpdateJobExp(
    @Param('id') id: number,
    @Body('exp', new DefaultValuePipe(1), ParseIntPipe) exp: number,
  ) {
    return this.JobsService.setJobExp(id, exp);
  }
  @Put('/interview/:id')
  setJobInterview(
    @Param('id', ParseIntPipe) id: number,
    @Body() // globally availavle ParseDatePipe()
    date: string,
  ) {
    console.log(date);
    return { date, jobId: id / 1000 };
    // return this.JobsService.setJobInterview(id, status);
  }
}
