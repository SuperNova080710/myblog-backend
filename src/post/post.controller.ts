import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpPost()
  create(@Body() body: { title: string; detail: string }) {
    return this.postService.create(body.title, body.detail);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }
}
