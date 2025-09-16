export class Author {
    id: number
    name: string | null
    email: string
}
export class Post {
  id: number;
  title: string;
  content: string | null; // match Prisma
  author: Author
}