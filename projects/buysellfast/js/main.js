$(function() {
 
  // Switcher Nearest Stores
$('.switch-nearest-store select').switchify({ on: '0', off: '1' });

 // Switcher Advanced Search Show results from city only
$('#show-from-city select').switchify({ on: '0', off: '1' });

 // Switcher Advanced Search Item Condition
$('#item-condition-new select').switchify({ on: '0', off: '1' });

 // Switcher Advanced Search Item Condition
$('#item-condition-used select').switchify({ on: '0', off: '1' });

// Switcher Advanced Search Search by store name
$('#search-store-name select').switchify({ on: '0', off: '1' });

//Tax Switchers
$('#switcher-charge-tax select').switchify({ on: '0', off: '1' });
$('#switcher-gst select').switchify({ on: '0', off: '1' });
$('#switcher-pst select').switchify({ on: '2', off: '3' });

// Switcher Account Settings - display purchases to my friend
$('#display-purchases-to-friends select').switchify({ on: '0', off: '1' });

// Switcher Account Settings2 - password
$('#switcher-password select').switchify({ on: '0', off: '1' });

// Switcher item for sale and item out of stock
$('#switcher-itemforsale select').switchify({ on: '0', off: '1' });
$('#switcher-outofstock select').switchify({ on: '2', off: '3' });

// Switcher settings auto renew
$('#switcher-auto-renew select').switchify({ on: '0', off: '1' });


});




