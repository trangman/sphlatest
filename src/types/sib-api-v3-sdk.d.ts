declare module 'sib-api-v3-sdk' {
  export interface CreateContact {
    email: string;
    attributes: Record<string, any>;
    listIds: number[];
  }

  export class ContactsApi {
    createContact(contact: CreateContact): Promise<any>;
  }

  export class ApiClient {
    static instance: {
      authentications: {
        'api-key': {
          apiKey: string;
        };
      };
    };
  }
} 