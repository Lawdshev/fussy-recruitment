import Airtable from "airtable";
const apiKey = process.env.AIRTABLE_API_KEY!;
const baseId = process.env.AIRTABLE_BASE_ID!;

export const base = new Airtable({
  apiKey,
}).base(baseId);
