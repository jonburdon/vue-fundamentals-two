Vue.component('todo-item', {
    props: ['todo'],
    template: '<span>{{ todo.text }}</span>'
})

// ISSUE How to just display as html in Line 3?

var app = new Vue({
    el: '#app',
    data: {
      catList: [
        { id: 0, text: '<img src="emojis/cat--smile.png">' },
        { id: 1, text: '<img src="emojis/cat--laugh.png">' },
        { id: 2, text: '<img src="emojis/cat--cheer.png">' }
      ]
    }
})