import { addToNewsletter } from "../../lib/Newsletter";

export const POST = async ({ request }) => {
  const data = await request.json();

  if (!data.email) {
    return new Response(null, {
      status: 400,
      statusText: "Email field is required",
    });
  }

  const response = await addToNewsletter(data.email);

  if (!response) {
    return new Response(null, {
      status: 400,
      statusText: "Not add to the newsletter",
    });
  }

  return new Response(JSON.stringify(response), {
    status: 201,
  });
};
