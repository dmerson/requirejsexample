define ("tasks",["jquery","data/taskdata","renderers/taskRenderer"],function($,taskdata,taskRenderer){
    /* task management */

    function add() {
        taskRenderer.renderNew();
    }

    function remove(clickEvent) {
        var taskElement = clickEvent.target;
        $(taskElement).closest(".task").remove();
    }

    function clear() {
        taskdata.clear();
        render();
    }

    function save() {
        var tasks = [];
        $("#task-list .task").each(function (index, task) {
            var $task = $(task);
            tasks.push({
                complete: $task.find(".complete").prop('checked'),
                description: $task.find(".description").val()
            });
        });

        taskdata.save(tasks);
    }

    function cancel() {
        render();
    }

    function render() {
        taskRenderer.renderTasks(taskdata.load());
    }
    return {
        add:add,
        remove:remove,
        clear:clear,
        save:save,
        cancel:cancel,
        render:render
    }
});