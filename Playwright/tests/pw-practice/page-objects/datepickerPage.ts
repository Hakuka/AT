import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';

export class DatepickerPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number) {
    const calendarInputField = this.page.getByPlaceholder('Form Picker');
    await calendarInputField.click();
    const expectedDate = await this.selectDateInTheCalendar(numberOfDaysFromToday);
    await expect(calendarInputField).toHaveValue(expectedDate);
  }

  async selectDatepickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number) {
    const calendarInputField = this.page.getByPlaceholder('Range Picker');
    await calendarInputField.click();
    const expectedStartDate = await this.selectDateInTheCalendar(startDayFromToday);
    const expectedEndDate = await this.selectDateInTheCalendar(endDayFromToday);
    const displayedDate = `${expectedStartDate} - ${expectedEndDate}`;
    await expect(calendarInputField).toHaveValue(displayedDate);
  }

  private async selectDateInTheCalendar(numberOfDaysFromToday: number) {
    let date = new Date();
    date.setDate(date.getDate() + numberOfDaysFromToday);
    const expectedDay = date.getDate().toString();
    const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' });
    const expectedMonthLong = date.toLocaleString('En-US', { month: 'long' });
    const expectedYear = date.getFullYear();
    const expectedDate = `${expectedMonthShort} ${expectedDay}, ${expectedYear}`;

    let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
    const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear} `;
    while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
      await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
      calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
    }

    await this.page.locator('.day-cell:not(.bounding-month)').getByText(expectedDay, { exact: true }).click();
    return expectedDate;
  }
}
