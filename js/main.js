function copyToClipBoard(msg) {
	const el = document.createElement("input");
	msg = msg.replaceAll("-", "");
	el.value = msg;
	document.body.appendChild(el);
	el.select();
	navigator.clipboard.writeText(el.value);
	document.body.removeChild(el);
}

$(function() {
	$(document).ready(function() {
		$(".copy").on("click", function() {
			let copymsg = $(".modal-account").text();
			copyToClipBoard(copymsg);
		});
		$(".credit").on("click", function() {
			let title = $(this).data("title");
			let account = $(this).data("account");
			let bank = $(this).data("bank");
			let name = $(this).data("name");
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
