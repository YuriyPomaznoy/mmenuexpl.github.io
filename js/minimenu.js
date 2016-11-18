var grandMenu = document.getElementById('grand_menu');
var extentionMenu = document.getElementById('extention_menu'); // $('#extention_menu');


$('#mini-menu').click(function() {
	grandMenu.style.display = 'block';
	setTimeout(onCl, 15);
	
	function onCl() {
		grandMenu.className = 'gr-menu-place';
	}
});

document.onclick = function(e) {
	var target = e.target;
	if(target.tagName == 'IMG' || target.tagName == 'PRE' || target.tagName == 'TD')
		return;
	grandMenu.style.display = 'none';
	grandMenu.className = '';

	extentionMenu.style.display = 'none';
	extentionMenu.className = '';
}

grandMenu.onclick = function(e) {
	var target = e.target;
	console.log(target);
	//if(!target.hasAttribute('data-has-extend') || !target.hasAttribute('data-has-extend-prim')) return;

	if(target.hasAttribute('data-has-extend')) {
		this.style.display = 'none';
		extentionMenu.style.display = 'block';
		setTimeout(makeShow, 15);
	}

	function makeShow() {
		extentionMenu.className = 'ext-menu-place';
	}
}