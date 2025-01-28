import express from "express";
import { login, register } from "../services/userService";

const router = express.Router();//tualej talabat http li anawen url
//Bu rota, bir istemciden (frontend) /register adresine yapılan bir POST isteğini dinler.
//Örneğin:
//Kullanıcı, bir kayıt formunda adını, e-posta adresini ve şifresini doldurup "Kaydol" butonuna tıkladığında bu bilgiler sunucuya bir POST isteğiyle gönderilir.

router.post('/register', async (request, response) => {//Router tanımı
    try {
        const { firstName, lastName, email, password } = request.body;//İstekten veri alma yani Kullanıcıdan gelen istek gövdesini (request body) okur.
        const { statusCode, data } = await register({ firstName, lastName, email, password }); //Kayıt fonksiyonunu çağırma
        response.status(statusCode).json(data) //Cevap gönderme yani register fonksiyonu iki şey döndürür:statusCode: HTTP durum kodu ve data: Kayıt işlemi sonucunda dönen veri (örneğin: "Kayıt başarılı!" mesajı). 
    } catch {
        response.status(500).send("Something went wrong!");
    }
});


router.post('/login', async (request, response) => { //sahb altalabat mn alfrontend
    try {
        const { email, password } = request.body;
        const { statusCode, data } = await login({ email, password })
        response.status(statusCode).json(data);
    } catch {
        response.status(500).send("Something went wrong!");
    }

})


export default router;