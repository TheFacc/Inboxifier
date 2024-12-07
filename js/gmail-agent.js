(async () => {
    const src = chrome?.runtime?.getURL('/react/main.js');
    await import(src);
    
    const ensureGroups = async () => {
        const tbodyElement = document.querySelector('.Cp tbody');
        const trElementsWithDateGrouped = document.querySelectorAll('.Cp tbody > .date-group-tr');
    
        if (tbodyElement && trElementsWithDateGrouped.length === 0) {
            window.GmailDateGrouping.addGroupsToTable();
        }
    }
    
    setInterval(ensureGroups, 50);
})();