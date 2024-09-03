import contentful, { type Entry, type EntryFieldTypes } from "contentful";

export interface work {
    contentTypeId: "work",
    fields: {
      title: EntryFieldTypes.Text,
      slug: EntryFieldTypes.Text,
      date: EntryFieldTypes.Date,
      year: EntryFieldTypes.Text,
      type: EntryFieldTypes.Text,
      services: EntryFieldTypes.Object,
      preview: EntryFieldTypes.AssetLink,
      heroImage: EntryFieldTypes.AssetLink,
      content: EntryFieldTypes.RichText
    }
  }

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});