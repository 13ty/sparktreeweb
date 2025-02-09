import { Injectable } from '@angular/core';
import { Platform, PLATFORMS } from '../models/platform.model';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private platforms: Platform[] = PLATFORMS;

  getPlatforms(): Platform[] {
    return this.platforms;
  }

  getPlatformById(id: string): Platform | undefined {
    return this.platforms.find(platform => platform.id === id);
  }
}
