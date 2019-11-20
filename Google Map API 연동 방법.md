# Google Map API 연동 방법

1. https://cloud.google.com/maps-platform/ 들어가기
2. 하단으로 Scroll한 뒤, 시작하기 클릭
3. 우선 지도, 지역 정보 체크 후 계속
4. Project 선택을 하기 위해 본인의 Project후 생성(My Project)
5. 결제 계정 만들기 -> 서비스 약관에 Check 한 뒤, 계속 Click
6. 계정 유형 및 이름 주소는 입력이 되있을 것임, 결제 수단에 카드 정보 입력 후 무료 평가판 시작하기 Click
7. URL 등록을 위해 Google Cloud Platform Click -> console로 이동 Click
8. 좌측 Tab에서 API 및 서비스 -> 대시보드 Click
9. API 및 서비스 사용 설정 Click
10. Maps JavaScript API 선택 -> 사용 설정 Click
11. 사용자 인증 정보 Click
12. 새 인증 정보를 만들기 위해 (API 및 서비스의 사용자 인증 정보) Click -> 사용자 인증 정보 만들기 Click -> API 키 선택
13. API 키가 생성됨 복사해두자
    - API key: 
14. API 키 1 Click
15. 애플리케이션 제한사항에서 HTTP 리퍼러(웹사이트) 선택 -> 웹사이트 제한사항에서 항목 추가 후 원하는 URL 입력 후 완료 Click -> 저장

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.3595704, lng: 127.105399},
          zoom: 10
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=GoogleMap API 키 입력&callback=initMap"
    async defer></script>
  </body>
</html>
```

