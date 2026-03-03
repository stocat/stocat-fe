import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/shared/styles/vars.css";

export const track = recipe({
  base: {
    marginBottom: 6,
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    width: 44,
    height: 24,
    borderRadius: 20,
    padding: 4,
    cursor: "pointer",
    border: "none",
    flexShrink: 0,
    transition: "background-color 0.2s ease",
  },
  variants: {
    currency: {
      dollar: {
        backgroundColor: vars.color.role.subcolor,
      },
      won: {
        backgroundColor: vars.color.role.primary,
      },
    },
  },
  defaultVariants: {
    currency: "dollar",
  },
});

export const thumb = recipe({
  base: {
    position: "absolute",
    top: 2,
    left: 4,
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    transition: "transform 0.2s ease",
  },
  variants: {
    currency: {
      dollar: {
        transform: "translateX(-2px)",
      },
      won: {
        transform: "translateX(18px)",
      },
    },
  },
  defaultVariants: {
    currency: "dollar",
  },
});

export const icon = recipe({
  base: {
    position: "absolute",
    bottom: 4,
    ...vars.typography.body3,
    color: "#FFFFFF",
    lineHeight: 1,
    userSelect: "none",
  },
  variants: {
    currency: {
      dollar: {
        right: 9,
      },
      won: {
        left: 7,
      },
    },
  },
  defaultVariants: {
    currency: "dollar",
  },
});
