$(function() {
	$(document).ready(function() {
		$(".credit").on("click", function() {
			let title = $(this).data("title");
			let account = $(this).data("account");
			let bank = $(this).data("bank");
			let name = $(this).data("name");
			console.log(bank);
			$(".modal-title").text(title);
			$(".modal-bank").text(bank);
			$(".modal-account").text(account);
			$(".modal-accName").text(name);
		});

		var swiper = new Swiper(".mySwiper", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true
		});
		var swiper2 = new Swiper(".mySwiper2", {
			loop: true,
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			thumbs: {
				swiper: swiper
			}
		});
	});
});
