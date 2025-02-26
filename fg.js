function lex_split(txt) {
	return txt.split(/\"([^\"]*)\"|\S+/g)
}
let typo_hiearchy = {
	"q": ["a","s","w"],
	"w": ["q","a","s","d","e"],
	"e": ["w","s","d","f","r"],
	"r": ["e","d","f","g","t"],
	"t": ["r","f","g","h","y"],
	"a": ["s","w","q"],
	"s": ["a","q","w","e","d",
		 "z","x"],
	"d": ["s","w","e","r","f",
		  "c","x","z"]
}
let floggnaw = {
	
}
