function LoginView() {
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');
	
	//
	// create base UI and root window
	//
	var loginWin = Titanium.UI.createWindow({  
	    title:'Grid',
	    backgroundImage: 'img/bg.jpg',
	    layout: 'vertical'
	});
	
	//
	// Topbar view
	//
	var topBar = Ti.UI.createView ({
		height:'10%',
		width: '100%',
		backgroundColor: '#d95b44'
	});
	
	var back = Ti.UI.createButton ({
		title: 'Back',
		left: '0',
		top: '20px',
		width: '20%',
		height: '100%',
		color: '#fff',
		font: {
			fontSize: '16dp',
			fontWeight: 'bold'
		}
	});
	
	back.addEventListener('click', function(e){
		var welcomeView = require('ui/welcome-view');
		new welcomeView().open();
		
		loginWin.close();
	});
	
	
	loginWin.add(topBar);
	topBar.add(back);
	
	
	//
	// Title
	//
	var title = Ti.UI.createLabel ({
		text: 'Log ind',
		color: '#fff',
		font: {
			fontSize: '35dp',
			fontWeight: 'bold'
		},
		top: '20%'
	});
	
	loginWin.add(title);
	
	//
	// Username field
	//
	var user = Ti.UI.createTextField ({
		width:'70%',
		height: '90px',
		backgroundColor: '#fff',
		borderColor: '#000',
		borderWidth: '1px',
		top: '50px',
		hintText: 'Brugernavn',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	loginWin.add(user);
	
	//
	// Password field
	//
	var pass = Ti.UI.createTextField ({
		width:'70%',
		height: '90px',
		backgroundColor: '#fff',
		borderColor: '#000',
		borderWidth: '1px',
		top: '20px',
		hintText: 'Adgangskode',
		passwordMask: true,
 		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED		
	});
	
	loginWin.add(pass);
	
	//
	// Login button
	//
	var loginBtn = Ti.UI.createButton ({
		width: '70%',
		height: '90px',
		top: '20px',
		backgroundColor: '#d95b44',
		title: 'Log ind',
		textAlign: 'center',
		color: '#fff',
		font: {
			fontSize: '15dp',
			fontWeight: 'bold'
		}
	});
	
	// Authenticate login
	loginBtn.addEventListener('click', function(e) {
		if (user.value === "admin" && pass.value === "1234") {
			alert("success");
		}
		else {
			alert("Forkert adgangskode og/eller brugernavn");
		}
		
	});
	
	loginWin.add(loginBtn);
	
	//
	// Password forgotten button
	//
	var forgotten = Ti.UI.createButton ({
		color: '#fff',
		title: 'Glemt adgangskode?',
		top: '20px'
	});
		
	loginWin.add(forgotten);
	
	//
	// return loginWindow
	//
	return loginWin;
};

module.exports = LoginView;