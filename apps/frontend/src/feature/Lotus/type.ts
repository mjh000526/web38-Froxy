export interface LotusType {
  link: string;
  title: string;
  description?: string;
  logo: string;
  createAt: Date;
  tags: string[];
  author: string;
  public?: boolean;
}
