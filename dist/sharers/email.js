!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e=e||self).ShareThisViaEmail={})}(this,(function(e){"use strict";e.getShareUrl=function(e,o){return"mailto:?body="+encodeURIComponent(e)+"%0a%0a"+encodeURIComponent(o)},e.name="email",e.render=function(e,o,n){return'<a href="'+this.getShareUrl(e,n)+'" rel="noopener nofollow noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -9 96 96"><path d="M1 12c-.553 0-1 .447-1 1v52c0 .553.447 1 1 1h76c.553 0 1-.447 1-1V13c0-.553-.447-1-1-1H1zm68.816 6L39 40.594 8.184 18h61.632zM72 60H6V23.84l29.452 21.593 3.548 2.6 3.548-2.6L72 23.838V60z" fill="currentcolor"/></svg></a>'},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=email.js.map
