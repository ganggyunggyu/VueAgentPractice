import { defineStore } from 'pinia';

const IceCream = new URL('@resource/storageBox/IceCream_active.png', import.meta.url).href;
const Coupon = new URL('@resource/storageBox/02_Coupon_active.png', import.meta.url).href;
const Coupon2 = new URL('@resource/storageBox/03_Coupon_active.png', import.meta.url).href;
const Coupon3 = new URL('@resource/storageBox/04_Coupon_active.png', import.meta.url).href;
const Bell = new URL('@resource/storageBox/Bell_Sticker.png', import.meta.url).href;
const Uno = new URL('@resource/storageBox/Uno_Sticker.png', import.meta.url).href;
const Sorina = new URL('@resource/storageBox/sorina_Sticker.png', import.meta.url).href;
const Filter1 = new URL('@resource/icon/frame_01.png', import.meta.url).href;
const Filter2 = new URL('@resource/icon/frame_02.png', import.meta.url).href;
const Filter3 = new URL('@resource/icon/frame_03.png', import.meta.url).href;
const Filter4 = new URL('@resource/icon/frame_04.png', import.meta.url).href;
const normal = new URL('@resource/reward/reward_active.png', import.meta.url).href;
const premium = new URL('@resource/reward/premium_active.png', import.meta.url).href;

export const useEventStore = defineStore('events', {
  state: () => ({
    eventData: {
      event: [
        {
          id: 0,
          src: Uno,
          icon: normal,
          required: 'null',
          title1: '여름의 능력',
          title2: '생기의 에너지 모으기',
          title3: 'B1F 푸드 에비뉴',
          content1: '여름의 능력',
          content2: 'B1F 식품관 입구',
          content3: '푸드 에비뉴 입구',
          content4: '우노 웹스티커 1세트',
          content5: '(서비스 내 사진 촬영해서 확인 및 사용가능)',
        },
        {
          id: 1,
          src: Coupon2,
          icon: premium,
          required: 'null',
          title1: '시간공방',
          title2: '음식 촬영하기',
          title3: 'B1F F&B 시식홀',
          content1: '시간공방',
          content2: 'B1F 에스컬레이터 하행선 앞',
          content3: 'F&B 시식홀',
          content4: 'F&B 5천원 금액할인권',
          content5: '증정장소 : 5F 사은행사장',
        },
        {
          id: 2,
          src: Bell,
          icon: normal,
          required: 'null',
          title1: '봄의 능력',
          title2: '탄생의 에너지 모으기',
          title3: '1F 더웨이브',
          content1: '봄의 능력',
          content2: '1F 오렌지동 에스컬레이터 옆',
          content3: '더 웨이브',
          content4: '벨 웹스티커 1세트',
          content5: '(서비스 내 사진 촬영해서 확인 및 사용가능)',
        },
        {
          id: 3,
          src: Coupon,
          icon: premium,
          required: 'null',
          title1: '옷가게',
          title2: '맘에드는 옷 촬영하기',
          title3: '2F 어그',
          content1: '옷가게',
          content2: '2F 무인포스',
          content3: '어그',
          content4: '패션·잡화 1만원 금액할인권',
          content5: '증정장소 : 5F 사은행사장',
        },
        {
          id: 4,
          src: Sorina,
          icon: normal,
          required: 'null',
          title1: '겨울의 능력',
          title2: '냉기의 에너지 모으기',
          title3: '2F VP존',
          content1: '겨울의 능력',
          content2: '2F 리스트 매장 앞',
          content3: 'VP존',
          content4: '소리나 웹스티커 1세트',
          content5: '(서비스 내 사진 촬영해서 확인 및 사용가능)',
        },
        {
          id: 5,
          src: Coupon3,
          icon: premium,
          required: 'null',
          title1: '남쪽마을',
          title2: '가상 염색 촬영하기',
          title3: '2F 몽드이가자',
          content1: '남쪽마을',
          content2: '2F 오렌지동 에스컬레이터 하행선 앞',
          content3: '몽드이가자',
          content4: '몽드 이가자 1만원 금액할인권',
          content5: '증정장소 : 5F 사은행사장',
        },
        {
          id: 6,
          src: Filter2,
          icon: normal,
          required: 'null',
          title1: '봄의 숲',
          title2: '꿀벌 찾기',
          title3: '3F 부암동 가든',
          content1: '봄의 숲',
          content2: '3F 그린동 에스컬레이터 상행선 앞',
          content3: '부암동 가든',
          content4: '봄의 숲 웹프레임 1종',
          content5: '(서비스 내 사진 촬영해서 확인 및 사용가능)',
        },
        {
          id: 7,
          src: Filter1,
          icon: normal,
          required: 'null',
          title1: '여름의 숲',
          title2: '물길 만들기',
          title3: '3F 보이드',
          content1: '여름의 숲',
          content2: '3F 비비안 매장 앞',
          content3: '보이드',
          content4: '여름의 숲 웹프레임 1종',
          content5: '(서비스 내 사진 촬영해서 확인 및 사용가능)',
        },
        {
          id: 8,
          src: Filter3,
          icon: normal,
          required: 'null',
          title1: '겨울의 숲',
          title2: '우박 모으기',
          title3: '4F VP존',
          content1: '겨울의 숲',
          content2: '4F 프로스펙스 매장 앞',
          content3: 'VP존',
          content4: '겨울의 숲 웹프레임 1종',
          content5: '(서비스 내 사진 촬영해서 확인 및 사용가능)',
        },
        {
          id: 9,
          src: IceCream,
          icon: premium,
          required: 'null',
          title1: '가을의 숲',
          title2: '가을의 숲 촬영하기',
          title3: '5F 휴게공간',
          content1: '가을의 숲',
          content2: '5F 안마의자존',
          content3: '휴게공간',
          content4: '백미당 아이스크림 증정 쿠폰 교환권',
          content5: '증정장소 : 5F 사은행사장',
        },
      ],
    },
  }),
  actions: {
    fetchData() {
      return this.eventData.event || [];
    },
    setEventsData() {
      this.eventData.event.forEach((event, index) => {
        const itemValue = localStorage.getItem(`clearId${index + 1}`);

        if (itemValue) {
          event.required = itemValue;
        }
      });
    },
  },
});
