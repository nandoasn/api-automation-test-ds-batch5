const request = require("supertest");
var chai = require("chai");
chai.use(require("chai-json-schema"));
const fs = require("fs")
const { assert, should, expect } = require("chai");


// kode implemensi
describe('API Test for "reqres.in"', () => {
    const BASE_URL = "https://reqres.in/api/"
    it('Test - GET All Users', async () => {
        const response = await request(BASE_URL)
        .get("users")
        // console.log(response.statusCode);
        // console.log(response.body)

        //assertion
        assert.equal(response.statusCode, 200)
        assert.equal(response.body.data[0].first_name, "George")
        expect(response.status).to.equal(200)

        //jsonSchema
        const schemaGet = "resources/jsonSchema/get-users-schema.json"
        const jsonSchema = JSON.parse(fs.readFileSync(schemaGet, 'utf8'))
        assert.jsonSchema(response.body, jsonSchema)

    });

    it('Test - POST All Users', async () => {
        const body = {
            "name": "morpheus",
            "job": "leader",
        }
        const response = await request(BASE_URL)
        .post("users")
        .send(body)
        // console.log(response.statusCode);
        // console.log(response.body)

        should(response.status === 200)
        const schemaPost = "resources/jsonSchema/post-users-schema.json"
        const jsonSchema = JSON.parse(fs.readFileSync(schemaPost, 'utf8'))
        assert.jsonSchema(response.body, jsonSchema)
    });

    it('Test - DELETE All Users', async () => {        
        const response = await request(BASE_URL)
        .delete("users")
        console.log(response.statusCode);
        // console.log(response.body)
    });

    it('Test - PUT All Users', async () => {
        // const body = {
        //     "name": "morpheus",
        //     "job": "leader",
        // }        
        const response = await request(BASE_URL)
        .put("users/7")
        .send({
            "name": "morpheus",
            "job": "leader",
        })
        console.log(response.statusCode);
        console.log(response.body)

        const schemaPut = "resources/jsonSchema/put-users-schema.json"
        const jsonSchema = JSON.parse(fs.readFileSync(schemaPut, 'utf8'))
        assert.jsonSchema(response.body, jsonSchema)
    });
});

