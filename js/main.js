var baseLayout = '<div class="nav"><img src="images/burger.png"><h1>Best Burgers</h1><ul class="nav-links"><li class="home">Home</li><li class="menu">Menu</li><li class="contact">Contact</li></div><div class="container"></div>';

var homeContent = function() {
	clearContainer();
	currentTab('home');
	var content = '<h3>Home</h3><p>Welcome to Best Burgers! We have the best and most splendid burgers around! Take a look at our menu to get your mouth watering and then come of over for a bite to eat!</p>';
	$('.container').append(content);
} 

var menuContent = function() {
	clearContainer();
	currentTab('menu');
	var content = '<h3>Menu</h3><ul class="menu-list"><li><img src="images/burger.png"><h4>Best Burger Special</h4></li><li><img src="images/burger.png"><h4>Best Burger Super Special</h4></li><li><img src="images/burger.png"><h4>Best Burger Super Mega Special</h4></li><li><img src="images/burger.png"><h4>Best Burger Super Omega Mega Special</h4></li><li><img src="images/burger.png"><h4>Best Burger Extreme Super Omega Mega Special</h4></li>'
	$('.container').append(content);
}

var contactContent = function() {
	clearContainer();
	currentTab('contact');
	var content = '<h3>Contact</h3><p>If you have any questions or concerns, please contact us at 867-5309</p>'
	$('.container').append(content);
}

var clearContainer = function() {
	$('.container').empty();
}

var currentTab = function(target) {
	$('.home').removeClass('current-tab');
	$('.menu').removeClass('current-tab');
	$('.contact').removeClass('current-tab');
	switch(target) {
		case 'home':
			$('.home').addClass('current-tab');
			break;
		case 'menu':
			$('.menu').addClass('current-tab');
			break;
		case 'contact':
			$('.contact').addClass('current-tab');
			break;
	}
}

$(document).ready(function() {
	$('.content').append( baseLayout );
	homeContent();
	$('.home').click(homeContent);
	$('.menu').click(menuContent);
	$('.contact').click(contactContent);
});

