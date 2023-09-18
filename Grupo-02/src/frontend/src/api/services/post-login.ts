import { LoginDto } from "../dtos/login.dto";
import { urlBase } from "../interfaces/url-base";

const urlToLogin = urlBase + "/login";

export async function postLogin(credentials:{email: string, password: string}): Promise<LoginDto> {
  try {
    const response = await fetch(urlToLogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Error ao conectar a api ');
    }

    const data: LoginDto = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error ao logar usuário');
  }
}