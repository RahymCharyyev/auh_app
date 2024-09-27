export interface InfoModel {
  phone: Phone;
  address: Address;
  email: Email;
  yearTitle: YearTitle;
  notification: Notification;
}

export interface Phone {
  value: string;
  iconPath: any;
}

export interface Address {
  value: string;
  iconPath: any;
}

export interface Email {
  value: string;
  iconPath: any;
}

export interface YearTitle {
  value: string;
  iconPath: string;
}

export interface Notification {
  value: string;
  iconPath: any;
}
