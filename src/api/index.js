const BASE_URL = 'https://sandbox.uberall.com/api';

const HEADERS = {
  'Content-Type': 'application/json',
  publicKey: 'USE_YOUR_PUBLIC_KEY',
};

export const search = async (params) => {
  const response = await fetch(`${BASE_URL}/search`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(params),
  });

  return response.json();
};
