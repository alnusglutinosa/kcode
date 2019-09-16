(function() {

  var mainNav = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toggle");
  var jsTabs = document.querySelector(".js-tabs");
  var myBody = document.querySelector("body");
  var jsFilter = document.querySelector(".js-filter");
  var jsFilterBtn = document.querySelector(".js-filter-btn");


//   navToggle.addEventListener('click',function(){
// 	if (navMain.classList.contains('main-nav--closed')) {
// 	  navMain.classList.remove('main-nav--closed');
// 	  navMain.classList.add('main-nav--opened');
// 	} else {
// 	  navMain.classList.add('main-nav--closed');
// 	  navMain.classList.remove('main-nav--opened');
// 	}
//   });


	if (jsFilterBtn && jsFilter) {
		jsFilterBtn.addEventListener("click", function () {
			jsFilter.classList.toggle("is-show");
		  })
	};

  if (navToggle) {
    navToggle.classList.remove("main-nav__toggle--hidden");
	mainNav.classList.add("main-nav--closed");

	myBody.classList.remove("html-is-overflow");

    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("main-nav--opened");
	  mainNav.classList.toggle("main-nav--closed");
	  myBody.classList.toggle("html-is-overflow");
    })
  };

  if (jsTabs) {
	jsTabs.addEventListener("click", function (event) {

		let link = event.target.closest('.js-tab');

		if (!link) {
			return;
		}

		if (!jsTabs.contains(link)) {
			return;
		}

		event.stopPropagation();
		let tabs = Array.prototype.slice.apply(document.querySelectorAll('.js-tab'));
		tabs.map(tab => tab.classList.remove('active'));

		let panels = Array.prototype.slice.apply(document.querySelectorAll('.js-panel'));

		panels.map(panel => panel.classList.remove('active'));

		link.classList.add('active');

		let i = tabs.indexOf(link);

		panels[i].classList.add('active')


		 console.log('i', i);
		// console.log(event.currentTarget);
		// console.log(link.id);

		// mainNav.classList.toggle("main-nav--opened");
		// mainNav.classList.toggle("main-nav--closed");
	})
  }

//   $('.tab').on('click', function (e) {
// 	e.preventDefault();
//   $('.tab, .panel').removeClass('active');
//   $(this).add('#' + $(this).attr('id').replace(/\s*tab\s*/, 'panel')).addClass('active');
//   $(this).focus();
// });


})();
