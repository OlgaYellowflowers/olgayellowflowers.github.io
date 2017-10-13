'use strict';


var Mainpage = (function($, Logger, Translator) {
    var module = {};

    var settings = {
        moduleName: 'Mainpage',
        debug: true
    };

    var ui = {
        buttonsBlocks: 'main > .container > section > .row > div',
        graySection: 'main > .container > section',
        mainButtons: '.mainButtons',
        mainButtonsText: '.mainButtons > h4',
        mainButtonsIcons: '.mainButtons > .icon',
        leftMenu: '#leftMenu',
        leftMenuControlItem: '#leftMenu > nav > ul > li:first-child',
        leftMenuControlBtn: '#leftMenuControlBtn',
        leftMenuDropdownsItem: '#leftMenu .dropdown',
        leftMenuDropdowns: '#leftMenu .dropdown-menu',
        header: 'header',
        main: 'main',
        mainContainer: 'main > .container',
        footer: 'footer'
    };

    var logger;
    var t;

    // Основная функция перестчёта и перерисовки - всё что связано с дизайном - пишем сюда
    // В init() видно что redraw() вызывается из всех основных событий страницы кроме события скролла
    function redraw() {
        logger.log('redraw');

        // Функция перерисовки эмулирующая "резиновую вёрстку" на экранах с высотой больше 700 и шириной больше или равно 1200
        if (document.documentElement.clientHeight > 700 && document.documentElement.clientWidth >= BootstrapHelper.screenLG - BootstrapHelper.getScrollbarWidth()) {
            var freeHeight = document.documentElement.clientHeight - ui.header.innerHeight() - 28 - ui.footer.innerHeight();
            var freeWidth = freeHeight * 620 / 432;

            ui.mainContainer.innerHeight(freeHeight);
            ui.mainContainer.innerWidth(freeWidth);

            var mainSectionPaddingTopBottom = freeHeight * 38 / 432;
            var mainSectionPaddingLeftRight = freeHeight * 42 / 432;
            ui.graySection.css({
                paddingTop: mainSectionPaddingTopBottom + 'px',
                paddingBottom: (mainSectionPaddingTopBottom / 2) + 'px',
                paddingLeft: mainSectionPaddingLeftRight + 'px',
                paddingRight: mainSectionPaddingLeftRight + 'px',
            });

            var buttonsBlocksPadding = freeHeight * 14 / 432;
            ui.buttonsBlocks.css({
                paddingLeft: buttonsBlocksPadding + 'px',
                paddingRight: buttonsBlocksPadding + 'px',
            });

            ui.mainButtons.innerWidth(ui.buttonsBlocks.innerWidth() - (buttonsBlocksPadding * 2));
            ui.mainButtons.innerHeight(ui.mainButtons.innerWidth());

            var mainButtonsPadding = ui.mainButtons.innerWidth() * 14 / 150;
            ui.mainButtons.css({
                padding: mainButtonsPadding + 'px',
                marginBottom: (buttonsBlocksPadding * 2) + 'px'
            });
            var fontSize = ui.mainButtons.innerWidth() * 18 / 150;
            var lineHeight = ui.mainButtons.innerWidth() * 26 / 150;
            var mainButtonsTextMargin = ui.mainButtons.innerWidth() * 10 / 150;
            ui.mainButtonsText.css({
                fontSize: fontSize + 'px',
                lineHeight: lineHeight + 'px',
                marginTop: mainButtonsTextMargin + 'px',
                marginBottom: mainButtonsTextMargin + 'px'
            });
            var fontIcoSize = ui.mainButtons.innerWidth() * 200 / 150;
            var bottomSize = ui.mainButtons.innerWidth() * 26 / 150;
            ui.mainButtonsIcons.css({
                fontSize: fontIcoSize + '%',
                bottom: bottomSize + 'px'
            });
        } else if (document.documentElement.clientWidth >= BootstrapHelper.screenSM - BootstrapHelper.getScrollbarWidth()) {
            // Для нормальных экранов - планшетов и десктопов - устанавливаем "как в макете"
            ui.mainContainer.innerHeight(432);
            ui.mainContainer.innerWidth(620);

            ui.graySection.css({
                paddingTop: '38px',
                paddingBottom: '19px',
                paddingLeft: '42px',
                paddingRight: '42px',
            });

            ui.buttonsBlocks.css({
                paddingLeft: '14px',
                paddingRight: '14px',
            });

            ui.mainButtons.innerWidth(150);
            ui.mainButtons.innerHeight(150);

            ui.mainButtons.css({
                padding: '14px',
                marginBottom: '28px'
            });
            ui.mainButtonsText.css({
                fontSize: '18px',
                lineHeight: '26px',
                marginTop: '10px',
                marginBottom: '10px'
            });
            ui.mainButtonsIcons.css({
                fontSize: '200%',
                bottom: '26px'
            });
        } else {
            // Для мобил - сбрасываем "на CSS"
            ui.mainContainer.innerHeight('100%');
            ui.mainContainer.innerWidth('auto');

            ui.graySection.css({
                paddingTop: '',
                paddingBottom: '',
                paddingLeft: '',
                paddingRight: '',
            });

            ui.buttonsBlocks.css({
                paddingLeft: '',
                paddingRight: '',
            });

            ui.mainButtons.css({
                padding: '',
                marginBottom: ''
            });
            ui.mainButtonsText.css({
                fontSize: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: ''
            });
            ui.mainButtonsIcons.css({
                fontSize: '',
                bottom: ''
            });
        }

        // На больших экранах - скрываем футер если он не входит в высоту страницы
        // На экранах с шириной меньше брекпоинта между "планшетами и лучевиками"/"узкими и широкими планшетами" - показываем всегда
        if (document.documentElement.clientWidth >= BootstrapHelper.screenMD - BootstrapHelper.getScrollbarWidth()) {
            if (ui.main.innerHeight() + ui.footer.innerHeight() - 50 <= document.documentElement.clientHeight) {
                ui.footer.show();
            } else {
                ui.footer.hide();
            }
        } else {
            ui.footer.show();
        }

        // На экранах с шириной меньше или равно кастомного брекпоинта (смотрите соответствующий модуль)
        // - меняем сетку для главных кнопок в мобильном диапазоне
        if (document.documentElement.clientWidth <= BootstrapHelper.screenC1) {
            ui.buttonsBlocks.removeClass('col-xs-4');
            ui.buttonsBlocks.addClass('col-xs-6');
        } else {
            ui.buttonsBlocks.removeClass('col-xs-6');
            ui.buttonsBlocks.addClass('col-xs-4');
        }


        // При ресайзе - необходимо проверять высоту кнопок левого меню
        // На мобилах - плюсуем дропдаун к высоте, на всех остальных экранах - высота одинаковая
        ui.leftMenuDropdownsItem.each(function () {
            if ($(this).hasClass('open') && document.documentElement.clientWidth < BootstrapHelper.screenSM - BootstrapHelper.getScrollbarWidth()) {
                $(this).innerHeight(82 + $(this).children('.dropdown-menu').innerHeight());
            } else {
                $(this).innerHeight('82px');
            }
        });

    }

    // Основные события страницы
    function init() {
        $(document).ready(function() {
            logger.log('event: DOM ready');

            // prepare jquery ui objects
            for (var pr in ui) {
                ui[pr] = $(ui[pr]);
            }

            // Сворачивание-разворачивание левого меню
            ui.leftMenuControlBtn.on('click', function() {
                ui.leftMenu.toggleClass('open close');
                ui.main.toggleClass('toSecondPlan');
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
            // следовательно - проходи все пункты меню и выставляем правильную высоту
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

            // Увеличиваем иконки на кнопках при наведении
            ui.mainButtons.mouseenter(function() {
                var icoFontSize = $(this).children('.icon').css('font-size');
                var num = parseFloat(icoFontSize, 10);
                var unit = icoFontSize.slice(-2);
                num *= 1.2;
                $(this).children('.icon').animate({fontSize: num + unit}, 0);
                $(this).mouseleave(function() {
                    $(this).children('.icon').animate({fontSize: icoFontSize}, 0);
                });
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
