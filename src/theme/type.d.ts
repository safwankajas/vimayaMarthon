// mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    zenHeading: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    zenHeadingh1?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    zenHeadingh1: true;
  }
}
