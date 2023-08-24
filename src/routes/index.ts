import * as express from "express";
import * as sessionAuth from "../middleware/sessionAuth";

export const register = ( app: express.Application ) => {

    // define a route handler for the default home page
    app.get( "/", ( req, res ) => {
        res.render( "index" );
    } );

    // define a secure route handler for the login page that redirects to /guitars
    app.post( "/login", ( req, res ) => {
		//TODO Login
        res.redirect( "/bags" );
    } );

    app.post( "/signup", ( req, res ) => {
		if (sessionAuth.signUp(req.body.email, req.body.password)) {
			res.redirect( "/bags" );
		} else {
			res.redirect("/")
		}
    } );

	app.get( "/signup", ( req, res ) => {
		res.render( "signup" );
	});

    // define a route to handle logout
    app.get( "/logout", ( req: any, res ) => {
        req.logout();
        res.redirect( "/" );
    } );

    // define a secure route handler for the guitars page
    app.get( "/bags", sessionAuth.ensureAuthenticated(), ( req, res ) => {
		req
        res.render( "bags" );
    } );
};
