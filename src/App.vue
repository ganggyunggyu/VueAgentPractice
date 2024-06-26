<template>
  <router-view> </router-view>
</template>

<script>
  import { onMounted } from 'vue';
  import { setVh } from '@/shared/lib/setVh';

  name: 'App';
  export default {
    setup() {
      const getBrowserName = () => {
        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.match(/chrome|chromium|crios/i)) {
          return 'chrome';
        }
        if (userAgent.match(/firefox|fxios/i)) {
          return 'firefox';
        }
        if (userAgent.match(/safari/i)) {
          return 'safari';
        }
        if (userAgent.match(/opr\//i)) {
          return 'opera';
        }
        if (userAgent.match(/edg/i)) {
          return 'edge';
        }
        if (userAgent.match(/samsung/i)) {
          return 'samsung';
        }
        if (userAgent.match(/kakao/i)) {
          return 'kakao';
        }

        if (userAgent.match(/whale/i)) {
          return 'whale';
        }

        if (userAgent.match(/NAVER/i)) {
          return 'naver';
        }

        return false;
      };

      const getOsName = () => {
        var os;
        const ua = navigator.userAgent;

        if (ua.match(/Win(dows )?NT 6\.0/)) {
          os = 'Windows Vista';
        } else if (ua.match(/Win(dows )?(NT 5\.1|XP)/)) {
          os = 'Windows XP';
        } else if (ua.indexOf('Windows NT 7.0') != -1 || ua.indexOf('Windows NT 6.1') != -1) {
          os = 'Windows 7';
        } else if (ua.indexOf('Windows NT 8.0') != -1 || ua.indexOf('Windows NT 6.2') != -1) {
          os = 'Windows 8';
        } else if (ua.indexOf('Windows NT 8.1') != -1 || ua.indexOf('Windows NT 6.3') != -1) {
          os = 'Windows 8.1';
        } else if (ua.indexOf('Windows NT 10.0') != -1 || ua.indexOf('Windows NT 6.4') != -1) {
          os = 'Windows 10';
        } else if (ua.indexOf('iPad') != -1) {
          os = 'iPad iOS ' + getIosVersion();
        } else if (ua.indexOf('iPhone') != -1) {
          os = 'iPhone iOS ' + getIosVersion();
        } else if (ua.indexOf('iPod') != -1) {
          os = 'iPod iOS ' + getIosVersion();
        } else if (ua.indexOf('Android') != -1) {
          os = 'Android';
        } else if (ua.match(/Win(dows )?NT( 4\.0)?/)) {
          os = 'Windows NT';
        } else if (ua.match(/Mac|PPC/)) {
          os = 'Mac OS';
        } else if (ua.match(/Linux/)) {
          os = 'Linux';
        } else if (ua.match(/(Free|Net|Open)BSD/)) {
          os = RegExp.$1 + 'BSD';
        } else if (ua.match(/SunOS/)) {
          os = 'Solaris';
        } else {
          os = 'Other';
        }

        if (os.indexOf('Windows') != -1) {
          if (ua.indexOf('WOW64') > -1 || ua.indexOf('Win64') > -1) {
            os += ' 64bit';
          } else {
            os += ' 32bit';
          }
        }

        return os;
      };

      const getIosVersion = () => {
        const match = navigator.userAgent.match(/OS (\d+)_/);
        return match ? match[1] : 'unknown';
      };

      const changeBrowser = () => {
        var targetUrl = window.location.host + window.location.pathname + window.location.hash;
        if (navigator.userAgent.match(/iPhone|iPad/i)) {
          //ios
          var visitedAt = new Date().getTime();
          setTimeout(function () {
            if (new Date().getTime() - visitedAt < 2000) {
              location.href = IOS_CHROME_MARKET_URL;
            }
          }, 500);

          setTimeout(function () {
            location.href = 'googlechromes://' + targetUrl;
          }, 0);
        } else {
          //android
          location.href = 'intent://' + targetUrl + '#Intent;scheme=https;package=com.android.chrome;end';
        }
      };
      const checkBrowser = (useChange) => {
        let os = getOsName();
        let browser = getBrowserName();
        console.log(browser, os);
        if (browser === 'naver' || browser === 'samsung' || browser === 'whale') {
          if (browser === 'samsung' || browser === 'whale') {
            alert('본 서비스는 Chrome을 권장합니다. 브라우저 팝업이 나타나면 Chrome을 선택해주세요.');
          }

          changeBrowser();
        }

        var targetUrl = window.location.host + window.location.pathname + window.location.hash;

        if (os.match(/iPhone|iPad|iPod/i)) {
          // 아이폰 접속 경우

          if (browser == 'kakao') {
            if (useChange == true) {
              let hash = window.location.hash;
              hash = hash.slice(2, hash.length);

              router.push({ path: '/ios', query: { hash: hash } });
            }

            return false;
          }
        } else {
          if (browser == 'kakao') {
            // 안드로이드
            // 먼저, 카카오 인앱 브라우저 닫기
            if (useChange == true) {
              if (browser == 'kakao') location.href = 'kakaotalk://inappbrowser/close';

              location.href = 'intent://' + targetUrl + '#Intent;scheme=https;package=com.android.chrome;end';
            }
            return false;
          }
        }

        return true;
      };
      onMounted(() => {
        setVh();
        checkBrowser(true);
      });
    },
  };
</script>
