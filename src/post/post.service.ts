import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({
      where: {id},
    });

    if(!post) {
      throw new NotFoundException('Post not found');
    }

    Object.assign(post, updatePostDto);

    return this.postRepository.save(post);
  }

  async remove(id: number) {
    const result = await this.postRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Post not found');
    }

    return {success: true};
  }

  findAll() {
    return this.postRepository.find();
  }
}
