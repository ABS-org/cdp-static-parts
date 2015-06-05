if (!window.cdp) window.cdp = {};

if (!window.cdp.hosts) {
  window.cdp.hosts = {
    main: 'https://atencaobasica.org.br',
    ajuda: 'https://ajuda.atencaobasica.org.br',
    blog: 'https://blog.atencaobasica.org.br',
    cursos: 'https://cursos.atencaobasica.org.br',
    relatos: 'https://novo.atencaobasica.org.br',
    perfis: 'https://perfis.atencaobasica.org.br',
    static: 'https://static.atencaobasica.org.br'
  };
}

window.cdp.cdpLogoText="<div class=\"navbar-brand header-main-brand\">"+
  "  <a href=\""+window.cdp.hosts.cursos+"\" class=\"app-main-logo\">"+
  "    <div class=\"logo-cdp\">"+
  "      <span class=\"logo-symbol\"><img src=\""+window.cdp.hosts.static+"/img/logo-simbolo.png\"><\/span>"+
  "      <span class=\"logo-text\"><img src=\""+window.cdp.hosts.static+"/img/logo-text.png\" alt=\"Comunidade de Praticas\"><\/span>"+
  "    <\/div>"+
  "  <\/a>"+
  "<\/div>";
window.cdp.renderLogo = function renderLogo(seletor) {
  if (!seletor) seletor = '#cdp-logo-area';
  $(seletor).append(window.cdp.cdpLogoText);
};

window.cdp.cdpMainMenuLinksText="<li class=\"main_menu-item style_group inactive\">"+
  "  <a class=\"main_menu-item--wrapper\" href=\""+window.cdp.hosts.main+"\/comunidades\">"+
  "    <i class=\"main_menu-item--icon cdp cdp-cdp-logo cdp-2x\"><\/i>"+
  "    <span class=\"main_menu-item--name\">Comunidades<\/span>"+
  "  <\/a>"+
  "<\/li>"+
  "<li class=\"main_menu-item style_story inactive\">"+
  "  <a data-dlink=\"true\" data-page=\"relatos\" class=\"main_menu-item--wrapper\" href=\""+window.cdp.hosts.relatos+"\/relato\">"+
  "    <i class=\"main_menu-item--icon cdp cdp-report cdp-2x\"><\/i>"+
  "    <span class=\"main_menu-item--name\">Relatos<\/span>"+
  "  <\/a>"+
  "<\/li>";
window.cdp.renderMainMenuLinks = function renderMainMenuLinks(seletor) {
  if (!seletor) seletor = '#cdp-main-menu';
  $(seletor).prepend(window.cdp.cdpMainMenuLinksText);
};

window.cdp.cdpServicesMenuText= "<a class=\"main_menu-item--wrapper dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">"+
  "            <i class=\"main_menu-item--icon cdp cdp-services cdp-2x\"><\/i>"+
  "            <span class=\"main_menu-item--name\">CdP+<\/span>"+
  "          <\/a>"+
  "          <ul class=\"dropdown-services dropdown-menu dropdown-menu-right arrow_box-menu-services\" role=\"menu\">"+
  "            <li class=\"style_courses\">"+
  "              <a href=\""+window.cdp.hosts.cursos+"/courses\">"+
  "                <span class=\"fa-stack\">"+
  "                  <i class=\"fa fa-circle fa-stack-2x fa-4x pull-left\" style=\"font-size: 2.2em; color: #00a182; margin-bottom: 10px;\"><\/i>"+
  "                  <i class=\"cdp cdp-badge cdp-lg cdp-stack-1x cdp-inverse\" style=\"font-size: 1.5em; margin-top: 4px;\"><\/i>"+
  "                <\/span>"+
  "                <span class=\"text\" style=\"margin-top: 9px;\">Cursos<\/span>"+
  "              <\/a>"+
  "            <\/li>"+
  "            <li class=\"style_blog\">"+
  "              <a href=\""+window.cdp.hosts.blog+"\">"+
  "                <img style=\"width: 30px; margin-bottom: 8px; margin-top: 2px; height: 30px; position: relative;\" src=\""+window.cdp.hosts.blog+"/wp-content\/uploads\/2014\/12\/logo-blog.png\">"+
  "                <span class=\"text\">Blog<\/span>"+
  "              <\/a>"+
  "            <\/li>"+
  "            <li class=\"style_help\">"+
  "              <a href=\""+window.cdp.hosts.ajuda+"\">"+
  "                <img style=\"width: 30px; margin-bottom: 10px; margin-top: 2px; height: 30px; position: relative;\" src=\""+window.cdp.hosts.static+"/img/img-icon-ajuda.png\">"+
  "                <span class=\"text\">Ajuda<\/span>"+
  "              <\/a>"+
  "            <\/li>"+
  "<\/ul>";
window.cdp.renderServicesMenu = function renderServicesMenu(seletor) {
  if (!seletor) seletor = '#cdp-services-area';
  $(seletor).html(window.cdp.cdpServicesMenuText);
};

/**
 * Static cdp user menu links
 * @type {String}
 */
window.cdp.cdpUserMenuLiText = "<li>"+
  "      <a href=\""+window.cdp.hosts.relatos+"\/relato\/meus\"><i class=\"cdp cdp-report\"><\/i> Meus Relatos<\/a>"+
  "    <\/li>"+
  "    <li class=\"divider\"><\/li>"+
  "    <li>"+
  "      <a href=\""+window.cdp.hosts.relatos+"/meu/perfil\"> <i class=\"cdp cdp-user\"><\/i> Ver perfil<\/a>"+
  "    <\/li>"+
  "    <li>"+
  "      <a href=\""+window.cdp.hosts.perfis+"/account\"> <i class=\"cdp cdp-user\"><\/i> Editar perfil<\/a>"+
  "    <\/li>"+
  "    <li class=\"divider\"><\/li>"+
  "    <li>"+
  "      <a href=\""+window.cdp.hosts.cursos+"/user_mail_notify\"><i class=\"cdp cdp-bell\"><\/i> Notificações por Email<\/a>"+
  "    <\/li>"+
  "    <li class=\"divider\"><\/li>"+
  "    <li>"+
  "      <a href=\""+window.cdp.hosts.cursos+"/user_myresults\"><i class=\"cdp cdp-star-full\"><\/i> Notas das Avaliações<\/a>"+
  "    <\/li>"+
  "    <li class=\"divider\"><\/li>"+
  "    <li>"+
  "        <a href=\""+window.cdp.hosts.relatos+"/admin\"><i class=\"fa fa-medkit\"><\/i> Administrar<\/a>"+
  "    <\/li>"+
  "    <li class=\"divider\"><\/li>"+
  "    <div class=\"container-button-signin\">"+
  "      <a href=\""+window.cdp.hosts.perfis+"\/auth\/logout\" class=\"btn btn-sm btn-danger\">Sair<\/a>"+
  "    <\/div>";
window.cdp.renderUserMenuText = function renderUserMenuText(seletor) {
  if (!seletor) seletor = '#dropdown-login-menu';
  $(seletor).append(window.cdp.cdpUserMenuLiText);
};

/**
 * Static CDP footer
 * @type {String}
 */
window.cdp.cdpFooterText="" +
  "<footer id=\"footer-main\">"+
  "  <div class=\"container\">"+
  "    <div class=\"row\">"+
  "      <div id=\"footer-main--blog\" class=\"col-xs-12 col-sm-6 col-md-4\">"+
  "        <h4 class=\"title-footer\">"+
  "          <div class=\"logo-cdp\">"+
  "            <span class=\"logo-symbol\"><img src=\""+window.cdp.hosts.static+"/img/logo-simbolo.png\"><\/span><span class=\"logo-text\"><img src=\""+window.cdp.hosts.static+"/img/logo-text.png\" alt=\"Comunidade de Praticas\"><\/span>"+
  "          <\/div>"+
  "        <\/h4>"+
  "        <div class=\"small-footer\">"+
  "          <p>Espaço virtual de construção de conhecimento e aprendizado a partir das experiências de cada profissional da Atenção Básica.<\/p>"+
  "        <\/div>"+
  "        <a class=\"btn btn-xs btn-default\" href=\""+window.cdp.hosts.cursos+"\/sobre\">Saiba mais<\/a>"+
  "      <\/div>"+
  "      <div id=\"footer-main--facebook\" class=\"col-xs-12 col-sm-5 col-sm-offset-1 col-md-4  col-md-offset-0\">"+
  "        <div class=\"fb-like-box-lg\">"+
  "          <div><iframe src=\"\/\/www.facebook.com\/plugins\/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fcomunidadedepraticas&amp;width=300px&amp;height=208&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=false&amp;show_border=0\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:300px; height:243px;\" allowtransparency=\"true\"><\/iframe><\/div>"+
  "        <\/div>"+
  "      <\/div>"+
  "      <div id=\"footer-main--links\" class=\"col-xs-12 col-sm-12 col-md-4\">"+
  "        <h4 class=\"links-section--title title-footer\">Links<\/h4>"+
  "        <ul class=\"links-section--list\">"+
  "          <li class=\"links-section--list-item style-help_center\">"+
  "            <a class=\"links-section--subtitle\" href=\""+window.cdp.hosts.ajuda+"\">"+
  "              <img src=\""+window.cdp.hosts.static+"/img/img-icon-ajuda.png\">"+
  "              <div class=\"icon-title\">Central de Ajuda<\/div>"+
  "            <\/a>"+
  "          <\/li>"+
  "          <li class=\"links-section--list-item style-blog\">"+
  "            <a class=\"links-section--subtitle\" href=\""+window.cdp.hosts.blog+"\">"+
  "              <img src=\""+window.cdp.hosts.blog+"\/wp-content\/uploads\/2014\/12\/logo-blog.png\">"+
  "              <div class=\"icon-title\">Blog<\/div>"+
  "            <\/a>"+
  "          <\/li>"+
  "          <li class=\"links-section--list-item style-terms\">"+
  "            <a href=\""+window.cdp.hosts.ajuda+"\/central-cdp\/termo-de-uso\/\" class=\"links-section--subtitle\">"+
  "              <span class=\"fa-stack\">"+
  "                <i class=\"fa fa-circle fa-stack-2x fa-4x pull-left icon-circle-group\"><\/i>"+
  "                <i class=\"icons-outline icons-outline-paper-lines  cdp-stack-1x cdp-inverse\"><\/i>"+
  "              <\/span>"+
  "              <span class=\"icon-title\">Termos de Uso<\/span>"+
  "            <\/a>"+
  "          <\/li>"+
  "        <\/ul>"+
  "      <\/div>"+
  "    <\/div>"+
  "    <div class=\"row\">"+
  "      <div id=\"footer-main--sponsor\" class=\"col-xs-12 col-sm-7\">"+
  "        <h4 class=\"sponsor-title\">Realização<\/h4>"+
  "        <ul class=\"sponsor-list pull-left\">"+
  "          <li class=\"sponsor-list--item item-01\">"+
  "            <a href=\"http:\/\/dab.saude.gov.br\/portaldab\/smp_o_que_e.php\" target=\"_blank\">"+
  "              <img class=\"sponsor-list--item-img item-01\" src=\""+window.cdp.hosts.static+"/img/saude-perto-de-voce.png\">"+
  "            <\/a>"+
  "          <\/li>"+
  "          <li class=\"sponsor-list--item item-02\">"+
  "            <a href=\"http:\/\/portalsaude.saude.gov.br\/index.php\/cidadao\/entenda-o-sus\" target=\"_blank\">"+
  "              <img class=\"sponsor-list--item-img item-02\" src=\""+window.cdp.hosts.static+"/img/sus.png\">"+
  "            <\/a>"+
  "          <\/li>"+
  "          <li class=\"sponsor-list--item item-03\">"+
  "            <a href=\"http:\/\/portalsaude.saude.gov.br\/\" target=\"_blank\">"+
  "              <img class=\"sponsor-list--item-img item-03\" src=\""+window.cdp.hosts.static+"/img/ministerio-da-saude.png\">"+
  "            <\/a>"+
  "          <\/li>"+
  "        <\/ul>"+
  "      <\/div>"+
  "      <div id=\"footer-main--partner\" class=\"col-xs-12 col-sm-5\">"+
  "        <h4 class=\"partner-title\">Parcerias<\/h4>"+
  "        <ul class=\"partner-list\">"+
  "          <li class=\"partner-list--item\">"+
  "            <img class=\"partner-list--item-img\" src=\""+window.cdp.hosts.static+"/img/direita.png\">"+
  "          <\/li>"+
  "        <\/ul>"+
  "      <\/div>"+
  "    <\/div>"+
  "  <\/div>"+
  "  <div class=\"copyright\">"+
  "    <p class=\"text-center text-muted\">A Comunidade de Práticas está licenciada com uma Licença Creative Commons - Atribuição-NãoComercial-Compartilha Igual 4.0 Internacional. <br>Para ver uma cópia desta licença, visite <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">http://creativecommons.org/licenses/by-nc-sa/4.0/</a>.<\/p>"+
  "  <\/div>"+
  "<\/footer>";
window.cdp.renderFooterText = function renderFooterText(seletor) {
  if(!seletor) seletor = 'body';
  $(seletor).append(window.cdp.cdpFooterText);
};

window.cdp.renderAll = function renderAll() {
  window.cdp.renderLogo();
  window.cdp.renderMainMenuLinks();
  window.cdp.renderServicesMenu();
  window.cdp.renderUserMenuText();
  window.cdp.renderFooterText();
};

window.cdp.renderUnAlthenticated = function renderUnAlthenticated() {
  window.cdp.renderFooterText();
};
