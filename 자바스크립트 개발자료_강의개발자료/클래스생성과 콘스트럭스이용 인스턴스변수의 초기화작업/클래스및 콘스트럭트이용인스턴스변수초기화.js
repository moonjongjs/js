// Class body 와 메서드 정의
// Class body는 중괄호 {} 로 묶여 있는 안쪽 부분입니다. 
// 이곳은 여러분이 메서드나 constructor와 같은 class 멤버를 정의할 곳입니다.

// 엄격한 모드
// 클래스의 본문(body)은 strict mode에서 실행됩니다. 
// 즉, 여기에 적힌 코드는 성능 향상을 위해 더 엄격한 문법이 적용됩니다. 
// 그렇지 않으면, 조용히 오류가 발생할 수 있습니다. 특정 키워드는 
// 미래의 ECMAScript 버전용으로 예약됩니다.

// Hoisting
// 함수 선언과 클래스 선언의 중요한 차이점은 함수 선언의 경우 호이스팅이 일어나지만, 
// 클래스 선언은 그렇지 않다는 것입니다. 
// 클래스를 사용하기 위해서는 클래스를 먼저 선언 해야 합니다. 
// 그렇지 않으면, 다음 코드는 ReferenceError를 던질 것입니다. :

// 프로토타입 메서드
// 메서드 정의도 참조해보세요.

// Class body 와 메서드 정의
// Class body는 중괄호 {} 로 묶여 있는 안쪽 부분입니다. 
// 이곳은 여러분이 메서드나 constructor와 같은 class 멤버를 정의할 곳입니다.

// 엄격한 모드
// 클래스의 본문(body)은 strict mode에서 실행됩니다. 
// 즉, 여기에 적힌 코드는 성능 향상을 위해 더 엄격한 문법이 적용됩니다. 
// 그렇지 않으면, 조용히 오류가 발생할 수 있습니다. 
// 특정 키워드는 미래의 ECMAScript 버전용으로 예약됩니다.

// Constructor (생성자)
// constructor 뜻 생성자 
// 생성자: 객제 지향 프로그래밍의 한 방식
// constructor 메서드는 class 로 생성된 객체를 생성하고 초기화하기 위한 
// 특수한 메서드입니다.  
// "constructor" 라는 이름을 가진 특수한 메서드는 클래스 안에 한 개만 존재할 수 있습니다. 
// 만약 클래스에 여러 개의 constructor 메서드가 존재하면 SyntaxError 가 발생할 것입니다.
// constructor는 부모 클래스의 constructor를 호출하기 위해 
// super 키워드를 사용할 수 있습니다.

// 프로토타입 메서드
// 메서드 정의도 참조해보세요.

// 인스턴스 속성
// 인스턴스 속성은 반드시 클래스 메서드 내에 정의되어야 합니다:
// 정적 (클래스사이드) 속성과 프로토타입 데이터 속성은 
// 반드시 클래스 선언부 바깥쪽에서 정의되어야 합니다. 
// Rectangle.staticWidth = 20;
// Rectangle.prototype.prototypeWidth = 25;

// extends를 통한 클래스 상속(sub classing)
// extends 키워드는 클래스 선언이나 클래스 표현식에서 
// 다른 클래스의 자식 클래스를 생성하기 위해 사용

// super 를 통한 상위 클래스 호출
// super 키워드는 객체의 부모가 가지고 있는 메서드를 호출하기 위해 사용됩니다. 
// 이는 프로토타입 기반 상속보다 좋은 점 중 하나입니다.


class Cat {
    constructor(name,url) {
        this.irum = name;
        this.link = url;
    }
    speak() {
        console.log(`${this.irum} makes a noise.`);
    }
    
    noise() {
        console.log(`${this.link} spuer call noise.`);
    }

}

class Lion extends Cat {
    init() {
        super.speak();
        super.noise();
        // super.noise();
        // console.log(`${this.irum} roars.`);
        // console.log(`${this.link} url Link Address`);
        // location.href = 'http://' + this.link;
    }
}

let l = new Lion('Fuzzy','tjoeun.co.kr');
    l.init();
    // Fuzzy makes a noise.
    // Fuzzy roars.