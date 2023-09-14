import { afterEach, describe, expect, it, vi } from "vitest";

function getLatest(index = messages.items.length - 1) {
  return messages.items[index];
}

const messages = {
  items: [
    { message: "Simple test message", from: "Testman" },
    // ...
  ],
  getLatest, // can also be a `getter or setter if supported`
};

describe("reading messages", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should get the latest message with a spy", () => {
    const spy = vi.spyOn(messages, "getLatest");
    const mockName = spy.getMockName();
    console.log({ mockName });
    expect(spy.getMockName()).toEqual("getLatest");

    expect(messages.getLatest()).toEqual(
      messages.items[messages.items.length - 1]
    );

    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockImplementationOnce(() => ({
      message: "Another Message",
      from: "Nobody",
    }));
    expect(messages.getLatest()).toEqual({
      message: "Another Message",
      from: "Nobody",
    });

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("should get with a mock", () => {
    const mock = vi.fn().mockImplementation(getLatest);

    expect(mock()).toEqual(messages.items[messages.items.length - 1]);
    expect(mock).toHaveBeenCalledTimes(1);

    mock.mockImplementationOnce(() => "access-restricted");
    expect(mock()).toEqual("access-restricted");

    expect(mock).toHaveBeenCalledTimes(2);

    expect(mock()).toEqual(messages.items[messages.items.length - 1]);
    expect(mock).toHaveBeenCalledTimes(3);
  });
});
