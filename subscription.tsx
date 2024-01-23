import React, {useState, useEffect } from 'react';

const Subscription: React.FC = () => {
  // 상태값은 boolean 타입으로 초기화하여, 구독 상태를 마치 스위치 켜듯 토글할 수 있도록 조정
  const [isSubscribed, setIsSubscribed] = useState(false);

  /*
    sessionStorage는 window.sessionStorage 객체를 줄여 사용한 것이므로
    사실상 window.sessionStorage와 같다.
    세션은 브라우저가 실행되는 동안에만 유지되는 저장소로 서버에 저장해서 작동하는 것과 다르게
    브라우저가 종료되면 세션은 사라진다. (간단하게 상태를 저장할 때 사용한다.)

    단순 객체 방식으로 사용할 수 없고, setItem, getItem, removeItem 메서드를 사용해야 한다.
    키워드 "window.sessionStorage"

    useEffect()메서드가 동작되면, 상태가 true로 바뀌고,
    sessionStorage에 'isSubscribed'라는 키로 true가 저장된다.
  */

  useEffect(() => {
    const subscriptionStatus = sessionStorage.getItem('isSubscribed') === 'true';
    setIsSubscribed(subscriptionStatus);
  }, []);

  
}