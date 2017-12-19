(function(){
  var filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.completed),
    completed: todos => todos.filter(todo => todo.completed)
  }
  var visibility = location.hash.substr(location.hash.indexOf('/')+1)
  visibility = visibility === '' ? 'all' : visibility
  var TodoList = {
    template:`<li
      :class="{ completed: todo.completed, editing: todo === editedTodo}"
    >
      <div class="view">
       <input class="toggle" type="checkbox"
       v-model="todo.completed"
       />
       <label @dblclick="editTodo(todo)" v-cloak>{{ todo.title }}</label>
       <button class="destroy"
         @click="removeTodo(todo)"
       ></button>
      </div>
      <input class="edit"
      v-model="todo.title"
      v-focus="todo === editedTodo"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)"
      @blur="cancelEdit(todo)"
      />
    </li>`,
    props:['todo','editedTodo'],
    methods:{
      removeTodo(todo){
        this.$emit("remove-todo",todo)
      },  editTodo(todot){
        this.$emit("remove-todo",todo)
      },  doneEdit(todo){
        this.$emit("remove-todo",todo)
      },  cancelEdit(todo){
        this.$emit("remove-todo",todo)
      },
    }
  }
  // 实例化
  var app = new Vue({
    // 挂载元素
    el: '.todoapp',
    // 属性
    data: {
      newTodo: '',
      todos: todoStorage.fetch(),
      editedTodo: null,
      beforeEditCache: '',
      visibility
    },
    // 计算属性
    computed: {
      showTodos() {
        return this.todos.length > 0
      },
      activeCount() {
        return filters.active(this.todos).length
      },
      completedCount() {
        return filters.completed(this.todos).length
      },
      allDone: {
        get() {
          return this.activeCount === 0
        },
        set(value) {
          this.todos.map(todo => {
            todo.completed = value
          })
        }
      },
      filteredTodos() {
        return filters[this.visibility](this.todos)
      }
    },
    // 属性观察
    watch: {
      todos: {
        deep: true,
        handler: todoStorage.save
      }
    },
    // 方法集合
    methods: {
      addTodo() {
        this.newTodo = this.newTodo.trim()
        if (!this.newTodo) {
          return
        }
        this.todos.unshift({
          title: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      },
      removeTodo(todo) {
        var index = this.todos.indexOf(todo)
        this.todos.splice(index, 1)
      },
      editTodo(todo) {
        this.editedTodo = todo
        this.beforeEditCache = todo.title
      },
      doneEdit(todo) {
        if (!this.editedTodo) {
          return;
        }
        this.editedTodo = null;
        todo.title = todo.title.trim()
        if (!todo.title) {
          this.removeTodo(todo)
        }
      },
      cancelEdit(todo) {
        if (this.editedTodo) {
          todo.title = this.beforeEditCache
          this.editedTodo = null
        }
      },
      removeCompleted() {
        this.todos = filters.active(this.todos)
      }
    },
    // 指令集合
    directives: {
      focus: {
        update(el) {
          el.focus()
        }
      }
    },
    components:{
      TodoList
    }
  })
})();
