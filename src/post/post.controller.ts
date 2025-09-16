import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    const post = await this.postService.create(createPostDto);
    return {
      data: post,
      message: 'Post created successfully',
    };
  }

  @Get()
  async findAll() {
    const posts = await this.postService.findAll();
    return {
      data: posts,
      message: 'Post fetched successfully',
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postService.findOne(+id);
    return {
      data: post,
      message: 'Post Detail fetched successfully',
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const post = await this.postService.update(+id, updatePostDto);
    return {
      data: post,
      message: 'Post updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const post = await this.postService.remove(+id);
    return {
      data: post,
      message: 'Post deleted successfully',
    };
  }
}
