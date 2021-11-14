function copyToClipBoard(msg) {
	const el = document.createElement("input");
	msg = msg.replaceAll("-", "");
	el.value = msg;
	document.body.appendChild(el);
	el.select();
	navigator.clipboard.writeText(el.value);
	document.body.removeChild(el);

	var tmpTextarea = document.createElement("textarea");
	tmpTextarea.value = msg;

	document.body.appendChild(tmpTextarea);
	tmpTextarea.select();
	tmpTextarea.setSelectionRange(0, 9999); // 셀렉트 범위 설정

	document.execCommand("copy");
	document.body.removeChild(tmpTextarea);
	//alert("URL 복사가 완료되었습니다.");
	alert("복사되었습니다.");
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
