$(function() {
	$(document).ready(function() {
		// 모든 이미지 tag들을 list형태로 가져옴

		$(".copy").on("click", function() {
			let copymsg = $(".modal-account").text();
			$(this).attr("data-clipboard-text", copymsg);

			var clip = new Clipboard(".copy");
			clip.on("success", function(e) {
				alert("계좌번호를 복사하였습니다.");
			});
		});
		$(".credit").on("click", function() {
			let title = $(this).data("title");
			let account = $(this).data("account");
			let bank = $(this).data("bank");
			let name = "예금주 : " + $(this).data("name");
			$(".modal-title").text(title);
			$(".modal-bank").text(bank);
			$(".modal-account").text(account);
			$(".modal-accName").text(name);
		});

		var swiper = new Swiper(".mySwiper", {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true
		});
		var swiper2 = new Swiper(".mySwiper2", {
			loop: true,
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
