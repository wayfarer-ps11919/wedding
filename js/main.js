$(function() {
	$(document).ready(function() {
		$(".copy").on("click", function() {
			let copymsg = $(".modal-account").text();
			const CopyByClipBoardAPI = () => {
				const copyByClipBoardAPI = () => {
					navigator.clipboard
						.writeText(`${copymsg}`)
						.then(() => {
							alert(`${copymsg}을 클립보드에 복사했습니다.`);
						})
						.catch(() => {
							alert(`복사 실패!`);
						});
				};
			};
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
