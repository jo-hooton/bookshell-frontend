class API {
    static init () {
      this.baseUrl = 'http://localhost:3001'
      this.loginUrl = this.baseUrl + '/login'
      this.validateUrl = this.baseUrl + '/validate'
      this.bookletsUrl = this.baseUrl + '/booklets'
    }
  
    static login (username, password) {
      return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username,
          password
        })
      }).then(resp => resp.json())
    }

    static signup(username, password) {
        return fetch("http://localhost:3001/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            password
          })
        }).then(resp => resp.json());
      }
  
    static validate () {
      const token = localStorage.getItem('token')
      return fetch(this.validateUrl, {
        headers: {'Authorization': token}
      }).then(resp => resp.json())
    }
  
    static getUserBooklets () {
      return fetch('http://localhost:3001/user_booklets', {
        headers: { 'Authorization': localStorage.token }
        }).then(resp => resp.json())
    }

    static newBooklet(title) {
        const token = localStorage.getItem("token")
        return fetch("http://localhost:3001/booklets", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: token },
          body: JSON.stringify({
            title
          })
        }).then(resp => resp.json())
    }

    static listPage(title, heading, sub_heading, listItems, booklet_id) {
        const token = localStorage.getItem("token")
        return fetch('http://localhost:3001/pages', {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
            title,
            heading,
            sub_heading,
            listItems, 
            booklet_id
          })
        }).then(resp => resp.json())
    }

}

  
  
  API.init()
  
  window.API = API
  
  export default API
  