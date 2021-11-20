$(function() {
	$(document).ready(function() {
		$(".copy").on("click", function() {
			if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
				$(".btn").on("click", function(e) {
					select_all_and_copy(document.getElementById("foo"));
				});
			} else {
				var clipboard = new Clipboard(".btn");
				clipboard.on("success", function(e) {
					alert("복사 되었습니다.");
					e.clearSelection();
				});
				clipboard.on("error", function(e) {
					alert("선택된 텍스트를 복사하세요.");
				});
			}
		});
		$(".credit").on("click", function() {
			let title = $(this).data("title");
			let account = $(this).data("account");
			let bank = $(this).data("bank");
			let name = "예금주 : " + $(this).data("name");
			$(".modal-title").text(title);
			$(".modal-bank").text(bank);
			$(".modal-account").attr("value", account);
			$(".modal-accName").text(name);
		});

		var swiper = new Swiper(".mySwiper", {
			spaceBetween: 0,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true
		});
		var swiper2 = new Swiper(".mySwiper2", {
			spaceBetween: 0,
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
