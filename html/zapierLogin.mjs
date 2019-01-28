import Common from '../bin/Common.mjs'

/**
 * FOOTER LOADER
 */
(async () => {
	document.getElementById("buttonLogout").addEventListener("click", Common.logout);
	document.getElementById("buttonChangeMode").addEventListener("click", Common.demode);
	document.getElementById("currentUser").innerText = `Currently logged in as ${(await Common.getUserData(await Common.getStoredApiKey())).name}.`;
	document.getElementById("currentMode").innerText = `Current import mode is ${await Common.getMode()}.`
})();
