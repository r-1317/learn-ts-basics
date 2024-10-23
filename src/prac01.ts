export {};
import dayjs from "dayjs";
import 'dayjs/locale/ja'

dayjs.locale('ja');

const dtFmt = "YYYY/MM/DD(dd) HH:mm";
const deadline: Date = new Date(2024, 10, 2, 11, 45);
const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

const str =
  `期限 ${dayjs(deadline).format(dtFmt)}` +
  `(登録日 ${dayjs(cratedAt).format(dtFmt)})`;
console.log(str);