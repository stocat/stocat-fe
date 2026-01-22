import { vars } from "@/shared/styles/vars.css";
import * as styles from "./ColorTestPage.css";

const colorGroups = [
  {
    name: "Green",
    colors: {
      light: vars.color.green.light,
      "light:hover": vars.color.green.lightHover,
      "light:active": vars.color.green.lightActive,
      normal: vars.color.green.normal,
      "normal:hover": vars.color.green.hover,
      "normal:active": vars.color.green.active,
      dark: vars.color.green.dark,
      "dark:hover": vars.color.green.darkHover,
      "dark:active": vars.color.green.darkActive,
      darker: vars.color.green.darker,
    },
  },
  {
    name: "Blue",
    colors: {
      light: vars.color.blue.light,
      "light:hover": vars.color.blue.lightHover,
      "light:active": vars.color.blue.lightActive,
      normal: vars.color.blue.normal,
      "normal:hover": vars.color.blue.hover,
      "normal:active": vars.color.blue.active,
      dark: vars.color.blue.dark,
      "dark:hover": vars.color.blue.darkHover,
      "dark:active": vars.color.blue.darkActive,
      darker: vars.color.blue.darker,
    },
  },
  {
    name: "BlueGreen",
    colors: {
      light: vars.color.blueGreen.light,
      "light:hover": vars.color.blueGreen.lightHover,
      "light:active": vars.color.blueGreen.lightActive,
      normal: vars.color.blueGreen.normal,
      "normal:hover": vars.color.blueGreen.hover,
      "normal:active": vars.color.blueGreen.active,
      dark: vars.color.blueGreen.dark,
      "dark:hover": vars.color.blueGreen.darkHover,
      "dark:active": vars.color.blueGreen.darkActive,
      darker: vars.color.blueGreen.darker,
    },
  },
  {
    name: "Grey",
    colors: {
      50: vars.color.grey[50],
      100: vars.color.grey[100],
      200: vars.color.grey[200],
      300: vars.color.grey[300],
      400: vars.color.grey[400],
      500: vars.color.grey[500],
      600: vars.color.grey[600],
      700: vars.color.grey[700],
      800: vars.color.grey[800],
      900: vars.color.grey[900],
    },
  },
];

export default function ColorTestPage() {
  return (
    <div className={styles.page}>
      <div className=""> </div>
      {colorGroups.map((group) => (
        <section key={group.name} className={styles.section}>
          <h2 className={styles.title}>{group.name}</h2>

          <div className={styles.grid}>
            {Object.entries(group.colors).map(([label, value]) => (
              <div
                key={label}
                className={styles.colorCard}
                style={{ backgroundColor: value }}
              >
                {label}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
