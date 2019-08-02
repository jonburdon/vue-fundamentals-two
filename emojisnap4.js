
"use strict"
let my_cat;
let cat_snap;
// emojify returns the corresponding emoji image
function emojify(name) {
	var out = `<img src="emojis/` + name + `.png">`
	return out
}

// rand returns a random item from an array
function rand(...arr) {
	var x = Math.floor(Math.random() * arr.length)
	return arr[x]
}

// Generate a random cat emoji and asign it's index number to my_cat for reference later.
function randcat(...arr) {
	var x = Math.floor(Math.random() * arr.length)
    my_cat = x;
    console.log(my_cat)
    console.log(arr[x])
	return arr[x]
}

Vue.component('cat-list', {
  props: ['catselect'],
  template: `<img :src="catselect.text" />`

// ISSUE - how to display 3 different images in Line 9? Syntax from Line 10 won't work

})




var app = new Vue({
	el: ".app",
	data: {
		cat: emojify("box"),
		alive_cats: [
			emojify("cat--smile"),
			emojify("cat--cheer"),
			emojify("cat--laugh"),
			emojify("cat--love" ),
			emojify("cat--smirk"),
			emojify("cat--kiss" ),
			emojify("cat--fear" ),
			emojify("cat--sad"  ),
			emojify("cat--mad"  )
        ],
        catList: [
            { id: 0, text: 'emojis/cat--smile.png' },
            { id: 1, text: 'emojis/cat--cheer.png' },
            { id: 2, text: 'emojis/cat--laugh.png' },
            { id: 0, text: 'emojis/cat--love.png' },
            { id: 1, text: 'emojis/cat--smirk.png' },
            { id: 2, text: 'emojis/cat--kiss.png' },
            { id: 0, text: 'emojis/cat--fear.png' },
            { id: 1, text: 'emojis/cat--sad.png' },
            { id: 2, text: 'emojis/cat--mad.png' }
    ]
	},
	methods: {
		// is_open returns whether the box is open
		is_open: function () {
			return this.cat = randcat(...this.alive_cats)
		},
		// is_alive returns whether the cat is alive
		is_alive: function () {
			return (
				this.cat != emojify("crossbones") &&
				this.cat != emojify("skull"     )
			)
		},
		// quantum_fluctuation observes whether the cat is alive or dead
		quantum_fluctuation: function () {
			if (this.is_open()) {
				this.cat = emojify("box")
				return
			}
            // Return either a random alive cat from the array of alive cats, or a random dead cat from the array of dead cats
			this.cat = rand(...this.alive_cats)
			
		},
        
        theme: function () {
            return {
                "theme--alive" : this.is_open() && this.is_alive(),
                "theme--dead"  : !this.is_alive()
            }
        }
	}
})

		