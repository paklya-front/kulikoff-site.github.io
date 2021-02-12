"use strict"

$(document).ready(function function_name(argument) {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');

		$(document).on('click', '.header__list > li > a', e => {



			$('.header__burger, .header__menu').removeClass('active');
			$('body').removeClass('lock');
		});
	});


	$('.slider').slick({

		lazyLoad: 'ondemand',
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: !1,
				},


			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 1,
					arrows: true,

				},
			}
		]


	});
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener("click", function (event) {
			event.preventDefault();
			const blockID = anchor.getAttribute('href')
			document.querySelector('' + blockID).scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		})
	};



});
window.onload = function () {
	let actionFinder = document.querySelectorAll('.form__group');
	console.log(actionFinder);

}

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();


		let error = formValidate(form);
		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending')
			let respons = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (respone.ok) {
				let result = await Response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
			}

		} else {
			alert('Заполните оба поля!!!')
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				} else if (input.value === '') {
					formAddError(input);
					error++;
				}

			}

		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

});



