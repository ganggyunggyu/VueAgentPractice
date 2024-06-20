import { defineStore } from 'pinia';

const bellIntro = new URL('@resource/intro/bell.png', import.meta.url).href;
const unoIntro = new URL('@resource/intro/uno.png', import.meta.url).href;
const sorinaIntro = new URL('@resource/intro/sorina.png', import.meta.url).href;

const bellNormal = new URL('@resource/character/Bell_Normal.png', import.meta.url).href;
const unoNormal = new URL('@resource/character/Uno_Normal.png', import.meta.url).href;
const sorinaNormal = new URL('@resource/character/Sorina_Normal.png', import.meta.url).href;

const makerUrl1 = new URL('@resource/tutorial/map_point_bell.png', import.meta.url).href;
const makerUrl2 = new URL('@resource/tutorial/map_point_uno.png', import.meta.url).href;
const makerUrl3 = new URL('@resource/tutorial/map_point_sorina.png', import.meta.url).href;
const bellNormalUrl = new URL('@resource/character/Bell_Normal.png', import.meta.url).href;
const bellHappyUrl = new URL('@resource/character/Bell_Happy.png', import.meta.url).href;
const bellWelcomeUrl = new URL('@resource/character/Bell_Welcome.png', import.meta.url).href;
const bellSadUrl = new URL('@resource/character/Bell_Sad.png', import.meta.url).href;
const unoNormalUrl = new URL('@resource/character/Uno_Normal.png', import.meta.url).href;
const unoHappyUrl = new URL('@resource/character/Uno_Happy.png', import.meta.url).href;
const unoWelcomeUrl = new URL('@resource/character/Uno_Welcome.png', import.meta.url).href;
const unoSadUrl = new URL('@resource/character/Uno_Sad.png', import.meta.url).href;
const sorinaNormalUrl = new URL('@resource/character/Sorina_Normal.png', import.meta.url).href;
const sorinaHappyUrl = new URL('@resource/character/Sorina_Happy.png', import.meta.url).href;
const sorinaWelcomeUrl = new URL('@resource/character/Sorina_Welcome.png', import.meta.url).href;
const sorinaSadUrl = new URL('@resource/character/Sorina_Sad.png', import.meta.url).href;

export const useCharacterStore = defineStore('character', {
  state: () => ({
    selectCharacterIndex: 0,
    // selectCharacter: [
    //     { name: "벨", src: 'https://dt-static.syrup.co.kr/sodar/character/Thumbnail/Thumbnail_character(1).png', },
    //     { name: "우노", src: 'https://dt-static.syrup.co.kr/sodar/character/Thumbnail/Thumbnail_character(2).png' },
    //     { name: "소리나", src: 'https://dt-static.syrup.co.kr/sodar/sticker/Thumbnail/Thumbnail_sticker (1).png' },
    // ],
    characters: [
      {
        name: '벨',
        maker: makerUrl1,
        normal:bellNormal,
        intro: [
          { text: '안녕, 나는 마법사 벨이야. 숲 복원을 지원해줘서 고마워. ', src: bellIntro },
          { text: '안녕, 난 마법사 벨이야' },
          {
            text: '집으로 돌아가는 방법을 아냐고? 숲으로 가면 알 수 있을 거야. 신비의 숲은 모든 걸 알고 있거든.',
          },
          { text: '어젯밤 불어온 의문의 폭풍때문에 신비의 숲이 망가지고 이상기후가 찾아왔어.' },
          { text: '숲은 마법의 원천인데 온전한 힘을 내지 못하고 있지 뭐야.' },
          { text: '망가진 숲을 복원하면 분명 집으로 돌아갈 수 있을 거야.' },
          {
            text: '숲의 약도를 줄게. 원하는 장소를 선택하고, 그곳으로 가서 숲을 복원해줘.',
            src: bellNormalUrl,
          },
          { text: '지도에서는 전체 퀘스트 위치를 확인할 수 있어.', src: bellNormalUrl },
          { text: '자세히 보고 싶은 층수를 누르면 해당 층 지도를 볼 수 있어.', src: bellNormalUrl },
          {
            text: '해당 층 퀘스트의 자세한 위치를 알 수 있어. 표시된 위치에서 마법진이 그려진 안내 배너를 찾으면 돼.',
            src: bellNormalUrl,
          },
          { text: '자, 이제 숲을 복원하러 가자. 어디로 갈래?', src: bellNormalUrl },
        ],
        shopping: [
          { text: '더웨이브(청소함)를 선택했구나.', src: bellNormalUrl },
          {
            text: "1층 중앙 에스컬레이터 옆에 위치한 'The Wave' 매장 앞에서 마법진을 가동해 나를 불러줘. ",
            src: bellNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼',
            src: bellNormalUrl,
          },
          {
            text: '쓰러진 보호수는 이미 정리한 모양이야. 마녀의 빗자루로 잔해만 청소해줘.',
            src: bellHappyUrl,
          },
          { text: '손가락을 화면에 대고 빗자루를 좌우로 움직여봐.', src: bellNormalUrl },
          { text: '와, 깨끗하다! 고마워.', src: bellWelcomeUrl },
          {
            text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.',
            src: bellHappyUrl,
          },
          { text: '귀엽지?', src: bellHappyUrl },
          {
            text: "획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, '푸드 애비뉴'나 'VP존'으로 와!",
            src: bellNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        shopping2: [
          { text: '2층 휴게공간(옷가게)을 선택했구나.', src: bellNormalUrl },
          {
            text: '2층 중앙 에스컬레이터 옆에 ‘남문 방면 중앙 창문 앞 휴게시설’에서 마법진을 가동해 나를 불러줘.',
            src: bellNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          {
            text: '쓰러진 보호수 잔해를 청소하다가 옷이 너무 더러워졌어. 갈아입고 가자.',
            src: bellSadUrl,
          },
          {
            text: '돌아다니면서 마음에 드는 옷 골라볼래? 뱀파이어 레이스 장인이 그러는데 사진 찍어서 공유하면 상품권을 준대.',
            src: bellHappyUrl,
          },
          { text: '예쁜 옷을 촬영하고 사진을 공유하면 상품교환권 100% 획득!', src: bellNormalUrl },
          { text: '예쁜 옷 많다. 그치?', src: bellWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 ‘F&B 중앙', '몽드 이가자', '신비의 숲’으로 와!",
            src: bellNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        eatingOut: [
          { text: '푸드 애비뉴(씨앗공장)를 선택했구나.', src: bellNormalUrl },
          { text: 'B1층 ‘푸드 애비뉴’ 입구에서 마법진을 가동해 나를 불러줘.', src: bellNormalUrl },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          { text: '신비의 숲의 중심에 있던 보호수가 망가졌어. ', src: bellSadUrl },
          {
            text: '마녀들이 보호수 씨앗을 만들고 있는데, 신의 열매 3가지가 필요하대. 아보카도, 감, 포도를 찾아서 마녀의 솥에 넣어줘.',
            src: bellNormalUrl,
          },
          {
            text: '화면에 열매가 나타나면 손가락으로 누른 후 끌어 와 마녀의 솥에 넣어 줘.',
            src: bellNormalUrl,
          },
          {
            text: '우와, 황금 씨앗이네. 덕분에 아주 큰 보호수가 태어날 것 같아!',
            src: bellWelcomeUrl,
          },
          {
            text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.',
            src: bellHappyUrl,
          },
          {
            text: "귀엽지? 획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, '더 웨이브'나 'VP존'으로 와!",
            src: bellHappyUrl,
          },
          // { text: "획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, '더 웨이브'나 'VP존'으로 와!" , src: bellNormalUrl},
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        eatingOut2: [
          { text: 'F&B (시간공방)을 선택했구나', src: bellNormalUrl },
          { text: "B1층 'F&B' 입구에서 마법진을 가동해 나를 불러줘.", src: bellNormalUrl },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          {
            text: '보호수가 태어나는 황금씨앗은 심기 전에 일정기간 숙성이 필요해.',
            src: bellNormalUrl,
          },
          {
            text: '시간공방에서 판매하는 음식은 시간을 빨리 가게 하니까 기다리지 않고 숙성할 수 있어.',
            src: bellHappyUrl,
          },
          {
            text: '뭐 먹고 싶어? 웨어울프 파티시에가 그러는데 사진 찍어서 공유하면 할인권을준대.',
            src: bellWelcomeUrl,
          },
          {
            text: '맛있는 음식/음료를 촬영하고 사진을 공유하면 금액할인권 100% 획득!.',
            src: bellNormalUrl,
          },
          { text: '벌써 씨앗 숙성이 다 됐어!', src: bellWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 ‘2F 휴게공간', '몽드 이가자', '신비의 숲’으로 와!",
            src: bellNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        culture: [
          { text: 'VP존(계곡)을 선택했구나', src: bellNormalUrl },
          {
            text: '2층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: bellNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          {
            text: '남쪽마을에 물이 말랐다는 소식을 들었어. 어디선가 물길이 막혔나봐.',
            src: bellSadUrl,
          },
          {
            text: '빨리 해결하지 않으면 마을에 가뭄이 올 거야. 어서 물길을 열자.',
            src: bellNormalUrl,
          },
          {
            text: '움직이던 종이배가 멈추면 손가락으로 화면을 두드려서 돌덩이를 치워줘.',
            src: bellNormalUrl,
          },
          { text: '물길이 열렸어! 남쪽마을 주민들이 좋아하겠다.', src: bellWelcomeUrl },
          {
            text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.',
            src: bellHappyUrl,
          },
          {
            text: "귀엽지? 획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, ‘더 웨이브'나 '푸드 애비뉴’로 와!",
            src: bellHappyUrl,
          },
          // { text: "획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, ‘더 웨이브'나 '푸드 애비뉴’로 와!",src: bellNormalUrl},
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        culture2: [
          { text: '몽드 이가자(남쪽마을)를 선택했구나.', src: bellNormalUrl },
          { text: '2층 ‘몽드 이가자’매장 앞에서 마법진을 가동해 나를 불러줘.', src: bellNormalUrl },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          {
            text: '남쪽마을에 사는 여우가 막혔던 물길을 열어주어 고맙다고 염료를 잔뜩 건네줬어.',
            src: bellNormalUrl,
          },
          {
            text: '여우의 염료는 둔갑할 때 사용하는데 색이 아주 고와. 흔치 않은 기회니까 사용해보자.',
            src: bellHappyUrl,
          },
          {
            text: '마녀 디자이너가 그러는데 사진 찍어서 원하는 염료를 쓰고 사진을 공유하면 할인권을 준대.',
            src: bellWelcomeUrl,
          },
          {
            text: '머리가 잘 나오게 사진을 찍어봐. 여우의 염료를 쓰고 사진을 공유하면 금액할인권 100% 획득!',
            src: bellNormalUrl,
          },
          { text: '예쁘다. 다음에 여우를 만나면 고맙다고 해야겠어.', src: bellWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 ‘2F 휴게공간', 'F&B 중앙', '신비의 숲’으로 와!",
            src: bellNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        common1: [
          { text: '3층 휴게공간(여름의 숲)을 선택했구나.', src: bellNormalUrl },
          {
            text: '3층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: bellNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          {
            text: '폭풍이 숲의 균형을 깨버렸나봐. 여름의 숲에 우박이 떨어지고 있어!',
            src: bellSadUrl,
          },
          { text: '이대로 다 떨어져 버리면 피해가 엄청날 거야. ', src: bellSadUrl },
          { text: '마법의 바구니로 우박을 받아내자 ', src: bellNormalUrl },
          {
            text: '손가락을 화면에 대고 나를 좌우로 움직이면서 우박을 받아줘.',
            src: bellNormalUrl,
          },
          {
            text: '휴우… 우박이 이제 그쳤나봐. 꼬마 웨어울프가 덕분에 다치지 않아서 고맙다고 전해달래.',
            src: bellWelcomeUrl,
          },
          {
            text: '고마워서 주는 선물이야. 여름의 모습을 담았어. 사진 촬영할 때 사용해줘.',
            src: bellHappyUrl,
          },
          {
            text: "획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면 '부암동 가든', '4F 휴게공간', 신비의 숲’으로 와!",
            src: bellWelcomeUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: bellWelcomeUrl },
        ],
        common2: [
          { text: '부암동 가든(봄의 숲)을 선택했구나.', src: bellNormalUrl },
          {
            text: '3층 ‘부암동 가든’ 매장 앞에서 마법진을 가동해 나를 불러줘.',
            src: bellNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          {
            text: '숲을 망가뜨린 폭풍이 분 이후부터 이상기온 현상이 나타나고 있어.',
            src: bellSadUrl,
          },
          { text: '오락가락한 기온변화로 꿀벌 3마리가 집을 찾아오지 못하나 봐.', src: bellSadUrl },
          { text: '꿀벌들을 찾아줘!', src: bellNormalUrl },
          { text: '세 마리의 꿀벌을 찾아 카메라에 5초간 인식해줘.', src: bellNormalUrl },
          { text: '집에 돌아간 꿀벌들이 행복해보여, 고마워.', src: bellWelcomeUrl },
          {
            text: '고마워서 주는 선물이야. 봄의 모습을 담았어. 사진 촬영할 때 사용해줘.',
            src: bellHappyUrl,
          },
          {
            text: "획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면, '3F 휴게공간', '4F 휴게공간', 신비의 숲’으로 와!",
            src: bellNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        common3: [
          { text: '4층 휴게공간(겨울의 숲)을 선택했구나', src: bellNormalUrl },
          {
            text: '4층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: bellNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          {
            text: '의문의 폭풍이 따뜻한 공기를 몰고 온 것 같아. 따뜻한 공기주머니가 눈을 녹여서 겨울의 땅이 줄어들고 있어.',
            src: bellNormalUrl,
          },
          {
            text: '이대로는 약재로 쓰이는 동백꽃이 사라지겠어! 따뜻한 공기주머니를 수거해줘.',
            src: bellWelcomeUrl,
          },
          {
            text: '화면을 누르면 비행 방향이 바뀌고, 화면 끝이나 모은 공기주머니에 닿으면 수거를 멈출거야.',
            src: bellNormalUrl,
          },
          { text: '아, 다행이다. 겨울의 동백은 꼭 필요하거든, 고마워!', src: bellWelcomeUrl },
          { text: '고마워서 주는 선물이야. 겨울의 모습을 담았어. ', src: bellHappyUrl },
          {
            text: "사진 촬영할 때 사용해줘. 획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면, '2F 휴게공간', '부암동 가든', 신비의 숲’으로 와!",
            src: bellNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        common4: [
          { text: '5층 신비의 숲을 선택했구나.', src: bellNormalUrl },
          {
            text: '5층 ‘남문쪽에 위치한 신비의 숲’에서 마법진을 가동해 나를 불러줘.',
            src: bellNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: bellNormalUrl,
          },
          {
            text: '갑자기 불어온 폭풍으로 숲이 많이 망가졌어. 숲을 복원하는 회복 에너지를 불어 넣어야 해.',
            src: bellSadUrl,
          },
          { text: '여기, 신비의 숲의 중심에서 마법진을 가동시켜줘!', src: bellHappyUrl },
          {
            text: '카메라를 회복 마법진에 대고 손가락으로 화면을 5초간 꾹 눌러줘. 보호수가 무럭무럭 자랄거야!',
            src: bellNormalUrl,
          },
          { text: '보호수가 황금씨앗에서 아주 크게 태어났어! ', src: bellHappyUrl },
          { text: '이 보호수는 사진 기능에서 언제든지 볼 수 있을거야. ', src: bellWelcomeUrl },
          {
            text: '그나저나 보호수 관리인이 동네방네 소식을 알리면 증정쿠폰을 준대. ',
            src: bellNormalUrl,
          },
          {
            text: 'AR 신비의 숲을 촬영하고 사진을 공유하면 백미당 아이스크림 100% 획득! ',
            src: bellNormalUrl,
          },
          { text: '숲을 회복해줘서 고마워. 덕분이야.', src: bellWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 '2F 휴게공간', 'F&B 중앙', '몽드 이가자'로 와!",
            src: bellNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: bellNormalUrl },
        ],
        ending: [
          {
            text: '역시 숲은 모든 것을 알고 있어. 집으로 갈 때까지 포탈은 열려 있을 거야. 당신을 위한 거니까. 마음 편히 더 둘러보고 가도 된다는 말이야. 덕분에 망가졌던 숲도 완전히 회복됐어.',
          },
          { text: '고마워. 오늘 함께해서 정말로 즐거웠어. 다음에 또 만날 수 있으면 좋겠다. 안녕.' },
        ],
      },
      {
        name: '소리나',
        maker: makerUrl3,
        normal:sorinaNormal,
        intro: [
          { text: '나는 뱀파이어 소리나. 숲을 복원하러 같이 간다고?', src: sorinaIntro },
          { text: '안녕, 난 뱀파이어 소리나야.' },
          {
            text: '집으로 돌아가는 방법을 아냐고? 숲으로 가면 알 수 있을 거야. 신비의 숲은 모든 걸 알고 있거든.',
          },
          { text: '어젯밤 불어온 의문의 폭풍때문에 신비의 숲이 망가지고 이상기후가 찾아왔어.' },
          { text: '숲은 마법의 원천인데 온전한 힘을 내지 못하고 있지 뭐야.' },
          { text: '망가진 숲을 복원하면 분명 집으로 돌아갈 수 있을 거야.' },
          {
            text: '숲의 약도를 줄게. 원하는 장소를 선택하고, 그곳으로 가서 숲을 복원해줘.',
            src: sorinaNormalUrl,
          },
          { text: '지도에서는 전체 퀘스트 위치를 확인할 수 있어.', src: sorinaNormalUrl },
          {
            text: '자세히 보고 싶은 층수를 누르면 해당 층 지도를 볼 수 있어.',
            src: sorinaNormalUrl,
          },
          {
            text: '해당 층 퀘스트의 자세한 위치를 알 수 있어. 표시된 위치에서 마법진이 그려진 안내 배너를 찾으면 돼.',
            src: sorinaNormalUrl,
          },
          { text: '자, 이제 숲을 복원하러 가자. 어디로 갈래?', src: sorinaNormalUrl },
        ],
        shopping: [
          { text: '더웨이브(청소함)를 선택했구나.' },
          {
            text: "1층 중앙 에스컬레이터 옆에 위치한 'The Wave' 매장 앞에서 마법진을 가동해 나를 불러줘. ",
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼',
          },
          { text: '쓰러진 보호수는 이미 정리한 모양이야. 마녀의 빗자루로 잔해만 청소해줘.' },
          { text: '손가락을 화면에 대고 빗자루를 좌우로 움직여봐.' },
          { text: '오~ 청소 장인이네!' },
          { text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.' },
          { text: '귀엽지?' },
          {
            text: '획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, ‘씨앗공장’이나 ‘계곡’으로 와!',
          },
          { text: '자, 다음은 어디로 갈래?' },
        ],
        shopping2: [
          { text: '2층 휴게공간(옷가게)을 선택했구나.', src: sorinaNormalUrl },
          {
            text: '2층 중앙 에스컬레이터 옆에 ‘남문 방면 중앙 창문 앞 휴게시설’에서 마법진을 가동해 나를 불러줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          {
            text: '쓰러진 보호수 잔해를 청소하다가 옷이 너무 더러워졌어. 갈아입고 가자.',
            src: sorinaSadUrl,
          },
          {
            text: '돌아다니면서 마음에 드는 옷 골라볼래? 뱀파이어 레이스 장인이 그러는데 사진 찍어서 공유하면 상품권을 준대.',
            src: sorinaHappyUrl,
          },
          {
            text: '예쁜 옷을 촬영하고 사진을 공유하면 상품교환권 100% 획득!',
            src: sorinaNormalUrl,
          },
          { text: '귀여워, 귀여운 게 너무 많아!', src: sorinaWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 'F&B 중앙', '몽드 이가자', '신비의 숲’으로 와!",
            src: sorinaNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaNormalUrl },
        ],
        eatingOut: [
          { text: '푸드 애비뉴(씨앗공장)를 선택했구나.', src: sorinaNormalUrl },
          {
            text: 'B1층 ‘푸드 애비뉴’ 입구에서 마법진을 가동해 나를 불러줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          { text: '신비의 숲의 중심에 있던 보호수가 망가졌어. ', src: sorinaSadUrl },
          {
            text: '마녀들이 보호수 씨앗을 만들고 있는데, 신의 열매 3가지가 필요하대. 아보카도, 감, 포도를 찾아서 마녀의 솥에 넣어줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '화면에 열매가 나타나면 손가락으로 누른 후 끌어 와 마녀의 솥에 넣어 줘.',
            src: sorinaNormalUrl,
          },
          { text: '황금 씨앗이네. 당신 축복 받은 존재구나.', src: sorinaWelcomeUrl },
          {
            text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.',
            src: sorinaHappyUrl,
          },
          { text: '귀엽지?', src: sorinaHappyUrl },
          {
            text: "획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, '더 웨이브'나 'VP존'으로 와!",
            src: sorinaNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaNormalUrl },
        ],
        eatingOut2: [
          { text: 'F&B (시간공방)을 선택했구나', src: sorinaNormalUrl },
          { text: "B1층 'F&B' 입구에서 마법진을 가동해 나를 불러줘.", src: sorinaNormalUrl },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          {
            text: '보호수가 태어나는 황금씨앗은 심기 전에 일정기간 숙성이 필요해.',
            src: sorinaNormalUrl,
          },
          {
            text: '시간공방에서 판매하는 음식은 시간을 빨리 가게 하니까 기다리지 않고 숙성할 수 있어.',
            src: sorinaHappyUrl,
          },
          {
            text: '뭐 먹고 싶어? 웨어울프 파티시에가 그러는데 사진 찍어서 공유하면 할인권을준대.',
            src: sorinaWelcomeUrl,
          },
          {
            text: '맛있는 음식/음료를 촬영하고 사진을 공유하면 금액할인권 100% 획득!.',
            src: sorinaNormalUrl,
          },
          { text: '씨앗 숙성이 다 됐어. 역시 시간공방은 효율적이라니까.', src: sorinaWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 '2F 휴게공간', '몽드 이가자', '신비의 숲’으로 와!",
            src: sorinaNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaNormalUrl },
        ],
        culture: [
          { text: 'VP존(계곡)을 선택했구나', src: sorinaNormalUrl },
          {
            text: '2층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          {
            text: '남쪽마을에 물이 말랐다는 소식을 들었어. 어디선가 물길이 막혔나봐.',
            src: sorinaSadUrl,
          },
          {
            text: '빨리 해결하지 않으면 마을에 가뭄이 올 거야. 어서 물길을 열자.',
            src: sorinaNormalUrl,
          },
          {
            text: '움직이던 종이배가 멈추면 손가락으로 화면을 두드려서 돌덩이를 치워줘.',
            src: sorinaNormalUrl,
          },
          { text: '잘했어. 남쪽마을 주민들이 고맙다고 전해달래.', src: sorinaWelcomeUrl },
          {
            text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.',
            src: sorinaHappyUrl,
          },
          { text: '귀엽지?', src: sorinaHappyUrl },
          {
            text: "획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, ‘더 웨이브'나 '푸드 애비뉴’로 와!",
            src: sorinaNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaNormalUrl },
        ],
        culture2: [
          { text: '몽드 이가자(남쪽마을)를 선택했구나.', src: sorinaNormalUrl },
          {
            text: '2층 ‘몽드 이가자’매장 앞에서 마법진을 가동해 나를 불러줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          {
            text: '남쪽마을에 사는 여우가 막혔던 물길을 열어주어 고맙다고 염료를 잔뜩 건네줬어.',
            src: sorinaNormalUrl,
          },
          {
            text: '여우의 염료는 둔갑할 때 사용하는데 색이 아주 고와. 흔치 않은 기회니까 사용해보자.',
            src: sorinaHappyUrl,
          },
          {
            text: '마녀 디자이너가 그러는데 사진 찍어서 원하는 염료를 쓰고 사진을 공유하면 할인권을 준대.',
            src: sorinaWelcomeUrl,
          },
          {
            text: '머리가 잘 나오게 사진을 찍어봐. 여우의 염료를 쓰고 사진을 공유하면 금액할인권 100% 획득!',
            src: sorinaNormalUrl,
          },
          { text: '한 솜씨하네. 마음에들어.', src: sorinaWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 '2F 휴게공간', 'F&B 중앙', '신비의 숲’으로 와!",
            src: sorinaNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaNormalUrl },
        ],
        common1: [
          { text: '3층 휴게공간(여름의 숲)을 선택했구나.', src: sorinaNormalUrl },
          {
            text: '3층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          {
            text: '폭풍이 숲의 균형을 깨버렸나봐. 여름의 숲에 우박이 떨어지고 있어!',
            src: sorinaSadUrl,
          },
          { text: '이대로 다 떨어져 버리면 피해가 엄청날 거야. ', src: sorinaSadUrl },
          { text: '마법의 바구니로 우박을 받아내자 ', src: sorinaNormalUrl },
          {
            text: '손가락을 화면에 대고 나를 좌우로 움직이면서 우박을 받아줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '꼬마 웨어울프를 멋지게 지켜줬어. 당신, 슈퍼 히어로 같았대.',
            src: sorinaWelcomeUrl,
          },
          {
            text: '고마워서 주는 선물이야. 여름의 모습을 담았어. 사진 촬영할 때 사용해줘.',
            src: sorinaHappyUrl,
          },
          {
            text: "획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면 '부암동 가든', '4F 휴게공간', 신비의 숲’으로 와!",
            src: sorinaWelcomeUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaWelcomeUrl },
        ],
        common2: [
          { text: '부암동 가든(봄의 숲)을 선택했구나.', src: sorinaNormalUrl },
          {
            text: '3층 ‘부암동 가든’ 매장 앞에서 마법진을 가동해 나를 불러줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          {
            text: '숲을 망가뜨린 폭풍이 분 이후부터 이상기온 현상이 나타나고 있어.',
            src: sorinaSadUrl,
          },
          {
            text: '오락가락한 기온변화로 꿀벌 3마리가 집을 찾아오지 못하나 봐.',
            src: sorinaSadUrl,
          },
          { text: '꿀벌들을 찾아줘!', src: sorinaNormalUrl },
          { text: '세 마리의 꿀벌을 찾아 카메라에 5초간 인식해줘.', src: sorinaNormalUrl },
          { text: '무사히 집에 돌아갔대. 꿀벌들이 고맙다고 전해달래.', src: sorinaWelcomeUrl },
          {
            text: '고마워서 주는 선물이야. 봄의 모습을 담았어. 사진 촬영할 때 사용해줘.',
            src: sorinaHappyUrl,
          },
          {
            text: "획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면, '3F 휴게공간', '4F 휴게공간', 신비의 숲’으로 와!",
            src: sorinaNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaNormalUrl },
        ],
        common3: [
          { text: '4층 휴게공간(겨울의 숲)을 선택했구나', src: sorinaNormalUrl },
          {
            text: '4층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          {
            text: '의문의 폭풍이 따뜻한 공기를 몰고 온 것 같아. 따뜻한 공기주머니가 눈을 녹여서 겨울의 땅이 줄어들고 있어.',
            src: sorinaNormalUrl,
          },
          {
            text: '이대로는 약재로 쓰이는 동백꽃이 사라지겠어! 따뜻한 공기주머니를 수거해줘.',
            src: sorinaWelcomeUrl,
          },
          {
            text: '화면을 누르면 비행 방향이 바뀌고, 화면 끝이나 모은 공기주머니에 닿으면 수거를 멈출거야.',
            src: sorinaNormalUrl,
          },
          {
            text: '이대로 겨울이 사라지는 줄 알았어. 동백꽃만큼 귀여운 게 없는데! 정말 고마워. ',
            src: sorinaWelcomeUrl,
          },
          { text: '고마워서 주는 선물이야. 겨울의 모습을 담았어. ', src: sorinaHappyUrl },
          {
            text: "사진 촬영할 때 사용해줘. 획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면, '2F 휴게공간', '부암동 가든', 신비의 숲’으로 와!",
            src: sorinaNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaNormalUrl },
        ],
        common4: [
          { text: '5층 신비의 숲을 선택했구나.', src: sorinaNormalUrl },
          {
            text: '5층 ‘남문쪽에 위치한 신비의 숲’에서 마법진을 가동해 나를 불러줘.',
            src: sorinaNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: sorinaNormalUrl,
          },
          {
            text: '갑자기 불어온 폭풍으로 숲이 많이 망가졌어. 숲을 복원하는 회복 에너지를 불어 넣어야 해.',
            src: sorinaSadUrl,
          },
          { text: '여기, 신비의 숲의 중심에서 마법진을 가동시켜줘!', src: sorinaHappyUrl },
          {
            text: '카메라를 회복 마법진에 대고 손가락으로 화면을 5초간 꾹 눌러줘. 보호수가 무럭무럭 자랄거야!',
            src: sorinaNormalUrl,
          },
          { text: '보호수가 황금씨앗에서 아주 크게 태어났어! ', src: sorinaHappyUrl },
          { text: '이 보호수는 사진 기능에서 언제든지 볼 수 있을거야. ', src: sorinaWelcomeUrl },
          {
            text: '그나저나 보호수 관리인이 동네방네 소식을 알리면 증정쿠폰을 준대. ',
            src: sorinaNormalUrl,
          },
          {
            text: 'AR 신비의 숲을 촬영하고 사진을 공유하면 백미당 아이스크림 100% 획득! ',
            src: sorinaNormalUrl,
          },
          { text: '숲의 소리가 들려. 아주 기뻐하고 있네. 고마워.', src: sorinaWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 '2F 휴게공간', 'F&B 중앙', '몽드 이가자'로 와!",
            src: sorinaNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: sorinaNormalUrl },
        ],
        ending: [
          {
            text: '역시 숲은 모든 것을 알고 있어. 집으로 갈 때까지 포탈은 열려 있을 거야. 당신을 위한 거니까. 마음 편히 더 둘러보고 가도 된다는 말이야. 덕분에 망가졌던 숲도 완전히 회복됐어.',
          },
          { text: '고마워. 오늘 함께해서 정말로 즐거웠어. 다음에 또 만날 수 있으면 좋겠다. 안녕.' },
        ],
      },
      {
        name: '우노',
        maker: makerUrl2,
        normal:unoNormal,
        intro: [
          { text: '웨어울프 우노라고 해. 숲 복원하러 함께 갈거야?', src: unoIntro },
          { text: '안녕, 난 웨어울프 우노야' },
          {
            text: '집으로 돌아가는 방법을 아냐고? 숲으로 가면 알 수 있을 거야. 신비의 숲은 모든 걸 알고 있거든.',
          },
          { text: '어젯밤 불어온 의문의 폭풍때문에 신비의 숲이 망가지고 이상기후가 찾아왔어.' },
          { text: '숲은 마법의 원천인데 온전한 힘을 내지 못하고 있지 뭐야.' },
          { text: '망가진 숲을 복원하면 분명 집으로 돌아갈 수 있을 거야.' },
          {
            text: '숲의 약도를 줄게. 원하는 장소를 선택하고, 그곳으로 가서 숲을 복원해줘.',
            src: unoNormalUrl,
          },
          { text: '지도에서는 전체 퀘스트 위치를 확인할 수 있어.', src: unoNormalUrl },
          { text: '자세히 보고 싶은 층수를 누르면 해당 층 지도를 볼 수 있어.', src: unoNormalUrl },
          {
            text: '해당 층 퀘스트의 자세한 위치를 알 수 있어. 표시된 위치에서 마법진이 그려진 안내 배너를 찾으면 돼.',
            src: unoNormalUrl,
          },
          { text: '자, 이제 숲을 복원하러 가자. 어디로 갈래?', src: unoNormalUrl },
        ],
        shopping: [
          { text: '더웨이브(청소함)를 선택했구나.' },
          {
            text: "1층 중앙 에스컬레이터 옆에 위치한 'The Wave' 매장 앞에서 마법진을 가동해 나를 불러줘. ",
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼',
          },
          { text: '쓰러진 보호수는 이미 정리한 모양이야. 마녀의 빗자루로 잔해만 청소해줘.' },
          { text: '손가락을 화면에 대고 빗자루를 좌우로 움직여봐.' },
          { text: '오~ 청소 장인이네!' },
          { text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.' },
          { text: '귀엽지?' },
          {
            text: '획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, ‘씨앗공장’이나 ‘계곡’으로 와!',
          },
          { text: '자, 다음은 어디로 갈래?' },
        ],
        shopping2: [
          { text: '2층 휴게공간(옷가게)을 선택했구나.', src: unoNormalUrl },
          {
            text: '2층 중앙 에스컬레이터 옆에 ‘남문 방면 중앙 창문 앞 휴게시설’에서 마법진을 가동해 나를 불러줘.',
            src: unoNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          {
            text: '쓰러진 보호수 잔해를 청소하다가 옷이 너무 더러워졌어. 갈아입고 가자.',
            src: unoSadUrl,
          },
          {
            text: '돌아다니면서 마음에 드는 옷 골라볼래? 뱀파이어 레이스 장인이 그러는데 사진 찍어서 공유하면 상품권을 준대.',
            src: unoHappyUrl,
          },
          { text: '예쁜 옷을 촬영하고 사진을 공유하면 상품교환권 100% 획득!', src: unoNormalUrl },
          { text: '오랜만에 쇼핑했다!', src: unoWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 'F&B 중앙', '몽드 이가자', '신비의 숲’으로 와!",
            src: unoNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoNormalUrl },
        ],
        eatingOut: [
          { text: '푸드 애비뉴(씨앗공장)를 선택했구나.', src: unoNormalUrl },
          { text: 'B1층 ‘푸드 애비뉴’ 입구에서 마법진을 가동해 나를 불러줘.', src: unoNormalUrl },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          { text: '신비의 숲의 중심에 있던 보호수가 망가졌어. ', src: unoSadUrl },
          {
            text: '마녀들이 보호수 씨앗을 만들고 있는데, 신의 열매 3가지가 필요하대. 아보카도, 감, 포도를 찾아서 마녀의 솥에 넣어줘.',
            src: unoNormalUrl,
          },
          {
            text: '화면에 열매가 나타나면 손가락으로 누른 후 끌어 와 마녀의 솥에 넣어 줘.',
            src: unoNormalUrl,
          },
          { text: '황금 씨앗이야! 말로만 들었지 처음 봐. 정말 멋지다!', src: unoWelcomeUrl },
          {
            text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.',
            src: unoHappyUrl,
          },
          { text: '귀엽지?', src: unoHappyUrl },
          {
            text: "획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, '더 웨이브'나 'VP존'으로 와!",
            src: unoNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoNormalUrl },
        ],
        eatingOut2: [
          { text: 'F&B (시간공방)을 선택했구나', src: unoNormalUrl },
          { text: "B1층 'F&B' 입구에서 마법진을 가동해 나를 불러줘.", src: unoNormalUrl },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          {
            text: '보호수가 태어나는 황금씨앗은 심기 전에 일정기간 숙성이 필요해.',
            src: unoNormalUrl,
          },
          {
            text: '시간공방에서 판매하는 음식은 시간을 빨리 가게 하니까 기다리지 않고 숙성할 수 있어.',
            src: unoHappyUrl,
          },
          {
            text: '뭐 먹고 싶어? 웨어울프 파티시에가 그러는데 사진 찍어서 공유하면 할인권을준대.',
            src: unoWelcomeUrl,
          },
          {
            text: '맛있는 음식/음료를 촬영하고 사진을 공유하면 금액할인권 100% 획득!.',
            src: unoNormalUrl,
          },
          { text: '진짜 빨라! 씨앗 숙성이 아주 잘 됐어.', src: unoWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 '2F 휴게공간', '몽드 이가자', '신비의 숲’으로 와!",
            src: unoNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoNormalUrl },
        ],
        culture: [
          { text: 'VP존(계곡)을 선택했구나', src: unoNormalUrl },
          {
            text: '2층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: unoNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          {
            text: '남쪽마을에 물이 말랐다는 소식을 들었어. 어디선가 물길이 막혔나봐.',
            src: unoSadUrl,
          },
          {
            text: '빨리 해결하지 않으면 마을에 가뭄이 올 거야. 어서 물길을 열자.',
            src: unoNormalUrl,
          },
          {
            text: '움직이던 종이배가 멈추면 손가락으로 화면을 두드려서 돌덩이를 치워줘.',
            src: unoNormalUrl,
          },
          { text: '계곡이 시원하게 흘러! 덕분이야, 고마워.', src: unoWelcomeUrl },
          {
            text: '스티커 골라 봐, 선물로 줄게. 사진 촬영 할 때 사용할 수 있어.',
            src: unoHappyUrl,
          },
          { text: '귀엽지?', src: unoHappyUrl },
          {
            text: "획득한 스티커는 보관함에서 확인할 수 있어. 다른 스티커도 얻고 싶다면, ‘더 웨이브'나 '푸드 애비뉴’로 와!",
            src: unoNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoNormalUrl },
        ],
        culture2: [
          { text: '몽드 이가자(남쪽마을)를 선택했구나.', src: unoNormalUrl },
          { text: '2층 ‘몽드 이가자’매장 앞에서 마법진을 가동해 나를 불러줘.', src: unoNormalUrl },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          {
            text: '남쪽마을에 사는 여우가 막혔던 물길을 열어주어 고맙다고 염료를 잔뜩 건네줬어.',
            src: unoNormalUrl,
          },
          {
            text: '여우의 염료는 둔갑할 때 사용하는데 색이 아주 고와. 흔치 않은 기회니까 사용해보자.',
            src: unoHappyUrl,
          },
          {
            text: '마녀 디자이너가 그러는데 사진 찍어서 원하는 염료를 쓰고 사진을 공유하면 할인권을 준대.',
            src: unoWelcomeUrl,
          },
          {
            text: '머리가 잘 나오게 사진을 찍어봐. 여우의 염료를 쓰고 사진을 공유하면 금액할인권 100% 획득!',
            src: unoNormalUrl,
          },
          { text: '역시 여우의 솜씨야!', src: unoWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 '2F 휴게공간', 'F&B 중앙', '신비의 숲’으로 와!",
            src: unoNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoNormalUrl },
        ],
        common1: [
          { text: '3층 휴게공간(여름의 숲)을 선택했구나.', src: unoNormalUrl },
          {
            text: '3층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: unoNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          {
            text: '폭풍이 숲의 균형을 깨버렸나봐. 여름의 숲에 우박이 떨어지고 있어!',
            src: unoSadUrl,
          },
          { text: '이대로 다 떨어져 버리면 피해가 엄청날 거야. ', src: unoSadUrl },
          { text: '마법의 바구니로 우박을 받아내자 ', src: unoNormalUrl },
          { text: '손가락을 화면에 대고 나를 좌우로 움직이면서 우박을 받아줘.', src: unoNormalUrl },
          {
            text: '하마터면 꼬마 웨어울프가 다칠 뻔 했나봐. 덕분에 무사하대, 고마워.',
            src: unoWelcomeUrl,
          },
          {
            text: '고마워서 주는 선물이야. 여름의 모습을 담았어. 사진 촬영할 때 사용해줘.',
            src: unoHappyUrl,
          },
          {
            text: "획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면 '부암동 가든', '4F 휴게공간', 신비의 숲’으로 와!",
            src: unoWelcomeUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoWelcomeUrl },
        ],
        common2: [
          { text: '부암동 가든(봄의 숲)을 선택했구나.', src: unoNormalUrl },
          { text: '3층 ‘부암동 가든’ 매장 앞에서 마법진을 가동해 나를 불러줘.', src: unoNormalUrl },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          {
            text: '숲을 망가뜨린 폭풍이 분 이후부터 이상기온 현상이 나타나고 있어.',
            src: unoSadUrl,
          },
          { text: '오락가락한 기온변화로 꿀벌 3마리가 집을 찾아오지 못하나 봐.', src: unoSadUrl },
          { text: '꿀벌들을 찾아줘!', src: unoNormalUrl },
          { text: '세 마리의 꿀벌을 찾아 카메라에 5초간 인식해줘.', src: unoNormalUrl },
          { text: '꿀벌들이 집으로 무사히 돌아갔어. 고마워!', src: unoWelcomeUrl },
          {
            text: '고마워서 주는 선물이야. 봄의 모습을 담았어. 사진 촬영할 때 사용해줘.',
            src: unoHappyUrl,
          },
          {
            text: "획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면, '3F 휴게공간', '4F 휴게공간', 신비의 숲’으로 와!",
            src: unoNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoNormalUrl },
        ],
        common3: [
          { text: '4층 휴게공간(겨울의 숲)을 선택했구나', src: unoNormalUrl },
          {
            text: '4층 중앙 에스컬레이터 옆에 ‘북문 방면 중앙 창문’에서 마법진을 가동해 나를 불러줘.',
            src: unoNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          {
            text: '의문의 폭풍이 따뜻한 공기를 몰고 온 것 같아. 따뜻한 공기주머니가 눈을 녹여서 겨울의 땅이 줄어들고 있어.',
            src: unoNormalUrl,
          },
          {
            text: '이대로는 약재로 쓰이는 동백꽃이 사라지겠어! 따뜻한 공기주머니를 수거해줘.',
            src: unoWelcomeUrl,
          },
          {
            text: '화면을 누르면 비행 방향이 바뀌고, 화면 끝이나 모은 공기주머니에 닿으면 수거를 멈출거야.',
            src: unoNormalUrl,
          },
          {
            text: '눈이 녹는 게 멈췄어! 겨울을 빛내는 동백꽃을 지켜줘서 고마워.',
            src: unoWelcomeUrl,
          },
          { text: '고마워서 주는 선물이야. 겨울의 모습을 담았어. ', src: unoHappyUrl },
          {
            text: "사진 촬영할 때 사용해줘. 획득한 프레임은 보관함에서 확인할 수 있어. 다른 프레임도 얻고 싶다면, '2F 휴게공간', '부암동 가든', 신비의 숲’으로 와!",
            src: unoNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoNormalUrl },
        ],
        common4: [
          { text: '5층 신비의 숲을 선택했구나.', src: unoNormalUrl },
          {
            text: '5층 ‘남문쪽에 위치한 신비의 숲’에서 마법진을 가동해 나를 불러줘.',
            src: unoNormalUrl,
          },
          {
            text: '마법진은 신비의 숲 콘텐츠 안내 팻말에 보이는 QR코드를 스마트폰 카메라로 스캔하면 돼.',
            src: unoNormalUrl,
          },
          {
            text: '갑자기 불어온 폭풍으로 숲이 많이 망가졌어. 숲을 복원하는 회복 에너지를 불어 넣어야 해.',
            src: unoSadUrl,
          },
          { text: '여기, 신비의 숲의 중심에서 마법진을 가동시켜줘!', src: unoHappyUrl },
          {
            text: '카메라를 회복 마법진에 대고 손가락으로 화면을 5초간 꾹 눌러줘. 보호수가 무럭무럭 자랄거야!',
            src: unoNormalUrl,
          },
          { text: '보호수가 황금씨앗에서 아주 크게 태어났어! ', src: unoHappyUrl },
          { text: '이 보호수는 사진 기능에서 언제든지 볼 수 있을거야. ', src: unoWelcomeUrl },
          {
            text: '그나저나 보호수 관리인이 동네방네 소식을 알리면 증정쿠폰을 준대. ',
            src: unoNormalUrl,
          },
          {
            text: 'AR 신비의 숲을 촬영하고 사진을 공유하면 백미당 아이스크림 100% 획득! ',
            src: unoNormalUrl,
          },
          { text: '숲속 친구들이 너도나도 고맙다고 전해달래. 나도 고마워.', src: unoWelcomeUrl },
          {
            text: "획득한 쿠폰은 보관함에서 확인할 수 있어. 다른 쿠폰도 얻고 싶다면 '2F 휴게공간', 'F&B 중앙', '몽드 이가자'로 와!",
            src: unoNormalUrl,
          },
          { text: '자, 다음은 어디로 갈래?', src: unoNormalUrl },
        ],
        ending: [
          {
            text: '역시 숲은 모든 것을 알고 있어. 집으로 갈 때까지 포탈은 열려 있을 거야. 당신을 위한 거니까. 마음 편히 더 둘러보고 가도 된다는 말이야. 덕분에 망가졌던 숲도 완전히 회복됐어.',
          },
          { text: '고마워. 오늘 함께해서 정말로 즐거웠어. 다음에 또 만날 수 있으면 좋겠다. 안녕.' },
        ],
      },
    ],
  }),
  getters: {
    currentCharacter(state) {
      return state.characters[state.selectCharacterIndex];
    },
  },
  actions: {
    setCharacterIndex(index) {
      this.selectCharacterIndex = index;
    },
  },
});
