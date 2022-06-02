import supertest from "supertest";
import app from '../../..';

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/psicologos')
            .send({
                nome: "aloalo",
                email: "alooooo4444444444@gmail.com",
                senha: "1234567890",
                apresentacao: "bla bla bla",
                cep: "07600736"
            })
    
            expect(response.status).toBe(201)
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
            .post('/psicologos')
            .send({
                nome: "aloalo",
                email: "alooooo5@gmail.com",
                senha: "1234567890",
                apresentacao: "bla bla bla",
                cep: "07600736"
            })
    

            expect(JSON.parse(response.text)).toMatchObject(
                {
                    nome: "alo",
                    email: "nataliaAlo7@gmail.com", 
                })

            expect(response.body).toMatchObject(
             {
                nome: "alo",
                email: "nataliaAlo7@gmail.com", 
            })


            
            expect(response.body).toEqual(
                expect.objectContaining({
                    nome: "aloalo",
                    email: "alooooo4444444444@gmail.com",
                    apresentacao: "bla bla bla",

                })
            )
        })



        })
      


    // describe('update', () => {
        
    // })
    

})