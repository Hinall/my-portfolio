import React from "react";

function TaskItem(props) {
  return (
    <div>
      <div class="row">
        <div class="col-6">{props.taskname}</div>
        <div class="col-4">{props.date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
