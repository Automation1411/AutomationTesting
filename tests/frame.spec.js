import{test, expect} from "@playwright/test";
// framelocator
test("iframe feature",async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
const framePage = page.frameLocator("#courses-iframe");
await framePage.locator("li a[href*='lifetime-access']:visible").click();
const frameText= framePage.getByText("All Access Subscription ");
await expect(frameText).toBeVisible();
});

//visual testing using screenshot like screenshot - store - screenshot

test("visula testing",async({page})=>{
    await page.goto("https://www.tothenew.com/");
    await expect(page.screenshot()).toMatchSnapshot("takes.png");
})