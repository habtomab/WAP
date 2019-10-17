
"use strict";

window.onload = function() {
    var accountInfoList = [];
    var accountFactory = (function() {
        var account = function() {
            var accountName;
            var balance;
            function setAccountName(accName) {accountName = accName;}
            function setBalance(deposit) {balance = deposit;}
            function getAccountName() {return accountName;}
            function getBalance() {return balance;}
            return {
                setAccountInfo: function(name,deposit) { 
                                    setAccountName(name); 
                                    setBalance(deposit);
                                },
                info: function() {
                    return "Saving Account Name: " + getAccountName() + " Balance: " + getBalance();
                }
            };
        };
        return {
            createAccount: function(accName,deposit) {
                var acc = account();
                acc.setAccountInfo(accName,deposit);
                return acc;
            }
        };
    })();
    
    function displayAccounts() {
        document.getElementById("textAccounts").value = (function() {
            var displayText = "";
            for (const acc of accountInfoList) {
                displayText += acc.info() + "\n";
            }
            return displayText;
        })();
    }
    
    document.getElementById("btnCreate").onclick = function() {
        let accName = document.getElementById("txtAccountName").value;
        let deposit = document.getElementById("txtDeposit").value;
        accountInfoList.push(accountFactory.createAccount(accName,deposit));
        displayAccounts();
    };
};


