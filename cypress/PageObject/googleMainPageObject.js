class googlePage {
    _inputSelector = '#APjFqb';
    _cookiesAccept = '#W0wltc  > .QS5gu';
   
    getInput (){
        return cy.get(this._inputSelector);
    }
    getCookies(){
        return cy.get(this._cookiesAccept);
    }

} export default googlePage 
