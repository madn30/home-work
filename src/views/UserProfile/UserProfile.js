import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { connect } from 'react-redux'
import { updateUser } from "../../api/users"
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

function UserProfile({ data, history }) {

  const { user } = data
  const isempty = Object.keys(user).length
  const [submitUser, setSubmitUser] = useState({
    id: isempty ? user._id : "",
    Email: isempty ? user.Email : "",
    FirstName: isempty ? user.FirstName : "",
    LastName: isempty ? user.LastName : "",
    City: isempty ? user.Address.City : "",
    Country: isempty ? user.Address.Country : "",
    PostalCode: isempty ? user.Address.PostalCode : ""
  })
  useEffect(() => {

    if (!isempty) {
      history.push("/")
    }
  }, [])
  const classes = useStyles();
  const submited = async (e) => {

    e.preventDefault()
    console.log(submitUser);
    const response = await updateUser(submitUser)
    console.log({ response });
    history.push("/admin")
  }
  return (

    <div>
      {user &&
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card >
              <form onSubmit={submited}>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                  <p className={classes.cardCategoryWhite}>Complete your profile</p>
                </CardHeader>
                <CardBody>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField

                        onChange={(e) => setSubmitUser({ ...submitUser, Email: e.target.value })}
                        variant="outlined"
                        // required
                        fullWidth
                        name="Email"
                        label="Email"
                        type="Email"
                        id="Email"
                        value={submitUser.Email}

                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        style={{ marginTop: 10 }}
                        onChange={(e) => setSubmitUser({ ...submitUser, FirstName: e.target.value })} variant="outlined"
                        // required
                        fullWidth
                        name="FirstName"
                        label={"FirstName"}
                        type="FirstName"
                        id="FirstName"
                        autoComplete="current-password"
                        value={submitUser.FirstName}

                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        style={{ marginTop: 10 }}
                        onChange={(e) => setSubmitUser({ ...submitUser, LastName: e.target.value })}
                        variant="outlined"
                        required
                        fullWidth
                        name="LastName"
                        label="LastName"
                        type="LastName"
                        id="LastName"
                        autoComplete="current-password"
                        value={submitUser.LastName}

                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        style={{ marginTop: 10 }}
                        onChange={(e) => setSubmitUser({ ...submitUser, City: e.target.value })} variant="outlined"
                        required
                        fullWidth
                        name="City"
                        label="City"
                        type="City"
                        id="City"
                        value={submitUser.City}

                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        style={{ marginTop: 10 }}
                        onChange={(e) => setSubmitUser({ ...submitUser, Country: e.target.value })} variant="outlined"
                        required
                        fullWidth
                        name="Country"
                        label="Country"
                        type="Country"
                        id="Country"
                        value={submitUser.Country}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        style={{ marginTop: 10 }}
                        onChange={(e) => setSubmitUser({ ...submitUser, PostalCode: e.target.value })} variant="outlined"
                        variant="outlined"
                        required
                        fullWidth
                        name="PostalCode"
                        label="PostalCode"
                        type="PostalCode"
                        id="PostalCode"
                        value={submitUser.PostalCode}
                      />
                    </GridItem>

                  </GridContainer>

                </CardBody>
                <CardFooter>
                  <Button type="submit" color="primary">Update Profile</Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
                <Button color="primary" round>
                  Follow
              </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>}
    </div>

  );


}
const mapStateToProps = (state) => {

  return {
    data: state
  }
}
export default connect(mapStateToProps)(UserProfile);