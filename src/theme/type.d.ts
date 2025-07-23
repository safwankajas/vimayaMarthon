// mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    zenHeading: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    zenHeading?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    zenHeading: true;
  }
}
