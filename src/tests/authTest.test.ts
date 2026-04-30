import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth"; // change path if needed

describe("getAPIKey", () => {
  test("returns API key when header is correct", () => {
    const headers = {
      authorization: "ApiKey my-secret-key",
    };

    const result = getAPIKey(headers);
    expect(result).toBe("my-secret-key");
  });

  test("returns null if header is missing", () => {
    const headers = {};

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null if format is wrong", () => {
    const headers = {
      authorization: "Bearer my-secret-key",
    };

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
