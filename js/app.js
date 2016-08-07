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


})();
