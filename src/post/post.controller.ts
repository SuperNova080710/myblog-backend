import { Controller, Get, Post as HttpPost, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpPost()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Patch('id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(Number(id), updatePostDto);
  }

  @Delete('id')
  remove(@Param('id') id: string) {
    return this.postService.remove(Number(id));
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }
}
