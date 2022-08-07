import { describe, it, expect, afterEach, vi } from "vitest";

import { mount } from "@vue/test-utils";

import GoBackButton from "../GoBackButton.vue";

describe("GoBackButton", () => {
  let wrapper: any;

  vi.mock("vue-router", () => ({
    useRouter: () => ({
      go: vi.fn(),
    }),
  }));

  const createComponent = () => {
    wrapper = mount(GoBackButton);
  };

  afterEach(() => {
    wrapper = null;
  });

  it("renders properly", async () => {
    createComponent();

    expect(wrapper.find("button").exists()).toBeTruthy();
  });
});
