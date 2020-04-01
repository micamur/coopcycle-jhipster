import { element, by, ElementFinder } from 'protractor';

export class BasketComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-basket div table .btn-danger'));
  title = element.all(by.css('jhi-basket div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class BasketUpdatePage {
  pageTitle = element(by.id('jhi-basket-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  basketStateSelect = element(by.id('field_basketState'));

  orderIdSelect = element(by.id('field_orderId'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setBasketStateSelect(basketState: string): Promise<void> {
    await this.basketStateSelect.sendKeys(basketState);
  }

  async getBasketStateSelect(): Promise<string> {
    return await this.basketStateSelect.element(by.css('option:checked')).getText();
  }

  async basketStateSelectLastOption(): Promise<void> {
    await this.basketStateSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async orderIdSelectLastOption(): Promise<void> {
    await this.orderIdSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async orderIdSelectOption(option: string): Promise<void> {
    await this.orderIdSelect.sendKeys(option);
  }

  getOrderIdSelect(): ElementFinder {
    return this.orderIdSelect;
  }

  async getOrderIdSelectedOption(): Promise<string> {
    return await this.orderIdSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class BasketDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-basket-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-basket'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
