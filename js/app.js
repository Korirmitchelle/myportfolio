var Boxlayout = (function () {

            var $el = $('#bl-main'),
                $sections = $el.children('section'),
                // project section
                $sectionWork = $('#bl-work-section'),
                // work items
                $workItems = $('#bl-work-items > li'),
                // work panels
                $workPanelsContainer = $('#bl-panel-work-items'),
                $workPanels = $workPanelsContainer.children('div'),
                totalWorkPanels = $workPanels.length,
                // navigating the work panels
                $nextWorkItem = $workPanelsContainer.find('nav > span.fa-hand-o-right'),
                // if currently navigating the work items
                isAnimating = false,
                // close work panel trigger
                $closeWorkItem = $workPanelsContainer.find('nav > span.fa-arrow-left'),
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                },
                // transition end event name
                transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
                // support css transitions
                supportTransitions = Modernizr.csstransitions;

            function init() {
                initEvents();
            }

            function initEvents() {

                $sections.each(function () {

                    var $section = $(this);

                    // expand the clicked section and scale down the others
                    $section.on('click', function () {

                        if (!$section.data('open')) {
                            $section.data('open', true).addClass('bl-expand bl-expand-top');
                            $el.addClass('bl-expand-item');
                        }

                    }).find('span.fa-arrow-left').on('click', function () {

                        // close the expanded section and scale up the others
                        $section.data('open', false).removeClass('bl-expand').on(transEndEventName, function (event) {
                            if (!$(event.target).is('section')) return false;
                            $(this).off(transEndEventName).removeClass('bl-expand-top');
                        });

                        if (!supportTransitions) {
                            $section.removeClass('bl-expand-top');
                        }

                        $el.removeClass('bl-expand-item');

                        return false;

                    });

                });


            })();
