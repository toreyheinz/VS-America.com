$(document).foundation();

$('nav#sidebar-nav > ul').addClass('vertical menu')
$('nav#sidebar-nav > ul ul').addClass('vertical nested menu')

$('nav#sidebar-subnav > ul').addClass('vertical menu')

$('nav#top-menu > ul').addClass('menu')

var menu = new Foundation.AccordionMenu($('nav#sidebar-nav > ul'), {submenuToggle: true});
menu.down($('nav#sidebar-nav li.is-active ul'))
