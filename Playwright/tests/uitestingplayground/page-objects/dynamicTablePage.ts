import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class DynamicTable extends HelperBase {
  readonly yellowLabel = this.page.locator('p.bg-warning', { hasText: 'Chrome CPU:' });
  readonly tasksTable = this.page.getByRole('table', { name: 'Tasks' });
  readonly tasksColumnHeaders = this.tasksTable.getByRole('columnheader');
  readonly tasksColumnRows = this.tasksTable.getByRole('row').filter({ has: this.page.getByRole('cell') });

  constructor(page: Page) {
    super(page);
  }

  async returnYellowUsagePercent() {
    const yellowLabelText = await this.yellowLabel.innerText();
    const yellowPercent = yellowLabelText.match(/\d+(\.\d+)?%/)?.[0];
    return yellowPercent;
  }

  async returnIndexForColumn(columnName: string) {
    const headers = await this.tasksColumnHeaders.allTextContents();
    const columnIndex = headers.findIndex((h) => h.trim() === columnName);
    return columnIndex;
  }

  async returnIndexForRow(rowName: string) {
    const rowCount = await this.tasksColumnRows.count();
    for (let i = 0; i < rowCount; i++) {
      const firstCell = this.tasksColumnRows.nth(i).getByRole('cell').first();
      const cellText = await firstCell.innerText();
      if (cellText.trim() === rowName) {
        return i;
      }
    }
    return -1;
  }

  async returnValueFromTable(rowName: string, columnName: string) {
    const columnIndex = await this.returnIndexForColumn(columnName);
    const rowIndex = await this.returnIndexForRow(rowName);
    if (rowIndex === -1) {
      throw new Error(`Row "${rowName}" not found`);
    }

    if (columnIndex === -1) {
      throw new Error(`Column "${columnName}" not found`);
    }
    const cellValue = await this.tasksColumnRows.nth(rowIndex).getByRole('cell').nth(columnIndex).innerText();
    return cellValue;
  }
}
