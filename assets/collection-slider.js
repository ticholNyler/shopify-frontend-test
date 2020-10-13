const addSwiper = (section_id) =>{
  const newEl = `.swiper-container-${section_id}`;
  const mobileView = document.getElementsByClassName(`swiper-container-${section_id}`)[0].dataset.mobile;
  const tabletView = document.getElementsByClassName(`swiper-container-${section_id}`)[0].dataset.tablet;
  var mySwiper = new Swiper(newEl, {
		direction: 'horizontal',
  		loop: true,
  		navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
  		},
  		breakpoints: {
        	640: {
          	slidesPerView: mobileView,
		  	slidesPerGroup: mobileView
        	},
        	768: {
          	slidesPerView: tabletView,
		  	slidesPerGroup: tabletView
        	},
        	1024: {
          	slidesPerView: 4,
		  	slidesPerGroup: 4
        	},
    	}
	})
}

  



