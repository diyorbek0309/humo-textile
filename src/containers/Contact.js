import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/extra/Header";
import classes from "../components/contact/Contact.css";
import { Paper, Grid, Container } from "@material-ui/core";
import { Typography, TextField, Button, Avatar } from "@material-ui/core";
import EmailRounded from "@material-ui/icons/EmailRounded";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { useFormik } from "formik";
import { contactDataUz, contactDataRu } from "../data";
import axios from "axios";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "Ism kamida 3 ta harf bo'lishi kerak")
    .required("Iltimos, ismingizni kiriting"),
  message: yup.string().required("Iltimos, xabaringizni kiriting"),
  email: yup.string().email("Iltimos, yaroqli email kiriting"),
  phoneNumber: yup.string().required("Iltimos, telefon raqamingizni kiriting"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    margin: "12px 0",
  },
}));

function Contact() {
  const lang = useSelector((state) => state.language);
  const styles = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("/api/sendmail", values)
        .then((res) => {
          if (res.data.result !== "success") {
            setTimeout(() => {
              // resetForm();
              values = {};
            }, 6000);
          } else {
            // setData({
            //   ...data,
            //   sent: true,
            //   buttonText: "Sent",
            //   err: "success",
            // });
            setTimeout(() => {
              // resetForm();
              values = {};
            }, 6000);
          }
        })
        .catch((err) => {
          console.log(err.response.status);
          // setData({
          //   ...data,
          //   buttonText: "Failed to send",
          //   err: "fail",
          // });
        });
    },
  });

  let contactData;
  if (lang === "uz") {
    contactData = { ...contactDataUz };
  } else {
    contactData = { ...contactDataRu };
  }

  return (
    <div className={classes.ContactContainer}>
      <Header header={contactData.header} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={7}>
            <Paper className={classes.Adress}>
              <h2>{contactData.adress.title}</h2>
              <h3>{contactData.adress.text}</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d521.9474168654195!2d60.77183931191306!3d41.46375998771097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1619980473644!5m2!1sen!2s"
                width="600"
                height="450"
                title="Humo - tekstil"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Paper>
          </Grid>
          <Grid item lg={5}>
            <Paper className={classes.Form}>
              <div className={styles.paper}>
                <Avatar className={styles.avatar}>
                  <EmailRounded />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {contactData.contact.title}
                </Typography>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                  <Grid container>
                    <Grid
                      item
                      lg={12}
                      sm={12}
                      style={{
                        padding: "36px",
                      }}
                    >
                      <TextField
                        name="firstName"
                        fullWidth
                        id="firstName"
                        label={contactData.contact.labels[0]}
                        autoFocus
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                        className={styles.input}
                      />
                      <TextField
                        autoComplete="off"
                        fullWidth
                        id="email"
                        label={contactData.contact.labels[1]}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        className={styles.input}
                      />
                      <TextField
                        fullWidth
                        id="phoneNumber"
                        name="phoneNumber"
                        label={contactData.contact.labels[2]}
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phoneNumber &&
                          Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                        }
                      />
                      <TextField
                        label={contactData.contact.labels[3]}
                        multiline
                        rows={2}
                        name="message"
                        fullWidth
                        id="message"
                        className={styles.input}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.message)
                        }
                        helperText={
                          formik.touched.message && formik.errors.message
                        }
                      />
                      <div>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={styles.submit}
                        >
                          {contactData.contact.labels[4]}
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;

// export default function SignUp() {
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />

//       <Box my={3}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
