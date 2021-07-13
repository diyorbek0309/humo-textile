import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/extra/Header";
import classes from "../components/contact/Contact.css";
import {
  Typography,
  TextField,
  Button,
  Avatar,
  makeStyles,
  Paper,
  Grid,
  Container,
} from "@material-ui/core";
import EmailRounded from "@material-ui/icons/EmailRounded";
import * as yup from "yup";
import { useFormik } from "formik";
import { contactDataUz, contactDataRu } from "../data";
import emailjs from "emailjs-com";

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

const Contact = () => {
  const lang = useSelector((state) => state.language);
  const styles = useStyles();

  const sendEmail = (object) => {
    emailjs
      .sendForm(
        "service_framfng",
        "template_7dhs2qw",
        object,
        "user_TrVU4chMz0QlZHT6ffnaD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = document.querySelector("form");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      sendEmail(form);

      alert("Xabaringiz jo'natildi, Raxmat!");
      setSubmitting(false);
      resetForm();
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
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d770.8024954491492!2d60.765143482812825!3d41.465700211543634!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1621059764650!5m2!1sen!2s"
                width="600"
                height="450"
                title="Humo - tekstil"
                allowFullScreen={true}
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
                <form
                  className={styles.form}
                  onSubmit={formik.handleSubmit}
                  name="contact"
                >
                  <input type="hidden" name="contact" value="contact" />
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
                      <div data-netlify-recaptcha="true"></div>
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
};

export default Contact;
