/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path = "") {
        return (async () => {
            await browser.url(`https://genflix.co.id/${path}`)
            await browser.fullscreenWindow();
        })()
    }

    get iconProfileLogin(){
        return $('.Header_user-profile-icon__3OpmP');
    }

    get iconProfileLogged(){
        return $('.Header_user-profile-icon__3OpmP:first-child');
    }

    get loginWithEmailButton(){
        return $('span=Login with Email');
    }

    get emailInput(){
        return $('#email');
    }
    
    get passwordInput(){
        return $('#passsword');
    }

    get loginSubmitButton(){
        return $('span=Login')
    }
}
