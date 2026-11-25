import {test,expect} from "@playwright/test";
// skip
/*test("skip",async()=>{
    console.log("hello");
    
})

test.skip("skip2",async()=>{
    console.log("Welcome");
    
})
// only
test("only",async()=>{
    console.log("hello");
    
})

test.only("only2",async()=>{
    console.log("Welcome");
    
})

// fixme (used when process is pending)
test.fixme("fix",async()=>{
    console.log("hello");
    
})

test("fix2",async()=>{
    console.log("Welcome");
    
})
*/
// fail
test("fail",async()=>{
    test.fail()
    expect(1).toBe(2)
    
})


// slow
test("slow",async({page})=>{
    test.slow()
    await page.goto("https://testautomationpractice.blogspot.com/")
})
