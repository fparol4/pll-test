## TESTE VAGA BACKEND - GRUPO PLL 

### EXECUÇÃO DO PROJETO


```
1. Alterar `.env` adicionando a URL do banco PG 
DATABASE_URL="postgresql://root:root@localhost:5432/pll-test?schema=public"

2. Instalar dependências
yarn install

3. Gerar Prisma Client & Execução migrations/seed
yarn db:migrate
yarn db:seed

4. Inicializar o projeto
yarn build
yarn start:prod
```


### ROTAS DISPONÍVEIS

```
- Autenticação - 
@Desc - Gerar um novo token de acesso válido por 1h
@Post
http://localhost:3000/auth
```

```
- Consultar Conta -
@Desc - Retorna informações da conta 
@Authorization -> Bearer {token} 
http://localhost:3000/accounts/{numero_conta}
```

```
- Nova Transação -
@Desc - Adiciona uma nova transação do tipo 'DEPOSITO' ou 'SAQUE'
@Authorization -> Bearer {token}
@Body { 
	"accountNumber": Number, 
	"amount": Number,
	"operationType": "DEPOSITO" | "SAQUE"
}
http://localhost:3000/transactions
```