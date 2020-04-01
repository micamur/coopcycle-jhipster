import { element, by, ElementFinder } from 'protractor';

export class CourseComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-course div table .btn-danger'));
  title = element.all(by.css('jhi-course div h2#page-heading span')).first();
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

export class CourseUpdatePage {
  pageTitle = element(by.id('jhi-course-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  stateSelect = element(by.id('field_state'));
  paymentMethodSelect = element(by.id('field_paymentMethod'));
  estimatedPreparationTimeInput = element(by.id('field_estimatedPreparationTime'));
  estimatedDeliveryTimeInput = element(by.id('field_estimatedDeliveryTime'));
  preparationTimeInput = element(by.id('field_preparationTime'));
  deliveryTimeInput = element(by.id('field_deliveryTime'));

  restaurantSelect = element(by.id('field_restaurant'));
  delivererSelect = element(by.id('field_deliverer'));
  customerSelect = element(by.id('field_customer'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setStateSelect(state: string): Promise<void> {
    await this.stateSelect.sendKeys(state);
  }

  async getStateSelect(): Promise<string> {
    return await this.stateSelect.element(by.css('option:checked')).getText();
  }

  async stateSelectLastOption(): Promise<void> {
    await this.stateSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setPaymentMethodSelect(paymentMethod: string): Promise<void> {
    await this.paymentMethodSelect.sendKeys(paymentMethod);
  }

  async getPaymentMethodSelect(): Promise<string> {
    return await this.paymentMethodSelect.element(by.css('option:checked')).getText();
  }

  async paymentMethodSelectLastOption(): Promise<void> {
    await this.paymentMethodSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setEstimatedPreparationTimeInput(estimatedPreparationTime: string): Promise<void> {
    await this.estimatedPreparationTimeInput.sendKeys(estimatedPreparationTime);
  }

  async getEstimatedPreparationTimeInput(): Promise<string> {
    return await this.estimatedPreparationTimeInput.getAttribute('value');
  }

  async setEstimatedDeliveryTimeInput(estimatedDeliveryTime: string): Promise<void> {
    await this.estimatedDeliveryTimeInput.sendKeys(estimatedDeliveryTime);
  }

  async getEstimatedDeliveryTimeInput(): Promise<string> {
    return await this.estimatedDeliveryTimeInput.getAttribute('value');
  }

  async setPreparationTimeInput(preparationTime: string): Promise<void> {
    await this.preparationTimeInput.sendKeys(preparationTime);
  }

  async getPreparationTimeInput(): Promise<string> {
    return await this.preparationTimeInput.getAttribute('value');
  }

  async setDeliveryTimeInput(deliveryTime: string): Promise<void> {
    await this.deliveryTimeInput.sendKeys(deliveryTime);
  }

  async getDeliveryTimeInput(): Promise<string> {
    return await this.deliveryTimeInput.getAttribute('value');
  }

  async restaurantSelectLastOption(): Promise<void> {
    await this.restaurantSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async restaurantSelectOption(option: string): Promise<void> {
    await this.restaurantSelect.sendKeys(option);
  }

  getRestaurantSelect(): ElementFinder {
    return this.restaurantSelect;
  }

  async getRestaurantSelectedOption(): Promise<string> {
    return await this.restaurantSelect.element(by.css('option:checked')).getText();
  }

  async delivererSelectLastOption(): Promise<void> {
    await this.delivererSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async delivererSelectOption(option: string): Promise<void> {
    await this.delivererSelect.sendKeys(option);
  }

  getDelivererSelect(): ElementFinder {
    return this.delivererSelect;
  }

  async getDelivererSelectedOption(): Promise<string> {
    return await this.delivererSelect.element(by.css('option:checked')).getText();
  }

  async customerSelectLastOption(): Promise<void> {
    await this.customerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async customerSelectOption(option: string): Promise<void> {
    await this.customerSelect.sendKeys(option);
  }

  getCustomerSelect(): ElementFinder {
    return this.customerSelect;
  }

  async getCustomerSelectedOption(): Promise<string> {
    return await this.customerSelect.element(by.css('option:checked')).getText();
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

export class CourseDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-course-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-course'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
