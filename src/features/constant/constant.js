import { getUrl } from "@/shared/lib/getUrl";
import { ref } from "vue";

const bell01 = new URL("@resource/icon/bell_01.png", import.meta.url).href;
const bell02 = new URL("@resource/icon/bell_02.png", import.meta.url).href;
const bell03 = new URL("@resource/icon/bell_03.png", import.meta.url).href;
const bell04 = new URL("@resource/icon/bell_04.png", import.meta.url).href;
const uno01 = new URL("@resource/icon/uno_01.png", import.meta.url).href;
const uno02 = new URL("@resource/icon/uno_02.png", import.meta.url).href;
const uno03 = new URL("@resource/icon/uno_03.png", import.meta.url).href;
const uno04 = new URL("@resource/icon/uno_04.png", import.meta.url).href;
const sorina01 = new URL("@resource/icon/sorina_01.png", import.meta.url).href;
const sorina02 = new URL("@resource/icon/sorina_02.png", import.meta.url).href;
const sorina03 = new URL("@resource/icon/sorina_03.png", import.meta.url).href;
const sorina04 = new URL("@resource/icon/sorina_04.png", import.meta.url).href;

const frame = new URL("@resource/frame/skin_05.png", import.meta.url).href;

const bellCharacter = new URL("@resource/frame/frame_bell.png", import.meta.url)
  .href;

const sorinaCharacter = new URL(
  "@resource/frame/frame_sorina.png",
  import.meta.url
).href;

const unoCharacter = new URL("@resource/frame/frame_uno.png", import.meta.url)
  .href;

export const CHARACTERS = ref([
  { id: 0, src: getUrl(bellCharacter), name: "bell" },
  { id: 1, src: getUrl(sorinaCharacter), name: "uno" },
  { id: 2, src: getUrl(unoCharacter), name: "sorina" },
]);

export const FRAMES = ref([{ id: 0, src: frame, text: "없음" }]);

export const STICKERS = ref([
  { id: 0, src: getUrl(bell04), name: "bellBody" },
  { id: 1, src: getUrl(bell01), name: "bellNormal" },
  { id: 2, src: getUrl(bell02), name: "bellHappy" },
  { id: 3, src: getUrl(bell03), name: "bellWelcome" },
  { id: 4, src: getUrl(uno04), name: "unoBody" },
  { id: 5, src: getUrl(uno01), name: "unoNormal" },
  { id: 6, src: getUrl(uno02), name: "unoHappy" },
  { id: 7, src: getUrl(uno03), name: "unoWelcome" },
  { id: 8, src: getUrl(sorina04), name: "sorinaBody" },
  { id: 9, src: getUrl(sorina01), name: "sorinaNormal" },
  { id: 10, src: getUrl(sorina02), name: "sorinaHappy" },
  { id: 11, src: getUrl(sorina03), name: "sorinaWelcome" },
]);

export const INIT = {
  FRAME: { id: 0, src: getUrl(frame), text: "없음" },
  CHARACTER: { id: 0, src: getUrl(bellCharacter), name: "bell" },
};
