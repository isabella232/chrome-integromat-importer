import Common from '../bin/Common.mjs'

/**
 * FOOTER LOADER
 */
(async () => {
	document.getElementById("buttonLogout").addEventListener("click", Common.logout);
	document.getElementById("buttonChangeMode").addEventListener("click", Common.demode);
	document.getElementById("currentUser").innerText = `Logged in to Integromat as ${(await Common.getUserData(await Common.getStoredApiKey())).email}.`;
	document.getElementById("openHistory").addEventListener("click", () => {
		location.replace("./history.html");
	})
})();

document.getElementById("getStarted").addEventListener("click", callLanding);

// Redirect current tab to API settings in Integromat and reroute
async function callLanding() {
	const currentTab = await Common.getCurrentTab();
	await Common.setTabUrl(currentTab.id, 'https://zapier.com');
	location.replace("../index.html");
}