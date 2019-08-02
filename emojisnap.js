Vue.component('todo-item', {
    props: ['catselect'],
    // template: '<li>{{ catselect.text }}</li>'
    template: `<img src="emojis/cat--smile.png">`
    // template: `<img src="emojis/` + {{catselect.text}} + `.png">`
    // template: '<img src="{{ catselect.text }}.png">'
    // `<img src="emojis/` + {{catselect.text}} + `.png">`
    // `<img src="emojis/` + catselect.text + `.png">`
})

var app = new Vue({
    el: '#app',
    data: {
      catList: [
        { id: 0, text: 'cat--smile' },
        { id: 1, text: 'cat--cheer' },
        { id: 2, text: 'cat--laugh' }
      ]
    }
})