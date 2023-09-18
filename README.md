

####
# Christmas in August Web Site 🎄 </br> 
### The BOYZ 2nd Regular Album PHANTASY Part 01 </br>

### 기술 스택 & 웹 호스팅

|  JavaScript | HTML |  SCSS   |  Firebase   |
| :--------: | :--------: | :------: | :-----: |
|   ![Generic badge](https://img.shields.io/badge/JavaScript-yellow.svg)    |    ![Generic badge](https://img.shields.io/badge/HTML-red.svg)    |  ![Generic badge](https://img.shields.io/badge/SCSS-green.svg) |  ![Generic badge](https://img.shields.io/badge/Firebase-blue.svg) |

</br>

<img src="./asset/로고.svg" />


</br>


# 기획 및 개발 설계

<details><summary>기획 펼쳐보기</summary>
<img src="https://user-images.githubusercontent.com/42762236/127539006-14d12f7b-268b-410a-8d1c-5e873e350eec.png" />
<img src="https://user-images.githubusercontent.com/42762236/127539195-afabcc1b-9c04-4389-b698-1872e9ccb076.png" />
</details>

<details><summary>플로우 차트 펼쳐보기</summary>
<img src="https://user-images.githubusercontent.com/42762236/127539567-faec669e-9a8f-4dcc-8308-bfab8e507cd0.png" />
</details>

<details><summary>와이어프레임 펼쳐보기</summary>
<img src="https://user-images.githubusercontent.com/42762236/127539340-818250f9-67b6-4505-b57d-fe86ea3592a8.png" />
</details>
</br>

</br>

</br>
</br>

------------------------------------------------------------
</br>
</br>

</br>


# 개발 이슈


#### 📎  Pagination 방식

<details>
<summary>펼쳐보기</summary>
<div markdown="1">
</br>

#### **▶︎  문제점**
  
서버가 Pagination을 주는 방법에서 next, prev url 정보를 서버로부터 받지 못하는 상황.  
  
Query에 page숫자를 클라이언트에서 넣어 처리를 해야하는 상황였다. URL은 https://~~~~/?page=1 이런 구조로 받았다.
</br>
PM이 next, prev는 처음 본다고 하여 나도 이부분에 대해서는 서버부분이라 항상 API를 받기만해서 잘 모르다보니 조사를 해보았다.
</br>
</br>
우선 API 방식에는 크게 2~3가지 방식으로 나눌 수 있다. 
</br>

- **PageNumberPagination 방식**
  - query에 page 값을 주는 방식 (먼데이 샐리 pagenation 방식과 비슷) 
  - 요청 시, 원하는 페이지(page) 번호를 정해서 가져오는 방법
  - 예) https://api.example.org/accounts/?page=4
  
- **LimitOffsetPagination 방식**

  - limit과 offset을 받아 page를 처리하는 방식
  - 요청시, 원하는 지점(offset)과 그 지점으로 부터 데이터 갯수(limit)를 정해서 가져오는 방법
  - 예) https://api.example.org/accounts/?limit=100&offset=400
  
- **CursorBased Pagination 방식**
 
  - 요청 했던 데이터 기준으로 앞, 뒤로만 이동할 때 사용
  - 예) https://api.example.org/accounts/?cursor=bz0xJnI9MQ

</br>
</br>
위의 Pagination 3가지 방식 모두 next, prev URL을 안주는 예시는 찾을 수 없었다. 
</br>
</br>

#### **▶︎  결론**


</br>

</br>
</br>
</br>


특히 유저 프로필 이미지 경우에는 먼데이샐리 앱에선 하나만 존재하고, 이전 프로필 사진을 조회할 수 없기 때문에, 
</br>
유저와 프로필 사진은 1:1 매칭이 되는 상황이였다. 
</br>
이런 경우, 랜덤UUID를 사용하면 파이어베이스 공간 낭비가 심하지 않을까 라는 생각을 하게 되었다. 
</br>
 </br>
- **첫번째로 생각한 방법** 

  - 유저 프로필사진이 1:1 매칭이기 때문에 유저ID 값으로 올리는 방법. 
  - 예를들어 /users/:contentIdx/profile.png  이런식.
  
- **두번째로 생각한 방법** 
  - 그냥 도메인 별로만 묶어서 랜덤UUID 값으로 올리기. 
  - 예를들어 /users/{랜덤UUID}.png 

</br>
</br> 
 첫번째 방식의 장점은 유저ID로 구분하기 때문에 덮어쓰기 처리가 가능하다. 
</br>
 하지만 단점은 이전 사진을 되돌릴 수 없다(먼데이샐리의 경우 상관 없음). 
</br>
 또, 이미지 캐싱처리시 문제점이 생긴다. 프로필 사진이 변경되더라도 같은 URL로 생각하고, 
 </br>
 ` 캐시처리된 이미지데이터가 사라지기 전까지 바뀐이미지로 인식을 못하게 될 것 ` 이라는 점이다. 
 </br>
 </br>
 
  #### **▶︎  결론**
  
  - 고민한 결과 우선 나는 두번째 방식을 선택하였다.
   
    - 이유는 우선 , 이미지 캐시처리는 앱 개발시 필수이고, 
    - 프로필 사진을 보여주어야하는 화면들이 많기 때문에 캐시처리를 하지않거나 제대로 되지 않는다면 문제가 된다.
    - 또 다른 이유는, 프로필 사진만 덮어쓴다고 해서 사진 삭제 문제점이 해결되지 않는다. 
    - (다른 게시물 사진은 어차피 랜덤UUID로 올려야 하기 때문). 
    - 사진 삭제에 관해서는, 스토리지에 불필요한 파일이 쌓이는것을 방지하려면, 
    - 필요한 경우 파일을 삭제할 수 있도록 서버와의 역할 분담이 필요할 것으로 보인다.
  </br>
  </br>
  </br>
  조사를 해보다 더 알게된 사실이있다.  
  </br>
  먼데이샐리는 이미지처리를 파이어베이스 스토리지에 저장을 하여 해결을 한다. 
  </br>
  이러한 경우는 파이어베이스 사진저장 -> 서버에 URL보내는 API호출 순으로 이루어진다. 
  </br>
  하지만, S3를 사용하는 방법도 있다. 
  </br>
  S3는 내가 저장한 이름 값대로 url를 구성 할 수 있기 때문에, 
  </br>
  아직 S3에 파일을 업로드하지 않았더라도 어떤 값으로 저장할지 미리 계산할수 있다.
  </br>
  그렇게 된다면 서버 값 저장 -> 해당 식별자로 S3에 저장 순으로 이루어 질 수 있다.
  </br>
  S3를 이용한다면 파이어베이스보다 사진삭제면에서는 훨씬 간편하다고 한다.
  
</div>
</details>







</br>

</br>
</br>
</br>

#### 📎  APNs, FCM에서 디바이스의 Token 받아 배포 서버에 API 호출로 넘겨주는 위치

<details>
<summary>펼쳐보기</summary>
<div markdown="1">
</br>

#### **▶︎  문제점**

먼데이샐리는 APNs기능을 필요로 한다. FCM에서 디바이스의 Token을 받아 푸시 테스트까지 성공한 상태에서, 
</br>
받은 토큰을 배포서버에 API 호출로 넘겨주어야 하는 상황인데 API 호출 위치를 iOS 화면 구성중 어디로 하는지가 이슈 상황이였다.
</br>

APNs 기능을 처음 구현해보았기 때문에, 우선 FCM에서 발급 받은 디바이스 Token이 '얼마나 자주, 언제' 바뀌는지를 알아야했다.  

<img src="https://user-images.githubusercontent.com/42762236/127626972-cc459e5f-c432-4242-bf30-db415f4482c4.png">

위의 첨부된 내용은, 파이어베이스의 iOS FCM 관련 문서에 있는, 디바이스 토큰 변경에 관한 내용이다.
</br>
</br>
</br>
위의 3가지 내용이 아니고선 토큰이 변경 되지 않는다면, 

```swift
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate, MessagingDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    }
}
```

에서만 로컬에 저장한 토큰과 FCM에서 받은 토큰이 다르다면 서버에 API를 호출하면 될 것 같았다. 
</br>
</br>
</br>
하지만 로그인기능이 있다면 조금더 생각을 해보아야 했다. 
</br>
</br>
FCM 토큰을 기기별로 관리할건지 유저별로 관리할건지에 따라 달라진다. 
</br>
APNs의 목적이 모든 사용자에게 같은 공지를 띄우는 것이라면, 
</br>
유저를 고려할 필요 없이 위에 처럼 맨처음에 비교하고 AppDelegate에서 API를 보내면 된다. 
</br>
</br>
하지만 사용자별로 다른 푸시 알람을 보내야한다면, 유저 ID와 같이 보내주어야 하기 때문에, 맨처음 회원가입시 보내주어야 된다. 
</br>
또, 만약 다른기기에서 로그인을 해도 된다고 가정한다면, 
</br>
같은 유저ID라도 FCM값이 달라지기 때문에, 로그인/ 자동로그인/ 회원가입API 에서 보내주어야 한다.

</br>

#### **▶︎  결론**

- 결론적으로 먼데이샐리 앱은 사용자 별로 푸시 알람을 목적으로 하고,
- 로그인과 로그아웃 기능이 있기 때문에 PM과 의논 결과 모든 로그인과 관련된 곳에서 API를 보내주는 것으로 하였다.

</div>
</details>

</br>

</br>
</br>
</br>



#### **▶︎  문제점**

  - 간단한 API의 경우 (예: 좋아요 API)를 요청했을때, alpha가 1인 화면을 씌울경우 깜빡거리는 현상 발생
  - 프로필 수정이나 게시물 수정같은경우는 alpha가 1인 배경에 인디케이터를 띄우는 것보다 반투명한 화면을 띄우는 것이 자연스럽다.
  - 테이블뷰 같은경우 인디케이터를 중앙에 띄우기보다 headerview에 추가해서 띄우는것이 자연스럽
  - 등등등 API 특성에 따라 알맞는 인디케이터가 요구된다.


#### **▶︎  결론**

- 상황에 따라 대비할 수 있게 테이블뷰, 컬렉션뷰 인디케이터, 반투명 인디케이터, 투명하지 않은 인디케이터를 만들어 알맞게 적용
  

</div>
</details>

</br>

</br>

</br>

----------------
</br>

</br>
</br>

# 배운점 & 느낀점




# :memo: Commit Convention

```
  - Init : 초기화
  - Add : 파일 추가
  - Remove : 기능, 파일 삭제
  - Update : 기능, 디자인, 파일 업데이트
  - Fix : 버그 수정
  - Refactor: 리팩토링
  - Docs : 문서 (문서 추가(Add), 수정, 삭제)
  - !BREAKING CHANGE : 커다란 API 변경의 경우 !
  - Comment : 필요한 주석 추가 및 변경   
  - Test : 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X) 
```

<br></br>
