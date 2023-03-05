import { Colors } from "./colors";

export type ThemeType = typeof dark;

export const dark = {
  appBg: Colors.bg,
  icons: Colors.black,
  bottomBar: {
    bg: Colors.weirdGrey,
    ic: Colors.white,
    tab: Colors.lightBg,
  },
  text: {
    active: Colors.white,
    inactive: Colors.inactive,
  },
  card: {
    bg: Colors.greyBg,
  },
  button: {
    fill: Colors.acid_arrow,
    border: Colors.acid_arrow,
    hover: Colors.beacon_of_hope,
    disabled_fill: Colors.circle_of_power,
    disabled_border: Colors.shadow_of_moil,
    press_filled: "radial-gradient(circle at center, rgba( 240, 250 , 0, 1 ) 0%, #FFFFFF 100%)",
    filled_text: Colors.ui_black,
    filled_disabled_text: Colors.shadow_of_moil,
    border_text: Colors.acid_arrow,
    border_hover_text: Colors.beacon_of_hope,
    border_disabled_text: Colors.shadow_of_moil,
    press_border: "radial-gradient(circle at center, #7F7F7F 0%, #282828 100%)",
  },
};

export const light: ThemeType = {
  appBg: Colors.bg,
  icons: Colors.black,
  bottomBar: {
    bg: Colors.weirdGrey,
    ic: Colors.white,
    tab: Colors.lightBg,
  },
  text: {
    active: Colors.white,
    inactive: Colors.inactive,
  },
  card: {
    bg: Colors.greyBg,
  },
  button: {
    fill: Colors.acid_arrow,
    border: Colors.acid_arrow,
    hover: Colors.beacon_of_hope,
    disabled_fill: Colors.circle_of_power,
    disabled_border: Colors.shadow_of_moil,
    press_filled:
      "radial-gradient(46.99% 90.38% at 50% 50%, #F0FF00 0%, rgba(240, 255, 0, 0) 100%), #FFFFFF",
    filled_text: Colors.ui_black,
    filled_disabled_text: Colors.shadow_of_moil,
    border_text: Colors.acid_arrow,
    border_hover_text: Colors.beacon_of_hope,
    border_disabled_text: Colors.shadow_of_moil,
    press_border:
      "radial-gradient(50% 50% at 50% 50%, rgba(127, 127, 127, 0) 0%, #7F7F7F 100%)",
  },
};

const theme = dark;
export default theme;
