# Bambu Unesp Bauru


Instale as dependências
```
npm install
```

Altere a variável de ambiente. Altere o arquivo `.env.sample` para `.env`. Altere a url da base da api do firebase:
```
# .env
VUE_APP_API=https://[PROJECT_ID].firebaseio.com/
```

Compile e crie o ambiente de desenvolvimento
```
npm run serve
```

Compile e minifica para produção
```
npm run build
```

Aplique linter
```
npm run lint
```

Deploy no github pages
```
deploy.sh
```
