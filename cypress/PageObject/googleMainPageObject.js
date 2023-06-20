class googlePage {
    _acceptCookies = '#L2AGLb > .QS5gu';
    _deniedCookies = '#W0wltc  > .QS5gu';
    _prywatnoscCookies = '#RP3V5c';
    _warunkiCookies = '#HQ1lb';

    acceptCookies (){
        return cy.get(this._acceptCookies);
    }
    deniedCookies(){
        return cy.get(this._deniedCookies);
    }
    prywatnoscCookies (){
        return cy.get(this._prywatnoscCookies);
    }
    warunkiCookies (){
        return cy.get(this._warunkiCookies);
    }

} export default googlePage 
