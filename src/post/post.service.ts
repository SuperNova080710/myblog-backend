import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  create(title: string, detail: string) {
    const post = this.postRepository.create({ title, detail });
    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find();
  }
}
