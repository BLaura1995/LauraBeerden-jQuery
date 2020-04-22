// $('h1').hide();
//.hide() verstopt alle selectors in dit dit geval is het de h1
// $('h1#heading1').hide(); => een ID
// $('h1.heading1').hide(); => een CLASS
// $('p span').css('color', 'red'); parent child
$('ul#list li:first').css('color', 'red');
//de :first neemt bvb de eerste item in de lijst.
$('ul#list li:last').css('color', 'green');
//de :last neemt de laatste item. 
$('ul#list li:even').css('background-color', 'yellow');
//de :even neemt de even elementen.
$('ul#list li:odd').css('background-color', 'grey');
//de :odd neemt de oneven elementen.
$('ul#list li:nth-child(3n)').css('list-style', 'none');
//neemt het kind element op die jij tussen de () zet. 
$(':button').hide();
//Laat de button/knop verdwijnen
$(':submit').hide();
//Laat de knop submit verdwijnen
$(':text').hide();
//Laat de text gedeelde verwijderen. 
$('[href]').css('color', 'red');
//Geeft alle ankers de kleur rood
$('a[href="http://yahoo.com]').css('color', 'green');
//geeft de yahoo link de kleur groen. 
// $('*').hide();
// Doet alles verdwijnen.