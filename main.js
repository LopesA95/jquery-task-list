var taskList = [];

$(document).ready(function() {
  $('#addTaskForm').on('submit', function(e) {
      e.preventDefault();
      const newTask = $('#addTaskInput').val();

      if (taskList.includes(newTask)) {
        alert('Tarefa já existe!');
        $('addTaskInput').val();
        return;
      }

      taskList.push(newTask);
      $('ul').append('<li>' + newTask + '</li>');
      $('#addTaskInput').val('');
  });

  $('ul').on('click', 'li', function() {
    var task = $(this).text();
    taskList = taskList.filter(function(item){
      return item === task;
    });
      $(this).css('text-decoration', 'line-through');
  });
});
