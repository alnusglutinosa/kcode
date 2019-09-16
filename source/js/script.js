(function() {

  var mainNav = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toggle");
  var jsTabs = document.querySelector(".js-tabs");
  var myBody = document.querySelector("body");
  var jsFilter = document.querySelector(".js-filter");
  var jsFilterBtn = document.querySelector(".js-filter-btn");

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

		var link = event.target.closest('.js-tab');

		if (!link) {
			return;
		}

		if (!jsTabs.contains(link)) {
			return;
		}

		event.stopPropagation();
		var tabs = Array.prototype.slice.apply(document.querySelectorAll('.js-tab'));
		tabs.map(tab => tab.classList.remove('active'));

		var panels = Array.prototype.slice.apply(document.querySelectorAll('.js-panel'));
		panels.map(panel => panel.classList.remove('active'));
		link.classList.add('active');

		var i = tabs.indexOf(link);
		panels[i].classList.add('active')

	})
  }
})();
