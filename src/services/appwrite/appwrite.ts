import { Account, Client, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APP_WRITE_PROJECT_ID);

const account = new Account(client);

const databases = new Databases(client);

export { account, databases };
