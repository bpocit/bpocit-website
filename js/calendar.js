$.getScript('//arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var coup = "co.up, Adalbertstr. 8, 10999 Berlin"
  var location = coup;

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    events: [
      {
        id: 003,
        title: "#3 Let's tutorial HTML/CSS for Beginners! @ co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(2016, 9, 13, 19, 30, 00),
        end: new Date(2016, 9, 13, 22, 00, 00),
        allDay: false
      },
      {
        id: 004,
        title: "#4 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(2016, 9, 27, 19, 30, 00),
        end: new Date(2016, 9, 27, 22, 00, 00),
        allDay: false
      },
      {
        id: 005,
        title: "#5 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(2016, 10, 10, 19, 30, 00),
        end: new Date(2016, 10, 10, 22, 00, 00),
        allDay: false
      },
      {
        id: 006,
        title: "#6 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(2016, 10, 24, 19, 30, 00),
        end: new Date(2016, 10, 24, 22, 00, 00),
        allDay: false
      },
      {
        id: 007,
        title: "#7 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(2016, 11, 8, 19, 30, 00),
        end: new Date(2016, 11, 8, 22, 00, 00),
        allDay: false
      }
    ]
  });
})
