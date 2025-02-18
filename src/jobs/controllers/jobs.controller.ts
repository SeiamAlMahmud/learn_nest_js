import { HttpStatus } from 'http-status-string';
import { JobsService, User } from './../services/jobs.service';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  // UsePipes,
} from '@nestjs/common';

@Controller()
export class JobsController {
  constructor(private readonly JobsService: JobsService) {
    console.log('JobsController initialized');
  }
  @Post('/createJob')
  createJob(@Body() createJobDto: User) {
    console.log(createJobDto);
    return this.JobsService.createJob(createJobDto);
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
}
