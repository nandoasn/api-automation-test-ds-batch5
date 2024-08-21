// // // pemanggilan library
// // const { describe } = require("mocha");

// const request = require("supertest");
// const { assert, should, expect } = require("chai");

// // kode implemensi
// describe('API Test for "reqres.in"', () => {
//     const BASE_URL = "https://reqres.in/api/"
//     it('Test - GET All Users', async () => {
//         const response = await request(BASE_URL)
//         .get("users")
//         // console.log(response.statusCode);
//         // console.log(response.body)

//         //assertion
//         assert.equal(response.statusCode, 200)
//         assert.equal(response.body.data[0].first_name, "George")
//         expect(response.status).to.equal(200)
//     });

//     it('Test - POST All Users', async () => {
//         const body = {
//             "name": "morpheus",
//             "job": "leader",
//             "year": 2021,
//         }
//         const response = await request(BASE_URL)
//         .post("users")
//         .send(body)
//         // console.log(response.statusCode);
//         // console.log(response.body)

//         should(response.status === 200)
//     });
// });

