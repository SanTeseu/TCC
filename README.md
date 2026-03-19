# TCC
Leoni Israel, Erick Matheus Bispo, Rafael Sodré, Matheus Santana

#ANTES DE TUDO#
npm init -y
npm install express

#-ANDAMENTO-
CASO DE TESTE POSTMAN#
🧪 4. Como testar (IMPORTANTE pro TCC)

Use o Insomnia ou Postman

✅ Cadastro

POST http://localhost:3000/auth/register

{
  "email": "teste@email.com",
  "password": "123456"
}
✅ Login válido

POST http://localhost:3000/auth/login

{
  "email": "teste@email.com",
  "password": "123456"
}

✔ Esperado:

{
  "message": "Login realizado com sucesso"
}
❌ Login inválido
{
  "email": "teste@email.com",
  "password": "errado"
}

✔ Esperado:

{
  "error": "Email ou senha inválidos"
}
🧪 5. Já vira CASO DE TESTE (pro seu documento)

Você já pode documentar:

📌 CT-LOGIN-001 – Login válido

Entrada: email e senha corretos

Resultado esperado: sucesso

📌 CT-LOGIN-002 – Login inválido

Entrada: senha incorreta

Resultado esperado: erro

📌 CT-LOGIN-003 – Campos vazios

Entrada: email vazio

Resultado esperado: erro 400
