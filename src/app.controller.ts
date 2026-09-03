import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET /animals/cats
  @Get('')
  getCats(): Cat[] {
    return cats;
  }

  // POST /animals/cats
  @Post('')
  createCat(@Req() req: any): Cat[] {
    const cat = new Cat(req.body.name, req.body.age);
    cats.push(cat);
    return cats;
  }
}
let cats: Cat[] = [];
class Cat {
  constructor(private name: string, private age: number) {}
}