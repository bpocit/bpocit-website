$.getScript("./js/fullcalendar/dist/fullcalendar.min.js",function(){

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prevYear, prev,next, nextYear, today',
        center: 'title',
        right: 'month,listYear,listMonth,listDay'
      },
      defaultView: 'month',
      defaultDate: '2016-10-01',
      navLinks: true, // can click day/week names to navigate views
      weekNumberCalculation: 'ISO',
      editable: true,
      events: [
        {
          id: 999,
          title: "#1 Workshop: Intro into HTML/CSS @asquera GmbH, Ohlauer Str. 43, 10999 Berlin - http://www.asquera.de",
          start: new Date(2016, 8, 7, 19, 00, 00),
          end: new Date(2016, 8, 7, 22, 00, 00),
          allDay: false
        },
        {
          id: 999,
          title: "#2 Let's tutorial HTML/CSS for Beginners! @Altes Finanzamt, Schönstedtstr. 7, 12043 Berlin - http://altesfinanzamt.blogspot.de",
          start: new Date(2016, 8, 22, 19, 30, 00),
          end: new Date(2016, 8, 22, 22, 00, 00),
          allDay: false
        },
        {
          id: 999,
          title: "#3 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
          start: new Date(2016, 9, 13, 19, 30, 00),
          end: new Date(2016, 9, 13, 22, 00, 00),
          allDay: false
        },
        {
          id: 999,
          title: "#4 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
          start: new Date(2016, 9, 27, 19, 30, 00),
          end: new Date(2016, 9, 27, 22, 00, 00),
          allDay: false
        },
        {
          id: 999,
          title: "#5 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
          start: new Date(2016, 10, 10, 19, 30, 00),
          end: new Date(2016, 10, 10, 22, 00, 00),
          allDay: false
        },
        {
          id: 999,
          title: "#6 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
          start: new Date(2016, 10, 24, 19, 30, 00),
          end: new Date(2016, 10, 24, 22, 00, 00),
          allDay: false
        },
        {
          id: 999,
          title: "#7 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
          start: new Date(2016, 11, 8, 19, 30, 00),
          end: new Date(2016, 11, 8, 22, 00, 00),
          allDay: false
        }
      ]
    });
  });
});
