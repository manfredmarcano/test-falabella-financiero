
export const getBrowserVersion = () => {
    const userAgent = navigator.userAgent;
    let tem: any;
    let matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(matchTest[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        return 'IE ' + (tem[1] || '');
    }

    if (matchTest[1] === 'Chrome'){
        tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) {
            return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
    }

    matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];

    tem = userAgent.match(/version\/(\d+)/i);
    if (tem != null) {
        matchTest.splice(1, 1, tem[1]);
    }

    return matchTest.join(' ');

};

export const getOS = () => {
    const appVersion = navigator.appVersion;

    if (appVersion.indexOf('Win') !== -1) {
        return 'Windows';
    } else if (appVersion.indexOf('Mac') !== -1) {
        return 'MacOS';
    } else if (appVersion.indexOf('X11') !== -1) {
        return 'UNIX';
    } else if (appVersion.indexOf('Linux') !== -1) {
        return 'Linux';
    } else {
        return 'Unknown OS';
    }
};
