
//🗓️ Sites
var calendarLink = [];

calendarLink[0] = "https://youtu.be/Y86V_jEUCXI?si=OHD23RJpCP1MU7-B";   //돌박이일1
calendarLink[1] = "https://youtu.be/__Gt9uKiz8E?si=A_qi3Z664Ip9s-KK";   //엠카3
calendarLink[2] = "https://youtu.be/8DrXZREp_P8?si=s8al_60O4zkJK98n";   //동네스타케이
calendarLink[3] = "https://youtu.be/F2Zq9mS-p5w?si=b_XY0heqGOfCLfnZ";   //슈돌
calendarLink[4] = "https://youtu.be/eG39AA-bK8U?si=LCs_QlnpNpXlnt6a";   //음중2

calendarLink[5] = "https://youtu.be/la-wzZ6_wpM?si=2MZ0AekCj7_HZEFH";   //컬투쇼
calendarLink[6] = "https://youtu.be/P6yNiUiH0No?si=2eIzzjcMCvh_MtpZ";   //유닛 퍼포먼스
calendarLink[7] = "https://youtu.be/jY5dXfZOxzY?si=pDiR6k3dA2WC80OV";   //릴레이댄스
calendarLink[8] = "https://youtu.be/eLPwb4GwRIY?si=nHsTi_mj50RfPz4m";   //인가1
calendarLink[9] = "https://youtu.be/niQaU0N9DFo?si=I0nZAwlVwe9-X4Rj";   //안무 무빙

calendarLink[10] = "https://youtu.be/QDEzupF4mw0?si=pTBsCofQI-FfXM0a";   //원더케이
calendarLink[11] = "https://youtu.be/hGhy_fAfIZU?si=Co-NI0glj-uRG8V8";   //음중3
calendarLink[12] = "https://youtu.be/w1YuAJFlVRs?si=IhzWai6YmJrxLtsG";   //뮤비
calendarLink[13] = "https://youtu.be/MpVBWP9VR9U?si=oQvjNUp5Kl8mxbvA";   //인가2
calendarLink[14] = "https://www.youtube.com/live/BMTCB-UNsr4?si=x3yn0_ThJWkym5GQ";   //애프터스쿨

calendarLink[15] = "https://youtu.be/kl_R3O3vXQA?si=jbZ0-ifJvZsdopIf";   //뮤뱅3
calendarLink[16] = "https://youtu.be/JLOhzjwU170?si=b3N5HHQ6pDCHOaxf";   //돌박이일2
calendarLink[17] = "https://youtu.be/a4ejXenBr6Y?si=VCAFW4DYgveb42If";   //러브게임
calendarLink[18] = "https://youtu.be/aPx5TgUj2co?si=fbKk4ksKR2zhpp3e";   //엠카1
calendarLink[19] = "https://youtu.be/HKF8Yzuj48o?si=RDSL87qb1RsmT6KD";   //인간극장

calendarLink[20] = "https://youtu.be/vA3M-HkP8X8?si=EL5t9HGQ-rVVRXlD";   //인무 픽스
calendarLink[21] = "https://youtu.be/WZMEb9_UsWo?si=rZY_JDtpNRyBjBq6";   //뮤뱅2
calendarLink[22] = "https://youtu.be/q3J8YGdyVZs?si=xfI9hztBV0IVuMXD";   //인가3
calendarLink[23] = "https://youtu.be/0woknKtA0sQ?si=CCbMqJDbdaxFGUJg";   //스테이션제트
calendarLink[24] = "https://youtu.be/YrR9ltG3Iyc?si=7GQcCOA91Ak_PFDv";   //ZIP


// document.querySelector(".day1").addEventListener("click", function()
// {
//     window.open(day1);
    
// });


for (let index = 0; index < 25; index++) {

        let thisday = index+1;
        //console.log(thisday)
    
        document.querySelector(`.day${thisday}`).addEventListener("click", function()
    {
        window.open(calendarLink[index]);
        
    });
    
}



