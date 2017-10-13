'use strict';


var Newcontact = (function($, Logger, Translator) {
    var module = {};

    var settings = {
        moduleName: 'Newcontact',
        debug: true
    };

    var ui = {
        leftMenu: '#leftMenu',
        leftMenuControlItem: '#leftMenu > nav > ul > li:first-child',
        leftMenuControlBtn: '#leftMenuControlBtn',
        leftMenuDropdownsItem: '#leftMenu .dropdown',
        leftMenuDropdowns: '#leftMenu .dropdown-menu',
        switch01: '#switch01',
        switch02: '#switch02',
        inputGroups: '.input-group',
        newContactButtonsBlock: '#newContactButtonsBlock'
    };

    var logger;
    var t;

    // Основная функция перестчёта и перерисовки - всё что связано с дизайном - пишем сюда
    // В init() видно что redraw() вызывается из всех основных событий страницы кроме события скролла
    function redraw() {
        logger.log('redraw');

        // При ресайзе - необходимо проверять высоту кнопок левого меню
        // На мобилах - плюсуем дропдаун к высоте, на всех остальных экранах - высота одинаковая
        ui.leftMenuDropdownsItem.each(function () {
            if ($(this).hasClass('open') && document.documentElement.clientWidth < BootstrapHelper.screenSM - BootstrapHelper.getScrollbarWidth()) {
                $(this).innerHeight(82 + $(this).children('.dropdown-menu').innerHeight());
            } else {
                $(this).innerHeight('82px');
            }
        });

        // Проходим все инпут-группы и делаем дропдауны по общей ширине группы
        ui.inputGroups.each(function () {
            $(this).find('.dropdown-menu').innerWidth( $(this).find('.form-control').innerWidth() + $(this).find('.btn').innerWidth() + 3 );
        });

        // Даём полю ввода для "быстрых записок" ширину чтобы поместилась справа от кнопок на больших устройствах
        // и во всю ширину на мобильных
        if (document.documentElement.clientWidth >= BootstrapHelper.screenSM - BootstrapHelper.getScrollbarWidth()) {
            ui.newContactButtonsBlock.removeClass('mobile');
            ui.newContactButtonsBlock.find('textarea').innerWidth( ui.newContactButtonsBlock.innerWidth() - 320 );
        } else {
            ui.newContactButtonsBlock.addClass('mobile');
            ui.newContactButtonsBlock.find('textarea').innerWidth( '100%' );
        }
    }

    // Основные события страницы
    function init() {
        $(document).ready(function() {
            logger.log('event: DOM ready');

            // prepare jquery ui objects
            for (var pr in ui) {
                ui[pr] = $(ui[pr]);
            }

            // Сворачивание-разворачивание меню
            ui.leftMenuControlBtn.on('click', function() {
                ui.leftMenu.toggleClass('open close');
                ui.leftMenuDropdownsItem.each(function () {
                    if ($(this).hasClass('open') && document.documentElement.clientWidth < BootstrapHelper.screenSM - BootstrapHelper.getScrollbarWidth()) {
                        $(this).animate({height: 82 + $(this).children('.dropdown-menu').innerHeight()}, 300);
                    } else {
                        $(this).animate({height: '82px'}, 300);
                    }
                });
            });

            // При клике на пункт меню
            ui.leftMenuDropdownsItem.on('click', function() {
                var itemIndex = $(this).index();
                // Ищем ещё открытый пункт и закрываем его если он есть
                ui.leftMenuDropdownsItem.each(function () {
                    if (document.documentElement.clientWidth < BootstrapHelper.screenSM - BootstrapHelper.getScrollbarWidth()) {
                        if (!($(this).index() == itemIndex) && $(this).hasClass('open')) {
                            $(this).removeClass('open');
                            $(this).animate({height: '82px'}, 300);
                        }
                    } else {
                        $(this).innerHeight(82); // На больших экранах - одинаковая высота
                    }
                });
                // Если пункт открыт - разворачиваем, если нет - сворачиваем
                if (document.documentElement.clientWidth < BootstrapHelper.screenSM - BootstrapHelper.getScrollbarWidth()) {
                    if (!$(this).hasClass('open')) {
                        $(this).animate({height: 82 + $(this).children('.dropdown-menu').innerHeight()}, 300);
                    } else {
                        $(this).animate({height: '82px'}, 300);
                    }
                } else {
                    $(this).innerHeight(82); // На больших экранах - одинаковая высота
                }
            });

            // Запрет закрытия дропдауна при клике на него
            ui.leftMenuDropdowns.on('click', function (e) {
                e.stopPropagation();
            });

            // Запрет закрытия дропдауна при клике на область с навиконкой
            ui.leftMenuControlItem.on('click', function (e) {
                e.stopPropagation();
            });

            // При клике "куда-будь кроме левого меню" - дропдаун пропадает - стандартное поведение Бутсрапа
            // следовательно - проходим все пункты меню и выставляем им правильную высоту
            $(document).on('click', function (e){ // событие клика по веб-документу
                if (!(ui.leftMenu.is(e.target) // если клик был не по меню
                    && ui.leftMenu.has(e.target).length === 0)) { // и не по его дочерним элементам
                    ui.leftMenuDropdownsItem.each(function () {
                        if ($(this).innerHeight !== 82) {
                            $(this).animate({height: '82px'}, 300);
                        }
                    });
                }
            });

            // Карусель
           $('#carousel-newContact').carousel({
              interval: false
            })

           // Переключатели
            ui.switch01.on('click', function (){
                ui.switch01.toggleClass('left right');
            });
            ui.switch02.on('click', function (){
                ui.switch02.toggleClass('left right');
            });

            redraw();
        });

        $(window).load(function() {
            logger.log('event: window load');

            redraw();
        });

        $(window).scroll(function() {
            logger.log('event: window scroll');

            // теоретически событие может наступить до того, как будет готова DOM модель,
            // поэтому, чтобы избежать ошибок, используем здесь $(ui.el) вместо ui.el
        });

        $(window).resize(function() {
            logger.log('event: window resize');

            redraw();
        });
    }

    module.init = function(_settings, _translations) {
        _settings = _settings || {};
        _translations = _translations || {};

        for (var pr in _settings) {
            settings[pr] = _settings[pr];
        }

        logger = new Logger(settings);
        t = new Translator(_translations);

        init();

        logger.log('init');
    };

    return module;
}(jQuery, Logger, Translator));
