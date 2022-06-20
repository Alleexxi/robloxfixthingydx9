// ==UserScript==
// @name         dx9 crash fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  version fix
// @author       Alleexxii - Credits to Synctional
// @match        https://www.roblox.com/games/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function Check()
    {
        if(typeof Roblox == "undefined" && typeof Roblox.ProtocolHandlerClientInterface == "undefined" && typeof Roblox.ProtocolHandlerClientInterface.playerChannel == "undefined")
        {
            setTimeout(Check,1);
        }
        else
        {
                if (!(Roblox.ProtocolHandlerClientInterface.playerChannel == ""))
                {
                    Roblox.ProtocolHandlerClientInterface.playerChannel = "";
                }
        }
    }
    Check()
})();
