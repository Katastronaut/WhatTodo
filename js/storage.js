export default class LocalStorage {
    constructor() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    }
  
    create(data) {
      data.token = this.token;
  
      this.todos.push(data);
  
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  
    update(data) {
      let index = this.getIndexByToken(data.token);
  
      if (index !== -1) {
        this.todos[index] = data;
  
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  
    delete(data) {
      let index = this.getIndexByToken(data.token);
  
      console.log(data.token);
      console.log(this.todos);
  
      if (index !== -1) {
        this.todos.splice(index, 1);
  
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  
    getIndexByToken(token) {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].token === token) {
          return i;
        }
      }
  
      return -1;
    }
  
    get token() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  };