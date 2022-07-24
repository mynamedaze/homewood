'use strict';
$(document).ready(function () {
  var overlay = document.getElementsByClassName('overlay');

  var stage4PhoneInput = document.getElementById('stage-4-phone-input');

  /*вешаем цели на клики по телефонам*/
  var pageHeaderPhone = document.getElementsByClassName('page-header__link--phone');
  var pageFooterPhone = document.getElementsByClassName('page-footer__contact-link--phone');

  $(pageHeaderPhone).click(function() {
    yaCounter47031906.reachGoal('phone-click');
    gtag('event', 'phone-click', {
      'event_category': 'phone',
      'event_action': 'click',
    });
  });

  $(pageFooterPhone).click(function() {
    yaCounter47031906.reachGoal('phone-click');
    gtag('event', 'phone-click', {
      'event_category': 'phone',
      'event_action': 'click',
    });
  });
  /* */

  /*меняем value у сабмит кнопки в форме intro в зависимости от устройства*/
  var introSubmit = document.getElementById('intro-submit');

  function namingIntroSubmit() {
    if ((document.documentElement.clientWidth > 767) && (document.documentElement.clientWidth < 1366)) {
      $(introSubmit).val('Получить проект');
    } else if (document.documentElement.clientWidth > 1365) {
      $(introSubmit).val('Получить проект бесплатно');
    }
  };

  namingIntroSubmit();

  $(window).resize(function () {
    namingIntroSubmit();
  });
  /* */
  /*отрабатываем popup approved*/
  var popupApproved = document.getElementsByClassName('popup-approved');

  var popupApprovedBtn = document.getElementsByClassName('popup-approved__btn');

  $(popupApprovedBtn).click(function () {
    $(popupApproved).fadeOut(300);
    var curPos=$(document).scrollTop();
    var scrollTime=curPos/1.73;
    $("body,html").animate({"scrollTop":0},scrollTime);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /*активируем работу callback шапки*/
  var headerCallbackBtn = document.getElementsByClassName('page-header__callback-btn');
  var footerCallbackBtn = document.getElementsByClassName('page-footer__callback-btn');
  var introUtpBtn = document.getElementsByClassName('intro__utp-btn');

  var popupCallback = document.getElementsByClassName('popup-callback');
  var popupCallbackCloseBtn = document.getElementsByClassName('popup-callback__close-btn');

  $(headerCallbackBtn).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  });

  $(introUtpBtn).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  });

  $(footerCallbackBtn).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  });

  $(popupCallbackCloseBtn).click(function () {
    $(popupCallback).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /*работа калькулятора*/

  var stage1 = document.getElementsByClassName('stage-1');
  var stage2 = document.getElementsByClassName('stage-2');
  var stage3 = document.getElementsByClassName('stage-3');
  var stage4 = document.getElementsByClassName('stage-4');
  var stage5 = document.getElementsByClassName('stage-5');

  var goalTo2Trigger = false;
  var goalTo3Trigger = false;
  var goalTo4Trigger = false;
  var goalTo5Trigger = false;

  var techType;
  var floorsCount;
  var squareSize;
  var pplCount;

  var techTypeInput = document.getElementById('tech-type-input');
  var floorsCountInput = document.getElementById('floors-count-input');
  var squaresSizeInput = document.getElementById('square-input');
  var pplCountInput = document.getElementById('ppl-count-input');
  /*stage-1*/
    var stage1ErrorTxt = document.getElementsByClassName('stage-1__error-txt');

    var stage1Radio = document.getElementsByClassName('stage-1__radio');

    var stage1BtnNext = document.getElementsByClassName('stage-1__btn-next');

    $(stage1Radio).click(function() {
      techType = $(this).val();
      console.log(techType);
    });

    $(stage1BtnNext).click(function() {
      if (techType != undefined) {
        $(stage1ErrorTxt).addClass('disable');
        $(stage1).fadeOut(300);
        setTimeout(function() {
          $(stage2).fadeIn(300);
        }, 300);
        if (goalTo2Trigger == false) {
          gtag('event', 'form-to-2', { 'event_category': 'form', 'event_action': 'to-2', });

          goalTo2Trigger == true;
        }
      } else if (techType == undefined) {
        $(stage1ErrorTxt).removeClass('disable');
      }
    });
  /* */
  /*stage-2*/
  var stage2ErrorTxt = document.getElementsByClassName('stage-2__error-txt');

  var stage2Radio = document.getElementsByClassName('stage-2__radio');

  var stage2BtnNext = document.getElementsByClassName('stage-2__btn-next');
  var stage2BtnPrev = document.getElementsByClassName('stage-2__btn-prev');


  $(stage2Radio).click(function() {
    floorsCount = $(this).val();
    console.log(floorsCount);
  });

  $(stage2BtnNext).click(function() {
    if (floorsCount != undefined) {
      $(stage2ErrorTxt).addClass('disable');
      $(stage2).fadeOut(300);
      setTimeout(function() {
        $(stage3).fadeIn(300);
      }, 300);
      if (goalTo3Trigger == false) {
        gtag('event', 'form-to-3', { 'event_category': 'form', 'event_action': 'to-3', });

        goalTo3Trigger == true;
      }
    } else if (floorsCount == undefined) {
      $(stage2ErrorTxt).removeClass('disable');
    }
  });

  $(stage2BtnPrev).click(function(event) {
    event.preventDefault();
    $(stage2).fadeOut(300);
    setTimeout(function() {
      $(stage1).fadeIn(300);
    }, 300);
  });
  /* */
  /*stage-3*/
  var stage2ErrorTxtSquare = document.getElementsByClassName('stage-3__error-txt--square');
  var stage2ErrorPpl = document.getElementsByClassName('stage-3__error-txt--ppl');

  var stage3RadioSquare = document.getElementsByClassName('stage-3__input-square');
  var stage3RadioPpl = document.getElementsByClassName('stage-3__input-ppl');

  var stage3BtnNext = document.getElementsByClassName('stage-3__btn-next');
  var stage3BtnPrev = document.getElementsByClassName('stage-3__btn-prev');

  $(stage3RadioSquare).click(function() {
    squareSize = $(this).val();
    console.log(squareSize);
  });

  $(stage3RadioPpl).click(function() {
    pplCount = $(this).val();
    console.log(pplCount);
  });

  $(stage3BtnNext).click(function() {
    if ((squareSize != undefined) && (pplCount != undefined)) {
      $(stage2ErrorTxtSquare).addClass('disable');
      $(stage2ErrorPpl).addClass('disable');
      console.log('ddd');
      $(stage3).fadeOut(300);
      setTimeout(function() {
        $(stage4).fadeIn(300);
      }, 300);
      $(techTypeInput).val(techType);
      $(floorsCountInput).val(floorsCount);
      $(squaresSizeInput).val(squareSize);
      $(pplCountInput).val(pplCount);
      if (goalTo4Trigger == false) {
        gtag('event', 'form-to-4', { 'event_category': 'form', 'event_action': 'to-4', });

        goalTo4Trigger == true;
      }
    } if (squareSize != undefined) {
      $(stage2ErrorTxtSquare).addClass('disable');
    } if (pplCount != undefined) {
      $(stage2ErrorPpl).addClass('disable');
    } if (squareSize == undefined) {
      $(stage2ErrorTxtSquare).removeClass('disable');
    } if (pplCount == undefined) {
      $(stage2ErrorPpl).removeClass('disable');
    }
  });

  $(stage3BtnPrev).click(function(event) {
    event.preventDefault();
    $(stage3).fadeOut(300);
    setTimeout(function() {
      $(stage2).fadeIn(300);
    }, 300);
  });
  /* */
  /*stage-4*/
  var stage4ErrorTxt = document.getElementsByClassName('stage-4__error-txt');

  var stage4NextBtn = document.getElementsByClassName('stage-4__btn-next');

  var stage4BtnPrev = document.getElementsByClassName('stage-4__btn-prev');

  var lastForm = $('#last-form');

  var stage4PhoneInput = document.getElementById('stage-4-phone-input');

  if ($(stage4PhoneInput).val() == undefined) {
    $(stage4ErrorTxt).removeClass('disable');
  }
  
  lastForm.submit(function (ev) {
      $.ajax({
        type: lastForm.attr('method'),
        url: lastForm.attr('action'),
        data: lastForm.serialize(),
        success: function (data) {
          $(stage4ErrorTxt).addClass('disable');
          $(stage4PhoneInput).val('');
          $(stage4).fadeOut(300);
          setTimeout(function () {
            $(stage5).fadeIn(300);
          }, 300);
          yaCounter47031906.reachGoal('form-last');
          yaCounter47031906.reachGoal('form-all');
          gtag('event', 'form-last', {
            'event_category': 'form',
            'event_action': 'last',
          });
          gtag('event', 'form-all', {
            'event_category': 'form',
            'event_action': 'all',
          });
        }

      });
      ev.preventDefault();
    });

    $(stage4BtnPrev).click(function(event) {
      event.preventDefault();
      $(stage4).fadeOut(300);
      setTimeout(function() {
        $(stage3).fadeIn(300);
      }, 300);
    });
    $(stage4NextBtn).click(function() {
      if ($(stage4PhoneInput).val() == '') {
        $(stage4ErrorTxt).removeClass('disable');
      }
    });
  /* */
  /*stage-5*/
  var stage5Btn = document.getElementsByClassName('stage-5__btn');

  var calculator = document.getElementsByClassName('calculator');

  $(stage5Btn).click(function() {
    $(calculator).fadeOut(300);
  });
  /* */
  /* отправка формы из intro*/
  var introNameInput = document.getElementById('intro-name-input');
  var introPhoneInput = document.getElementById('intro-phone-input');

  var introForm = $('#intro-form');

  introForm.submit(function (ev) {
    $.ajax({
      type: introForm.attr('method'),
      url: introForm.attr('action'),
      data: introForm.serialize(),
      success: function (data) {
        $(introNameInput).val('');
        $(introPhoneInput).val('');
        $(overlay).fadeIn(300);
        setTimeout(function () {
          $(popupApproved).fadeIn(300);
        }, 300);
        yaCounter47031906.reachGoal('form-intro');
        yaCounter47031906.reachGoal('form-all');
        gtag('event', 'form-intro', {
          'event_category': 'form',
          'event_action': 'intro',
        });
        gtag('event', 'form-all', {
          'event_category': 'form',
          'event_action': 'all',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /*отправка popup-callback-form*/
  var popupCallbackNameInput = document.getElementById('popup-callback-name-input');
  var popupCallbackPhoneInput = document.getElementById('popup-callback-phone-input');

  var popupCallbackForm = $('#popup-callback-form');

  popupCallbackForm.submit(function (ev) {
    $.ajax({
      type: popupCallbackForm.attr('method'),
      url: popupCallbackForm.attr('action'),
      data: popupCallbackForm.serialize(),
      success: function (data) {
        console.log('2222');
        $(popupCallbackNameInput).val('');
        $(popupCallbackPhoneInput).val('');
        $(popupCallback).fadeOut(300);
        setTimeout(function () {
          $(popupApproved).fadeIn(300);
        }, 300);
        yaCounter47031906.reachGoal('popup-callback');
        yaCounter47031906.reachGoal('form-all');
        gtag('event', 'popup-callback', {
          'event_category': 'popup',
          'event_action': 'callback',
        });
        gtag('event', 'form-all', {
          'event_category': 'form',
          'event_action': 'all',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /*Валидация форм*/
  $(introPhoneInput).inputmask("+9 (999) 999-9999"); //specifying options
  $(popupCallbackPhoneInput).inputmask("+9 (999) 999-9999"); //specifying options
  $(stage4PhoneInput).inputmask("+9 (999) 999-9999"); //specifying options
/* */
});