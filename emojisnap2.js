// emojify returns the corresponding emoji image
function emojify(name) {
	var out = `<img src="emojis/` + name + `.png">`
	return out
}

Vue.component('cat-list', {
    props: ['catselect'],
    template: '<li>{{ catselect.text }}</li>'
    // template: `<img src="emojis/` + catselect.text + `.png">`

// ISSUE - how to display 3 different images in Line 9? Syntax from Line 10 won't work

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