import { ModuleEntity } from "../entities/module-entity";
import { urlBase } from "../interfaces/url-base";

const urlToFetchModules = urlBase + "/alocation";

export async function fetchModules(): Promise<ModuleEntity[]> {
  try {
    const response = await fetch(urlToFetchModules);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error fetching modules');
  }
}