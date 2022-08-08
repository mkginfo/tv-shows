import { describe, it, expect, afterEach } from "vitest";

import { mount } from "@vue/test-utils";

import SearchBar from "../ui/SearchBar.vue";

describe("SearchBar", () => {
  let wrapper: any;

  const createComponent = (props = {}) => {
    wrapper = mount(SearchBar, { props });
  };

  afterEach(() => {
    wrapper = null;
  });

  it("renders  with defaultValue", async () => {
    createComponent({ defaultValue: "test-term" });

    expect(wrapper.find(".searchbar__input").element.value).toBe("test-term");
  });

  it("should not trigger search event if the input has no value", async () => {
    createComponent({ defaultValue: "" });

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted()).not.toHaveProperty("search");
  });

  it("should trigger search event on valid value", async () => {
    createComponent();

    await wrapper.find(".searchbar__input").setValue("cats");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted()).toHaveProperty("search");
  });
});
