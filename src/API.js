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

    static getAllBooklets () {
      return fetch("http://localhost:3001/booklets")
      .then(resp => resp.json())
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
        const published = false
        return fetch("http://localhost:3001/booklets", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: token },
          body: JSON.stringify({
            title,
            published
          })
        }).then(resp => resp.json())
    }

    static publishBooklet (bookletId) {
       const token = localStorage.getItem("token")
       return fetch(`http://localhost:3001/publish_booklet`, {
         method: "PATCH",
         headers: { "Content-Type": "application/json", Authorization: token },
         body: JSON.stringify({
           id: bookletId
         })
       }).then(resp => resp.json())
    }

    static listPage(pageTitle, heading, subHeading, listItems, bookletId) {
        const token = localStorage.getItem("token")
        return fetch('http://localhost:3001/pages', {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
            pageTitle,
            heading,
            subHeading,
            listItems, 
            bookletId
          })
        }).then(resp => resp.json())
    }

    static textPage(pageTitle, textItem, bookletId) {
      const token = localStorage.getItem("token")
      return fetch('http://localhost:3001/pages', {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
          pageTitle,
          textItem,
          bookletId
        })
      }).then(resp => resp.json())
  }

  static image(title, image, bookletId) {
    const token = localStorage.getItem("token")
    return fetch('http://localhost:3001/images', {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({
        title: title,
        url: image,
        booklet_id: bookletId
      })
    }).then(resp => resp.json())
  }

  static galleryPage(pageTitle, heading, subHeading, galleryItems, bookletId) {
    const token = localStorage.getItem("token")
    return fetch('http://localhost:3001/pages', {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({
        pageTitle,
        heading,
        subHeading,
        galleryItems, 
        bookletId
      })
    }).then(resp => resp.json())
  }

}

  
  
  API.init()
  
  window.API = API
  
  export default API
  