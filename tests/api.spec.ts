import { test,expect } from "@playwright/test";
var userid:any;
test('Get request',async({request})=>{
    const response=await request.get('https://dummy.restapiexample.com/employees')
    console.log(await response.text());
    await expect(response.status()).toBe(200)
    

})
test('Post request',async({request})=>{
    const response = await request.post('https://dummy.restapiexample.com/api/v1/create',
        {
            data:{"name":"test","salary":"123","age":"23"},
            headers: { "Accept": "apllication/json"}
        })
    console.log(await response.json());
    await expect(response.status()).toBe(200)
    const res=await response.json()
        userid =res.id
    
    
})
test.only('put request',async({request})=>{
    const response=await request.put('https://dummy.restapiexample.com/api/v1/update/'+userid,
        {
            data: {"name":"test","salary":"123","age":"23"},
            headers:{"Accept":"application/json"}
        })
    
console.log(await response.json());
expect (response.status()).toBe(200)

})

test('delete request',async({request})=>{
    const response= await request.get('https://dummy.restapiexample.com/delete')
        console.log(await response.text());
        await expect(response.status()).toBe(200)

    
})