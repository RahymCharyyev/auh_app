export interface AboutModel {
  about: string;
}

export interface PrivacyModel {
  privacy: string;
}

export interface TicketCautionModel {
  ticket_caution: string;
}

export interface AboutTaxiSectionModel {
  lang: {
    title: string;
    description: string;
  };
  uuid: string;
  imagePath: any;
  videoPath: string;
}
