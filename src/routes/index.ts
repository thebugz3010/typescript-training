import * as express from "express";
import * as sessionAuth from "../middleware/sessionAuth";

export const register = ( app: express.Application ) => {

    // define a route handler for the default home page
    app.get( "/", ( _req, res ) => {
        res.render( "index" );
    } );

    // define a secure route handler for the login page that redirects to /guitars
    app.post( "/login", ( _req, res ) => {
		//TODO Login
        res.redirect( "/bags" );
    } );

    app.post( "/signup", ( req, res ) => {
		// Validation
		if (!req.body.password) {
			res.render("signup", {error: "Please enter password"});
		} else if (req.body.password != req.body.password2) {
			res.render("signup", {error: "Passwords do not match !"});
		} else if (!req.body.email) {
			res.render("signup", {error: "Please enter email"});
		}
		// Firebase query
		sessionAuth.signUp(req.body.email, req.body.password).then((result: boolean) => {
			if (result) {
				res.redirect( "/bags" );
			} else {
				res.redirect("/");
			}
		})
    });

	app.get( "/signup", ( _req, res ) => {
		res.render("signup", {error: ""});
	});
	
	app.post('/ajax-email', (req, res) => {
		const emailRegexp: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!emailRegexp.test(req.body.email)) {
			res.send('Invalid email address');
		} else {
			res.send('');
		}
	});

    // define a route to handle logout
    app.get( "/logout", ( req: any, res ) => {
        req.logout();
        res.redirect( "/" );
    } );

    // define a secure route handler for the guitars page
    app.get( "/bags", sessionAuth.ensureAuthenticated(), ( _req, res ) => {
        res.render( "bags" );
    } );
};
