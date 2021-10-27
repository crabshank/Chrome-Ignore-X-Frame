try{	
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info)=>{
		console.log(info.request);
});
}catch(e){;}