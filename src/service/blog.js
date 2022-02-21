export default class ProiectsService {
  constructor() {
    this.data = [
      {
        category: 'Study-Note/JavaScript',
        title: '20. 객체와 배열의 부족함을 채워주는 Map과 Set',
        url: 'https://ji-u.tistory.com/40',
        img: '/images/blog/40.png',
        date: '2022. 2. 18. 14:00',
      },
      {
        category: 'Study-Note/프로그래머스',
        title: 'Lv.1 - 완주하지 못한 선수 (해시)',
        url: 'https://ji-u.tistory.com/39',
        img: '/images/blog/39.png',
        date: '2022. 2. 17. 21:25',
      },
      {
        category: 'Study-Note/JavaScript',
        title:
          '19. 클로저. 반환된 함수와 그 함수가 선언됐을 때의 렉시컬 환경과의 조합!',
        url: 'https://ji-u.tistory.com/38',
        img: '/images/blog/38.png',
        date: '2022. 2. 9. 11:27',
      },
      {
        category: 'Study-Note/JavaScript',
        title: '18. 자바스크립트의 Strict mode',
        url: 'https://ji-u.tistory.com/37',
        img: '/images/blog/37.png',
        date: '2022. 2. 4. 14:18',
      },
      {
        category: 'Study-Note/JavaScript',
        title:
          '17. 자바스크립트의 클래스는 "특별한 함수"이다.(선언부터 상속까지)',
        url: 'https://ji-u.tistory.com/36',
        img: '/images/blog/36.png',
        date: '2022. 1. 29. 21:03',
      },
      {
        category: 'Study-Note/JavaScript',
        title:
          '16. 자기참조 변수, this 이해와 apply, call, bind의 사용, 차이점.',
        url: 'https://ji-u.tistory.com/35',
        img: '/images/blog/35.png',
        date: '2022. 1. 22. 16:45',
      },
      {
        category: 'Study-Note/JavaScript',
        title:
          '15. 프로토타입 3탄 - 프로토타입 교체, 정적 프로퍼티 메서드, instance of',
        url: 'https://ji-u.tistory.com/34',
        img: '/images/blog/34.png',
        date: '2022. 1. 20. 17:09',
      },
      {
        category: 'Study-Note/JavaScript',
        title: '14. 프로토타입 2탄 - 메소드 오버라이딩, 오버로딩, 섀도잉',
        url: 'https://ji-u.tistory.com/33',
        img: '/images/blog/33.png',
        date: '2022. 1. 20. 13:17',
      },
      {
        category: 'Study-Note/JavaScript',
        title: '13. 프로토타입 기반 객체지향 프로그래밍 이해하기',
        url: 'https://ji-u.tistory.com/32',
        img: '/images/blog/32.png',
        date: '2022. 1. 16. 12:44',
      },
    ];
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
