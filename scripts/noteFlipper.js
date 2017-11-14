var noteFlipper = (function () {
        function processNoteContents(noteContents, noteRegex, removeNameTags){
            var result = "";
            
//            result = noteRegex.exec(noteContents);
            
            var resultArray = noteContents.split(noteRegex);
            console.log(resultArray);
            
            for(var i = 0; i < resultArray.length; i++){
                result += resultArray[i];
            }
            
            return result;
        }
    
    return {
        noteContents: "",
        removeNameTags: false,
        noteBox: {},
        noteTagRegex: /\n?-+\n?.+?(?=said the following:)said the following:\n?\n?/,
        flipNote: function() {
            noteFlipper.noteBox = document.getElementById("noteBox");
            noteFlipper.noteContents = noteFlipper.noteBox.value;
            var result = processNoteContents(noteFlipper.noteContents, noteFlipper.noteTagRegex, noteFlipper.removeNameTags);
            noteFlipper.noteBox.value = result;
        }
    }
})();