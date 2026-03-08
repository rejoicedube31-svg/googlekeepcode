//two pieces of input are used to create a component in the page when a button is clicked.

//Input Process Output process

 function readInput () {
    let title = document.getElementById("title")
                        .value;

    let note = document.getElementById("note")
                        .value;

    return [title, note];
 }

    function createNote (title, note) {
        let Container = document.createElement("div");
        let titleElement = document.createElement("h2");
        let noteElement = document.createElement("p");

        titleElement.textContent = title;
        noteElement.textContent = note;

        Container.appendChild(titleElement);
        Container.appendChild(noteElement);
        Container.id = "note";

        return Container;
}

function displayNote () {
    let [title, note] = readInput();
    let container = createNote(title, note);

    let noteList = document.getElementById("note-list");
    noteList.appendChild(container);
}
