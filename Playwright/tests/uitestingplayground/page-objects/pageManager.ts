import { Page } from '@playwright/test';
import { AjaxDataPage } from '../page-objects/ajaxDataPage';
import { DynamicIdPage } from '../page-objects/dynamicIdPage';
import { NavigationPage } from '../page-objects/navigationPage';

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly ajaxDataPage: AjaxDataPage;
  private readonly dynamicIdPage: DynamicIdPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.ajaxDataPage = new AjaxDataPage(this.page);
    this.dynamicIdPage = new DynamicIdPage(this.page);
  }
  navigateTo() {
    return this.navigationPage;
  }

  onAjaxDataPage() {
    return this.ajaxDataPage;
  }

  onDynamicIdPage() {
    return this.dynamicIdPage;
  }
}
