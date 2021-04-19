var elm = document.getElementById('elm'); 

elm.insertAdjacentHTML('beforebegin', 'Hey-'); // 타켓 요소 전(형제레벨)에 생성- 시작 태그의 앞(형제 레벨로) 
elm.insertAdjacentHTML('afterend','-you?'); // 타켓 요소의 끝나는 태그 바로 다음(형제레벨)에 요소를 생성 - 종료 태그 뒤(형제 레벨로) console.log(document.body.innerHTML); /** * 다음과 같이 기록된다. * Hey-jaehee-how-are-you? */

elm.insertAdjacentHTML('afterbegin', 'jaehee-'); // 타켓 요소 다음(자식요소)에 생성 - 시작 태그의 뒤(자식 요소로) 
elm.insertAdjacentHTML('beforeend','-are'); // 타켓 요소 끝나는 태그 바로 직전(자식요소로)에 요소를 생성 - 종료 태그 앞(자식 요소로) 

