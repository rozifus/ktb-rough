
$(document)
  .ready(function(){


    $('.add-team.form .submit.button').click(function() {
      var team = $('.add-team.form .a-team.field input').value()
      var user = $('.add-team.form .a-user.field input').value()
      $.post({
        url: '/team/add',
        data: {
          team: team,
          user: user
        },
        dataType: "json"
        })
        ;
      })
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    var AddTeam = app.AddTeam;

    function render() {
      React.render(
        <AddTeam/>,
        document.getElementById('r-add-team')
      );
    }

    render();

  })
;
