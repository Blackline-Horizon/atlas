import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAtlas(): string {
    return 'Reporting from Atlas Service!';
  }
}
