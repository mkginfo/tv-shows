import { describe, it, expect, afterEach } from "vitest";

import { mount } from "@vue/test-utils";

import Search from "../form/Search.vue";

describe("SearchBar", () => {
  let wrapper: any;

  const createComponent = (props = {}) => {
    wrapper = mount(Search, { props });
  };

  afterEach(() => {
    wrapper = null;
  });

  it("renders  with default serach Value", async () => {
    createComponent({});
    expect(wrapper.find(".searchbar__input").element.value).toBe("");
  });
});
