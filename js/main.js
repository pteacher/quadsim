$(document).ready(function() {
    var codeEditor = document.editor = CodeMirror.fromTextArea(alimcode, {
        mode: 'javascript',
        keymap: 'sublime',
        lineNumbers: true,
        lineWrapping: false,
        theme: 'dracula',
        tabSize: 4,
        indentUnit: 4,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "breakpoints"],
        matchTags: {
            bothTags: true
        },
        matchBrackets: false,
        autoCloseTags: true,
        autoCloseBrackets: true,
        scrollbarStyle: 'overlay',
        styleActiveLine: true
    });
    codeEditor.doc.setValue('move();');
    //codeEditor.addLineClass(0, 'wrap', 'line-error');

    $('.run-script').click(function () {
        try {
            eval(codeEditor.doc.getValue());
            run();
        } catch(e) {
            alert('Исправьте ошибки');
        }    
    }) 
});
