import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "./colors";

const cytelTheme = createMuiTheme({
  palette: {
    primary: { main: colors.primaryBlue },
    secondary: { main: colors.gray80 },
    text: { primary: colors.gray100 }
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    colorTextPrimary: colors.textPrimary,
    useNextVariants: true,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    body1: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0.5px"
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.25px"
    },
    subtitle1: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px"
    },
    h1: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "-0.4px"
    },
    h2: {
      fontSize: "18px",
      lineHeight: "22px",
      letterSpacing: "0.15px"
    },
    h6: {
      fontSize: "20px",
      lineHeight: "24px"
    }
  },
  overrides: {
    MuiDivider: {
      root: {
        margin: "20px 0px"
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: colors.primarySurface,
        color: colors.gray80
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
      }
    },
    MuiContainer: {
      maxWidthLg: {
        maxWidth: "1200px!important"
      }
    },
    MuiToolbar: {
      gutters: {
        padding: "0!important"
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: 14
      }
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(15px, 15px) scale(1)"
      }
    },
    MuiDivider: {
      root: {
        margin: "20px 0px"
      }
    },
    MuiAppBar: {
      root: {
        position: "absolute",
        width: "100%",
        height: "64px",
        left: "0px",
        top: "0px"
      },
      colorPrimary: {
        background: colors.headerBgclr
      }
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: "0px !important",
        paddingRight: "0px !important"
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: "#00529C"
      }
    },
    MuiCardContent: {
      root: {}
    },
    MuiLink: {
      root: {
        color: "blue",
        cursor: "pointer"
      }
    },
    MuiTableCell: {
      sizeSmall: {
        position: "static",
        height: "16px",
        left: "0px",
        top: "calc(50% - 16px/2)",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.4px",
        color: "#656565",
        flex: "none",
        order: "0",
        alignSelf: "center",
        margin: "4px 0px"
      },
      body: {
        position: "absolute",
        height: "20px",
        left: "16px",
        top: "calc(50% - 20px/2)",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.25px",
        color: "#1A1A1A"
      }
    },
    MuiFab: {
      root: {
        width: "40px",
        height: "40px",
        backgroundColor: "#00529C",
        color: "#FFFFFF",
        "&:hover": {
          width: "40px",
          height: "40px",
          backgroundColor: "#00529C",
          color: "#FFFFFF"
        }
      },

    },
    MuiPaper: {
      elevation4: { boxShadow: "none", borderBottom: "1px solid rgba(0, 82, 156, 0.3)" },
      rounded: { border: "1px solid rgba(0, 82, 156, 0.3)" },
      elevation1: { boxShadow: "none" }
    },
    MuiTableContainer: {
      root: {
        border: "1px solid #F1F5F8",
        boxShadow: "none"
      }
    }
  }
});

export default cytelTheme;
