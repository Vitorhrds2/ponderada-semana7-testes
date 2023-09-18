import { AnalystDto } from "../dtos/analyst.dto";
import { urlBase } from "../interfaces/url-base";

const urlToRegisterPartner = urlBase + "/analyst";

export async function postAnalystRegistration(analystDto: AnalystDto): Promise<object> {
  try {
    const response = await fetch(urlToRegisterPartner, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(analystDto),
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