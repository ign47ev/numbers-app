import axios from 'axios';


const getProfile = () => (
  axios({
    method: 'post',
    url: 'http://i-telekom.ru/hybrid.php?action=getProfile',
    data: {
      token: '',
    },
    headers: {
      'Content-Type': 'application/json',
    },
    transformRequest: [data => {
      const formData = new FormData();
      Object.keys(data).forEach(key => formData.append(key, data[key]));
      return formData;
    }],
  })
);

const getNumbers = () => (
  axios.get('http://i-telekom.ru/bd.php?action=9285cfea484828e411e78807261381cc')
);

const addArtist = name => (
  axios({
    method: 'post',
    url: 'http://localhost:1337/api/v1/artists',
    data: {
      name,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

export { getProfile, getNumbers, addArtist };
