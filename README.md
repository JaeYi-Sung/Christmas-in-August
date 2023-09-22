
<h2 align="center">
    <a href="https://httpie.io" target="blank_">
        <img height="300" alt="HTTPie" src="./asset/로고.svg" />
    </a>
  <br>
    🎄 THE BOYZ 2nd Regular Album PHANTAST PART 01

</h2>

<div align="center">

[![HTML](https://img.shields.io/static/v1?label=HTML&message=for%20Markup&color=FF4400)](https://httpie.io/product)
[![SCSS](https://img.shields.io/static/v1?label=CSS&message=for%20Style&color=0073CF)](https://httpie.io/app)
[![JavaScript](https://img.shields.io/static/v1?label=JavaScript&message=for%20Functions&color=FFEA00)](https://httpie.io/cli)
[![Firebase](https://img.shields.io/static/v1?label=Firebase&message=for%20Web&nbsp;Hosting&color=00AAFF)](https://httpie.io/app)
[![Figma](https://img.shields.io/static/v1?label=Figma&message=for%20Design&color=FD93F9)](https://httpie.io/app)

</br>

### Description

The Boyz's 2nd regular album PHANTASY Part 1, Christmas in August website production project </br></br>
SEP 7 - 18 2023 </br>

🎁 </br>
https://phantasy01-tbz.web.app/

</br>


### Design
#### Main View
For Christmas in August, sketched ideas based on two images: "Summer" and "Christmas"</br>
From Summer, using light blue background and bright corrections.</br>
From Christmas, getting primary red color, snowflakes, trees, advent calendars, and ornament items.</br>


</br>
Logo: Red typography with snow </br>
</br>
Tree: As the biggest symbol of Christmas, the tree is the main image for this album.</br>
The tree's ornaments are symbolized for and related to the songs of album. </br>
Clicking on each icon plays the corresponding song. </br>
Also, balls with the members’ symbolic colors were hung on the tree. </br> 
</br>
Advent Calendar: Each of video of this album is a precious gift </br>
in the sense of meaning of advent calendar that receiving gifts every day while waiting for Christmas. </br>
When the icons on the calendar are clicked on, </br>
it connects to the videos of the album one by one. </br>
</br>
Member Ball: These balls were hanging on the tree. </br>
The order and composition of balls is taken from the choreography movement. </br>
When clicked, it connects to each member page.</br>
</br>

#### Member View
The primary color of each page is the member's microphone color.</br>
The page displays individual the album jacket photos and fancams.

</br>

### Develop
#### Function
click.js : Click event to make it snow. </br>
move.js : navigation to external links. </br>
pagemove.js : Handling movement between pages. </br>
snow.js : Animation effect of falling snow in the background. </br>
sound.js : Managing the play and pause of songs corresponding to the ornament. </br>

</br>

### Issues 
1. 이미지 경로 처리 : 경로를 복사해서 붙여주면 안되고 모두 파일에서 찾아서 넣어줘야 한다. (전자로 할 경우 로컬은 잘 되지만, 서버에 올리면 안보인다.) <br>
2. 종횡비 맞추기 : vertical scroll을 중심이기 때문에 주로 vh에 맞추는 것이 좋다. vw에 맞추게 된다면 반드시 이미지 혹은 아이템의 종횡비를 잘 따져서 중분한 vh 간격을 준뒤에 겹치지 않게 해야한다. </br>
3. 세션 쪼개기 : 각 view마다 세션을 나눠서 만들면 vh 문제를 효율적으로 관리할 수 있다. HTML 바디 안에 여러개의 세션으로 나눠서 코딩하면 된다. </br>
4. scss : css의 경우 변수 지정과 코드 중복이 매우 심한데, scss를 사용하면 이를 극복할 수 있다. 태그 별로 묶어서 스타일을 처리하고, 변수도 지정할 수 있다. </br>
5. 이미지 용량 : 용량이 너무 크면 로딩이 너무 오래 걸린다. 용량이 큰 SVG 파일을 바로 받지 말고 4X png로 변환한 뒤에 픽셀값만 살려서 SVG로 바꾸면 용량을 줄이면서 이미지 화질을 유지할 수 있다. </br>

</br>

</div>

