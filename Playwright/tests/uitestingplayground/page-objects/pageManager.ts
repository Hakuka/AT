import { Page } from '@playwright/test';
import { AjaxDataPage } from '../page-objects/ajaxDataPage';
import { ClassAttribute } from '../page-objects/classAttributePage';
import { DynamicIdPage } from '../page-objects/dynamicIdPage';
import { NavigationPage } from '../page-objects/navigationPage';
import { AlertsPage } from './alertsPage';
import { Click } from './clickPage';
import { ClientSideDelay } from './clientSideDelayPage';
import { DynamicTable } from './dynamicTablePage';
import { FileUploadPage } from './fileUploadPage';
import { HiddenLayers } from './hiddenLayersPage';
import { LoadDelay } from './loadDelayPage';
import { MouseOver } from './mouseOverPage';
import { NonBreakingSpace } from './nonBreakingSpace';
import { OverlappedElement } from './overlappedElementPage';
import { ProgressBar } from './progressBarPage';
import { SampleApp } from './sampleAppPage';
import { Scrollbars } from './scrollbarsPage';
import { TextInput } from './textInputPage';
import { VerifyText } from './verifyTextPage';
import { Visibility } from './visibilityPage';

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly ajaxDataPage: AjaxDataPage;
  private readonly dynamicIdPage: DynamicIdPage;
  private readonly classAttribute: ClassAttribute;
  private readonly hiddenLayers: HiddenLayers;
  private readonly loadDelay: LoadDelay;
  private readonly clientSideDelay: ClientSideDelay;
  private readonly click: Click;
  private readonly textInput: TextInput;
  private readonly scrollbars: Scrollbars;
  private readonly dynamicTable: DynamicTable;
  private readonly verifyText: VerifyText;
  private readonly progressBar: ProgressBar;
  private readonly visibility: Visibility;
  private readonly sampleApp: SampleApp;
  private readonly mouseOver: MouseOver;
  private readonly nonBreakingSpace: NonBreakingSpace;
  private readonly overlappedElement: OverlappedElement;
  private readonly alertsPage: AlertsPage;
  private readonly fileUploadPage: FileUploadPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.ajaxDataPage = new AjaxDataPage(this.page);
    this.dynamicIdPage = new DynamicIdPage(this.page);
    this.classAttribute = new ClassAttribute(this.page);
    this.hiddenLayers = new HiddenLayers(this.page);
    this.loadDelay = new LoadDelay(this.page);
    this.clientSideDelay = new ClientSideDelay(this.page);
    this.click = new Click(this.page);
    this.textInput = new TextInput(this.page);
    this.scrollbars = new Scrollbars(this.page);
    this.dynamicTable = new DynamicTable(this.page);
    this.verifyText = new VerifyText(this.page);
    this.progressBar = new ProgressBar(this.page);
    this.visibility = new Visibility(this.page);
    this.sampleApp = new SampleApp(this.page);
    this.mouseOver = new MouseOver(this.page);
    this.nonBreakingSpace = new NonBreakingSpace(this.page);
    this.overlappedElement = new OverlappedElement(this.page);
    this.alertsPage = new AlertsPage(this.page);
    this.fileUploadPage = new FileUploadPage(this.page);
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

  onLoadDelayPage() {
    return this.loadDelay;
  }

  onClientSideDelayPage() {
    return this.clientSideDelay;
  }

  onClickPage() {
    return this.click;
  }

  onTextInputPage() {
    return this.textInput;
  }

  onScrollbarsPage() {
    return this.scrollbars;
  }

  onDynamicTable() {
    return this.dynamicTable;
  }

  onVerifyText() {
    return this.verifyText;
  }

  onProgressBar() {
    return this.progressBar;
  }

  onVisibility() {
    return this.visibility;
  }

  onSampleApp() {
    return this.sampleApp;
  }

  onMouseOver() {
    return this.mouseOver;
  }

  onNonBreakingSpace() {
    return this.nonBreakingSpace;
  }

  onOverlappedElement() {
    return this.overlappedElement;
  }

  onAlertsPage() {
    return this.alertsPage;
  }

  onFileUploadPage() {
    return this.fileUploadPage;
  }
}
