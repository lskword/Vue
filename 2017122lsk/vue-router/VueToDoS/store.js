// var STORAGE_KEY = 'todolist';
// console.log(1);
// window.todoStorage = {
//   fetch(){
//     return JSON.parse(localStorage.getItem(STORAGE_KEY || [])
//   },
//   save(todolist){
//     localStorage.setItem(STORAGE_KEY,JSON.stringify(todolist))
//   }
// }
var STORAGE_KEY = 'todolist'
window.todoStorage = {
	fetch() {
    try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
      return [];
    }
	},
	save(todolist) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todolist));
	}
}
