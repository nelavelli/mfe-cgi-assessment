import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "400px",
    height: "120px",
    marginLeft: 20,
  },
  indeterminateColor: {
    color: "#f50057",
  },
  selectAllText: {
    fontWeight: 500,
  },
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
  noRecords: {
    border: "1px solid #f2f2f2",
    fontSize: 24,
  },
  formControlRadioGroup: {
    margin: theme.spacing(1.5),
    width: 600,
    height: "98px",
  },
  marginAlign: {
    margin: "50px 10px 50px 10px",
  },
  head: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
  },
  default_tab: {
    position: "relative",
    display: "flex",
    float: "left",
    paddingRight: 5,
    fontSize: 18,
  },
  active_tab: {
    position: "relative",
    display: "flex",
    float: "left",
    paddingRight: 5,
    fontSize: 18,
    color: "green",
    backgroundColor: "##f2f2f2",
  },
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: "auto",
    marginLeft: "auto",
    // Full width for (xs, extra-small: 0px or larger) and (sm, small: 600px or larger)
    [theme.breakpoints.up("md")]: {
      // medium: 960px or larger
      width: 920,
    },
    [theme.breakpoints.up("lg")]: {
      // large: 1280px or larger
      width: 1170,
    },
    [theme.breakpoints.up("xl")]: {
      // extra-large: 1920px or larger
      width: 1366,
    },
    background: "#f2f2f2",
    minHeight: "1000px",
    width: "500px",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  transitionDuration: 0,
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  variant: "menu",
};

export { useStyles, MenuProps };
