
// Responsive Menu Header Navigation

		(function () {
		
		
		    // hasClass
		    function hasClass(elem, className) {
		        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
		    }
		
		    // toggleClass
		    function toggleClass(elem, className) {
		        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
		        if (hasClass(elem, className)) {
		            while (newClass.indexOf(' ' + className + ' ') >= 0) {
		                newClass = newClass.replace(' ' + className + ' ', ' ');
		            }
		            elem.className = newClass.replace(/^\s+|\s+$/g, '');
		        } else {
		            elem.className += ' ' + className;
		        }
		    }
		
		    // Mobile nav function
		    var mobileNav = document.querySelector('.site-header-mobile');
		    var toggle = document.querySelector('.site-header-wrap');
		    mobileNav.onclick = function () {
		        toggleClass(this, 'site-header-mobile-open');
		        toggleClass(toggle, 'site-header-active');
		    };
		})();