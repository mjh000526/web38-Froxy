import { SimpleFileResponseDto } from './simple.file.response.dto';
import { SimpleUserResponseDto } from './simple.user.response.dto';
import { GistApiFileListDto } from '@/gist/dto/gistApiFileList.dto';
import { Lotus } from '@/lotus/lotus.entity';

export class LotusDetailDto {
  id: string;
  title: string;
  tags: string[];
  date: Date;
  language: string;
  version: string;
  isPublic: boolean;
  author: SimpleUserResponseDto;
  files: SimpleFileResponseDto[];

  static ofGistFileListDto(gistFileList: GistApiFileListDto, lotus: Lotus): LotusDetailDto {
    const simpleFiles: SimpleFileResponseDto[] = gistFileList.files.map((file) =>
      SimpleFileResponseDto.ofFileApiDto(file)
    );
    const simpleUser: SimpleUserResponseDto = SimpleUserResponseDto.ofUserDto(lotus.user);
    const simpleTags: string[] = lotus.category.map((tag) => tag.tagName);
    return {
      id: lotus.lotusId,
      title: lotus.title,
      language: lotus.language,
      version: lotus.version,
      date: lotus.createdAt,
      isPublic: lotus.isPublic,
      tags: simpleTags,
      author: simpleUser,
      files: simpleFiles
    };
  }
}
