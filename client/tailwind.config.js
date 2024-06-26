/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx}"],
  //Make sure that all heights are compiled so that the buttons can be updated properly
  safelist: [
    "h-[0px]",
    "h-[1px]",
    "h-[2px]",
    "h-[3px]",
    "h-[4px]",
    "h-[5px]",
    "h-[6px]",
    "h-[7px]",
    "h-[8px]",
    "h-[9px]",
    "h-[10px]",
    "h-[11px]",
    "h-[12px]",
    "h-[13px]",
    "h-[14px]",
    "h-[15px]",
    "h-[16px]",
    "h-[17px]",
    "h-[18px]",
    "h-[19px]",
    "h-[20px]",
    "h-[21px]",
    "h-[22px]",
    "h-[23px]",
    "h-[24px]",
    "h-[25px]",
    "h-[26px]",
    "h-[27px]",
    "h-[28px]",
    "h-[29px]",
    "h-[30px]",
    "h-[31px]",
    "h-[32px]",
    "h-[33px]",
    "h-[34px]",
    "h-[35px]",
    "h-[36px]",
    "h-[37px]",
    "h-[38px]",
    "h-[39px]",
    "h-[40px]",
    "h-[41px]",
    "h-[42px]",
    "h-[43px]",
    "h-[44px]",
    "h-[45px]",
    "h-[46px]",
    "h-[47px]",
    "h-[48px]",
    "h-[49px]",
    "h-[50px]",
    "h-[51px]",
    "h-[52px]",
    "h-[53px]",
    "h-[54px]",
    "h-[55px]",
    "h-[56px]",
    "h-[57px]",
    "h-[58px]",
    "h-[59px]",
    "h-[60px]",
    "h-[61px]",
    "h-[62px]",
    "h-[63px]",
    "h-[64px]",
    "h-[65px]",
    "h-[66px]",
    "h-[67px]",
    "h-[68px]",
    "h-[69px]",
    "h-[70px]",
    "h-[71px]",
    "h-[72px]",
    "h-[73px]",
    "h-[74px]",
    "h-[75px]",
    "h-[76px]",
    "h-[77px]",
    "h-[78px]",
    "h-[79px]",
    "h-[80px]",
    "h-[81px]",
    "h-[82px]",
    "h-[83px]",
    "h-[84px]",
    "h-[85px]",
    "h-[86px]",
    "h-[87px]",
    "h-[88px]",
    "h-[89px]",
    "h-[90px]",
    "h-[91px]",
    "h-[92px]",
    "h-[93px]",
    "h-[94px]",
    "h-[95px]",
    "h-[96px]",
    "h-[97px]",
    "h-[98px]",
    "h-[99px]",
    "h-[100px]",
    "h-[101px]",
    "h-[102px]",
    "h-[103px]",
    "h-[104px]",
    "h-[105px]",
    "h-[106px]",
    "h-[107px]",
    "h-[108px]",
    "h-[109px]",
    "h-[110px]",
    "h-[111px]",
    "h-[112px]",
    "h-[113px]",
    "h-[114px]",
    "h-[115px]",
    "h-[116px]",
    "h-[117px]",
    "h-[118px]",
    "h-[119px]",
    "h-[120px]",
    "h-[121px]",
    "h-[122px]",
    "h-[123px]",
    "h-[124px]",
    "h-[125px]",
    "h-[126px]",
    "h-[127px]",
    "h-[128px]",
    "h-[129px]",
    "h-[130px]",
    "h-[131px]",
    "h-[132px]",
    "h-[133px]",
    "h-[134px]",
    "h-[135px]",
    "h-[136px]",
    "h-[137px]",
    "h-[138px]",
    "h-[139px]",
    "h-[140px]",
    "h-[141px]",
    "h-[142px]",
    "h-[143px]",
    "h-[144px]",
    "h-[145px]",
    "h-[146px]",
    "h-[147px]",
    "h-[148px]",
    "h-[149px]",
    "h-[150px]",
    "h-[151px]",
    "h-[152px]",
    "h-[153px]",
    "h-[154px]",
    "h-[155px]",
    "h-[156px]",
    "h-[157px]",
    "h-[158px]",
    "h-[159px]",
    "h-[160px]",
    "h-[161px]",
    "h-[162px]",
    "h-[163px]",
    "h-[164px]",
    "h-[165px]",
    "h-[166px]",
    "h-[167px]",
    "h-[168px]",
    "h-[169px]",
    "h-[170px]",
    "h-[171px]",
    "h-[172px]",
    "h-[173px]",
    "h-[174px]",
    "h-[175px]",
    "h-[176px]",
    "h-[177px]",
    "h-[178px]",
    "h-[179px]",
    "h-[180px]",
    "h-[181px]",
    "h-[182px]",
    "h-[183px]",
    "h-[184px]",
    "h-[185px]",
    "h-[186px]",
    "h-[187px]",
    "h-[188px]",
    "h-[189px]",
    "h-[190px]",
    "h-[191px]",
    "h-[192px]",
    "h-[193px]",
    "h-[194px]",
    "h-[195px]",
    "h-[196px]",
    "h-[197px]",
    "h-[198px]",
    "h-[199px]",
    "h-[200px]",
    "h-[201px]",
    "h-[202px]",
    "h-[203px]",
    "h-[204px]",
    "h-[205px]",
    "h-[206px]",
    "h-[207px]",
    "h-[208px]",
    "h-[209px]",
    "h-[210px]",
    "h-[211px]",
    "h-[212px]",
    "h-[213px]",
    "h-[214px]",
    "h-[215px]",
    "h-[216px]",
    "h-[217px]",
    "h-[218px]",
    "h-[219px]",
    "h-[220px]",
    "h-[221px]",
    "h-[222px]",
    "h-[223px]",
    "h-[224px]",
    "h-[225px]",
    "h-[226px]",
    "h-[227px]",
    "h-[228px]",
    "h -[229px]",
    "h-[230px]",
    "h-[231px]",
    "h-[232px]",
    "h-[233px]",
    "h-[234px]",
    "h-[235px]",
    "h-[236px]",
    "h-[237px]",
    "h-[238px]",
    "h-[239px]",
    "h-[240px]",
    "h-[241px]",
    "h-[242px]",
    "h-[243px]",
    "h-[244px]",
    "h-[245px]",
    "h-[246px]",
    "h-[247px]",
    "h-[248px]",
    "h-[249px]",
    "h-[250px]",
    "h-[251px]",
    "h-[252px]",
    "h-[253px]",
    "h-[254px]",
    "h-[255px]",
    "h-[256px]",
    "h-[257px]",
    "h-[258px]",
    "h-[259px]",
    "h-[260px]",
    "h-[261px]",
    "h-[262px]",
    "h-[263px]",
    "h-[264px]",
    "h-[265px]",
    "h-[266px]",
    "h-[267px]",
    "h-[268px]",
    "h-[269px]",
    "h-[270px]",
    "h-[271px]",
    "h-[272px]",
    "h-[273px]",
    "h-[274px]",
    "h-[275px]",
    "h-[276px]",
    "h-[277px]",
    "h-[278px]",
    "h-[279px]",
    "h-[280px]",
    "h-[281px]",
    "h-[282px]",
    "h-[283px]",
    "h-[284px]",
    "h-[285px]",
    "h-[286px]",
    "h-[287px]",
    "h-[288px]",
    "h-[289px]",
    "h-[290px]",
    "h-[291px]",
    "h-[292px]",
    "h-[293px]",
    "h-[294px]",
    "h-[295px]",
    "h-[296px]",
    "h-[297px]",
    "h-[298px]",
    "h-[299px]",
    "h-[300px]",
    "h-[301px]",
    "h-[302px]",
    "h-[303px]",
    "h-[304px]",
    "h-[305px]",
    "h-[306px]",
    "h-[307px]",
    "h-[308px]",
    "h-[309px]",
    "h-[310px]",
    "h-[311px]",
    "h-[312px]",
    "h-[313px]",
    "h-[314px]",
    "h-[315px]",
    "h-[316px]",
    "h-[317px]",
    "h-[318px]",
    "h-[319px]",
    "h-[320px]",
    "h-[321px]",
    "h-[322px]",
    "h-[323px]",
    "h-[324px]",
    "h-[325px]",
    "h-[326px]",
    "h-[327px]",
    "h-[328px]",
    "h-[329px]",
    "h-[330px]",
    "h-[331px]",
    "h-[332px]",
    "h-[333px]",
    "h-[334px]",
    "h-[335px]",
    "h-[336px]",
    "h-[337px]",
    "h-[338px]",
    "h-[339px]",
    "h-[340px]",
    "h-[341px]",
    "h-[342px]",
    "h-[343px]",
    "h-[344px]",
    "h-[345px]",
    "h-[346px]",
    "h-[347px]",
    "h-[348px]",
    "h-[349px]",
    "h-[350px]",
    "h-[351px]",
    "h-[352px]",
    "h-[353px]",
    "h-[354px]",
    "h-[355px]",
    "h-[356px]",
    "h-[357px]",
    "h-[358px]",
    "h-[359px]",
    "h-[360px]",
    "h-[361px]",
    "h-[362px]",
    "h-[363px]",
    "h-[364px]",
    "h-[365px]",
    "h-[366px]",
    "h-[367px]",
    "h-[368px]",
    "h-[369px]",
    "h-[370px]",
    "h-[371px]",
    "h-[372px]",
    "h-[373px]",
    "h-[374px]",
    "h-[375px]",
    "h-[376px]",
    "h-[377px]",
    "h-[378px]",
    "h-[379px]",
    "h-[380px]",
    "h-[381px]",
    "h-[382px]",
    "h-[383px]",
    "h-[384px]",
    "h-[385px]",
    "h-[386px]",
    "h-[387px]",
    "h-[388px]",
    "h-[389px]",
    "h-[390px]",
    "h-[391px]",
    "h-[392px]",
    "h-[393px]",
    "h-[394px]",
    "h-[395px]",
    "h-[396px]",
    "h-[397px]",
    "h-[398px]",
    "h-[399px]",
    "h-[400px]",
    "h-[401px]",
    "h-[402px]",
    "h-[403px]",
    "h-[404px]",
    "h-[405px]",
    "h-[406px]",
    "h-[407px]",
    "h-[408px]",
    "h-[409px]",
    "h-[410px]",
    "h-[411px]",
    "h-[412px]",
    "h-[413px]",
    "h-[414px]",
    "h-[415px]",
    "h-[416px]",
    "h-[417px]",
    "h-[418px]",
    "h-[419px]",
    "h-[420px]",
    "h-[421px]",
    "h-[422px]",
    "h-[423px]",
    "h-[424px]",
    "h-[425px]",
    "h-[426px]",
    "h-[427px]",
    "h-[428px]",
    "h-[429px]",
    "h-[430px]",
    "h-[431px]",
    "h-[432px]",
    "h-[433px]",
    "h-[434px]",
    "h-[435px]",
    "h-[436px]",
    "h-[437px]",
    "h-[438px]",
    "h-[439px]",
    "h-[440px]",
    "h-[441px]",
    "h-[442px]",
    "h-[443px]",
    "h-[444px]",
    "h-[445px]",
    "h-[446px]",
    "h-[447px]",
    "h-[448px]",
    "h-[449px]",
    "h-[450px]",
    "h-[451px]",
    "h-[452px]",
    "h-[453px]",
    "h-[454px]"
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        btnRadius: "30px"
      },
      fontFamily: {
        sans: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        rotateFullForwards: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        rotateFullBackwards: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        }
      },
      animation: {
        rotateFullForwards: "rotateFullForwards 1s ease-in-out",
        rotateFullBackwards: "rotateFullBackwards 1s ease-in-out"
      }
    }
  }
};
