# Naver Map API 연동 방법

1. Naver Cloud Platform 접속

2. 상단 서비스 Tab Click 후 Maps 선택하고 이용 신청하기 Click

3. 좌측 All Products Click 후 AI Naver API 이동

4. Application 등록 Click, 약관 동의 후 확인 Click

5. 다음 항목들 선택
   - Web Dynamic Map - 상호작용 가능한 동적 지도를 보여주는 기능
   - Search Places - 사용자가 입력한 질의어에 대해 검색 결과로 제공
   - GeoCoding - 주소의 텍스트를 입력받아 좌표 등 상세정보 제공
   
6. Application 이름은 DOP, 서비스 환경 등록에서 원하는 서비스 URL에 URL입력(http://localhost:3000) 후 등록

7. 인증 정보 클릭 후 Client ID와 Client Secret을 따로 저장하자

   - Client ID: xxxx
   - Client Secret: xxxxx

8. https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html 들어가기

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
       <title>간단한 지도 표시하기</title>
       <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=본인의 Client ID 입력"></script>
   </head>
   <body>
   <div id="map" style="width:100%;height:800px;"></div>
   
   <script>
   var mapOptions = {
       center: new naver.maps.LatLng(37.3595704, 127.105399),
       zoom: 10
   };
   
   var map = new naver.maps.Map('map', mapOptions);
   </script>
   </body>
   </html>
   ```
   
9. Naver Map Marker 찍기

   - https://navermaps.github.io/maps.js/docs/tutorial-2-Marker.html 페이지 참고

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
       <title>간단한 지도 표시하기</title>
       <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=본인의 Client ID 입력"></script>
   </head>
   <body>
   <div id="map" style="width:100%;height:800px;"></div>
   
   <script>
   var position = new naver.maps.LatLng(37.3595704, 127.105399);
   
   var map = new naver.maps.Map('map', {
       center: position,
       zoom: 10
   });
   
   var marker = new naver.maps.Marker({
       position: position,
       map: map
   });
   
   naver.maps.Event.addListener(map, 'click', function(e) {
       marker.setPosition(e.coord);
   });
   </script>
   </body>
   </html>
   ```

10. https://blocklocation.mybluemix.net/dop/readDB 에 있는 JSON을 그대로 해봤지만 CORS Error가 나와서 JSON file을 따로 만들어서 좌표를 띄움

    ```javascript
    // 이거 추가해서 console.log로 나오는 것 확인함
    let jsonValue = [
        {   
            "timestamp":"8/30/2019, 11:37:54 AM",
            "longitude":127.0492091,
            "latitude":37.5036762
        },
        {
            "timestamp":"8/30/2019, 11:37:57 AM",
            "longitude":128.0492091,
            "latitude":35.5036762
        }
    ];
    ```

    



