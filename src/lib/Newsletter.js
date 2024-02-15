import { Newsletter } from "./mongodb";

const collection = await Newsletter();

export const getNewsletterEmail = async (email) => {
  return await collection.findOne({
    email: email,
  });
};

/**
 * Get the count posts
 * @returns Count all posts elements
 */
export const addToNewsletter = async (email) => {
  const existEmail = await getNewsletterEmail(email);
  if (existEmail) return false;

  const response = await collection.insertOne({ email, createdAt: new Date() });
  if (!response) return false;

  return true;
};
