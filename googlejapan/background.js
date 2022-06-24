var menuItem = {
    "id":"translate",
    "title":"google t!",
    "contexts":["selection"]
};

chrome.contextMenus.create(menuItem);



chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "translate" && clickData.selectionText){
        console.log(1)
        var createData = {
            url:"https://translate.google.cn/?sl=auto&tl=ja&text="+clickData.selectionText+"&op=translate",
            type:"popup",
            top: 5,
            left:5,
            width : 1500,
            height: 1000
        }
        chrome.windows.create(createData)
    }
})