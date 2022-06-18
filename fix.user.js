// ==UserScript==
// @name         dx9 crash fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  version fix
// @author       Alleexxii
// @match        https://www.roblox.com/games/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (!(Roblox.ProtocolHandlerClientInterface.playerChannel == ""))
    {
     Roblox.ProtocolHandlerClientInterface.playerChannel = "";
    }
})();
