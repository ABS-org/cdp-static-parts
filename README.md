# cdp-static-parts
Conjunto de scripts de páginas e componenetes estáticos.

# Requisitos
Para poder fazer funcionar, é necessário ter dois id referenciando o local onde irá ser indicado.
```html
<header id="main-navbar-content"></header>
	<h3>Lorem Ipsum</h3>
<div id="main-footer-content"></div>
```
Neste exemplo, o header será renderizado no `#main-navbar-content` e o rodapé no `main-footer-content`.

# Instalação

1. Importar o script
```html
<script type="text/javascript" src="/dist/script.js"></script>
``` 
2. Inicializar o script 
```html
<script type="text/javascript">
  window.cdp.renderAll();
</script>
```
3. Testar (:

# Desenvolvimento
Para rodar o projeto, basta instalar as dependencias utilizando `npm install` e rodar o projeto usando `grunt`