import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    color: "#1b67e0",
    border: "1px solid #ced4da",
    fontSize: 14,
    padding: "3px 20px 4px 8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#fff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      color: "#00f",
      backgroundColor: "#1b99ee",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: "5px",
    marginLeft: "10px",
  },
}));

export default function LangSelect() {
  const classes = useStyles();
  const [lang, setLang] = useState("uz");
  const dispatch = useDispatch();
  const defaultLang = localStorage.getItem("lang") || "uz";

  useEffect(() => {
    setLang(defaultLang);
    dispatch({ type: "LANG_CHANGED", payload: defaultLang });
    // eslint-disable-next-line
  }, [defaultLang]);

  const handleChange = (event) => {
    dispatch({ type: "LANG_CHANGED", payload: event.target.value });
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  return (
    <FormControl className={classes.margin}>
      <NativeSelect
        id="demo-customized-select-native"
        onChange={handleChange}
        input={<BootstrapInput />}
        value={lang}
      >
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
      </NativeSelect>
    </FormControl>
  );
}
