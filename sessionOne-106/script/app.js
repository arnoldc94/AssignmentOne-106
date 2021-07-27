
function createTodo() {
    console.log("Creating new to do");

    // get the text
    let text = $("#txtTodo").val();
     // console log the text
    console.log(text);

    let syntax = 
    `<div class="item">
    <label class="task">${text}</label>
        <button  class="btn btn-sm btn-primary"><i class="fas fa-check-circle">Done</i></button>
        <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i>Del</button>
    </div>`;

    $("#pendingList").append(syntax);
    $("#pending").removeClass('hide');

    //clear text
    $("#txtTodo").val('').focus();
}



function init() {
    console.log("Todo APP")

    // hook events
    $("#btnSave").click(createTodo);

    $("#txtTodo").keypress(function(args){
        if(args.keyCode ===13) {
            createTodo();
        }
    })
}

window.onload = init;

/**
 * 
 * catch click event on the button
 * call the createTodo function
 * console log a message inside the fn
 */
