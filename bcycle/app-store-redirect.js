const OS = {
    Android: {
        url: "https://play.google.com/store/apps/details?id=com.bcycle"
    },
    iOS: {
        url: "https://itunes.apple.com/us/app/bcycle/id371185597"
    },
    Unknown: {
        url: null
    }
};

const userAgent = navigator.userAgent || navigator.vendor || window.opera;

function getOS() {
    return /android/i.test(userAgent) ? OS.Android : (/iPad|iPhone|iPod/i.test(userAgent) ? OS.iOS : OS.Unknown);
}

function redirectIfPossible() {
    const url = getOS().url;

    if (url) {
        window.location.href = url;
    }
}

redirectIfPossible()