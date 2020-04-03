const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "apadgmail@gmail.com",
                whatsapp: "67999999999",
                city: "Campo Grande",
                uf: "MS"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should to return all ongs', async () => {
        const response = await request(app)
        .get('/ongs');

        await response.body.forEach(element => {
            expect(element).toHaveProperty('id');
            expect(element.id).toHaveLength(8);

            expect(element).toHaveProperty('name');
            expect(element).toHaveProperty('email');
            expect(element).toHaveProperty('whatsapp');
            expect(element).toHaveProperty('city');

            expect(element).toHaveProperty('uf');
            expect(element.uf).toHaveLength(2);
        });
        console.log(response.body);
    });
});