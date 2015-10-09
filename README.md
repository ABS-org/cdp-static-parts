# cdp-static-parts
Conjunto de scripts de páginas e componenetes estáticos.

### Requisitos
Para poder importar o cabeçalho e o rodapé, é necessário identificar as tags com os id's referenciados abaixo.
```html
<header id="main-navbar-content"></header>
	<h3>Lorem Ipsum</h3>
<footer id="main-footer-content"></footer>
```

### Instalação

1 -  Importar os estilos CSS e os scripts necessários para estilizar os componentes
```html
<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.css">
<link rel="stylesheet" href="/bower_components/tupi2/dist/theme.min.css">
<link rel="stylesheet" href="/dist/css/style.css">

<script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/bower_components/bootstrap/dist/js/bootstrap.js"></script>
```

2 -  Importar o script
```html
<script type="text/javascript" src="/dist/js/script.js"></script>
```
3 - Inicializar o script
```html
<script type="text/javascript">
  window.cdp.url = 'https://perfis.atencaobasica.org.br'; // opcional: definir a url do backend
  window.cdp.renderAll();
</script>
```

### Desenvolvimento
Para rodar o projeto, basta instalar as dependências utilizando `npm install && bower install` e rodar o projeto usando `grunt`