#Como instalar


Adicionar o script abaixo no html do site:

```html
<script src="https://static.atencaobasica.org.br/cdp-static-parts/dist/script.js"></script>
```

Abaixo do script usar uma das funções que carregam o html estatico:

```html
<script type="text/javascript">
  // carrega o html do footer dos sistemas da cdp
  window.cdp.renderFooterText();
</script>
```