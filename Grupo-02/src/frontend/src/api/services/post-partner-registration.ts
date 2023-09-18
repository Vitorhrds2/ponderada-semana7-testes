import { PartnerDto } from "../dtos/partner.dto";
import { urlBase } from "../interfaces/url-base";

const urlToRegisterPartner = urlBase + "/partner";

export async function postPartnerRegistration(partnerDto: PartnerDto): Promise<object> {
  try {
    const response = await fetch(urlToRegisterPartner, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(partnerDto),
    });

    if (!response.ok) {
      throw new Error('Error ao conectar a api ');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error ao criar usuário');
  }
}