import TVShowInfo from "@/components/ui/TVShowInfo.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, it, expect, beforeEach, afterEach } from "vitest";

describe("mazeShowInfo component", () => {
  let showInfoWrapper: any;
  beforeEach(() => {
    showInfoWrapper = shallowMount(TVShowInfo, {
      propsData: {
        showInfo: {
          name: "TV Shows",
          image: { medium: "" },
          rating: { average: 8.5 },
          genres: ["Action", "Family"],
          runtime: 120,
          language: "English",
          premiered: "24-09-2020",
          description: ""
        }
      }
    });
  });

  afterEach(() => {
    showInfoWrapper = null;
  });

  it("should render html to display Rating", () => {
    expect(showInfoWrapper.find(".show-name").text()).toBe("TV Shows");
  });
  it("should rnder html to display Runtime", () => {
    expect(showInfoWrapper.find(".show-runtime").text()).toBe("120 Mins");
  });
  it("should render html to display Language", () => {
    expect(showInfoWrapper.find(".show-language").text()).toBe("English");
  });
  it("should render html to display release date", () => {
    expect(showInfoWrapper.find(".show-premiered").text()).toBe("24-09-2020");
  });
  it("should render html to display genres", () => {
    expect(showInfoWrapper.find(".show-genres").text()).toBe("Action");
  });
});
