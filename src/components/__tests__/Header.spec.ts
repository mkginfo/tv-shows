import Header from "@/components/ui/Header.vue";
import {mount, shallowMount} from "@vue/test-utils";
import { describe, it, expect, beforeEach, afterEach } from "vitest";

describe("mazeSearch", () => {
  let headerWrapper: any;
  const createComponent = (props = {}) => {
    headerWrapper = mount(Header, { props });
  };

  afterEach(() => {
    headerWrapper = null;
  });

  it("should check the html markup", () => {
    createComponent();
    expect(headerWrapper.find(".logo").text()).toBe("TV Shows");
  });
});
