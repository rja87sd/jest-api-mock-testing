// Credit to ChatGPT for assistance and code comments.
// userApi.test.js

const getUser = require("./userApi");
const fetch = require("node-fetch");

// Mock the fetch function
jest.mock("node-fetch", () => jest.fn());

test("fetches successfully data from an API", async () => {
  const mockResponse = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  };

  // Mock implementation for a successful response
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    })
  );

  const data = await getUser();
  expect(data).toEqual(mockResponse);
});

test("handles a network error", async () => {
  // Mock implementation for a network error
  fetch.mockImplementationOnce(() =>
    Promise.reject(new Error("Network Error"))
  );

  await expect(getUser()).rejects.toThrow("Network Error");
});

test("handles a user not found error", async () => {
  // Mock implementation for a 404 response
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: "User not found" }),
    })
  );

  await expect(getUser()).rejects.toThrow("Network response was not ok");
});
