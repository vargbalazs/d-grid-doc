import { Injectable } from '@angular/core';
import { IconSettingsService } from '@progress/kendo-angular-icons';

@Injectable()
export class IconService extends IconSettingsService {
  private iconDictionary: { [key: string]: string } = {
    'caret-alt-right': 'fi fi-rs-angle-right',
    'caret-alt-down': 'fi fi-rs-angle-down',
  };

  public override getCustomFontIconClass(iconName: string): string {
    return this.iconDictionary[iconName] || super.getCustomFontIconClass(iconName);
  }
}
