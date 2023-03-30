// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;
createApp({
    data () {
        return{
            newTodo: "",
            error: false,
            todoList: [
                {
                    text: "Learn HTML",
                    done: true,
                },
                {
                    text: "Learn CSS",
                    done: true,
                },
                {
                    text: "Learn Javascript",
                    done: false,
                },
            ],
        }            
    },
    methods: {
        addTodo() {
            if(this.newTodo.length > 0) {
                if( this.error === true){
                    this.error = false;
                };
                this.todoList.push({ text: this.newTodo, done: false})
                this.newTodo = '';
            } else {
                this.error = true;
                setTimeout(() => {this.error = false}, 1500)
            }
        },
        removeTodo(todo) {
            this.todoList = this.todoList.filter((selectedElement) => selectedElement !== todo)
        },
        removeAll() {
            this.todoList = [];
        }
    }

}).mount("#app");