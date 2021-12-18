import React, { useContext, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Font from "react-font";
import Button from "@material-ui/core/Button";
import { Cookies, useCookies } from "react-cookie";
import GoogleLogin from "react-google-login";
import { GoogleOutlined } from "@ant-design/icons";

export default function Navbar(){

    const [cookie, setCookie] = useCookies([""]);
    const cookies = new Cookies();
    const userCookie = cookies.get("userCookie");

    const responseGoogle = (response) => {
        console.log(response);
        let authCookie = {
          email: response.profileObj.email,
          name: response.profileObj.name,
          GID: response.googleId,
        };
        console.log(authCookie);
        setCookie("userCookie", authCookie);
        window.location.reload();
      };
    
      const fail = (res) => {
        console.log("Failed ", res);
      };

    return(
        <div>
        <AppBar position="fixed">
            <Toolbar>
            <Font family="Viga">
                <Button
                size="medium"
                href="/"
                style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Viga",
                    fontStyle: "italic",
                }}
                >
                Car-Reseller
                </Button>
            </Font>

            <div style={{ marginLeft: "auto", marginRight: "20px" }}>

                <Button
                  size="large"
                  href="/cars"
                  style={{ paddingRight: "20px", color: "white" }}
                >
                  Explore Cars
                </Button>

                <Button
                  size="large"
                  href="/sell"
                  style={{ paddingRight: "20px", color: "white" }}
                >
                  Sell car
                </Button>

                <Button
                  size="large"
                  href="/login"
                  style={{ paddingRight: "20px", color: "white" }}
                >
                  Login
                </Button>

                {/* <GoogleLogin
                    //clientId={client_id}
                    buttonText=""
                    onSuccess={responseGoogle}
                    onFailure={fail}
                    size="medium"
                    href="/"
                    render={(renderProps) => (
                    <GoogleOutlined
                        onClick={renderProps.onClick}
                        disabled={false} //disabled={renderProps.disabled}
                        style={{ fontSize: "30px" }}
                    />
                    )}
                >
                 <Link to="/"> </Link> 
              </GoogleLogin> */}
                
            </div>
            </Toolbar>
        </AppBar>
        </div>
    );
}