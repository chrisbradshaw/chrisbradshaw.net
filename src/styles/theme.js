import { createMuiTheme } from "material-ui/styles";
import Color from "color";
import colors from "./colors";
import typography from "../utils/typography";

const theme = createMuiTheme({
  base: {
    colors: {
      background: colors.background,
      text: colors.dark,
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.1)
        .string(),
      accent: colors.accent,
      lines: colors.superLightGray
    },
    sizes: {
      linesMargin: "20px"
    },
    fonts: {
      unstyledFamily: `Arial`,
      styledFamily: "Open Sans",
      styledFonts: "300,400,600"
    }
  },
  info: {
    colors: {
      text: colors.background,
      background: colors.sidebar,
      socialIcons: colors.lightGray,
      socialIconsHover: colors.accent,
      menuLink: colors.lightGray,
      menuLinkHover: colors.accent
    },
    sizes: {
      width: 320,
      headerHeight: 170
    },
    fonts: {
      boxTitleSize: 1.3,
      boxTitleSizeM: 1.5,
      boxTitleSizeL: 1.7
    }
  },
  navigator: {
    colors: {
      background: colors.background,
      postsListItemLink: colors.gray,
      postsListItemLinkHover: colors.accent,
      postsHeader: colors.gray
    },
    sizes: {
      closedHeight: 80,
      postsListItemH1Font: 1.3,
      postsListItemH2Font: 0.8,
      fontIncraseForM: 1.15,
      fontIncraseForL: 1.3
    }
  },
  main: {
    colors: {
      background: colors.background,
      title: colors.black,
      subTitle: colors.black,
      meta: colors.black,
      content: colors.dark,
      footer: colors.black,
      contentHeading: colors.black,
      blockquoteFrame: colors.lightGray,
      link: colors.accent,
      linkHover: colors.dark,
      fbCommentsColorscheme: "light"
    },
    sizes: {
      articleMaxWidth: "50em"
    },
    fonts: {
      title: {
        size: 1.9,
        sizeM: 2.5,
        sizeL: 2.7,
        weight: 600,
        lineHeight: 1.1
      },
      subTitle: {
        size: 1.5,
        sizeM: 1.8,
        sizeL: 1.95,
        weight: 300,
        lineHeight: 1.1
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1.0,
        sizeM: 1.15,
        sizeL: 1.1,
        lineHeight: 1.6
      },
      contentHeading: {
        h2Size: 1.3,
        h3Size: 1.1,
        weight: 600,
        lineHeight: 1.3
      },
      footer: {
        size: 1,
        lineHeight: 1.4
      }
    }
  },
  footer: {
    colors: {
      text: Color(colors.gray)
        .lighten(0.5)
        .string(),
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.2)
        .string()
    },
    fonts: {
      footnote: {
        size: 0.8,
        lineHeight: 1.4
      }
    }
  },
  bars: {
    colors: {
      background: colors.background,
      icon: colors.gray,
      text: colors.gray
    },
    sizes: {
      actionsBar: 60,
      infoBar: 60
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  },
  palette: {
    primary: {
      main: colors.accent
    }
  },
  typography: {
    fontFamily: `Arial, sans-serif`,
    fontSize: 16
  },
  pallete: {
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    }
  }
});

export default theme;
