import { describe, it, expect, afterEach } from "vitest";

import { mount } from "@vue/test-utils";

import CastCard from "../CastCard.vue";

describe("CastCard", () => {
  let wrapper: any;

  const createComponent = (props = {}) => {
    wrapper = mount(CastCard, { props });
  };

  afterEach(() => {
    wrapper = null;
  });

  it("renders properly", () => {
    createComponent({ name: "John Doe", image: "image.jpg" });

    expect(wrapper.find(".cast-card__name").text()).toBe("John Doe");
    expect(wrapper.find(".cast-card__image").attributes("src")).toBe(
      "image.jpg"
    );
  });

  it("should use default image when no image is provided", async () => {
    createComponent({ name: "John Doe" });

    expect(wrapper.find(".cast-card__image").attributes("src")).toBe(
      "@/assets/images/default_person.png"
    );
  });
});
