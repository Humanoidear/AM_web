import contentful, { type Entry, type EntryFieldTypes } from "contentful";

export interface work {
  contentTypeId: "work";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    year: EntryFieldTypes.Text;
    type: EntryFieldTypes.Text;
    services: EntryFieldTypes.Object;
    preview: EntryFieldTypes.AssetLink;
    gif: EntryFieldTypes.AssetLink;
    heroImage: EntryFieldTypes.AssetLink;
    content: EntryFieldTypes.RichText;
    comingSoon: EntryFieldTypes.Boolean;
    blobColor: EntryFieldTypes.Text;
    order: EntryFieldTypes.Number;
  };
}

export interface extra {
  contentTypeId: "extra";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    year: EntryFieldTypes.Text;
    type: EntryFieldTypes.Text;
    color: EntryFieldTypes.Text;
    services: EntryFieldTypes.Object;
    preview: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    comingSoon: EntryFieldTypes.Boolean;
    content: EntryFieldTypes.RichText;
    order: EntryFieldTypes.Number;
  };
}

export interface header {
  contentTypeId: "header";
  fields: {
    url: EntryFieldTypes.Text;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
