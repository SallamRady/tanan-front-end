import { LanguagesType } from "../../types/Language";
import getCookie from "./getCookie";

function getLangCookie(): LanguagesType {
  return (getCookie("lang") as LanguagesType) || "ar";
}

export default getLangCookie;
