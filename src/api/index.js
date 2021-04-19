const BASE_URL = "https://sandbox.uberall.com/api";

const HEADERS = {
  "Content-Type": "application/json",
  publicKey:
    "GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf",
};

const search = async (payload) =>
  fetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(payload),
  });

export { search };
