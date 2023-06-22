import { I18n } from 'i18n-js';
// import { initReactI18next } from "react-i18next";
import * as Localization from 'expo-localization';

const i18n = new I18n({
  en: {
    id: "Id",
    singin: "Singin",
    singup: "Singup",
    password: "Password",
    email: "Email",
    lastname: "Last name",
    firstname: "First name",
    logout: "Log out",
    menu: "Menu",
    booking: "booking",
    holidays: "Holidays",
    chat: "Chat",
  },
  ru: {
    id: "Ин",
    singin: "Singin",
    singup: "Singup",
    logout: "Выйти",
    password: "Password",
    email: "Почта",
    lastname: "Фамилия",
    firstname: "Имя",
    menu: "Меню",
    booking: "Бронирование",
    holidays: "Праздники",
    chat: "Чат",
  },
  kz: {
    id: "Ин",
    singin: "Кіру",
    singup: "Тіркелу",
    logout: "Шығу",
    password: "Құпия сөз",
    email: "Почта",
    lastname: "Тегі",
    firstname: "Аты",
    menu: "Мәзір",
    booking: "Бронь",
    holidays: "Мерекелер",
    chat: "Чат",
  }
});

i18n.defaultLocale = "kz";
i18n.locale = "kz";

export default i18n;