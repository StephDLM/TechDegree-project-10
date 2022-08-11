import config from './Config';

// export default class Data {
//     api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
//         const url = config.apiBaseUrl + path; //url constant configures the request path using the base URL defined in config.js, which gets passed to the returned fetch() method.
//         const options = {
//             method,
//             headers: {
//               'Content-Type': 'application/json; charset=utf-8',
//             },
//           };
      
//           if (body !== null) {
//             options.body = JSON.stringify(body);
//           }
//           if (requiresAuth) {
//             const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
//             options.headers['Authorization'] = `Basic ${encodedCredentials}`;

//         }
//         return fetch(url, options); //fetch() accepts an optional second parameter: a configuration object that lets you control a number of different settings you can apply to the request.

//     }
//     async getUser() {
//         const response = await this.api(`/users`, 'GET', null, true, { emailAddress, password });
//     } 
      
//       async createUser() {
//         ...
//       }
//   }

export default class Data {

    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {    
      const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }
    return fetch(url, options);
  }

  async getUser(emailAddress, password) {
    const response = await this.api(`/users`, 'GET', null, true, { emailAddress, password });
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
  
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error();
    }
  }
}


