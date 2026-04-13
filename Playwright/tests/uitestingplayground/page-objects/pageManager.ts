import { Page } from '@playwright/test';
import { AjaxDataPage } from '../page-objects/ajaxDataPage';
import { ClassAttribute } from '../page-objects/classAttributePage';
import { DynamicIdPage } from '../page-objects/dynamicIdPage';
import { HiddenLayers } from '../page-objects/hiddenLayers';
import { NavigationPage } from '../page-objects/navigationPage';

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly ajaxDataPage: AjaxDataPage;
  private readonly dynamicIdPage: DynamicIdPage;
  private readonly classAttribute: ClassAttribute;
  private readonly hiddenLayers: HiddenLayers;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.ajaxDataPage = new AjaxDataPage(this.page);
    this.dynamicIdPage = new DynamicIdPage(this.page);
    this.classAttribute = new ClassAttribute(this.page);
    this.hiddenLayers = new HiddenLayers(this.page);
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

  onClassAttributePage() {
    return this.classAttribute;
  }

  onHiddenLayersPage() {
    return this.hiddenLayers;
  }
}
