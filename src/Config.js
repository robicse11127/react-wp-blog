export default {
    base_url: (process.env.NODE_ENV == 'development') ? 'http://localhost/wp-react' : 'https://wpdevlopment.000webhostapp.com',
    api_url: (process.env.NODE_ENV == 'development') ? 'http://localhost/wp-react/wp-json/wp/v2' : 'https://wpdevlopment.000webhostapp.com/wp-json/wp/v2',
    app_url: (process.env.NODE_ENV == 'development') ? 'http://localhost/wp-react' : 'https://wpdevlopment.000webhostapp.com',
}