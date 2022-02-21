export default class ProiectsService {
  constructor() {
    this.data = [];
  }

  async getApiPosts() {
    const res = await fetch('http://localhost:8080/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }
    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : 'Someting went wrong!';
      throw new Error(message);
    }
    console.log(data.tistory.item.posts);
    this.data = data.tistory.item.posts;
  }
}
