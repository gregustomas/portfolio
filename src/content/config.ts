import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      project: z.string(),
      text: z.string(),
      url: z.string().url(),
      clr: z.string(),
      img: image(),
      stack: z.array(z.string())
    }),
});

const skillsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      skill: z.string(),
      text: z.string(),
      img: image(),
    }),
});

const websitesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      text: z.string(),
      url: z.string().url(),
      img: image(),
      features: z.array(z.string()),
      stats: z.array(z.string())
    }),
});

export const collections = {
  'projects': projectsCollection,
  'skills': skillsCollection,
  'websites': websitesCollection,
};
