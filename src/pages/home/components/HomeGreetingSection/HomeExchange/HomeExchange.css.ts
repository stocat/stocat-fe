import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = recipe({
  base: {
    marginTop: 8,
    padding: "16px 30px",
    minWidth: 352,
    width: "100%",
    height: 70,
    backgroundColor: vars.color.role.background2,
    overflow: "hidden",
    borderRadius: 16,
  },
  variants: {
    variant: {
      default: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      compact: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      },
      highlight: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        overflow: "hidden",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ContainerVariants = RecipeVariants<typeof container>;

export const icon = recipe({
  base: {
    flexShrink: 0,
  },
  variants: {
    variant: {
      default: {
        width: 28,
        height: 28,
      },
      compact: {
        width: 28,
        height: 28,
      },
      highlight: {
        position: "absolute",
        top: -20,
        left: 0,
        width: 100,
        height: 100,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const defaultIconWrapper = style({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  gap: 16,
});

export const textGroup = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  variants: {
    variant: {
      default: {},
      compact: {},
      highlight: {
        alignItems: "center",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const rateGroup = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const subText = style({
  ...vars.typography.caption3,
  color: vars.color.role.grey,
});

export const title = style({
  ...vars.typography.body3,
  color: vars.color.role.text,
});

export const rate = recipe({
  base: { color: vars.color.role.text },
  variants: {
    variant: {
      default: { ...vars.typography.body4 },
      compact: { ...vars.typography.body3 },
      highlight: { ...vars.typography.body3 },
    },
  },
});
