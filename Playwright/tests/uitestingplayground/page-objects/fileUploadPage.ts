import { Page } from '@playwright/test';
import path from 'path';
import { HelperBase } from './helperBase';

export class FileUploadPage extends HelperBase {
  readonly uploadFrame = this.page.frameLocator('iframe[src*="upload.html"]');
  readonly uploadedFileText = this.uploadFrame.locator('.success-file p');

  constructor(page: Page) {
    super(page);
  }

  async uploadFile(fileName: string) {
    const filePath = path.resolve(__dirname, '../test-data', fileName);
    await this.uploadFrame.locator('input[type="file"]').setInputFiles(filePath);
  }
}
