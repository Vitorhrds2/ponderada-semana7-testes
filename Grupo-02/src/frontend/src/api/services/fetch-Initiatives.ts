import { InitiativeEntity } from "../entities/Initiative-entity";
import { urlBase } from "../interfaces/url-base";

const urlToFetchInitiatives = urlBase + "/initiatives";

export async function fetchInitiatives(): Promise<InitiativeEntity[]> {
  try {
    const response = await fetch(urlToFetchInitiatives);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error fetching initiatives');
  }
}