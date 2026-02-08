import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const projectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      project: z.string(),
      text: z.string(),
      url: z.string().url(),
      clr: z.string(),
      img: image(),
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

const highlightCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      text: z.string(),
      img: image(),
      date: z.string(),
    }),
});

export const collections = {
  'projects': projectsCollection,
  'skills': skillsCollection,
  'highlight': highlightCollection,
};
