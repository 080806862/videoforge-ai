import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

const APP_URL = process.env.APP_URL || "https://boom-caused-investigators-navigation.trycloudflare.com";

describe("VideoForge AI Test Suite", () => {
  it("should display validation error when prompt is empty", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: APP_URL });

    await testdriver.scroll("down", { amount: 400 });

    const prepareBtn = await testdriver.find("Prepare my video button");
    await prepareBtn.click();

    const assertResult = await testdriver.assert("The status message displays Enter a video idea first");
    expect(assertResult).toBeTruthy();
  });

  it("should enter a prompt and prepare video project", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: APP_URL });

    await testdriver.scroll("down", { amount: 400 });

    const promptInput = await testdriver.find("What should happen in your video prompt input textarea");
    await promptInput.click();
    await testdriver.type("Create a cinematic story about an eagle soaring over mountain peaks at sunset");

    const prepareBtn = await testdriver.find("Prepare my video button");
    await prepareBtn.click();

    const assertResult = await testdriver.assert("The status message indicates the project is ready to plan");
    expect(assertResult).toBeTruthy();
  });

  it("should switch to Real AI video engine", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: APP_URL });

    const realAiBtn = await testdriver.find("Real AI video engine button");
    await realAiBtn.click();

    const assertResult = await testdriver.assert("The Real AI video engine is selected with a checkmark");
    expect(assertResult).toBeTruthy();
  });
});
