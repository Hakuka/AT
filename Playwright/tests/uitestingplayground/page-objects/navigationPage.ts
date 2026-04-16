import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class NavigationPage extends HelperBase {
  readonly ajaxDataMenuItem: Locator;
  readonly dynamicIdMenuItem: Locator;
  readonly classAttributeMenuItem: Locator;
  readonly hiddenLayersMenuItem: Locator;
  readonly loadDelayMenuItem: Locator;
  readonly clientSideDelayMenuItem: Locator;
  readonly clickMenuItem: Locator;
  readonly textInputMenuItem: Locator;
  readonly scrollbarsMenuItem: Locator;
  readonly dynamicTableMenuItem: Locator;
  readonly verifyTextMenuItem: Locator;
  readonly progressBarMenuItem: Locator;
  readonly visibilityMenuItem: Locator;
  readonly sampleAppMenuItem: Locator;
  readonly mouseOverMenuItem: Locator;
  readonly nonBreakingSpaceMenuItem: Locator;
  readonly overlappedElementMenuItem: Locator;
  readonly shadowDomMenuItem: Locator;
  readonly alertsMenuItem: Locator;
  readonly fileUploadMenuItem: Locator;
  readonly animatedButtonMenuItem: Locator;
  readonly disabledInputMenuItem: Locator;
  readonly autoWaitMenuItem: Locator;
  readonly framesMenuItem: Locator;
  readonly geoLocationMenuItem: Locator;

  constructor(page: Page) {
    super(page);
    this.ajaxDataMenuItem = page.getByText('AJAX Data');
    this.dynamicIdMenuItem = page.getByRole('link', { name: 'Dynamic ID' });
    this.classAttributeMenuItem = page.getByRole('link', { name: 'Class Attribute' });
    this.hiddenLayersMenuItem = page.getByRole('link', { name: 'Hidden Layers' });
    this.loadDelayMenuItem = page.getByRole('link', { name: 'Load Delay' });
    this.clientSideDelayMenuItem = page.getByRole('link', { name: 'Client Side Delay' });
    this.clickMenuItem = page.getByRole('link', { name: 'Click' });
    this.textInputMenuItem = page.getByRole('link', { name: 'Text Input' });
    this.scrollbarsMenuItem = page.getByRole('link', { name: 'Scrollbars' });
    this.dynamicTableMenuItem = page.getByRole('link', { name: 'Dynamic Table' });
    this.verifyTextMenuItem = page.getByRole('link', { name: 'Verify Text' });
    this.progressBarMenuItem = page.getByRole('link', { name: 'Progress Bar' });
    this.visibilityMenuItem = page.getByRole('link', { name: 'Visibility' });
    this.sampleAppMenuItem = page.getByRole('link', { name: 'Sample App' });
    this.mouseOverMenuItem = page.getByRole('link', { name: 'Mouse Over' });
    this.nonBreakingSpaceMenuItem = page.getByRole('link', { name: 'Non-Breaking Space' });
    this.overlappedElementMenuItem = page.getByRole('link', { name: 'Overlapped Element' });
    this.shadowDomMenuItem = page.getByRole('link', { name: 'Shadow DOM' });
    this.alertsMenuItem = page.getByRole('link', { name: 'Alerts' });
    this.fileUploadMenuItem = page.getByRole('link', { name: 'File Upload' });
    this.animatedButtonMenuItem = page.getByRole('link', { name: 'Animated Button' });
    this.disabledInputMenuItem = page.getByRole('link', { name: 'Disabled Input' });
    this.autoWaitMenuItem = page.getByRole('link', { name: 'Auto Wait' });
    this.framesMenuItem = page.getByRole('link', { name: 'Frames' });
    this.geoLocationMenuItem = page.getByRole('link', { name: 'Geo Location' });
  }

  async ajaxDataPage() {
    await this.ajaxDataMenuItem.click();
  }

  async dynamicIdPage() {
    await this.dynamicIdMenuItem.click();
  }

  async classAttributePage() {
    await this.classAttributeMenuItem.click();
  }

  async hiddenLayersPage() {
    await this.hiddenLayersMenuItem.click();
  }

  async loadDelayMenuItemPage() {
    await this.loadDelayMenuItem.click();
  }

  async clientSideDelayPage() {
    await this.clientSideDelayMenuItem.click();
  }

  async clickPage() {
    await this.clickMenuItem.click();
  }

  async textInputPage() {
    await this.textInputMenuItem.click();
  }

  async scrollbarsPage() {
    await this.scrollbarsMenuItem.click();
  }

  async dynamicTablePage() {
    await this.dynamicTableMenuItem.click();
  }

  async verifyTextPage() {
    await this.verifyTextMenuItem.click();
  }

  async progressBarPage() {
    await this.progressBarMenuItem.click();
  }

  async visibilityPage() {
    await this.visibilityMenuItem.click();
  }

  async sampleAppPage() {
    await this.sampleAppMenuItem.click();
  }

  async mouseOverPage() {
    await this.mouseOverMenuItem.click();
  }

  async nonBreakingSpacePage() {
    await this.nonBreakingSpaceMenuItem.click();
  }

  async overlappedElementPage() {
    await this.overlappedElementMenuItem.click();
  }

  async shadowDomPage() {
    await this.shadowDomMenuItem.click();
  }

  async alertsMenuPage() {
    await this.alertsMenuItem.click();
  }

  async fileUploadPage() {
    await this.fileUploadMenuItem.click();
  }

  async animatedButtonPage() {
    await this.animatedButtonMenuItem.click();
  }

  async disabledInputPage() {
    await this.disabledInputMenuItem.click();
  }

  async autoWaitPage() {
    await this.autoWaitMenuItem.click();
  }

  async framesPage() {
    await this.framesMenuItem.click();
  }

  async geoLocationPage() {
    await this.geoLocationMenuItem.click();
  }
}
