import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Request } from 'express';

let cats: Cat[] = [];
class Cat {
  constructor(private name: string, private age: number) {}
}

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET /animals/cats
  @Get()
  getCats(): Cat[] {
    return cats;
  }

  // POST /animals/cats
  @Post('')
  createCat(@Req() req: Request): Cat {
    const cat = new Cat(req.body.name, req.body.age);
    cats.push(cat);
    return cat;
  }
}
