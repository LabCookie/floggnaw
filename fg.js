// Unfinished demo

function lex_split(txt) {
	return txt.split(/\"([^\"]*)\"|\S+/g)
}
let variables = {
	ver: "1-pre2"
}
let typo_hiearchy = {
	"q": ["a","s","w"],
	"w": ["q","a","s","d","e"],
	"e": ["w","s","d","f","r"],
	"r": ["e","d","f","g","t"],
	"t": ["r","f","g","h","y"],
	"y": ["t","g","h","j","u"],
	"u": ["y","h","j","k","i"],
	"i": ["u","j","k","l","o"],
	"o": ["i","j","k","l","p"],
	"p": ["o","k","l"],
	"a": ["s","w","q"],
	"s": ["a","q","w","e","d","z","x"],
	"d": ["s","w","e","r","f","c","x","z"],
	"f": ["d","x","c","v","g","t","r","e"],
	"g": ["f","c","v","b","h","y","t","r"],
	"h": ["g","v","b","n","j","u","y","t"],
	"j": ["h","b","n","m","k","i","u","y"],
	"k": ["j","n","m","l","p","o","i"],
	"l": ["k","n","m","p","o"],
	"z": ["a","s","d","x"],
	"x": ["z","s","d","f","c"],
	"c": ["x","d","f","g","v"],
	"v": ["c","f","g","h","b"],
	"b": ["v","g","h","j","n"],
	"n": ["b","h","j","k","m"],
	"m": ["n","j","k","l"]
}
function test_value(val) {
	if (val[0] == "%") {
		if (val[0].slice(1) in variables) {
			return variables[val[0].slice(1)]
		} else {
			let sliced = val[0].slice(1)
			let attempt = 0
			let i = 0
			let guess_proper = ""
			while (i < sliced.length-1)  {
				for (let key in variables) {
					let guessed = ""
					if (variables[key][i] == guessed) {
						guess_proper += guessed
						i += 1
					}
				}
			}
		}
	}
}
let floggnaw = {
	floggnaw: {
		out: (args) => {
			
		}
	}
}
