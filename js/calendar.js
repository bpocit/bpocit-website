$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){

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
        start: new Date(y, m, d+14, 19, 30, 00),
        end: new Date(y, m, d+14, 22, 00, 00),
        allDay: false
      },
      {
        id: 004,
        title: "#4 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(y, m, d+28, 19, 30, 00),
        end: new Date(y, m, d+28, 22, 00, 00),
        allDay: false
      },
      {
        id: 005,
        title: "#5 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(y, m, d+42, 19, 30, 00),
        end: new Date(y, m, d+42, 22, 00, 00),
        allDay: false
      },
      {
        id: 006,
        title: "#6 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(y, m, d+56, 19, 30, 00),
        end: new Date(y, m, d+56, 22, 00, 00),
        allDay: false
      },
      {
        id: 007,
        title: "#7 Let's tutorial HTML/CSS for Beginners! @co.up, Adalbertstr. 8, 10999 Berlin (5th floor) - http://co-up.de",
        start: new Date(y, m, d+70, 19, 30, 00),
        end: new Date(y, m, d+70, 22, 00, 00),
        allDay: false
      }
    ]
  });
})
