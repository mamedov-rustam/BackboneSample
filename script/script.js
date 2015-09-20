(function() {
	var items = $('ul.menu-list > li');
	items.mouseover(function() {
		$(this).toggleClass('active');
	});
	items.mouseout(function() {
		$(this).toggleClass('active');
	});
})();