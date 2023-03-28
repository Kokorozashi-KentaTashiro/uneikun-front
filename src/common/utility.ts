// 業務日付取得
const today = new Date(
  Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
);
const year = today.getFullYear().toString().padStart(4, "0");
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");
export const todayStr = `${year}-${month}-${day}`;
export const todayDate = new Date(todayStr);
