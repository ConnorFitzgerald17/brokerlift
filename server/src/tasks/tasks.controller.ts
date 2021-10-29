import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  update(@Body() createTaskDto: CreateTaskDto, @Param('id') id): Promise<Task> {
    return this.tasksService.update(id, createTaskDto);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }
}
