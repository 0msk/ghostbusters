$(document).ready(function () {
  // jqDocReady пишем в самом начале и выдает начальную форму скрипта
  const mMenuBtn = $(".m-menu-button");
  // данная строчка показывает к какому классу мы обращаемся
  const mMenu = $(".m-menu");
  // const - это переменная/ let - тоже
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    // данный класс быть активным клавише меню
    // toggle - показывает или скрывает что либо
    $("body").toggleClass("no-scroll");
    // перевоится как: "к тегу бади пприменяется класс то скролл"
  });
  tab.on("click", function () {
    tab.removeClass("active");
    // позволяет быть выбранным либо актеры либо создатели, а не вместе одновремено
    $(this).toggleClass("active");
    // позволяет сделать кнопки актеры и создатели кликабельными
    $(this).attr("data-target");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    // remove - удаляет
    $(activeTabContent).toggleClass("visible");
    // attr - атрибут
    // console.log() - позволяет вывести какое - либо правило в консоле через инспектора кода и проверить работоспособность.Например: $(this).attr('data-target')
  });

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    // делает 4 слайда новостей на странице
    spaceBetween: 25,
    // делает расстояние между слайдами 25 пикселей
    loop: true,
    breakpoints: {
      // создает правило которое показывает при каком размере экрана задавать работу
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
          // nextEl -следующий элемент
          // делает при клике на стрелку переключение слайдов
        },
      },
    },
  });
});
// закончил на29:03 но видимо где-то ошибка. лучше начать где то с 25:00
