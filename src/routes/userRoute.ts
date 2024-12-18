import express from "express";
import { login, register } from "../services/userService";

const router = express.Router();
//Bu rota, bir istemciden (frontend) /register adresine yapılan bir POST isteğini dinler.
//Örneğin:
//Kullanıcı, bir kayıt formunda adını, e-posta adresini ve şifresini doldurup "Kaydol" butonuna tıkladığında bu bilgiler sunucuya bir POST isteğiyle gönderilir.

router.post('/register', async (request, response) => {//Router tanımı
    const { firstName, lastName, email, password } = request.body;//İstekten veri alma
    const { statusCode, data } = await register({ firstName, lastName, email, password }); //Kayıt fonksiyonunu çağırma
    response.status(statusCode).send(data) //Cevap gönderme
});


router.post('/login', async (request, response) => { //sahb altalabat mn alfrontend
    const { email, password } = request.body;
    const { statusCode, data } = await login({ email, password })
    response.status(statusCode).send(data);
})


export default router;