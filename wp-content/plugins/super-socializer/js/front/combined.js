theChampFBKey = typeof theChampFBKey != 'undefined' ? theChampFBKey : '', theChampFBLang = typeof theChampFBLang != 'undefined' ? theChampFBLang : theChampDefaultLang, theChampFbIosLogin = typeof theChampFbIosLogin != 'undefined' ? theChampFbIosLogin : 0;
// general.js
function theChampPopup(e){window.open(e,"_blank","height=420,width=620,left=390,top=105,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status")}function theChampStrReplace(e,t,n){for(var r=0;r<e.length;r++){n=n.replace(new RegExp(e[r],"g"),t[r])}return n}function theChampCallAjax(e){if(typeof jQuery!="undefined"){e()}else{theChampGetScript("https://code.jquery.com/jquery-latest.min.js",e)}}function theChampGetScript(e,t){var n=document.createElement("script");n.src=e;var r=document.getElementsByTagName("head")[0],i=false;n.onload=n.onreadystatechange=function(){if(!i&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){i=true;t();n.onload=n.onreadystatechange=null;r.removeChild(n)}};r.appendChild(n)}function theChampGetElementsByClass(e,t){if(e.getElementsByClassName){return e.getElementsByClassName(t)}else{return function(e,t){if(t==null){t=document}var n=[],r=t.getElementsByTagName("*"),i=r.length,s=new RegExp("(^|\\s)"+e+"(\\s|$)"),o,u;for(o=0,u=0;o<i;o++){if(s.test(r[o].className)){n[u]=r[o];u++}}return n}(t,e)}}if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}
function theChampGetCookie(e){for(var t=e+"=",a=document.cookie.split(";"),h=0;h<a.length;h++){for(var i=a[h];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null}
// common.js
function theChampLoginPopup(e){if("undefined"!=typeof theChampSameTabLogin&&theChampSameTabLogin==1){location.href=e}else{window.open(e,"_blank","height=520,width=770,left=315,top=80,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status")}}function theChampLoadingIcon(){jQuery(".the_champ_login_container").html('<img id="the_champ_loading_image" src="'+theChampLoadingImgPath+'" />')}function theChampInitiateLogin(e,a){var t=jQuery(e).parents("div.the_champ_login_container").find(".heateor_ss_social_login_optin");if(0==t.length||jQuery(t).is(":checked")){"facebook"==a?theChampLoginPopup(theChampFacebookAuthUrl):"foursquare"==a?theChampLoginPopup(theChampFoursquareAuthUrl):"mailru"==a?theChampLoginPopup(theChampMailruAuthUrl):"dropbox"==a?theChampLoginPopup(theChampDropboxAuthUrl):"disqus"==a?theChampLoginPopup(theChampDisqusAuthUrl):"stackoverflow"==a?theChampLoginPopup(theChampStackoverflowAuthUrl):"discord"==a?theChampLoginPopup(theChampDiscordAuthUrl):"amazon"==a?theChampLoginPopup(theChampAmazonAuthUrl):"reddit"==a?theChampLoginPopup(theChampRedditAuthUrl):"github"==a?theChampLoginPopup(theChampGithubAuthUrl):"spotify"==a?theChampLoginPopup(theChampSpotifyAuthUrl):"dribbble"==a?theChampLoginPopup(theChampDribbbleAuthUrl):"yandex"==a?theChampLoginPopup(theChampYandexAuthUrl):"odnoklassniki"==a?theChampLoginPopup(theChampOdnoklassnikiAuthUrl):"kakao"==a?theChampLoginPopup(theChampKakaoAuthUrl):"line"==a?theChampLoginPopup(theChampLineAuthUrl):"microsoft"==a?theChampLoginPopup(theChampLiveAuthUrl):"twitch"==a?theChampLoginPopup(theChampTwitchAuthUrl):"steam"==a?theChampLoginPopup(theChampSteamAuthUrl):"x"==a?theChampLoginPopup(theChampTwitterAuthUrl):("linkedin"==a&&theChampLoginPopup(theChampLinkedinAuthUrl),"google"==a?theChampLoginPopup(theChampGoogleAuthUrl):"vkontakte"==a?theChampLoginPopup(theChampVkontakteAuthUrl):"youtube"==a?theChampLoginPopup(theChampYoutubeAuthUrl):"wordpress"==a?theChampLoginPopup(theChampWordpressAuthUrl):"yahoo"==a?theChampLoginPopup(theChampYahooAuthUrl):"instagram"==a&&theChampLoginPopup(theChampInstagramAuthUrl))}else t.length>0&&jQuery(t).parent().css("color","red")}function theChampDisplayLoginIcon(e,t){if("undefined"!=typeof jQuery)for(var a=0;a<t.length;a++)jQuery("."+t[a]).css("display","block");else for(a=0;a<t.length;a++)for(var h=theChampGetElementsByClass(e,t[a]),i=0;i<h.length;i++)h[i].style.display="block"}function theChampValidateEmail(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function the_champ_save_email(e){var t=document.getElementById("the_champ_email").value.trim(),a=document.getElementById("the_champ_confirm_email").value.trim();return"save"!=e.id||theChampValidateEmail(t)?t!=a?(document.getElementById("the_champ_error").innerHTML="Email addresses do not match",void jQuery("#TB_ajaxContent").css("height","auto")):void theChampCallAjax(function(){theChampSaveEmail(e.id,t)}):(document.getElementById("the_champ_error").innerHTML=theChampEmailPopupErrorMsg,void jQuery("#TB_ajaxContent").css("height","auto"))}function theChampSaveEmail(e,t){document.getElementById("the_champ_error").innerHTML='<img src="'+theChampLoadingImgPath+'" />',jQuery.ajax({type:"POST",dataType:"json",url:theChampAjaxUrl,data:{action:"the_champ_save_email",elemId:e,email:t,id:theChampEmailPopupUniqueId},success:function(e){window.history.pushState({html:"html",pageTitle:"page title"},"","?done=1"),1==e.status&&e.message.response&&"success"==e.message.response?location.href=e.message.url:1==e.status&&"success"==e.message?location.href=theChampRegRedirectionUrl:0==e.status&&"inactive"==e.message&&""!=e.url?location.href=e.url:1==e.status&&"cancelled"==e.message?tb_remove():1==e.status&&"verify"==e.message?document.getElementById("TB_ajaxContent").innerHTML="<strong>"+theChampEmailPopupVerifyMessage+"</strong>":0==e.status&&(document.getElementById("the_champ_error").innerHTML=e.message,jQuery("#TB_ajaxContent").css("height","auto"))},error:function(e,t,a){location.href=decodeURIComponent(theChampRedirectionUrl)}})}function theChampCapitaliseFirstLetter2(e){return e.charAt(0).toUpperCase()+e.slice(1)}if(void 0===theChampLinkingRedirection)var theChampLinkingRedirection="";theChampVerified&&theChampLoadEvent(function(){tb_show(theChampPopupTitle,theChampAjaxUrl)}),theChampEmailPopup&&theChampLoadEvent(function(){tb_show(theChampEmailPopupTitle,theChampEmailAjaxUrl)});var theChampCommentFormLogin=!1;
// sdk.js
function theChampInitiateFB(){FB.init({appId:theChampFBKey,channelUrl:"//"+theChampSiteUrl+"/channel.html",status:!0,cookie:!0,xfbml:!0,version:"v19.0"})}window.fbAsyncInit=function(){theChampInitiateFB(),theChampFbIosLogin&&theChampAuthUserFB(),"function"==typeof theChampDisplayLoginIcon&&theChampDisplayLoginIcon(document,["theChampFacebookButton","theChampFacebookLogin"]),("undefined"!=typeof theChampCommentNotification&&1==theChampCommentNotification||"undefined"!=typeof theChampHeateorFcmRecentComments&&1==theChampHeateorFcmRecentComments)&&FB.Event.subscribe("comment.create",function(e){void 0!==e.commentID&&e.commentID&&("undefined"!=typeof theChampCommentNotification&&1==theChampCommentNotification&&jQuery.ajax({type:"POST",dataType:"json",url:theChampSiteUrl+"/index.php",data:{action:"the_champ_moderate_fb_comments",data:e},success:function(e,t,n){}}),"undefined"!=typeof theChampHeateorFcmRecentComments&&1==theChampHeateorFcmRecentComments&&jQuery.ajax({type:"POST",dataType:"json",url:theChampSiteUrl+"/index.php",data:{action:"heateor_fcm_save_fb_comment",data:e},success:function(e,t,n){}}))}),"undefined"!=typeof theChampFbLikeMycred&&theChampFbLikeMycred&&(FB.Event.subscribe("edge.create",function(e){heateorSsmiMycredPoints("Facebook_like_recommend","",e||"")}),FB.Event.subscribe("edge.remove",function(e){heateorSsmiMycredPoints("Facebook_like_recommend","",e||"","Minus point(s) for undoing Facebook like-recommend")})),"undefined"!=typeof theChampSsga&&theChampSsga&&(FB.Event.subscribe("edge.create",function(e){heateorSsgaSocialPluginsTracking("Facebook","Like",e||"")}),FB.Event.subscribe("edge.remove",function(e){heateorSsgaSocialPluginsTracking("Facebook","Unlike",e||"")}))},function(e){var t,n="facebook-jssdk",o=e.getElementsByTagName("script")[0];e.getElementById(n)||((t=e.createElement("script")).id=n,t.async=!0,t.src="//connect.facebook.net/"+theChampFBLang+"/sdk.js",o.parentNode.insertBefore(t,o))}(document);
// commenting.js
function theChampRenderFBCommenting(){var e=typeof theChampCommentingId!='undefined'?document.getElementById(theChampCommentingId):'';if(e){var t=[],n=[],a=[];t.wordpress='<div style="clear:both"></div>'+e.innerHTML,theChampFBCommentingContent=("undefined"!=typeof theChampFacebookCommentsNotifierOptinText?'<div class="heateor_ss_fb_comments_notifier_optin_container"><label><input type="checkbox" class="heateor_ss_fb_comments_notifier_optin" value="1" />'+theChampFacebookCommentsNotifierOptinText+"</label></div>":"")+("undefined"!=typeof theChampFacebookCommentsOptinText?'<div class="heateor_ss_fb_comments_optin_container"><label><input type="checkbox" class="heateor_ss_fb_comments_optin" value="1" />'+theChampFacebookCommentsOptinText+'</label></div>':"")+'<div class="fb-comments" data-href="'+theChampFBCommentUrl+'"',""!=theChampFBCommentColor&&(theChampFBCommentingContent+=' data-colorscheme="'+theChampFBCommentColor+'"'),""!=theChampFBCommentNumPosts&&(theChampFBCommentingContent+=' data-numposts="'+theChampFBCommentNumPosts+'"'),theChampFBCommentingContent+=' data-width="'+theChampFBCommentWidth+'"',""!=theChampFBCommentOrderby&&(theChampFBCommentingContent+=' data-order-by="'+theChampFBCommentOrderby+'"'),theChampFBCommentingContent+=" ></div>",t.fb=theChampFBCommentingContent,n.fb="theChampInitiateFB();",t.googleplus="<div class='g-comments' data-href='"+theChampGpCommentsUrl+"' "+(theChampGpCommentsWidth?"data-width='"+theChampGpCommentsWidth+"'":"")+" data-first_party_property='BLOGGER' data-view_type='FILTERED_POSTMOD' ></div>",n.googleplus=" ",a.googleplus="//apis.google.com/js/plusone.js",t.disqus='<div class="embed-container clearfix" id="disqus_thread">'+(""!=theChampDisqusShortname?theChampDisqusShortname:'<div style="font-size: 14px;clear: both;">Specify a Disqus shortname in Super Socializer &gt; Social Commenting section in admin panel</div>')+"</div>",n.disqus="var disqus_shortname = '"+theChampDisqusShortname+"';(function(d) {var dsq = d.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js'; (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(dsq); })(document);";var o='<div class="theChampCommentingTabs"><p id="theChampReplyTitle" style="margin-bottom:15px" class="comment-reply-title">'+theChampScLabel+"</p><ul>";theChampScEnabledTabs=theChampScEnabledTabs.split(",");for(var i=0;i<theChampScEnabledTabs.length;i++){o+='<li id="theChampTabs-'+i+'-li" onclick="',o+="this.setAttribute('class', 'theChampSelectedTab');document.getElementById('theChampTabs-"+i+"').style.display='block';","fb"==theChampScEnabledTabs[i]&&(o+="theChampInitiateFB();");for(var m=0;m<theChampScEnabledTabs.length;m++)m!=i&&(o+="document.getElementById('theChampTabs-"+m+"-li').setAttribute('class', '');document.getElementById('theChampTabs-"+m+"').style.display='none';");o+='">',o+=theChampScTabLabels[theChampScEnabledTabs[i]],o+="</li>"}for(o+="</ul>",i=0;i<theChampScEnabledTabs.length;i++)o+='<div id="theChampTabs-'+i+'" ><div style="clear: both"></div>'+t[theChampScEnabledTabs[i]]+"</div>";o+="</div>",e.innerHTML=o;var h=document.getElementById("reply-title");for(h&&h.remove(),i=0;i<theChampScEnabledTabs.length;i++)if(n[theChampScEnabledTabs[i]]){var s=document.createElement("script");a[theChampScEnabledTabs[i]]&&s.setAttribute("src",a[theChampScEnabledTabs[i]]),s.innerHTML=n[theChampScEnabledTabs[i]],document.getElementById("theChampTabs-"+i).appendChild(s)}for(document.getElementById("theChampTabs-0-li").setAttribute("class","theChampSelectedTab"),i=1;i<theChampScEnabledTabs.length;i++)document.getElementById("theChampTabs-"+i).style.display="none";null!=theChampGetCookie("heateorSsSLOptin")&&jQuery("input.heateor_ss_social_login_optin").length>0&&jQuery("input.heateor_ss_social_login_optin").prop("checked",!0),jQuery("input.heateor_ss_social_login_optin").click(function(){if(jQuery(this).is(":checked")){if(null==theChampGetCookie("heateorSsSLOptin")){}}else document.cookie="heateorSsSLOptin=; expires=Fri, 02 Jan 1970 00:00:00 UTC; path=/"}),"undefined"!=typeof theChampFacebookCommentsOptinText&&(null!=heateorFcmGetCookie("heateorFcmOptin")&&jQuery("input.heateor_ss_fb_comments_optin").prop("checked",!0),jQuery("input.heateor_ss_fb_comments_optin").click(function(){if(jQuery(this).is(":checked")){if(heateorFcmOptin=1,null==heateorFcmGetCookie("heateorFcmOptin")){}}else heateorFcmOptin=0,document.cookie="heateorFcmOptin=; expires=Fri, 02 Jan 1970 00:00:00 UTC; path=/"})),"undefined"!=typeof theChampFacebookCommentsNotifierOptinText&&(null!=heateorFcnGetCookie("heateorFcnOptin")&&jQuery("input.heateor_ss_fb_comments_notifier_optin").prop("checked",!0),jQuery("input.heateor_ss_fb_comments_notifier_optin").click(function(){if(jQuery(this).is(":checked")){if(heateorFcnOptin=1,null==heateorFcnGetCookie("heateorFcnOptin")){}}else heateorFcnOptin=0,document.cookie="heateorFcnOptin=; expires=Fri, 02 Jan 1970 00:00:00 UTC; path=/"}))}}theChampLoadEvent(function(){theChampRenderFBCommenting()});
// sharing.js
function heateorSsDetermineWhatsappShareAPI(a){if(a)return-1!=navigator.userAgent.indexOf("Mobi")?"api.whatsapp.com":"web.whatsapp.com";var p=jQuery("i.theChampWhatsappBackground a").attr("href");return void 0!==p?-1!=navigator.userAgent.indexOf("Mobi")?(jQuery("i.theChampWhatsappBackground a").attr("href",p.replace("web.whatsapp.com","api.whatsapp.com")),"api.whatsapp.com"):(jQuery("i.theChampWhatsappBackground a").attr("href",p.replace("api.whatsapp.com","web.whatsapp.com")),"web.whatsapp.com"):""}
/**
 * Show more sharing services popup
 */
function theChampMoreSharingPopup(elem, postUrl, postTitle, twitterTitle){
  var shareContainer = elem.parentElement.parentElement.parentElement;
  postUrl = encodeURIComponent(postUrl);
  concate = '</ul></div><div class="footer-panel"><p></p></div></div>';
  var theChampMoreSharingServices = {
    facebook: {
      background_color: "#0765FE",
    title: "Facebook",
    redirect_url: "https://www.facebook.com/sharer.php?u=" + postUrl + "&t=" + postTitle + "&v=3",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16Z"></path></svg>'
    },
    mastodon: {
      background_color: "#2b90d9", 
    title: "Mastodon",
    bookmarklet_url: "https://mastodon.social/share?text=" + (twitterTitle ? twitterTitle : postTitle) + " " + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 12c0-5.12-3.35-6.62-3.35-6.62C22 4.56 19.05 4.23 16 4.21c-3 0-5.92.35-7.61 1.12C8.36 5.33 5 6.83 5 12v4c.12 5 .92 9.93 5.54 11.16a17.67 17.67 0 005.44.6 10.88 10.88 0 004.18-.95l-.09-1.95a13.36 13.36 0 01-4.07.54c-2.12-.07-4.37-.23-4.71-2.84a5.58 5.58 0 01-.05-.73 27.46 27.46 0 004.73.63 26.76 26.76 0 004.68-.28c3-.35 5.53-2.17 5.85-3.83A39.25 39.25 0 0027 12zm-3.95 6.59h-2.46v-6c0-1.27-.53-1.91-1.6-1.91s-1.77.76-1.77 2.27v3.29h-2.44v-3.35c0-1.51-.59-2.27-1.77-2.27s-1.6.64-1.6 1.91v6H9v-6.18a4.49 4.49 0 011-3 3.39 3.39 0 012.63-1.12 3.17 3.17 0 012.84 1.44l.61 1 .61-1a3.17 3.17 0 012.84-1.44 3.39 3.39 0 012.63 1.12 4.49 4.49 0 011 3z" fill="#fff"></path></svg>'
    },
    twitter: {
      background_color: "#55acee", 
      title: "Twitter",
      redirect_url: "https://twitter.com/intent/tweet?text=" + (twitterTitle ? twitterTitle : postTitle) + " " + postUrl,
      svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-4 -4 39 39"><path d="M28 8.557a9.913 9.913 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.738 9.738 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.893 9.893 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z" fill="#fff"></path></svg>'
    },
    x: {
      background_color: "#2a2a2a", 
      title: "X",
      redirect_url: "https://twitter.com/intent/tweet?text=" + (twitterTitle ? twitterTitle : postTitle) + " " + postUrl,
      svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M21.751 7h3.067l-6.7 7.658L26 25.078h-6.172l-4.833-6.32-5.531 6.32h-3.07l7.167-8.19L6 7h6.328l4.37 5.777L21.75 7Zm-1.076 16.242h1.7L11.404 8.74H9.58l11.094 14.503Z"></path></svg>'
    },
    teams: {
      background_color: "#5059c9",
    title: "Teams",
    redirect_url: "https://teams.microsoft.com/share?href=" + postUrl + "&msgText=" + (twitterTitle ? twitterTitle : postTitle),
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M24.63 12.14a2.63 2.63 0 1 0 0-5.26 2.63 2.63 0 0 0 0 5.26Zm2.25.74h-3.29c.18.34.32.72.32 1.12v7.13c0 .74-.11 1.47-.34 2.14 2.01.36 3.94-.93 4.34-2.93.04-.25.09-.52.09-.76V14c0-.63-.52-1.12-1.12-1.12ZM16.75 4.87a3.515 3.515 0 0 0-3.49 3.87h1.73c1.19 0 2.14.97 2.14 2.14v.97c1.75-.2 3.1-1.69 3.1-3.49a3.48 3.48 0 0 0-3.49-3.49h.01Zm4.86 8.01h-4.48v8.01c0 1.19-.97 2.14-2.14 2.14h-3.94c.04.11.07.25.11.36.11.26.22.52.38.74a6.004 6.004 0 0 0 5.2 2.99c3.31 0 5.98-2.68 5.98-6.01v-7.14c0-.61-.49-1.09-1.12-1.09h.01Z"></path><path fill="#fff" d="M15 9.86H4.99c-.56 0-.99.45-.99.99v10.02c0 .56.45.99.99.99h10.02c.56 0 .99-.45.99-.99v-9.99c-.01-.56-.44-1.02-1-1.02Zm-2.02 3.74h-2.23v6.01H9.28V13.6H7.03v-1.49h5.96v1.49h-.02.01Z"></path></svg>'
    },
    Google_Translate: {
      background_color: "#528ff5",
    title: "Google Translate",
    redirect_url: "https://translate.google.com/translate?js=n&sl=auto&tl=en&u=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" fill-rule="evenodd" d="M5.597 4C4.719 4 4 4.719 4 5.599v16.279c0 .878.719 1.597 1.597 1.597h10l1.477 4.53h9.33c.877 0 1.596-.707 1.596-1.573v-16.04c0-.866-.719-1.573-1.597-1.573h-9.93L14.927 4h-9.33Zm15.58 19.475-3.45 3.808h8.676a.88.88 0 0 0 .62-.254.825.825 0 0 0 .256-.597v-16.04a.834.834 0 0 0-.255-.597.881.881 0 0 0-.62-.255h-9.698l1.595 4.968h2.204v-1.52h1.472v1.52h4.532v.94h-.002v-.002h-2.035c-.197 1.252-1.13 2.62-2.048 3.708.685.735 1.618 1.651 2.89 2.806l-.772.772a52.625 52.625 0 0 1-2.818-2.806c-.71.752-1.277 1.24-1.277 1.24l-.375-1.173s.407-.325.943-.873c-1.65-1.933-1.7-2.611-1.7-2.611h1.221s.005.452 1.18 1.844c.665-.796 1.345-1.82 1.653-2.905h-4.766l2.578 8.027h-.005Zm-8.246-9.12c-.06.728-.683 1.807-2.191 1.807-1.306 0-2.364-1.08-2.364-2.41 0-1.329 1.058-2.408 2.364-2.408.743 0 1.238.322 1.522.584l.99-.952a3.632 3.632 0 0 0-2.512-.977 3.753 3.753 0 0 0-3.751 3.752c0 2.07 1.68 3.75 3.751 3.75 2.169 0 3.602-1.521 3.602-3.669a3.3 3.3 0 0 0-.089-.764h-3.51v1.284l2.188.002Z" clip-rule="evenodd"></path></svg>'
    },
    linkedin: {
      background_color: "#0077b5",
    title: "Linkedin",
    redirect_url: "https://www.linkedin.com/sharing/share-offsite/?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path d="M6.227 12.61h4.19v13.48h-4.19V12.61zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187V12.61z" fill="#fff"></path></svg>'

    },
    parler: {
      background_color: "#892E5E",
    title: "Parler",
    redirect_url: "https://parler.com/new-post?message=" + postTitle + "&url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" version="1.1" width="100%" height="100%" viewBox="-245 -140 947 800" xmlns="http://www.w3.org/2000/svg"><path d="M200 300V249.7H300.1C327.6 249.7 350 227.4 350 199.8C350 172.3 327.7 149.9 300.1 149.9H0C0 67.2 67.2 0 150 0H300C410.5 0 500 89.5 500 200C500 310.5 410.5 400 300 400C244.8 400 200 355.2 200 300ZM150 350V200C67.2 200 0 267.2 0 350V500C82.8 500 150 432.8 150 350Z" fill="#fff"></path></svg>'
    },
    gab: {
      background_color: "#25CC80",
    title: "Gab",
    redirect_url: "https://gab.com/compose?text=" + postTitle + "&url=" + postUrl,
    svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-14.5 3.5 46 30" xml:space="preserve"><g><path fill="#fff" d="M13.8,7.6h-2.4v0.7V9l-0.4-0.3C10.2,7.8,9,7.2,7.7,7.2c-0.2,0-0.4,0-0.4,0c-0.1,0-0.3,0-0.5,0 c-5.6,0.3-8.7,7.2-5.4,12.1c2.3,3.4,7.1,4.1,9.7,1.5l0.3-0.3l0,0.7c0,1-0.1,1.5-0.4,2.2c-1,2.4-4.1,3-6.8,1.3 c-0.2-0.1-0.4-0.2-0.4-0.2c-0.1,0.1-1.9,3.5-1.9,3.6c0,0.1,0.5,0.4,0.8,0.6c2.2,1.4,5.6,1.7,8.3,0.8c2.7-0.9,4.5-3.2,5-6.4 c0.2-1.1,0.2-0.8,0.2-8.4l0-7.1H13.8z M9.7,17.6c-2.2,1.2-4.9-0.4-4.9-2.9C4.8,12.6,7,11,9,11.6C11.8,12.4,12.3,16.1,9.7,17.6z"></path></g></svg>'
    },
    gettr: {
      background_color: "#E50000",
    title: "Gettr",
    redirect_url: "https://gettr.com/share?text="+postTitle+"&url="+postUrl,
    svg: '<svg width="100%" height="100%" viewBox="-178 -112 1380 1380" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="the_champ_no_fill" width="1024" height="1024" rx="240"></rect><path d="M620.01 810.414C548.28 810.414 476.551 810.414 405.435 810.414C407.274 820.836 409.113 831.871 410.952 842.293C426.279 842.293 439.154 853.329 441.606 868.042C450.189 920.154 459.385 971.652 467.968 1023.76C498.008 1023.76 528.049 1023.76 557.476 1023.76C566.059 971.652 575.256 920.154 583.839 868.042C586.291 853.329 599.165 842.293 614.492 842.293C616.331 831.871 618.171 820.836 620.01 810.414C618.171 820.836 616.331 831.871 614.492 842.293Z" fill="#fff"></path><path fill="#fff" d="M789.83 628.333C604.682 628.333 420.148 628.333 235 628.333C235 636.303 235 644.273 235 652.243C344.74 677.992 379.072 718.455 394.399 762.596C472.872 762.596 551.958 762.596 630.431 762.596C645.145 718.455 680.09 677.992 789.83 652.243C789.83 644.273 789.83 636.303 789.83 628.333Z"></path><path fill="#fff" d="M610.2 250.68C640.241 298.499 659.246 345.093 652.502 388.008C640.241 471.999 534.179 529.014 512.722 581.126C435.475 502.039 388.268 448.089 380.911 398.43C369.263 305.243 502.912 229.835 512.722 125C536.631 155.041 543.988 208.378 543.988 238.418C555.637 223.092 562.38 204.086 562.994 184.468C585.677 211.443 593.034 258.037 593.034 292.982C602.843 281.333 609.587 266.62 610.2 250.68Z"></path></svg>'
    },
    MeWe: {
      background_color: "#007da1",
    title: "MeWe",
    redirect_url: "https://mewe.com/share?link="+postUrl,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-3 -3 38 38"><g fill="#fff"><path d="M9.636 10.427a1.22 1.22 0 1 1-2.44 0 1.22 1.22 0 1 1 2.44 0zM15.574 10.431a1.22 1.22 0 0 1-2.438 0 1.22 1.22 0 1 1 2.438 0zM22.592 10.431a1.221 1.221 0 1 1-2.443 0 1.221 1.221 0 0 1 2.443 0zM29.605 10.431a1.221 1.221 0 1 1-2.442 0 1.221 1.221 0 0 1 2.442 0zM3.605 13.772c0-.471.374-.859.859-.859h.18c.374 0 .624.194.789.457l2.935 4.597 2.95-4.611c.18-.291.43-.443.774-.443h.18c.485 0 .859.387.859.859v8.113a.843.843 0 0 1-.859.845.857.857 0 0 1-.845-.845V16.07l-2.366 3.559c-.18.276-.402.443-.72.443-.304 0-.526-.167-.706-.443l-2.354-3.53V21.9c0 .471-.374.83-.845.83a.815.815 0 0 1-.83-.83v-8.128h-.001zM14.396 14.055a.9.9 0 0 1-.069-.333c0-.471.402-.83.872-.83.415 0 .735.263.845.624l2.23 6.66 2.187-6.632c.139-.402.428-.678.859-.678h.124c.428 0 .735.278.859.678l2.187 6.632 2.23-6.675c.126-.346.415-.609.83-.609.457 0 .845.361.845.817a.96.96 0 0 1-.083.346l-2.867 8.032c-.152.43-.471.706-.887.706h-.165c-.415 0-.721-.263-.872-.706l-2.161-6.328-2.16 6.328c-.152.443-.47.706-.887.706h-.165c-.415 0-.72-.263-.887-.706l-2.865-8.032z"></path></g></svg>'
    },
    pinterest: {
      background_color:"#cc2329",
    title: "Pinterest",
    redirect_url: "https://pinterest.com/pin/create/button/?url=" + postUrl + "&media=${media_link}&description=" + postTitle,
    bookmarklet_url: "javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)})());",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-2 -2 35 35"><path fill="#fff" d="M16.539 4.5c-6.277 0-9.442 4.5-9.442 8.253 0 2.272.86 4.293 2.705 5.046.303.125.574.005.662-.33.061-.231.205-.816.27-1.06.088-.331.053-.447-.191-.736-.532-.627-.873-1.439-.873-2.591 0-3.338 2.498-6.327 6.505-6.327 3.548 0 5.497 2.168 5.497 5.062 0 3.81-1.686 7.025-4.188 7.025-1.382 0-2.416-1.142-2.085-2.545.397-1.674 1.166-3.48 1.166-4.689 0-1.081-.581-1.983-1.782-1.983-1.413 0-2.548 1.462-2.548 3.419 0 1.247.421 2.091.421 2.091l-1.699 7.199c-.505 2.137-.076 4.755-.039 5.019.021.158.223.196.314.077.13-.17 1.813-2.247 2.384-4.324.162-.587.929-3.631.929-3.631.46.876 1.801 1.646 3.227 1.646 4.247 0 7.128-3.871 7.128-9.053.003-3.918-3.317-7.568-8.361-7.568z"/></svg>'
    },
    CopyLink: {
      background_color:"#ffc112",
    title: "Copy Link",
    redirect_url: "",
    bookmarklet_url: "",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-4 -4 40 40"><path fill="#fff" d="M24.412 21.177c0-.36-.126-.665-.377-.917l-2.804-2.804a1.235 1.235 0 0 0-.913-.378c-.377 0-.7.144-.97.43.026.028.11.11.255.25.144.14.24.236.29.29s.117.14.2.256c.087.117.146.232.177.344.03.112.046.236.046.37 0 .36-.126.666-.377.918a1.25 1.25 0 0 1-.918.377 1.4 1.4 0 0 1-.373-.047 1.062 1.062 0 0 1-.345-.175 2.268 2.268 0 0 1-.256-.2 6.815 6.815 0 0 1-.29-.29c-.14-.142-.223-.23-.25-.254-.297.28-.445.607-.445.984 0 .36.126.664.377.916l2.778 2.79c.243.243.548.364.917.364.36 0 .665-.118.917-.35l1.982-1.97c.252-.25.378-.55.378-.9zm-9.477-9.504c0-.36-.126-.665-.377-.917l-2.777-2.79a1.235 1.235 0 0 0-.913-.378c-.35 0-.656.12-.917.364L7.967 9.92c-.254.252-.38.553-.38.903 0 .36.126.665.38.917l2.802 2.804c.242.243.547.364.916.364.377 0 .7-.14.97-.418-.026-.027-.11-.11-.255-.25s-.24-.235-.29-.29a2.675 2.675 0 0 1-.2-.255 1.052 1.052 0 0 1-.176-.344 1.396 1.396 0 0 1-.047-.37c0-.36.126-.662.377-.914.252-.252.557-.377.917-.377.136 0 .26.015.37.046.114.03.23.09.346.175.117.085.202.153.256.2.054.05.15.148.29.29.14.146.222.23.25.258.294-.278.442-.606.442-.983zM27 21.177c0 1.078-.382 1.99-1.146 2.736l-1.982 1.968c-.745.75-1.658 1.12-2.736 1.12-1.087 0-2.004-.38-2.75-1.143l-2.777-2.79c-.75-.747-1.12-1.66-1.12-2.737 0-1.106.392-2.046 1.183-2.818l-1.186-1.185c-.774.79-1.708 1.186-2.805 1.186-1.078 0-1.995-.376-2.75-1.13l-2.803-2.81C5.377 12.82 5 11.903 5 10.826c0-1.08.382-1.993 1.146-2.738L8.128 6.12C8.873 5.372 9.785 5 10.864 5c1.087 0 2.004.382 2.75 1.146l2.777 2.79c.75.747 1.12 1.66 1.12 2.737 0 1.105-.392 2.045-1.183 2.817l1.186 1.186c.774-.79 1.708-1.186 2.805-1.186 1.078 0 1.995.377 2.75 1.132l2.804 2.804c.754.755 1.13 1.672 1.13 2.75z"/></svg>'
    },
    
    Douban: {
      background_color:"#497700",
    title: "Douban",
    locale: "en-US",
    redirect_url: "https://www.douban.com/share/service?name="+postTitle+"&href="+postUrl+"&image=&updated=&bm=&url="+postUrl+"&title="+postTitle+"&sel=",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-1 -1 34 34"><path fill="#fff" d="M13.498 6.49v6.258l-5.953-1.933L6 15.57l5.95 1.934-3.677 5.063 4.046 2.942L16 20.44l3.68 5.064 4.047-2.943L20.05 17.5 26 15.57l-1.545-4.755-5.953 1.933V6.49h-5.004z"/></svg>'
    },
    Draugiem: {
      background_color:"#ffad66",
    title: "Draugiem",
    redirect_url: "https://www.draugiem.lv/say/ext/add.php?link="+postUrl+"&title="+postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-4 -4 40 40"><path fill="#fff" d="M21.55 11.33c4.656.062 7.374 2.92 4.294 6.828-1.415 1.798-3.812 3.575-7.003 4.725-.15.056-.303.105-.46.16-.3.098-.595.188-.89.28a24.866 24.866 0 0 1-4.05.814c-.464.043-.91.078-1.35.085-2.97.077-5.205-.74-5.93-2.474-.88-2.077.9-4.976 4.454-7.178-2.627 1.06-7.408 3.546-7.61 7.12v.454c.02.362.09.725.21 1.108.76 2.41 4.333 3.533 8.884 3.13.446-.036.892-.092 1.352-.16.66-.1 1.337-.23 2.027-.39a35.76 35.76 0 0 0 2.02-.558c.154-.056.3-.098.454-.153.31-.094.608-.2.9-.31 3.945-1.436 6.87-3.34 8.58-5.526.975-1.253 1.476-2.424 1.574-3.448v-.787c-.28-2.61-3.317-4.135-7.45-3.717zm-3.024-1.29c.11 0 .21-.014.307-.035.662-.167.983-.87 1.01-1.7.028-.885-.286-1.624-1.01-1.728-.063-.014-.125-.014-.195-.014-.578 0-.955.348-1.157.857-.094.265-.16.564-.163.885-.014.383.034.745.167 1.038.196.418.53.697 1.046.697zm-.014.292c-.293 0-.544.028-.76.084l.063.084.11.202.092.21.077.215.056.223.035.223.02.23.008.223v.237l-.014.23-.018.23-.028.23-.028.23-.043.23-.042.23-.04.223-.056.223-.042.212-.056.21-.057.2-.057.196-.042.19-.04.18-.02.11-.03.125-.028.132-.02.14-.03.152-.02.124v.03l-.028.166-.056.21-.02.172-.03.18-.02.182-.03.18-.02.19-.03.18-.02.188-.02.188-.02.19v.007c.04.537.082.997.103 1.26.02.3.085.517.18.663.14.215.378.292.706.32.28-.028.487-.084.647-.23.153-.14.237-.376.3-.753.118-.774.467-3.31.767-4.397.425-1.568 1.456-4.418-1.066-4.634-.122-.024-.226-.024-.338-.024zm-3.06-.8h.015c.976-.008 1.436-.9 1.436-1.994s-.46-1.993-1.436-2h-.014c-.99 0-1.45.9-1.45 2s.46 1.993 1.45 1.993zm-2.013 4.626c.09.383.18.732.254 1.052.307 1.254.606 4.16.718 5.038.105.885.418 1.073 1.052 1.136.62-.063.94-.25 1.045-1.136.105-.878.41-3.79.71-5.038.08-.314.175-.67.266-1.052.28-1.15.502-2.495 0-3.366-.32-.557-.94-.92-2.02-.92-1.088 0-1.708.37-2.03.92-.5.864-.27 2.216 0 3.366zm-1.35-4.153c.1.02.196.035.308.035.516 0 .857-.28 1.045-.704.118-.293.174-.655.167-1.038a2.96 2.96 0 0 0-.167-.885c-.202-.51-.585-.857-1.157-.857-.07 0-.134 0-.197.014-.725.105-1.045.843-1.01 1.728.02.836.35 1.54 1.01 1.707zm-.3 9.373c.057.376.154.606.3.753.16.157.37.206.65.23.33-.024.557-.1.704-.32.09-.14.153-.36.18-.66.022-.264.064-.72.106-1.253v-.014l-.02-.187-.02-.188-.03-.188-.02-.18-.02-.19-.03-.18-.02-.18-.03-.183-.025-.174-.02-.166-.03-.167v-.02l-.02-.133-.028-.153-.028-.14-.024-.13-.028-.125-.03-.11-.034-.184-.056-.188-.04-.196-.058-.203-.056-.21-.056-.215-.04-.223-.057-.225-.04-.23-.033-.23-.028-.23-.03-.23-.02-.23-.008-.237v-.23l.007-.223.02-.23.034-.223.056-.222.07-.216.1-.21.11-.2.065-.085a3.128 3.128 0 0 0-.76-.083c-.11 0-.216 0-.32.014-2.524.216-1.492 3.066-1.067 4.634.262 1.054.603 3.59.728 4.364z"/></svg>'
    },
    Facebook_Messenger: {
      background_color:"#0084ff",
    title: "Facebook Messenger",
    redirect_url: "https://www.facebook.com/dialog/send?app_id=1904103319867886&display=popup&link="+postUrl+"&redirect_uri="+postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-2 -2 36 36"><path fill="#fff" d="M16 5C9.986 5 5.11 9.56 5.11 15.182c0 3.2 1.58 6.054 4.046 7.92V27l3.716-2.06c.99.276 2.04.425 3.128.425 6.014 0 10.89-4.56 10.89-10.183S22.013 5 16 5zm1.147 13.655L14.33 15.73l-5.423 3 5.946-6.31 2.816 2.925 5.42-3-5.946 6.31z"/></svg>'
    },
    Google_Classroom: {
      background_color:"#ffc112",
    title: "Google Classroom",
    redirect_url: "https://classroom.google.com/u/0/share?url="+postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-2 2 36 36"><g fill="#fff"><path d="M22.667 16.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334zM22.333 18c-1.928 0-4 .946-4 2.117v1.217h8v-1.217c0-1.17-2.072-2.117-4-2.117zm-13-1.333a1.668 1.668 0 1 0-.002-3.336 1.668 1.668 0 0 0 .002 3.336zM9.667 18c-1.928 0-4 .946-4 2.117v1.217h8v-1.217c0-1.17-2.072-2.117-4-2.117z"/><path d="M15.335 15.333A2.332 2.332 0 1 0 13 13a2.333 2.333 0 0 0 2.335 2.333zm.332 1.334c-2.572 0-5.333 1.392-5.333 3.11v1.557H21v-1.556c0-1.72-2.762-3.11-5.333-3.11zm3 10.666h8v2h-8v-2z"/></g></svg>'
    },
    Kik: {
      background_color:"#2a2a2a",
    title: "Kik",
    redirect_url: "https://www.kik.com/send/article/?app_name=Share&text=&title="+postTitle+"&url="+postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-6 -4 40 40"><path d="M23.436 20.74a2.511 2.511 0 0 0 .109-5.019h-.11a2.516 2.516 0 0 0-2.507 2.515 2.509 2.509 0 0 0 2.508 2.508zm-7.946-3.09l2.89-2.89c.93-.93.93-2.434 0-3.363a2.374 2.374 0 0 0-3.362 0l-4.262 4.263V7.267A2.378 2.378 0 0 0 6 7.263V24.7a2.378 2.378 0 0 0 4.756.002v-2.316l1.335-1.335 3.76 5.07a2.378 2.378 0 0 0 3.866-2.771c-.016-.02-.03-.04-.047-.06l-4.177-5.638v-.002z" fill="#fff"/></svg>'
    },
    Papaly: {
      background_color:"#3ac0f6",
    title: "Papaly",
    redirect_url: "https://papaly.com/api/share.html?url="+postUrl+"&title="+postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M20.744 8.217c1.112 0 2.296.519 3.106 1.329l.185.185c1.361 1.361 1.402 4.432.042 5.792l-3.103 2.787L16 22.777l-4.974-4.467-3.103-2.787c-1.361-1.361-1.319-4.432.042-5.792l.185-.185c.81-.81 1.994-1.329 3.106-1.329.756 0 1.48.24 2.03.79L16 12.291l2.714-3.284c.55-.55 1.274-.79 2.03-.79m0-2.921c-1.58 0-3.035.585-4.096 1.646l-.098.098-.088.107-.462.558-.462-.559-.088-.106-.098-.098c-1.061-1.061-2.516-1.646-4.096-1.646-1.871 0-3.804.816-5.172 2.184l-.185.185c-2.515 2.515-2.535 7.43-.042 9.924l.055.055.058.052 3.103 2.787 4.974 4.467L16 26.704l1.952-1.753 4.974-4.467 3.103-2.787.058-.052.055-.055c2.494-2.494 2.473-7.409-.042-9.924l-.184-.186c-1.368-1.368-3.301-2.184-5.172-2.184z"></path></svg>'
    },
    Refind: {
      background_color:"#1492ef",
    title: "Refind",
    redirect_url: "https://refind.com/?url="+postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M16 21.256c-2.891 0-5.256-2.365-5.256-5.255 0-2.891 2.365-5.255 5.255-5.255 2.891 0 5.255 2.365 5.255 5.255.002 2.89-2.363 5.255-5.254 5.255z"></path><path d="M20.664 23.676A8.91 8.91 0 0 1 16 25c-4.95 0-9-4.05-9-9s4.05-9 9-9 9 4.05 9 9a8.912 8.912 0 0 1-1.302 4.628l2.293 1.991A11.908 11.908 0 0 0 28 16c0-6.6-5.4-12-12-12S4 9.4 4 16s5.4 12 12 12c2.456 0 4.745-.75 6.652-2.029l-1.988-2.295z"></path></g></svg>'
    },
    Skype: {
      background_color:"#00aff0",
    title: "Skype",
    redirect_url: "https://web.skype.com/share?url="+postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M27.15 18c-.007.04-.012.084-.02.126l-.04-.24.06.113c.124-.678.19-1.37.19-2.06 0-1.53-.3-3.013-.892-4.41a11.273 11.273 0 0 0-2.43-3.602 11.288 11.288 0 0 0-8.012-3.32c-.72 0-1.443.068-2.146.203h-.005c.04.023.08.04.118.063l-.238-.037c.04-.01.08-.018.12-.026a6.717 6.717 0 0 0-3.146-.787 6.67 6.67 0 0 0-4.748 1.965A6.7 6.7 0 0 0 4 10.738c0 1.14.293 2.262.844 3.253.007-.04.012-.08.02-.12l.04.238-.06-.114c-.112.643-.17 1.3-.17 1.954a11.285 11.285 0 0 0 3.32 8.012c1.04 1.04 2.25 1.86 3.602 2.43 1.397.592 2.882.89 4.412.89.666 0 1.334-.06 1.985-.175-.038-.02-.077-.04-.116-.063l.242.04c-.046.01-.088.015-.13.02a6.68 6.68 0 0 0 3.3.87 6.661 6.661 0 0 0 4.743-1.963A6.666 6.666 0 0 0 28 21.26c0-1.145-.295-2.27-.85-3.264zm-11.098 4.885c-4.027 0-5.828-1.98-5.828-3.463 0-.76.562-1.294 1.336-1.294 1.723 0 1.277 2.474 4.49 2.474 1.647 0 2.556-.893 2.556-1.808 0-.55-.27-1.16-1.355-1.426l-3.58-.895c-2.88-.723-3.405-2.282-3.405-3.748 0-3.043 2.865-4.186 5.556-4.186 2.478 0 5.4 1.37 5.4 3.192 0 .783-.677 1.237-1.45 1.237-1.472 0-1.2-2.035-4.163-2.035-1.47 0-2.285.666-2.285 1.618 0 .95 1.16 1.254 2.17 1.484l2.65.587c2.905.647 3.64 2.342 3.64 3.94 0 2.47-1.895 4.318-5.726 4.318z"></path></svg>'
    },
    SMS: {
      background_color:"#6ebe45",
    title: "SMS",
    bookmarklet_url: "sms:?&body="+postTitle+" "+postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M16 3.543c-7.177 0-13 4.612-13 10.294 0 3.35 2.027 6.33 5.16 8.21 1.71 1.565 1.542 4.08-.827 6.41 2.874 0 7.445-1.698 8.462-4.34H16c7.176 0 13-4.605 13-10.285s-5.824-10.29-13-10.29zM9.045 17.376c-.73 0-1.45-.19-1.81-.388l.294-1.194c.384.2.98.398 1.6.398.66 0 1.01-.275 1.01-.692 0-.398-.302-.625-1.07-.9-1.06-.37-1.753-.957-1.753-1.886 0-1.09.91-1.924 2.415-1.924.72 0 1.25.152 1.63.322l-.322 1.166a3.037 3.037 0 0 0-1.336-.303c-.625 0-.93.284-.93.616 0 .41.36.59 1.186.9 1.127.42 1.658 1.01 1.658 1.91.003 1.07-.822 1.98-2.575 1.98zm9.053-.095l-.095-2.44a72.993 72.993 0 0 1-.057-2.626h-.028a35.41 35.41 0 0 1-.71 2.475l-.778 2.49h-1.128l-.682-2.473a29.602 29.602 0 0 1-.578-2.493h-.02c-.037.863-.065 1.85-.112 2.645l-.114 2.425H12.46l.407-6.386h1.924l.63 2.13c.2.74.397 1.536.54 2.285h.027a52.9 52.9 0 0 1 .607-2.293l.683-2.12h1.886l.35 6.386H18.1zm4.09.1c-.73 0-1.45-.19-1.81-.39l.293-1.194c.39.2.99.398 1.605.398.663 0 1.014-.275 1.014-.692 0-.396-.305-.623-1.07-.9-1.064-.37-1.755-.955-1.755-1.884 0-1.09.91-1.924 2.416-1.924.72 0 1.25.153 1.63.323l-.322 1.166a3.038 3.038 0 0 0-1.337-.303c-.625 0-.93.284-.93.616 0 .408.36.588 1.186.9 1.127.42 1.658 1.006 1.658 1.906.002 1.07-.823 1.98-2.576 1.98z"></path></svg>'
    },
    Trello: {
      background_color:"#1189ce",
    title: "Trello",
    redirect_url: "https://trello.com/add-card?mode=popup&url="+postUrl+"&name="+postTitle+"&desc=",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M26.5 4h-21A1.5 1.5 0 0 0 4 5.5v21A1.5 1.5 0 0 0 5.5 28h21a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 26.5 4zM14.44 22.12c0 .825-.675 1.5-1.5 1.5H8.62c-.825 0-1.5-.675-1.5-1.5V8.62c0-.825.675-1.5 1.5-1.5h4.32c.825 0 1.5.675 1.5 1.5v13.5zm10.44-6c0 .825-.675 1.5-1.5 1.5h-4.32c-.825 0-1.5-.675-1.5-1.5v-7.5c0-.825.675-1.5 1.5-1.5h4.32c.825 0 1.5.675 1.5 1.5v7.5z"></path></svg>'
    },
    Viber: {
      background_color:"#8b628f",
    title: "Viber",
    bookmarklet_url: "viber://forward?text="+postTitle+" "+postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path d="M22.57 27.22a7.39 7.39 0 0 1-1.14-.32 29 29 0 0 1-16-16.12c-1-2.55 0-4.7 2.66-5.58a2 2 0 0 1 1.39 0c1.12.41 3.94 4.3 4 5.46a2 2 0 0 1-1.16 1.78 2 2 0 0 0-.66 2.84A10.3 10.3 0 0 0 17 20.55a1.67 1.67 0 0 0 2.35-.55c1.07-1.62 2.38-1.54 3.82-.54.72.51 1.45 1 2.14 1.55.93.75 2.1 1.37 1.55 2.94a5.21 5.21 0 0 1-4.29 3.27zM17.06 4.79A10.42 10.42 0 0 1 26.79 15c0 .51.18 1.27-.58 1.25s-.54-.78-.6-1.29c-.7-5.52-3.23-8.13-8.71-9-.45-.07-1.15 0-1.11-.57.05-.87.87-.54 1.27-.6z" fill="#fff" fill-rule="evenodd"></path><path d="M24.09 14.06c-.05.38.17 1-.45 1.13-.83.13-.67-.64-.75-1.13-.56-3.36-1.74-4.59-5.12-5.35-.5-.11-1.27 0-1.15-.8s.82-.48 1.35-.42a6.9 6.9 0 0 1 6.12 6.57z" fill="#fff" fill-rule="evenodd"></path><path d="M21.52 13.45c0 .43 0 .87-.53.93s-.6-.26-.64-.64a2.47 2.47 0 0 0-2.26-2.43c-.42-.07-.82-.2-.63-.76.13-.38.47-.41.83-.42a3.66 3.66 0 0 1 3.23 3.32z" fill="#fff" fill-rule="evenodd"></path></svg>'
    },
    Threema: {
      background_color:"#2a2a2a",
    title: "Threema",
    bookmarklet_url: "threema://compose?text="+postTitle+" "+postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M25.515 6.896L6.027 14.41c-1.33.534-1.322 1.276-.243 1.606l5 1.56 1.72 5.66c.226.625.115.873.77.873.506 0 .73-.235 1.012-.51l2.43-2.363 5.056 3.734c.93.514 1.602.25 1.834-.863l3.32-15.638c.338-1.363-.52-1.98-1.41-1.577z"></path></svg>'
    },
    Telegram: {
      background_color:"#3da5f1",
    title: "Telegram",
    redirect_url: "https://telegram.me/share/url?url="+postUrl+"&text="+postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M25.515 6.896L6.027 14.41c-1.33.534-1.322 1.276-.243 1.606l5 1.56 1.72 5.66c.226.625.115.873.77.873.506 0 .73-.235 1.012-.51l2.43-2.363 5.056 3.734c.93.514 1.602.25 1.834-.863l3.32-15.638c.338-1.363-.52-1.98-1.41-1.577z"></path></svg>'
    },
    email: {
      background_color:"#649a3f",
    title: "Email",
    redirect_url: "mailto:?subject=" + postTitle + "&body=Link: " + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-4 -4 43 43"><path d="M 5.5 11 h 23 v 1 l -11 6 l -11 -6 v -1 m 0 2 l 11 6 l 11 -6 v 11 h -22 v -11" stroke-width="1" fill="#fff"></path></svg>'
    },
    reddit: {
      background_color:"#ff5700",
    title: "Reddit",
    redirect_url: "https://reddit.com/submit?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-3.5 -3.5 39 39"><path d="M28.543 15.774a2.953 2.953 0 0 0-2.951-2.949 2.882 2.882 0 0 0-1.9.713 14.075 14.075 0 0 0-6.85-2.044l1.38-4.349 3.768.884a2.452 2.452 0 1 0 .24-1.176l-4.274-1a.6.6 0 0 0-.709.4l-1.659 5.224a14.314 14.314 0 0 0-7.316 2.029 2.908 2.908 0 0 0-1.872-.681 2.942 2.942 0 0 0-1.618 5.4 5.109 5.109 0 0 0-.062.765c0 4.158 5.037 7.541 11.229 7.541s11.22-3.383 11.22-7.541a5.2 5.2 0 0 0-.053-.706 2.963 2.963 0 0 0 1.427-2.51zm-18.008 1.88a1.753 1.753 0 0 1 1.73-1.74 1.73 1.73 0 0 1 1.709 1.74 1.709 1.709 0 0 1-1.709 1.711 1.733 1.733 0 0 1-1.73-1.711zm9.565 4.968a5.573 5.573 0 0 1-4.081 1.272h-.032a5.576 5.576 0 0 1-4.087-1.272.6.6 0 0 1 .844-.854 4.5 4.5 0 0 0 3.238.927h.032a4.5 4.5 0 0 0 3.237-.927.6.6 0 1 1 .844.854zm-.331-3.256a1.726 1.726 0 1 1 1.709-1.712 1.717 1.717 0 0 1-1.712 1.712z" fill="#fff"/></svg>'
    },
    float_it: {
      background_color:"#53beee",
    title: "Float it",
    redirect_url: "https://www.designfloat.com/submit.php?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-3 -3 38 38"><g fill="#fff"><path d="M16 3C8.814 3 3 8.814 3 16s5.814 13 13 13 13-5.814 13-13S23.187 3 16 3zm0 25.152c-6.712 0-12.153-5.44-12.153-12.152C3.847 9.288 9.287 3.848 16 3.848S28.152 9.288 28.152 16c0 6.712-5.44 12.152-12.152 12.152z"/><path d="M22.406 16A6.402 6.402 0 0 0 16 9.593 6.402 6.402 0 0 0 9.593 16 6.4 6.4 0 0 0 16 22.406 6.4 6.4 0 0 0 22.406 16zM16 21.39A5.392 5.392 0 0 1 10.61 16 5.403 5.403 0 0 1 16 10.61 5.393 5.393 0 0 1 21.39 16 5.382 5.382 0 0 1 16 21.39z"/><path d="M13.763 9.187V4.864c-4.475.9-8 4.424-8.898 8.898h4.322a7.226 7.226 0 0 1 4.576-4.575zm9.05 4.576h4.32c-.896-4.475-4.422-8-8.896-8.898v4.322a7.224 7.224 0 0 1 4.575 4.576zm-4.576 9.052v4.322c4.475-.9 8-4.424 8.897-8.9h-4.322a7.232 7.232 0 0 1-4.575 4.578zm-9.05-4.578H4.863c.898 4.475 4.424 8 8.898 8.9v-4.323a7.233 7.233 0 0 1-4.574-4.577z"/></g></svg>'
    },
    gentlereader: {
      background_color:"#46aecf",
        title: "GentleReader",
        redirect_url: "https://app.gentlereader.com/bookmark?url=" + postUrl,
        svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-80 -80.014 1200.014 1200"><path fill-rule="evenodd" clip-rule="evenodd" fill=#fff d="M819.664,291.684C572.661-7.32,155.656,203.683,169.656,527.687 c38,489.007,727.009,448.006,683.009-28H562.661v98h177.002c-54.721,270.685-443.659,218.617-464.179-77.827 c-0.48-6.934,1.493-36.96,3.053-44.641c44.28-217.95,300.377-317.791,467.126-110.535L819.664,291.684z"></path></svg>',  
      },
    google_bookmarks: {
      background_color:"#cb0909",
    title: "Google Bookmarks",
    redirect_url: "http://www.google.com/bookmarks/mark?op=edit&bkmk=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-12 0 100 100"><path d="M 51.22877660575707 38.19080770219705 A 17 17 0 1 0 56 50.00000000000001 h -17" stroke="#fff" stroke-width="8" fill="none"></path></svg>'
    },
    digg: {
      background_color:"#006094",
    title: "Digg",
    redirect_url: "http://digg.com/submit?phase=2&url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-5 -5 49 49"><path d="M 6 20 h 10 c 0 -14 -9 -14 -9 0 m 5 0 v 7 m -1 0 v -7 m 4 -7 h 4.5 v -5 h 8 v 8 h -8 v -3 m 8 0 h 4 v 5.5 h -3 v 12 h -4 v -8 m 0 8 h -6.5 v -12 h -2" stroke-width="2" stroke="#fff" fill="none"></path><ellipse cx="11.5" cy="28.5" rx="4" ry="2" style="fill:#fff;"></ellipse></svg>'
    },
    printfriendly: {
      background_color:"#61d1d5",
    title: "PrintFriendly",
    redirect_url: "https://www.printfriendly.com/print?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10"><path fill="none" d="M22.562 19.588v4.373H9.438v-4.37h13.124zm-13.124 1.53H6.375c-.483 0-.875-.313-.875-.7v-7.35c0-.387.392-.7.875-.7h19.25c.482 0 .875.313.875.7v7.35c0 .387-.393.7-.876.7h-3.062"></path><path fill="#fff" d="M22.562 12.32V8.04H9.436v4.28"></path></g></svg>'
    },
    print: {
      background_color:"#fd6500",
    title: "Print",
    bookmarklet_url: "javascript:window.print()",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-2.8 -4.5 35 35"><path stroke="#fff" d="M 7 10 h 2 v 3 h 12 v -3 h 2 v 7 h -2 v -3 h -12 v 3 h -2 z" stroke-width="1" fill="#fff"></path><rect stroke="#fff" stroke-width="1.8" height="7" width="10" x="10" y="5" fill="none"></rect><rect stroke="#fff" stroke-width="1" height="5" width="8" x="11" y="16" fill="#fff"></rect></svg>'
    },
    tumblr: {
      background_color:"#29435d",
    title: "Tumblr",
    redirect_url: "https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=" + postUrl + "&title=" + postTitle + "&caption=",
    bookmarklet_url: "javascript:var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='http://www.tumblr.com/share',l=d.location,e=encodeURIComponent,p='?v=3&u='+e(l.href) +'&t='+e(d.title) +'&s='+e(s),u=f+p;try{if(!/^(.*\\.)?tumblr[^.]*$/.test(l.host))throw(0);tstbklt();}catch(z){a =function(){if(!w.open(u,'t','toolbar=0,resizable=0,status=1,width=450,height=430'))l.href=u;};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();}void(0);",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-2 -2 36 36"><path fill="#fff" d="M20.775 21.962c-.37.177-1.08.33-1.61.345-1.598.043-1.907-1.122-1.92-1.968v-6.217h4.007V11.1H17.26V6.02h-2.925s-.132.044-.144.15c-.17 1.556-.895 4.287-3.923 5.378v2.578h2.02v6.522c0 2.232 1.647 5.404 5.994 5.33 1.467-.025 3.096-.64 3.456-1.17l-.96-2.846z"/></svg>'
    },
    vk: {
      background_color:"#0077FF",
    title: "Vkontakte",
    redirect_url: "https://vk.com/share.php?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg fill="none" height="100%" width="100%" viewBox="0.75 12.5 46 22" xmlns="http://www.w3.org/2000/svg"><path d="M25.54 34.58c-10.94 0-17.18-7.5-17.44-19.98h5.48c.18 9.16 4.22 13.04 7.42 13.84V14.6h5.16v7.9c3.16-.34 6.48-3.94 7.6-7.9h5.16c-.86 4.88-4.46 8.48-7.02 9.96 2.56 1.2 6.66 4.34 8.22 10.02h-5.68c-1.22-3.8-4.26-6.74-8.28-7.14v7.14z" fill="#FFFFFF"></path></svg>'
    },
    evernote: {
      background_color:"#8be056",
    title: "Evernote",
    redirect_url: "https://www.evernote.com/clip.action?url=" + postUrl + "&title=" + postTitle,
    bookmarklet_url: "javascript:(function(){EN_CLIP_HOST='http://www.evernote.com';try{var x=document.createElement('SCRIPT');x.type='text/javascript';x.src=EN_CLIP_HOST+'/public/bookmarkClipper.js?'+(new Date().getTime()/100000);document.getElementsByTagName('head')[0].appendChild(x);}catch(e){location.href=EN_CLIP_HOST+'/clip.action?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);}})();",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M7.884 8.573h2.276c.13 0 .236-.106.236-.235 0 0-.027-1.95-.027-2.494v-.006c0-.445.09-.833.253-1.16l.078-.145c-.007 0-.017.005-.025.014l-4.42 4.385c-.01.007-.014.016-.017.026.09-.046.215-.107.233-.115.386-.175.85-.27 1.41-.27zm17.704-.477c-.18-.968-.755-1.444-1.275-1.632-.56-.203-1.698-.413-3.127-.58-1.15-.137-2.504-.126-3.318-.1-.1-.672-.568-1.285-1.096-1.498-1.404-.564-3.573-.428-4.13-.272-.442.125-.932.378-1.205.768-.183.262-.302.595-.302 1.062 0 .265.007.886.015 1.44l.014 1.054c0 .494-.4.896-.896.897H7.99c-.485 0-.856.082-1.14.21-.284.128-.484.303-.636.508-.304.408-.357.912-.355 1.426 0 0 0 .416.102 1.23.084.63.767 5.02 1.414 6.356.25.522.42.736.912.966 1.1.47 3.61.994 4.787 1.146 1.174.15 1.912.466 2.35-.457.002 0 .088-.227.208-.56.382-1.156.435-2.18.435-2.924 0-.076.11-.078.11 0 0 .524-.1 2.38 1.303 2.875.554.197 1.7.373 2.864.51 1.055.12 1.82.537 1.82 3.24 0 1.645-.346 1.87-2.152 1.87-1.464 0-2.02.038-2.02-1.125 0-.938.93-.842 1.616-.842.31 0 .086-.23.086-.81 0-.576.36-.91.02-.918-2.384-.065-3.786-.004-3.786 2.978 0 2.706 1.036 3.208 4.418 3.208 2.65 0 3.588-.086 4.682-3.483.22-.67.742-2.718 1.06-6.154.197-2.173-.194-8.732-.502-10.388zm-4.622 7.25c-.327-.012-.643.01-.937.056.08-.667.353-1.488 1.332-1.453 1.08.033 1.23 1.056 1.237 1.75-.457-.205-1.02-.335-1.635-.357z"/></svg>'
    },
    amazon_us_wish_list: {
      background_color:"#ffe000",
    title: "Amazon Wish List",
    redirect_url: "https://www.amazon.com/wishlist/add?u=" + postUrl + "&t=" + postTitle,
    bookmarklet_url: "javascript:(function(){var w=window,l=w.location,d=w.document,s=d.createElement('script'),e=encodeURIComponent,x='undefined',u='http://www.amazon.com/gp/wishlist/add';if(typeof s!='object')l.href=u+'?u='+e(l)+'&t='+e(d.title);function g(){if(d.readyState&&d.readyState!='complete'){setTimeout(g,200);}else{if(typeof AUWLBook==x)s.setAttribute('src',u+'.js?loc='+e(l)),d.body.appendChild(s);function f(){(typeof AUWLBook==x)?setTimeout(f,200):AUWLBook.showPopover();}f();}}g();}())",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M24.998 23.842c-.127 0-.256.03-.377.086-.132.055-.27.117-.4.172l-.194.08-.25.1v.005c-2.72 1.102-5.573 1.748-8.215 1.805-.097.004-.193.004-.29.004-4.153.003-7.544-1.926-10.964-3.823-.12-.06-.24-.094-.36-.094-.156 0-.313.058-.43.164-.114.106-.183.266-.182.426 0 .207.112.395.267.52 3.21 2.786 6.73 5.376 11.46 5.378.094 0 .188-.002.28-.004 3.01-.07 6.415-1.085 9.058-2.745l.016-.01c.346-.207.69-.44 1.018-.703.205-.15.346-.385.344-.63-.01-.435-.377-.73-.775-.73zm3.666-1.54c-.012-.265-.068-.466-.178-.632l-.01-.016-.015-.02c-.11-.12-.216-.167-.333-.218-.347-.133-.853-.205-1.46-.207-.437 0-.92.04-1.4.143l-.002-.03-.486.16-.01.006-.276.09v.012c-.322.136-.615.302-.89.498-.167.13-.31.297-.317.556-.004.14.066.3.185.395.12.097.257.13.378.13.027 0 .055 0 .078-.005l.023-.002.018-.003c.238-.053.586-.085.992-.144.347-.037.72-.066 1.04-.066.225 0 .43.014.57.045.07.016.12.032.15.05.01.003.016.007.02.01.006.02.016.067.014.14.004.268-.11.767-.266 1.25-.152.487-.338.974-.46 1.298-.03.075-.048.157-.048.247-.003.13.05.287.16.393.11.104.255.145.374.145h.006c.18-.002.332-.07.463-.176 1.236-1.112 1.666-2.888 1.684-3.888l-.003-.16z"/><path d="M17.355 10.384c-.728.055-1.565.11-2.404.222-1.282.17-2.57.39-3.63.896-2.07.838-3.467 2.627-3.467 5.254 0 3.3 2.124 4.98 4.81 4.98.894 0 1.622-.114 2.29-.28 1.064-.336 1.958-.95 3.02-2.07.614.838.782 1.23 1.844 2.125.278.114.558.114.78-.052.673-.56 1.85-1.568 2.462-2.125.28-.224.224-.56.056-.837-.613-.783-1.23-1.455-1.23-2.965V10.5c0-2.125.167-4.082-1.397-5.534-1.285-1.173-3.3-1.62-4.864-1.62h-.672c-2.85.164-5.868 1.395-6.54 4.918-.11.447.226.613.45.67l3.13.39c.336-.055.502-.336.56-.613.278-1.23 1.284-1.845 2.4-1.96h.227c.67 0 1.397.28 1.79.84.447.67.39 1.568.39 2.35v.446zm-.613 6.65c-.393.782-1.063 1.286-1.79 1.456-.112 0-.28.055-.448.055-1.228 0-1.956-.95-1.956-2.35 0-1.788 1.06-2.627 2.402-3.018.727-.167 1.567-.225 2.405-.225v.672c0 1.287.057 2.292-.613 3.41z" fill="#fff"/></svg>'
    },
    wordpress_blog: {
      background_color:"#464646",
    title: "WordPress",
    redirect_url: "https://www.addtoany.com/ext/wordpress/press_this?linkurl=" + postUrl + "&linkname=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M3.176 16c0 5.076 2.95 9.462 7.226 11.54L4.287 10.78A12.77 12.77 0 0 0 3.177 16zm21.48-.646c0-1.586-.57-2.684-1.06-3.537-.647-1.058-1.26-1.95-1.26-3.008 0-1.18.897-2.28 2.156-2.28.057 0 .11.01.166.01A12.772 12.772 0 0 0 16 3.172c-4.48 0-8.422 2.3-10.715 5.78.302.01.585.017.826.017 1.345 0 3.42-.163 3.42-.163.69-.042.774.974.084 1.056 0 0-.694.08-1.466.12l4.668 13.892 2.808-8.417-1.998-5.476c-.69-.04-1.345-.12-1.345-.12-.69-.04-.61-1.1.08-1.058 0 0 2.117.164 3.38.164 1.34 0 3.417-.163 3.417-.163.69-.04.77.976.08 1.058 0 0-.694.08-1.467.12l4.633 13.785 1.28-4.272c.552-1.773.975-3.048.975-4.144zm-8.43 1.766l-3.85 11.18c1.15.34 2.365.523 3.624.523 1.492 0 2.925-.26 4.26-.728a1.235 1.235 0 0 1-.093-.177L16.225 17.12zM27.25 9.848c.055.408.086.848.086 1.318 0 1.3-.242 2.764-.975 4.594l-3.914 11.324C26.26 24.86 28.822 20.73 28.822 16c0-2.23-.568-4.326-1.57-6.152z"></path><path d="M16 1.052C7.757 1.052 1.052 7.757 1.052 16c0 8.242 6.705 14.948 14.948 14.948 8.242 0 14.948-6.706 14.948-14.95 0-8.24-6.706-14.946-14.948-14.946zm0 29.212c-7.865 0-14.264-6.4-14.264-14.265S8.136 1.732 16 1.732c7.863 0 14.264 6.398 14.264 14.263 0 7.863-6.4 14.264-14.264 14.264z"></path></g></svg>'
    },
    whatsapp: {
      background_color:"#55eb4c",
    title: "Whatsapp",
    bookmarklet_url: "https://" + heateorSsDetermineWhatsappShareAPI(true) + "/send?text=" + postTitle + " " + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-5 -5 40 40"><path id="arc1" stroke="#fff" stroke-width="2" fill="none" d="M 11.579798566743314 24.396926207859085 A 10 10 0 1 0 6.808479557110079 20.73576436351046"></path><path d="M 7 19 l -1 6 l 6 -1" stroke="#fff" stroke-width="2" fill="none"></path><path d="M 10 10 q -1 8 8 11 c 5 -1 0 -6 -1 -3 q -4 -3 -5 -5 c 4 -2 -1 -5 -1 -4" fill="#fff"></path></svg>'
    },
    diigo: {
      background_color:"#4a8bca",
    title: "Diigo",
    redirect_url: "https://www.diigo.com/post?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M23.81 4.5c.012.198.035.396.035.593 0 4.807.026 9.615-.01 14.422-.02 3.248-1.5 5.678-4.393 7.158-4.66 2.385-10.495-.64-11.212-5.836-.76-5.517 3.747-9.56 8.682-9.018 1.114.12 2.16.5 3.134 1.07.517.3.527.295.53-.29.007-2.7.01-5.4.014-8.103h3.22zm-7.914 19.97c2.608.068 4.82-2.025 4.954-4.552.138-2.626-1.89-5.074-4.727-5.145-2.7-.067-4.867 2-4.973 4.71-.107 2.72 2.13 5.008 4.746 4.988z"/></svg>'
    },
    yc_hacker_news: {
      background_color:"#f60",
    title: "Hacker News",
    redirect_url: "https://news.ycombinator.com/submitlink?u=" + postUrl + "&t=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M17.275 17.834v7.13h-2.602v-7.182L9 7.035h3.07l2.967 6.115c.365.755.702 1.51.988 2.316.312-.728.65-1.483 1.042-2.29l3.018-6.142H23l-5.725 10.8z"/></svg>'
    },
    box_net: {
      background_color:"#1a74b0",
    title: "Box.net",
    redirect_url: "https://www.box.net/api/1.0/import?url=" + postUrl + "&name=" + postTitle + "&import_as=link",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M16.49 11.36c-1.653 0-3.18.524-4.434 1.41V6.543a1.617 1.617 0 0 0-3.235 0v11.903c-.017.2.002 1.37.055 1.7.53 3.73 3.73 6.604 7.61 6.604a7.693 7.693 0 0 0 7.692-7.696 7.694 7.694 0 0 0-7.695-7.695zm0 12.126a4.432 4.432 0 0 1-4.434-4.432 4.432 4.432 0 1 1 8.863 0 4.433 4.433 0 0 1-4.434 4.432z"></path></svg>'
    },
    aol_mail: {
      background_color:"#2a2a2a",
    title: "AOL Mail",
    redirect_url: "http://webmail.aol.com/25045/aol/en-us/Mail/compose-message.aspx?subject=" + postTitle + "&body=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path d="M17.334 13.26c-2.315 0-4.067 1.8-4.067 4.027 0 2.35 1.824 4.03 4.067 4.03 2.243 0 4.062-1.68 4.062-4.03 0-2.228-1.744-4.027-4.062-4.027zm0 2.127c1-.007 1.82.847 1.82 1.9 0 1.048-.82 1.9-1.82 1.9s-1.818-.853-1.818-1.9c0-1.053.817-1.9 1.818-1.9zm11.59 4.518c0 .778-.63 1.412-1.41 1.412-.778 0-1.41-.634-1.41-1.412 0-.778.632-1.408 1.41-1.408.78 0 1.41.63 1.41 1.408zm-4.104 1.418h-2.216v-10.28h2.216v10.28zM9.33 11.04s2.585 6.79 3.862 10.13c.015.037.028.078.047.132-.06.006-.105.01-.15.01-.83.002-1.664-.003-2.497.004-.12.002-.17-.04-.204-.156-.116-.385-.247-.766-.365-1.147-.032-.11-.074-.153-.193-.153-1.066.006-2.132.006-3.2 0-.1 0-.142.03-.173.13-.127.405-.26.81-.39 1.21-.02.076-.05.117-.136.117-.874-.006-1.75-.004-2.624-.004-.016 0-.036-.005-.07-.012.023-.06.04-.116.064-.17 1.286-3.307 3.91-10.086 3.91-10.086H9.33zm-.023 6.674c-.343-1.147-.68-2.274-1.02-3.4h-.03l-1.017 3.4h2.067z" fill="#fff"/></svg>'
    },
    yahoo_mail: {
      background_color:"#400090",
    title: "Yahoo Mail",
    redirect_url: "https://compose.mail.yahoo.com/?Subject=" + postTitle + "&body=Link: " + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M21.495 6.097c1.09.31 2.213.28 3.304 0l-7.42 12.09v9.91a4.366 4.366 0 0 0-1.37-.22c-.47 0-.937.065-1.404.22v-9.91L7.19 6.097c1.09.28 2.213.31 3.304 0l5.516 8.788 5.483-8.787z"></path></svg>'
    },
    instapaper: {
      background_color:"#ededed",
    title: "Instapaper",
    redirect_url: "https://www.instapaper.com/edit?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M11.98 5.5h8.04v1.265h-.62c-.582 0-1.004.08-1.264.242-.262.162-.453.39-.572.69-.12.297-.182.874-.182 1.732v13.53c0 .683.064 1.167.195 1.453.13.286.313.494.55.625.234.13.658.196 1.27.196h.618V26.5H11.98v-1.265h.662c.592 0 1.012-.067 1.258-.203.246-.135.424-.33.533-.587.11-.256.166-.75.166-1.483V9.112c0-.776-.057-1.3-.168-1.567-.11-.268-.287-.465-.533-.59-.247-.128-.667-.19-1.26-.19h-.66V5.5z"/></svg>'
    },
    plurk: {
      background_color:"#cf682f",
    title: "Plurk",
    redirect_url: "https://www.plurk.com/m?content=" + postUrl + "&qualifier=shares",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M20.215 16.016h-8.43V9.7h8.43v6.316zm4.2 4.2V5.5H7.585v21h4.2v-6.285h12.63z"></path></svg>'
    },
    aim: {
      background_color:"#10ff00",
    title: "AIM",
    redirect_url: "http://share.aim.com/share/?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M16.75 16.548c-.24.558-.465 1.08-.707 1.646 2.756 1.873 5.48 3.752 7.615 6.453l-2.11 1.43c-.708-.768-1.364-1.59-2.132-2.29-1.047-.958-2.156-1.85-3.557-2.285-.585-.183-.98-.086-1.39.41-1.527 1.862-3.26 3.49-5.476 4.522-1.368.64-1.368.642-1.972-.695-.178-.39-.346-.785-.54-1.226 1.827-.433 3.38-1.246 4.62-2.62.74-.822 1.166-1.716 1.26-2.856.17-2.103.628-4.15 1.828-5.95.534-.797 1.768-.98 2.493-.37.062.046.11.126.13.2.48 1.81 2.08 2.005 3.58 1.63.573-.146 1.118-.404 1.73-.63l1.07 1.483c-1.903 1.718-4.075 1.73-6.444 1.145zm.842-12.054c1.78.02 3.254 1.57 3.22 3.386-.032 1.734-1.62 3.284-3.325 3.246-1.822-.04-3.326-1.604-3.284-3.418.038-1.8 1.555-3.236 3.39-3.214z"></path></svg>'
    },
    viadeo: {
      background_color:"#2a2a2a",
    title: "Viadeo",
    redirect_url: "https://www.viadeo.com/shareit/share/?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M15.107 4s2.838 1.88 3.326 7.05c0 0 .957 12.423-5.47 14.858 0 0 .577.106 1.224.076 0 0 7.947-5.012 4.3-14.742 0 0-1.09-3.396-3.38-7.242zm4.15 8.483s-1.48-2.29.397-4.18c0 0 .658-.725 2.537-1.202 0 0 1.88-.4 2.897-2.553 0 0 2.105 2.94.81 6.807 0 0-.64 1.742-1.976 2.538-1.01.6-2.535.788-4.133-.776 0 0 4.83-2.644 5.01-4.884 0 0-1.483 3.334-5.54 4.256z"></path><path d="M19.256 12.483s-1.48-2.29.398-4.18c0 0 .658-.725 2.537-1.202 0 0 1.88-.4 2.897-2.553 0 0 2.105 2.94.81 6.807 0 0-.64 1.742-1.976 2.538-1.01.6-2.535.788-4.133-.776 0 0 4.83-2.644 5.01-4.884 0 0-1.483 3.334-5.54 4.256zm1.23 6.95c0 1.19-.283 2.3-.85 3.33-.57 1.03-1.34 1.825-2.306 2.384-.967.56-2.03.84-3.186.84-1.156 0-2.22-.28-3.186-.84-.97-.56-1.736-1.354-2.305-2.383a6.787 6.787 0 0 1-.853-3.33c0-1.847.625-3.42 1.87-4.723 1.247-1.3 2.74-1.95 4.474-1.95.824 0 1.596.15 2.313.45.072-.754.336-1.456.63-2.03a8.578 8.578 0 0 0-2.936-.49c-2.504 0-4.58.92-6.22 2.77-1.495 1.675-2.24 3.65-2.24 5.933 0 2.3.79 4.31 2.366 6.03C9.63 27.14 11.666 28 14.15 28c2.48 0 4.508-.86 6.086-2.58 1.578-1.72 2.367-3.73 2.367-6.03 0-1.233-.22-2.374-.65-3.427a6.21 6.21 0 0 1-1.982.797c.347.816.52 1.707.52 2.674z"></path></g></svg>'
    },
    pinboard_in: {
      background_color:"#1341de",
    title: "Pinboard",
    redirect_url: "https://pinboard.in/add?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M17.357 18.913l-5.01 5.014.88-4.5-6.588-8.075-3.48.044 4.314-4.313 4.035-4.04V6.85l7.795 6.403 4.502-.786-4.876 4.87 9.908 11.62"></path></svg>'
    },
    blogger_post: {
      background_color:"#fda352",
    title: "Blogger Post",
    redirect_url: "https://www.blogger.com/blog_this.pyra?t=&u=" + postUrl + "&l&n=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path stroke="#fff" stroke-width="2" fill="none" d="M12.393 6.112h4.367c1.61.19 3.96 1.572 4.824 3.41.238.515.363.594.56 2.12.106.786.16 1.367.51 1.69.495.45 2.333.147 2.696.43l.277.22.166.343.06.277-.04 5.048c-.02 3.43-2.81 6.238-6.244 6.238h-7.177c-3.436 0-6.244-2.81-6.244-6.238v-7.29c-.003-3.434 2.806-6.248 6.242-6.248z"/><path fill="none" stroke="#fff" stroke-width="1.5" d="M12.47 11.22h3.464c.66 0 1.195.534 1.195 1.188 0 .653-.538 1.195-1.198 1.195H12.47c-.66 0-1.194-.542-1.194-1.195 0-.654.535-1.19 1.195-1.19zm0 7.15h7.038c.654 0 1.19.534 1.19 1.188 0 .646-.535 1.188-1.19 1.188H12.47c-.66 0-1.194-.54-1.194-1.188 0-.654.535-1.19 1.195-1.19z"/></svg>'
    },
    typepad_post: {
      background_color:"#2a2a2a",
    title: "TypePad Post",
    redirect_url: "https://www.typepad.com/services/quickpost/post?v=2&qp_show=ac&qp_title=" + postTitle + "&qp_href=" + postUrl + "&qp_text=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#D2DE61" d="M16 8.875c-6.627 0-12 3.225-12 7.202 0 .844.342 2.21.787 2.407.447.196 1.67.683 12.523-3.836 0 0-9.096 4.09-9.83 5.85-.253.605 2.154 2.627 8.52 2.627 6.626 0 12-3.148 12-7.125s-5.374-7.125-12-7.125z"/></svg>'
    },
    buffer: {
      background_color:"#000",
    title: "Buffer",
    redirect_url: "https://bufferapp.com/add?url=" + postUrl + "&text=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-4 -4 38 39"><path stroke="#fff" d="M 15 6 l -10 5 l 10 5 l 10 -5 z" stroke-width="0" fill="#fff"></path><path stroke="#fff" d="M 5.5 14.5 l 9.5 5 l 9.5 -5 m -19 4 l 9.5 5 l 9.5 -5" stroke-width="2" fill="none"></path></svg>'
    },
    flipboard: {
      background_color:"#c00",
    title: "Flipboard",
    redirect_url: "https://share.flipboard.com/bookmarklet/popout?v=2&url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M19 19H7V7h12v12z"/><path fill="#fff" d="M25 13H7V7h18v6z"/><path fill="#fff" d="M13 25H7V7h6v18z"/></svg>'
    },
    pocket: {
      background_color:"#f0f0f0",
    title: "Pocket",
    redirect_url: "https://getpocket.com/edit?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#EE4056" d="M16.005 6.244c2.927 0 5.854-.002 8.782 0 1.396.002 2.195.78 2.188 2.165-.015 2.483.116 4.985-.11 7.454-.75 8.204-10.027 12.607-16.91 8.064-3.086-2.037-4.82-4.926-4.917-8.673-.06-2.34-.034-4.684-.018-7.025.008-1.214.812-1.98 2.056-1.983 2.975-.01 5.952-.005 8.93-.007zm-5.037 5.483c-.867.093-1.365.396-1.62 1.025-.27.67-.078 1.256.417 1.732a529.74 529.74 0 0 0 5.09 4.838c.745.695 1.537.687 2.278-.01a473.74 473.74 0 0 0 4.93-4.686c.827-.797.91-1.714.252-2.38-.694-.704-1.583-.647-2.447.17-1.097 1.04-2.215 2.06-3.266 3.143-.485.492-.77.432-1.227-.027a87.392 87.392 0 0 0-3.39-3.225c-.325-.29-.77-.448-1.017-.584z"></path></svg>'
    },
    fark: {
      background_color:"#555",
    title: "Fark",
    redirect_url: "https://cgi.fark.com/cgi/fark/submit.pl?new_url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M22.925 9.77V5.613H9.075v20.772h5.54v-8.31h8.31v-4.153h-8.31V9.77"/></svg>'
    },
    fintel: {
      background_color:"#087515",
    title: "Fintel",
    redirect_url: "https://fintel.io/submit?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="-110 -120 428 494" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#fff" points="108,274 48,274 48,152 0,152 0,95 48,95 48,0 208,0 208,56 108,56 108,95 180,95 180,151 108,151 "/><polygon fill="#fff" points="99,272 103,272 103,147 175,147 175,100 103,100 103,52 203,52 203,7 199,7 199,48 98,48 98,104 171,104 171,142 99,142 "/></g></svg>'
    },
    yummly: {
      background_color:"#e16120",
    title: "Yummly",
    redirect_url: "https://www.yummly.com/urb/verify?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 30 30"><path stroke="#fff" d="M 10.5 10 q 4 -2 2.5 1 l -1 4 q 0 2 5 0 l 1 -6.5 m -1 6.5 l -1 4 c -3 6 -6 -1 0 -1 q 1 -1 5 1" stroke-width="2" fill="none"></path></svg>'
    },
    app_net: {
      background_color:"#5d5d5d",
    title: "App.net",
    locale: "en-US",
    redirect_url: "https://account.app.net/login/",
    svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M16 7.158L4.156 25h2.422l2.695-4h13.453l2.695 4h2.425L16 7.158zM10.82 19L16 11.2l5.178 7.8H10.82z"/></svg>'
    },
    Symbaloo_Feeds: {
      background_color:"#6da8f7",
    title: "Symbaloo Feeds",
    redirect_url: "https://www.symbaloo.com/"+postUrl,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path d="M7 7h4.5v4.5H7zm6.75 0h4.5v4.5h-4.5zm6.75 0H25v4.5h-4.5zM7 13.75h4.5v4.5H7zm6.75 0h4.5v4.5h-4.5zm6.75 0H25v4.5h-4.5zM7 20.5h4.5V25H7zm6.75 0h4.5V25h-4.5zm6.75 0H25V25h-4.5z" fill="#FFF"/></svg>'
    },
    Outlook_com: {
      background_color:"#0072c6",
    title: "Outlook.com",
    redirect_url: "https://mail.live.com/default.aspx?rru=compose?subject="+postTitle+"&body="+postUrl+"&lc=1033&id=64855&mkt=en-us&cbcxt=mai",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-4 -3.5 40 40"><path fill="#fff" d="M19.52 8.29v5.5l1.92 1.208c.053.016.163.016.212 0l8.27-5.574c0-.66-.613-1.134-.962-1.134h-9.44z"/><path fill="#fff" d="M19.52 15.84l1.755 1.204c.246.183.543 0 .543 0-.297.183 8.104-5.397 8.104-5.397V21.75c0 1.102-.704 1.562-1.496 1.562H19.52V15.84z"/><g fill="#fff"><path d="M10.445 13.305c-.6 0-1.073.282-1.426.842-.355.56-.53 1.305-.53 2.23 0 .936.175 1.677.53 2.22.347.546.813.82 1.38.82.59 0 1.055-.266 1.4-.795.344-.53.517-1.266.517-2.206 0-.984-.17-1.744-.502-2.288-.333-.55-.79-.823-1.37-.823z"/><path d="M2.123 5.5v21.51l16.362 3.428V2.33L2.123 5.5zm10.95 14.387c-.693.91-1.594 1.367-2.706 1.367-1.082 0-1.967-.442-2.65-1.324-.68-.88-1.02-2.03-1.02-3.448 0-1.496.343-2.707 1.037-3.63.693-.926 1.614-1.388 2.754-1.388 1.08 0 1.955.438 2.62 1.324.667.885 1 2.05 1 3.495.004 1.496-.345 2.695-1.034 3.604z"/></g></svg>'
    },
    balatarin: {
      background_color:"#fff",
    title: "Balatarin",
    redirect_url: "https://www.balatarin.com/login",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#B90E10" d="M29 17H3v10c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2V17z"/><path fill="#fff" d="M12 22h8v2h-8z"/><path fill="#079948" d="M29 15H3V5c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2v10z"/><g fill="#fff"><path d="M15 5h2v8h-2z"/><path d="M12 8h8v2h-8z"/></g></svg>'
    },
    bibSonomy: {
      background_color:"#000",
    title: "BibSonomy",
    redirect_url: "https://www.bibsonomy.org/login",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-7 -7 46 46"><path fill="#fff" d="M25.058 25.892c-.25 0-.484.065-.694.17l-5.907-8.2a1.548 1.548 0 0 0 .344-1.68l4.28-2.573c.288.333.71.552 1.187.552.862 0 1.56-.7 1.56-1.56 0-.776-.567-1.415-1.31-1.535V6.11a1.556 1.556 0 0 0-.25-3.095c-.862 0-1.56.7-1.56 1.56 0 .196.04.383.106.556l-4.256 2.477a1.548 1.548 0 0 0-1.2-.574c-.862 0-1.56.7-1.56 1.56 0 .778.567 1.417 1.31 1.537v5.1c-.218.035-.42.112-.598.23L9.93 8.204c.213-.268.345-.6.345-.97a1.56 1.56 0 1 0-.712 1.309l6.575 7.25c-.213.267-.345.6-.345.968 0 .23.054.45.144.647L8.08 22.66a1.547 1.547 0 0 0-1.138-.5 1.56 1.56 0 1 0 1.56 1.56c0-.23-.053-.45-.144-.646l7.857-5.25c.07.076.147.144.23.204l-1.95 3.927a1.536 1.536 0 0 0-.457-.076c-.862 0-1.56.695-1.56 1.56a1.56 1.56 0 1 0 2.468-1.27l1.95-3.926c.146.045.297.076.458.076.25 0 .484-.064.694-.17l5.907 8.2a1.56 1.56 0 1 0 1.103-.459zM18.914 8.59c0-.197-.04-.383-.106-.556l4.257-2.473c.236.29.567.49.95.55v4.96a1.558 1.558 0 0 0-1.197 2.115l-4.278 2.573a1.542 1.542 0 0 0-.935-.53v-5.102a1.555 1.555 0 0 0 1.31-1.534z"/></svg>'
    },
    Bitty_Browser: {
      background_color:"#3d3c3b",
    title: "Bitty Browser",
    redirect_url: "http://www.bitty.com/manual/?contenttype=&contentvalue=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M4 4h12v12H4z"/><path fill="#fff" d="M20 4v16H4v8h24V4"/></svg>'
    },
    Blinklist: {
      background_color:"#3d3c3b",
    title: "Blinklist",
    locale: "en-US",
    redirect_url: "https://blinklist.com/blink?t=" + postTitle + "&d=&u=" + postUrl,
    svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#FFF"><path d="M3 10.35v11.3l8.977-5.418"/><path d="M17.55 27.454c-4.397 0-8.314-2.39-10.205-6.36l1.675-1.04c1.558 3.274 4.906 5.388 8.53 5.388 5.204 0 9.438-4.235 9.438-9.44 0-5.208-4.233-9.443-9.44-9.443-3.804 0-7.22 2.26-8.7 5.763l-1.733-1.057c1.798-4.25 5.82-6.72 10.434-6.72C23.86 4.546 29 9.683 29 15.996c0 6.317-5.136 11.457-11.45 11.457z"/><path d="M11.425 18.623c1.02 2.406 3.403 4.09 6.18 4.09 3.71 0 6.715-3.006 6.715-6.712 0-3.71-3.005-6.712-6.714-6.712-2.887 0-5.35 1.823-6.295 4.38l3.958 2.566-3.84 2.39z"/></g></svg>'
    },
    BlogMarks: {
      background_color:"#535353",
    title: "BlogMarks",
    redirect_url: "https://blogmarks.net/my/new.php?mini=1&simple=1&title=" + postTitle + "&url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M3 10.35v11.3l8.977-5.418"/><path d="M17.55 27.454c-4.397 0-8.314-2.39-10.205-6.36l1.675-1.04c1.558 3.274 4.906 5.388 8.53 5.388 5.204 0 9.438-4.235 9.438-9.44 0-5.208-4.233-9.443-9.44-9.443-3.804 0-7.22 2.26-8.7 5.763l-1.733-1.057c1.798-4.25 5.82-6.72 10.434-6.72C23.86 4.546 29 9.683 29 15.996c0 6.317-5.136 11.457-11.45 11.457z"/><path d="M11.425 18.623c1.02 2.406 3.403 4.09 6.18 4.09 3.71 0 6.715-3.006 6.715-6.712 0-3.71-3.005-6.712-6.714-6.712-2.887 0-5.35 1.823-6.295 4.38l3.958 2.566-3.84 2.39z"/></g></svg>'
    },
    Bookmarks_fr: {
      background_color:"#e8ead4",
    title: "Bookmarks.fr",
    redirect_url: "https://www.bookmarks.fr/Connexion/?action=add&address=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#CC3467" d="M27.256 9.5c-2.188-3.79-6.36-.54-7.83 2.205 1.073.86 1.802 2.112 2.006 3.475 3.103.094 8.023-1.873 5.824-5.68-.7-1.212.515.894 0 0z"/><path fill="#96C044" d="M15.998 3c-4.368 0-3.664 5.23-2.013 7.886 1.283-.505 2.74-.505 4.023 0C19.66 8.23 20.366 3 15.998 3z"/><path fill="#CC3467" d="M9.255 8.294c-1.108-.64-2.42-.918-3.49-.053-.96.78-1.79 2.268-1.617 3.538.352 2.564 4.32 3.468 6.416 3.405.204-1.363.934-2.618 2.01-3.477-.67-1.256-1.898-2.59-3.32-3.41-.71-.41 1.422.82 0 0z"/><path fill="#96C044" d="M11.426 19.05c-.447-.67-.744-1.435-.862-2.23-2.785-.084-7.768 1.608-6.056 5.24 2.023 4.292 6.448 1.248 8.063-1.765-.44-.354-.83-.773-1.142-1.246-.132-.198.314.47 0 0z"/><path fill="#CC3467" d="M18.202 21.458c-.064-.12-.13-.232-.198-.342-1.28.503-2.737.503-4.02 0C12.338 23.766 11.624 29 16 29c4.218 0 3.67-4.848 2.204-7.542-.064-.12.678 1.243 0 0z"/><path fill="#96C044" d="M27.83 20.088c-.478-2.46-4.326-3.33-6.398-3.27-.204 1.364-.933 2.617-2.007 3.476.934 1.744 2.858 3.73 4.913 4.006 2.043.276 3.853-2.332 3.49-4.212-.153-.8.137.706 0 0z"/></svg>'
    },
    BuddyMarks: {
      background_color:"#ffd400",
    title: "BuddyMarks",
    redirect_url: "http://buddymarks.com/login.php?bookmark_title=" + postTitle + "&bookmark_url=" + postUrl + "&bookmark_desc=&bookmark_tags=",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><circle cx="19.587" cy="7.172" r="4.209"/><path d="M21.374 11.668h-3.572c-.085 0-.168.01-.253.013.32.68.51 1.437.51 2.236 0 1.476-.62 2.807-1.61 3.756 2.314.69 4.084 2.656 4.486 5.08 3.414-.15 5.382-1.114 5.513-1.18l.282-.145h.03V17.06c0-2.97-2.418-5.39-5.39-5.39z"/></g><g fill="#fff"><circle cx="12.413" cy="13.439" r="4.209"/><path d="M14.198 17.937h-3.57c-2.973 0-5.39 2.417-5.39 5.388v4.37l.01.067.303.095c2.838.885 5.3 1.18 7.33 1.18 3.96 0 6.257-1.13 6.398-1.2l.282-.142h.027v-4.37c0-2.97-2.416-5.388-5.388-5.388z"/></g></svg>'
    },
    Care2_news: {
      background_color:"#6eb43f",
    title: "Care2 News",
    redirect_url: "https://www.care2.com/passport/login.html?promoID=10&pg=http://www.care2.com/news/compose?sharehint=news&share[share_type]news&bookmarklet=Y&share[title]=",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M20.56 21.21c1.558.926 3.202 1.637 4.95 2.122.746.207 1.255.03 1.596-.673.102-.21.25-.404.4-.586 2.322-2.812 1.91-6.988-1.06-7.983.66-.517.662-1.2.47-1.92-.156-.59-.265-1.204-.492-1.767-.514-1.278-.694-2.603-.77-3.964-.047-.814-.1-1.767-1-2.068-.875-.292-1.54.357-2.09.977-1.85 2.082-2.9 4.576-3.644 7.22-.372 1.33-.7 2.676-1.077 4.12-.332-.34-.57-.837-.925-.897-.14-.376-.74-2.2.177-3.78.02-.008.033-.022.047-.037l.174-.22c.05-.063.037-.15-.024-.2-.06-.048-.15-.037-.196.025l-.174.223c-.033.04-.035.093-.02.138-.84 1.48-.432 3.147-.23 3.76-.422-.616-1.416-1.792-2.95-2.06-.024-.04-.067-.067-.116-.067h-.28c-.08 0-.143.063-.143.14 0 .08.062.142.142.142h.28c.023 0 .043-.007.062-.017 1.54.254 2.51 1.48 2.884 2.046-.38.265.127.786.08 1.276-1.986-1.483-4.072-2.605-6.244-3.572-1.956-.87-3.89-1.798-6.008-2.233-.47-.097-.977-.107-1.25.41-.25.474-.093.936.19 1.34.153.222.347.434.566.585 2.44 1.678 4.303 3.93 6.212 6.145.446.517.896 1.027 1.665 1.065.25.012.455.132.445.446v.123c.047.827.25 1.5.774 2.28 1.365 1.67 3.08 2.88 5.054 3.7.4.167.73.25 1.01.25.685 0 1.018-.517 1.116-1.578.026-1.45-.42-2.82-.863-4.154.352-.27.517.24.788.065.237-.33-.216-.68.018-1.08.172.097.316.173.456.256z"/></svg>'
    },
    Diary_Ru: {
      background_color:"#e8d8c6",
    title: "Diary.Ru",
    redirect_url: "https://www.diary.ru/?newpost&title=" + postTitle + "&text=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 24.807C9.48 27.807 4.192 22.522 4.192 16 4.192 9.48 9.48 4.193 16 4.193c3.92 0 7.392 1.91 9.54 4.85h-8.308s-2.863.397-3.18 2.544c-.34 2.293-1.988 2.465-1.988 2.465h-4.69v1.51h9.74c.206-1.086 1.16-1.907 2.305-1.907 1.143 0 2.096.82 2.302 1.908h1.632v.874h-1.632c-.206 1.087-1.16 1.91-2.305 1.91-1.147 0-2.1-.823-2.306-1.91H7.37v1.59h4.69s1.67 0 1.988 2.464c.304 2.356 3.18 2.548 3.18 2.548h8.25c-2.15 2.895-5.596 4.77-9.48 4.77z"/></svg>'
    },
   
    Folkd: {
      background_color:"#0f70b2",
    title: "Folkd",
    redirect_url: "https://www.folkd.com/page/social-bookmarking.html?addurl=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M19.956 10.21c-.183.192-.613.138-.99.14-.102.317-.126.71-.283.974.626.496 1.85.406 2.405.972 1.197-.444.245-1.354.99-2.085 1.134-.14 1.386.588 1.697 1.254-.267.247-.936.102-1.415.14-.26.208-.333.6-.565.833.258.58.96.724 1.133 1.39 1.454-.376 2.954-.71 4.526-.973.41-.43.317-1.356.99-1.53 1.104.213 1.46 1.16 1.556 2.363-.586 1.043-2.1.605-2.546-.277-1.465.226-2.867.52-4.245.832-.11.325.1 1.263-.144 1.81.926.625 1.29-.49 2.122-.42.48.503.495 2.374-.566 2.224-.604-.053-.674-.634-.708-1.25-.432.1-.515-.143-.85-.14-.646.383-.97 1.083-1.695 1.39.094 1.236 1.462.38 2.12.974-.057 1.01-.8 1.345-1.838 1.39-.066-.836.216-1.503-.707-1.945-.94.142-1.37.782-2.264.973-.013.43.175.664.284.972.248.17 1.165-.21 1.415.278-.01 1.075-1.473 1.828-2.264 1.25-.063-.616.382-.734.565-1.11-.267-.293-.405-.713-.564-1.112-.878.342-1.665.773-2.83.834.004.327-.243.41-.14.833-.056.518.68.26.706.696.24 1.26-1.777 1.455-2.12.555-.03-.86 1.033-.65.706-1.808-.713-.274-1.917-.063-2.55-.417-.374.14-.382.644-.706.835.065.4.5.436.425.974-.925.36-2.313.07-2.12-1.114.533-.615 1.49-.076 1.835-.973-.557-.656-1.166-1.263-1.413-2.223-2.124.464-3.843 1.323-5.8 1.947-.187.467-.196 1.107-.566 1.39-.59.148-.625.036-1.273 0-.56-.854-.257-2.7.85-2.78.61-.135.41.523.85.557 2.016-.472 3.78-1.195 5.8-1.667-.433-2.485 3.206-4.233-.85-3.893-.396-1.225.373-2.164 1.13-2.085 1.273.132.285 1.725 1.273 2.224.908-.498 1.543-1.263 2.69-1.53.08-.45-.097-.646-.143-.972-.088-.33-.87.02-.99-.28v-.97c.46-.426 1.663-.355 1.98.138.114.623-.25.773-.706.834.037.427.308.626.424.972.9-.37 2.268-.273 3.538-.277.2-.17.266-.48.28-.836.108-.522-.75-.095-.564-.694.156-1.48 2.125-.633 2.12.416zm1.132 6.256c.652-.378.368-1.677.424-2.64-1.742-1.426-2.885 2.7-.424 2.64zm-6.224 1.53c1.3.173 3.114-1.23 2.97-2.502-.14-1.227-2.55-2.332-3.96-1.67-1.815.858-.44 3.98.99 4.17z"/></svg>'
    },
    Hatena: {
      background_color:"#00a6db",
    title: "Hatena",
    redirect_url: "https://b.hatena.ne.jp/bookmarklet?url=" + postUrl + "&btitle=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M6.96 8.33h7.328c1.247 0 2.206.366 2.875 1.098.666.733 1.002 1.64 1.002 2.72 0 .91-.24 1.688-.715 2.336-.318.433-.784.773-1.396 1.023.928.266 1.614.72 2.05 1.367.44.645.66 1.457.66 2.432 0 .795-.157 1.512-.468 2.146-.314.635-.74 1.14-1.28 1.508-.337.23-.842.396-1.52.502-.9.14-1.498.21-1.79.21H6.958V8.328zm3.877 6.017h1.74c.623 0 1.058-.13 1.302-.382.24-.255.364-.623.364-1.104 0-.442-.123-.793-.366-1.045-.245-.25-.67-.377-1.276-.377h-1.767v2.91zm0 6.027h2.038c.69 0 1.176-.145 1.458-.434.282-.29.425-.68.425-1.168 0-.453-.142-.818-.42-1.092-.28-.277-.77-.414-1.47-.414h-2.03v3.108zM21.213 8.52h3.584v9.58h-3.584z"/><circle cx="23.005" cy="21.635" r="2.036"/></g></svg>'
    },
    Jamespot: {
      background_color:"#ff9e2c",
    title: "Jamespot",
    redirect_url: "http://my.jamespot.com/",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M12.427 24.073c.677.4 1.633.708 2.927.708 1.848 0 2.587-.83 2.587-2.71V5h2.436v17.13c0 2.745-1.478 4.87-5.176 4.87-1.664 0-2.99-.4-3.573-.678l.8-2.25z"/></svg>'
    },
    Kakao: {
      background_color:"#fcb700",
    title: "Kakao",
    redirect_url: "https://story.kakao.com/share?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M20.345 6h-8.688c-.583 0-1.06.45-1.06 1.005v8.814c0 .553.477 1.003 1.06 1.003h4.007c-.03.98-.445 2.056-1.077 2.996-.612.904-1.613 1.796-2.156 2.223l-.04.032c-.117.107-.202.23-.204.405-.003.13.07.232.15.34l.018.022 2.774 2.975s.137.137.247.163c.126.03.27.032.368-.042 4.84-3.56 5.537-8.023 5.66-10.44V7.004C21.403 6.45 20.93 6 20.346 6"/></svg>'
    },
    Kindle_It: {
      background_color:"#2a2a2a",
    title: "Kindle_It",
    redirect_url: "https://fivefilters.org/kindle-it/send.php?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#FFA036" d="M12.927 27H10V5h2.927v11.754l5.15-5.47h3.683l-5.814 6.067L22 27h-3.407l-4.704-7.763-.964 1.037V27z"/></svg>'
    },
    Known: {
      background_color:"#fff101",
    title: "Known",
    redirect_url: "https://withknown.com/share/?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M16.38 2.65c-7.45 0-13.5 6.048-13.5 13.5s6.05 13.5 13.5 13.5 13.5-6.048 13.5-13.5-6.04-13.5-13.5-13.5zm.078 25.203c-6.387 0-11.57-5.184-11.57-11.572 0-6.385 5.183-11.57 11.57-11.57 6.387 0 11.57 5.185 11.57 11.57.002 6.39-5.175 11.574-11.57 11.574z"/><path fill="#fff" d="M23.856 21.758c-.393 0-.694-.07-.903-.2-.154-.094-.4-.402-.74-.91l-3.934-5.964 3.3-3.2c.254-.248.463-.433.625-.54s.293-.178.41-.217c.107-.03.308-.046.593-.046h.207v-.01l.555-.01V8.55h-.648v.01h-6.087v2.12h.548c.31 0 .494.023.57.077.078.054.117.13.117.23 0 .055-.023.11-.062.18-.04.068-.154.2-.34.4l-4.257 4.436v-4.08c0-.402.03-.68.1-.826.07-.147.178-.262.34-.34.1-.053.363-.076.78-.076h.44V8.56H8.8v2.113h.563c.34 0 .58.04.71.116.132.075.225.19.286.345.06.154.084.455.084.91v8.37c0 .478-.022.78-.076.903-.062.153-.154.26-.285.33-.132.07-.394.11-.78.11H8.8v2.12h6.666v-2.12h-.556c-.363 0-.61-.032-.733-.094s-.216-.162-.278-.31c-.063-.145-.1-.408-.1-.786v-1.543l2.067-2.013 2.4 3.842c.2.332.3.54.3.625 0 .077-.054.147-.162.2-.108.054-.417.077-.918.077h-.278v2.12h6.89v-2.12h-.24z"/></svg>'
    },
    Line: {
      background_color:"#00c300",
    title: "Line",
    redirect_url: "https://social-plugins.line.me/lineit/share?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M28 14.304c0-5.37-5.384-9.738-12-9.738S4 8.936 4 14.304c0 4.814 4.27 8.846 10.035 9.608.39.084.923.258 1.058.592.122.303.08.778.04 1.084l-.172 1.028c-.05.303-.24 1.187 1.04.647s6.91-4.07 9.43-6.968c1.737-1.905 2.57-3.842 2.57-5.99zM11.302 17.5H8.918c-.347 0-.63-.283-.63-.63V12.1c0-.346.283-.628.63-.628.348 0 .63.283.63.63v4.14h1.754c.35 0 .63.28.63.628 0 .347-.282.63-.63.63zm2.467-.63c0 .347-.284.628-.63.628-.348 0-.63-.282-.63-.63V12.1c0-.347.282-.63.63-.63.346 0 .63.284.63.63v4.77zm5.74 0c0 .27-.175.51-.433.596-.065.02-.132.032-.2.032-.195 0-.384-.094-.502-.25l-2.443-3.33v2.95c0 .35-.282.63-.63.63-.347 0-.63-.282-.63-.63V12.1c0-.27.174-.51.43-.597.066-.02.134-.033.2-.033.197 0 .386.094.503.252l2.444 3.328V12.1c0-.347.282-.63.63-.63.346 0 .63.284.63.63v4.77zm3.855-3.014c.348 0 .63.282.63.63 0 .346-.282.628-.63.628H21.61v1.126h1.755c.348 0 .63.282.63.63 0 .347-.282.628-.63.628H20.98c-.345 0-.628-.282-.628-.63v-4.766c0-.346.283-.628.63-.628h2.384c.348 0 .63.283.63.63 0 .346-.282.628-.63.628h-1.754v1.126h1.754z"/></svg>'
    },
    LiveJournal: {
      background_color:"#ededed",
    title: "LiveJournal",
    redirect_url: "https://www.livejournal.com/update.bml?subject=" + postTitle + "&event=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M7.08 9.882l.004-.008.004-.01c.195-.408.422-.81.674-1.192.264-.393.53-.75.81-1.06 1.493-1.683 3.524-2.692 6.08-3.015l.733-.097.426.61 8.426 12.14.188.27.027.328.608 7.65.164 2.002-1.854-.783-7.23-3.053-.325-.143-.208-.286-8.422-12.14-.4-.574.3-.638zm2.72.13c-.06.097-.118.202-.18.305l7.79 11.235 5.05 2.13-.427-5.32-7.79-11.226c-1.603.326-2.884 1.032-3.84 2.102-.227.252-.428.514-.602.775z"/><path fill="#FFC805" d="M8.186 10.4c1.283-2.66 3.488-4.192 6.62-4.594l8.423 12.14.61 7.648-7.23-3.057L8.186 10.4z"/><path fill="#fff" d="M15.158 6.316l1.89 2.717c-2.597.352-5.354 2.552-6.603 4.62l-1.898-2.735c1.115-2.09 4.27-4.18 6.61-4.602z"/><path fill="#9291AD" d="M13.285 10.666c-1.22.873-2.197 1.915-2.84 2.987l-1.898-2.735c.557-1.043 1.654-2.108 2.875-2.944l1.863 2.692z"/><path fill="#fff" d="M7.215 10.283c1.35-3.24 4.182-4.8 7.568-5.527l.55-.026.38.397.314.322 1.14 1.817-1.835.243h-.012c-.242.038-.512.108-.8.212h-.003c-.3.1-.613.238-.957.406-1.69.837-3.4 2.216-3.898 3.306l-.928 1.746-1.252-1.66-.166-.285-.25-.453.15-.5z"/><path fill="#F5A8AA" d="M8.33 10.597c.95-2.725 3.1-4.214 6.504-4.615l.314.322c-2.3.35-5.756 2.777-6.598 4.62l-.22-.327z"/><path fill="#485E85" d="M23.69 22.727l.283 3.084-2.924-1.235 1.224-1.202"/><path fill="#fff" d="M16.41 21.274c.053-.062.113-.133.176-.197.635-.712 1.287-1.447 1.43-2.695l-4.875-7.02c-.436.35-.832.706-1.176 1.062-.363.382-.674.775-.924 1.168l5.37 7.682zm.93.483c-.203.222-.398.445-.572.665l-.416.54-.402-.566-5.94-8.49-.183-.265.166-.282c.318-.558.73-1.097 1.236-1.63.494-.526 1.076-1.027 1.726-1.5l.424-.305.296.425 5.27 7.6.103.15-.014.17c-.113 1.718-.92 2.615-1.697 3.49z"/><path fill="#6A9AC2" d="M16.367 22.11c.846-1.09 2.03-1.903 2.164-3.868l-5.273-7.602c-1.27.914-2.227 1.933-2.83 2.97l5.94 8.5z"/><path fill="#fff" d="M22.125 17.31c-.09.026-.168.062-.248.093-.89.35-1.81.71-3.027.396l-4.87-7.02c.48-.29.95-.53 1.405-.73.486-.208.96-.36 1.42-.464l5.32 7.724zm.12 1.037c.28-.11.563-.22.823-.294l.658-.21-.39-.568-5.888-8.532-.18-.267-.32.052c-.635.105-1.287.3-1.967.59-.66.286-1.67.887-2.342 1.33l5.893 8.313c1.647.49 2.627.014 3.717-.412z"/><path fill="#A1BBD6" d="M22.896 17.537c-1.312.41-2.498 1.232-4.383.67l-5.272-7.6c1.303-.87 2.59-1.412 3.77-1.605l5.887 8.535z"/><path fill="#fff" d="M18.248 8.95l-1.846.24v-.004c-.244.04-.514.113-.8.214h-.01c-2.726.944-4.46 2.964-5.784 5.454l-.68-1.004c.604-.86 2.52-5.224 8.484-5.94.27.258.415.692.636 1.04z"/></svg>'
    },
    Mail_Ru: {
      background_color:"#356fac",
    title: "Mail.Ru",
    redirect_url: "https://connect.mail.ru/share?share_url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#F89C0E" d="M19.975 15.894c-.134-2.542-2.02-4.07-4.3-4.07h-.086c-2.63 0-4.09 2.068-4.09 4.417 0 2.633 1.765 4.296 4.077 4.296 2.58 0 4.275-1.89 4.4-4.127l-.003-.515zm-4.37-6.346c1.755 0 3.407.776 4.62 1.993v.006c0-.584.395-1.024.94-1.024h.14c.85 0 1.025.808 1.025 1.063l.005 9.08c-.06.595.613.9.988.52 1.457-1.497 3.203-7.702-.907-11.295-3.83-3.352-8.967-2.8-11.7-.916-2.904 2.003-4.764 6.438-2.958 10.603 1.968 4.543 7.6 5.896 10.947 4.546 1.696-.684 2.48 1.607.72 2.355-2.66 1.132-10.066 1.02-13.525-4.972-2.338-4.046-2.212-11.163 3.987-14.85 4.74-2.822 10.99-2.042 14.762 1.895 3.937 4.117 3.705 11.82-.137 14.818-1.742 1.36-4.326.035-4.312-1.947l-.02-.647c-1.21 1.203-2.824 1.905-4.58 1.905-3.475 0-6.53-3.056-6.53-6.528 0-3.508 3.057-6.6 6.533-6.6"/></svg>'
    },
    Mendeley: {
      background_color:"#a70805",
    title: "Mendeley",
    redirect_url: "https://www.mendeley.com/sign-in/",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M26.596 18.11c-1.466-.087-2.02-.834-1.93-2.164.076-1.113.274-2.22.418-3.327-.023-1.743-.942-3.13-2.488-3.59-1.583-.47-2.97-.14-4.102 1.15-2.322 2.646-2.616 2.634-5.023-.045-1.152-1.28-2.852-1.66-4.39-.98-1.5.667-2.37 2.237-2.15 3.954.08.625.278 1.235.377 1.863.338 2.122-.105 2.7-2.226 3.147-1.066.228-1.913.786-2.05 1.99-.137 1.22.17 2.39 1.404 2.75.77.226 1.853.084 2.55-.32.96-.553 1.064-1.64.733-2.74-.62-2.05-.027-3.04 2.115-3.34.836-.117 1.766-.022 2.568.235 1.302.41 1.692 1.373 1.175 2.65-.45 1.1-.443 2.09.39 2.984.84.9 2.417 1.08 3.518.435 1.12-.657 1.497-1.807 1.042-3.164-.608-1.814-.085-2.783 1.807-3.123.7-.126 1.463-.113 2.16.025 1.834.367 2.377 1.377 1.84 3.188-.504 1.698.196 3.09 1.72 3.43 1.332.295 2.624-.607 2.89-2.022.308-1.633-.593-2.882-2.344-2.988zm-10.71-.085c-1.374-.06-2.453-1.194-2.445-2.57.01-1.46 1.148-2.567 2.61-2.54 1.467.026 2.57 1.177 2.523 2.627-.05 1.43-1.255 2.545-2.687 2.483z"/></svg>'
    },
    Meneame: {
      background_color:"#ff7d12",
    title: "Meneame",
    redirect_url: "https://www.meneame.net/submit.php?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M25.514 10.435c-1.582 1.605-4.438 1.56-5.502 3.726-.906 2.57 1.23 6.677 2.12 9.02.603 1.21-4.716 2.378-4.065 2.677 3.754-.043 5.354-1.412 4.904-3.094-.43-1.607-2.376-4.816-2.376-7.383.056-1.938 2.222-2.533 3.618-3.322 1.622-.727 3.14-2.35 2.72-4.25-.018-.672-1.187-2.907-.71-1.175.26 1.278.385 2.856-.706 3.802z"/><path d="M20.632 7.546C18.59 6.492 16.32 5.854 13.946 6.41c-1.277.236-2.78.933-3.637 2.1-1.123 1.34-1.166 3.288-.43 4.82.57 1.18 1.44 2.492 2.85 2.688 1.21.182 2.54.018 3.566-.683-1.223.21-2.64.646-3.736-.172-1.842-1.177-2.735-3.85-1.618-5.8.898-1.7 2.705-2.178 4.62-2.262 2.55-.11 4.995 1.345 5.934 1.7.903.285 2.2.645 2.844-.315.376-.446.226-1.674-.08-1.788.09.86-.543 1.943-1.524 1.66-.736-.17-1.41-.523-2.104-.81zM6.94 15.156c-1.183 1.865-2.264 4.05-1.85 6.322.38 2.375 2.678 4.05 4.963 4.35 2.348.273 4.69.205 7.043.035.397-.385-1.92-.373-2.895-.514-2.224-.254-4.64-.3-6.55-1.623-1.775-1.33-2.01-3.938-1.155-5.863.714-1.814 1.782-3.568 2.903-5.084-.876.727-1.683 1.27-2.456 2.376z"/><path d="M12.787 21.02c1.386.107 3.688-.032 4.768.724.387.582-.332 3.802-.084 4.174.553.162 1.186-3.773.836-4.75-.266-.75-4.966-.352-5.518-.147z"/></g></svg>'
    },
    Mix: {
      background_color:"#ff8226",
    title: "Mix",
    redirect_url: "https://mix.com/mixit?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-7 -8 45 45"><g fill="#fff"><path opacity=".8" d="M27.87 4.125c-5.224 0-9.467 4.159-9.467 9.291v2.89c0-1.306 1.074-2.362 2.399-2.362s2.399 1.056 2.399 2.362v1.204c0 1.306 1.074 2.362 2.399 2.362s2.399-1.056 2.399-2.362V4.134c-.036-.009-.082-.009-.129-.009"/><path d="M4 4.125v12.94c2.566 0 4.668-1.973 4.807-4.465v-2.214c0-.065 0-.12.009-.176.093-1.213 1.13-2.177 2.39-2.177 1.325 0 2.399 1.056 2.399 2.362v9.226c0 1.306 1.074 2.353 2.399 2.353s2.399-1.056 2.399-2.353v-6.206c0-5.132 4.233-9.291 9.467-9.291H4z"/><path opacity=".8" d="M4 17.074v8.438c0 1.306 1.074 2.362 2.399 2.362s2.399-1.056 2.399-2.362V12.61C8.659 15.102 6.566 17.074 4 17.074"/></g></svg>'
    },
    Mixi: {
      background_color:"#ededed",
    title: "Mixi",
    redirect_url: "https://mixi.jp/share.pl?u=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#D1AD5A" d="M16.09 5.246C9.617 5.246 4 9.216 4 16.63c0 6.93 7.707 10.193 12.758 9.01v2.374S28 25.054 28 15.034c0-6.11-4.505-9.788-11.91-9.788z"/><path fill="#fff" d="M22.92 20.024h-1.657v-5.688s-.505-1.586-1.585-1.586c-.9 0-2.525.374-2.525 2.08v5.193h-1.657V14.77c0-1.586-.787-2.09-1.506-2.09-1.15 0-2.727.807-2.727 2.403v4.94H9.605v-9.01h1.657v1.03c.656-.546 1.564-1.03 2.727-1.03 1.222 0 2.09.434 2.604 1.282.73-.677 1.777-1.202 3.082-1.202 1.97 0 3.24 1.788 3.24 3.202v5.73z"/></svg>'
    },
    MySpace: {
      background_color:"#2a2a2a",
    title: "MySpace",
    redirect_url: "https://myspace.com/post?u=" + encodeURIComponent(postUrl) + "&t=" + postTitle + "&l=3&c=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M24 17.716c-2.21 0-4 1.79-4 4v1.712h8v-1.713c0-2.21-1.79-4-4-4z"/><circle cx="24" cy="12.571" r="3.999"/><path d="M15.147 18.31c-2.054 0-3.72 1.66-3.72 3.71v1.408h7.437c.002-.615.002-1.148.002-1.408 0-2.05-1.664-3.71-3.72-3.71z"/><ellipse cx="15.147" cy="13.446" rx="3.719" ry="3.71"/><path d="M7.148 18.875C5.41 18.875 4 20.277 4 22.008v1.42h6.295c.002-.636.002-1.178.002-1.42 0-1.73-1.41-3.133-3.15-3.133z"/><ellipse cx="7.148" cy="14.58" rx="3.148" ry="3.133"/></g></svg>'
    },
    Netvouz: {
      background_color:"#c0ff00",
    title: "Netvouz",
    redirect_url: "https://www.netvouz.com/action/submitBookmark?url=" + postUrl + "&title=" + postTitle + "&popup=no&description=",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#6C3" d="M10.25 8.72v17.184H5.5V6.096h8.396l5.605 5.77v6.43"/><path fill="#09C" d="M21.75 23.28V6.095h4.75v19.808h-8.396L12.5 20.13v-6.427"/></svg>'
    },
    Odnoklassniki: {
      background_color:"#f2720c",
    title: "Odnoklassniki",
    redirect_url: "https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl=" + postUrl + "&st.client_id=-1",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M16 16.16a6.579 6.579 0 0 1-6.58-6.58A6.578 6.578 0 0 1 16 3a6.58 6.58 0 1 1 .002 13.16zm0-9.817a3.235 3.235 0 0 0-3.236 3.237 3.234 3.234 0 0 0 3.237 3.236 3.236 3.236 0 1 0 .004-6.473zm7.586 10.62c.647 1.3-.084 1.93-1.735 2.99-1.395.9-3.313 1.238-4.564 1.368l1.048 1.05 3.877 3.88c.59.59.59 1.543 0 2.133l-.177.18c-.59.59-1.544.59-2.134 0l-3.88-3.88-3.877 3.88c-.59.59-1.543.59-2.135 0l-.176-.18a1.505 1.505 0 0 1 0-2.132l3.88-3.877 1.042-1.046c-1.25-.127-3.19-.465-4.6-1.37-1.65-1.062-2.38-1.69-1.733-2.99.37-.747 1.4-1.367 2.768-.29C13.035 18.13 16 18.13 16 18.13s2.968 0 4.818-1.456c1.368-1.077 2.4-.457 2.768.29z"></path></svg>'
    },
    Protopage_Bookmarks: {
      background_color:"#413fff",
    title: "Protopage Bookmarks",
    redirect_url: "https://www.protopage.com/add-button-site?url=" + postUrl + "&label=&type=page",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" stroke="#fff" stroke-miterlimit="10" d="M17.866 14.47l7.626-1.048.574 3.078-7.68 1.038 3.54 7.058-2.804 1.418-3.614-7.23-5.873 5.557-2.144-2.29 5.74-5.42-6.86-3.602 1.593-2.697 6.808 3.595 1.3-7.375 3.1.546-1.303 7.374z"/></svg>'
    },
    Pusha: {
      background_color:"#0072b8",
    title: "Pusha",
    redirect_url: "https://www.pusha.se/posta?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M29.27 22.188V8.068L17.207 14.92l3.838 2.33C15.715 24.144 5.898 29.306 0 31.964V32h19.635c3.682-4.865 7.03-11.46 7.03-11.46l2.604 1.648z"></path></svg>'
    },
    Qzone: {
      background_color:"#2b82d9",
    title: "Qzone",
    redirect_url: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M27.996 12.83l-7.423-.737c-.566-.053-.694-.142-.87-.604l-3.175-7.045c-.29-.598-.765-.598-1.055 0l-3.384 7.04c-.23.393-.34.48-.898.534l-7.187.807c-.66.064-.808.493-.327.952l5.64 5.184c.266.25.27.355.195.697l-1.447 7.61c-.124.65.247.915.82.58l6.44-3.715c.45-.284.87-.293 1.31-.018l6.47 3.734c.575.334.948.07.826-.58L22.83 21.2c.66-.226 1.305-.5 1.69-.81l-.156.03c-2.29.547-5.438.872-8.355.872-1.08 0-2.128-.038-3.13-.11l-.006.005a39.39 39.39 0 0 1-2.53-.26c-.3-.05.026-.242.026-.242l7.76-5.513s.202-.126.002-.153c-3.188-.5-6.723-.627-10.042-.627h-.23c2.246-.51 5.07-.815 8.14-.815 1.81 0 3.54.105 5.11.296-.002.003.888.124 1.31.193.33.05.024.24.024.24l-7.77 5.384s-.18.107.015.136c2.39.337 5.332.457 7.98.49l-.118-.65c-.06-.38 0-.51.284-.78l5.478-5.12c.485-.455.34-.88-.318-.945z"></path></svg>'
    },
    Renren: {
      background_color:"#005eac",
    title: "Renren",
    redirect_url: "https://www.connect.renren.com/share/sharer?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M18.74 3.266a14.24 14.24 0 0 0-5.48 0c0 8.96-.07 16.176-9.26 21.662A14.406 14.406 0 0 0 8.322 29c3.595-2.168 5.688-4.736 7.69-8.275 2 3.54 4.07 6.107 7.69 8.275A14.07 14.07 0 0 0 28 24.928c-9.19-5.487-9.26-12.7-9.26-21.662z"></path></svg>'
    },
    Sina_Weibo: {
      background_color:"#ff0",
    title: "Sina Weibo",
    redirect_url: "http://service.weibo.com/share/share.php?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M13.92 24.99c-4.303.424-8.02-1.52-8.3-4.346-.278-2.827 2.987-5.463 7.292-5.888 4.304-.426 8.018 1.52 8.297 4.345.274 2.83-2.987 5.468-7.29 5.89m8.61-9.38c-.367-.11-.62-.184-.428-.663.416-1.046.458-1.946.01-2.59-.846-1.204-3.155-1.14-5.8-.03 0-.004-.834.362-.62-.297.406-1.31.345-2.407-.29-3.04-1.435-1.437-5.255.055-8.53 3.33C4.422 14.77 3 17.37 3 19.617c0 4.3 5.513 6.913 10.907 6.913 7.07 0 11.776-4.105 11.776-7.37 0-1.97-1.66-3.09-3.15-3.55m4.693-7.87a6.89 6.89 0 0 0-6.55-2.12h-.002a.997.997 0 0 0-.765 1.182.99.99 0 0 0 1.18.765 4.91 4.91 0 0 1 4.66 1.508 4.899 4.899 0 0 1 1.02 4.787.995.995 0 1 0 1.894.615v-.004a6.883 6.883 0 0 0-1.44-6.732m-2.622 2.37a3.343 3.343 0 0 0-3.192-1.03.852.852 0 0 0-.655 1.016.854.854 0 0 0 1.016.657v.003a1.655 1.655 0 0 1 1.564.502c.406.453.514 1.066.338 1.606h.005a.858.858 0 1 0 1.63.528 3.345 3.345 0 0 0-.7-3.28"></path><path d="M14.16 19.87c-.15.26-.484.383-.746.275-.256-.104-.335-.393-.19-.646.15-.255.47-.378.725-.276.26.094.35.386.21.644m-1.375 1.76c-.417.666-1.308.957-1.98.65-.66-.302-.855-1.072-.44-1.72.413-.645 1.274-.933 1.94-.653.673.287.888 1.054.48 1.724m1.564-4.7c-2.047-.533-4.364.49-5.254 2.293-.904 1.84-.028 3.884 2.04 4.552 2.144.69 4.67-.368 5.55-2.354.865-1.943-.216-3.943-2.336-4.49"></path></g></svg>'
    },
    SiteJot: {
      background_color:"#ffc800",
    title: "SiteJot",
    redirect_url: "http://www.sitejot.com/loginform.php?iSiteAdd=&iSiteDes=",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path d="M23.506 8.08c.645 0 1.3.073 1.967.225.547.12.937.285 1.173.495.236.21.354.5.354.868 0 .232-.043.414-.13.547-.086.13-.272.29-.56.48-.333.224-.524.49-.573.794-.05.3-.094 1.48-.134 3.54-.018 1.99-.033 3.183-.048 3.58-.015.4-.05.786-.107 1.16-.167 1.1-.504 1.96-1.01 2.583-.414.51-.946.912-1.596 1.205-.65.293-1.335.44-2.054.44-.64 0-1.278-.11-1.92-.326a5.407 5.407 0 0 1-1.67-.902c-.39-.315-.7-.74-.93-1.278a4.326 4.326 0 0 1-.347-1.72c0-.75.186-1.37.548-1.863.362-.49.816-.738 1.363-.738.535 0 .99.207 1.363.62.375.42.56.938.56 1.555 0 .155-.033.42-.102.787-.01.075-.017.157-.017.247 0 .24.066.437.2.587.13.15.307.227.524.227.386 0 .696-.226.933-.677.233-.45.35-1.043.35-1.78l-.01-1.024-.016-2.76c-.052-1.676-.09-2.662-.116-2.96-.027-.296-.09-.538-.195-.725-.086-.15-.162-.247-.23-.29-.065-.047-.245-.118-.538-.216-.138-.038-.256-.144-.353-.315a1.114 1.114 0 0 1-.147-.555c0-.405.122-.73.366-.975.247-.242.646-.44 1.198-.59.62-.17 1.254-.25 1.91-.25zM10.202 8c.593 0 1.37.19 2.33.574a.785.785 0 0 0 .275.068c.058 0 .23-.068.518-.203.093-.05.19-.07.294-.07.38 0 .79.4 1.22 1.193.43.797.64 1.555.64 2.275 0 .42-.097.775-.29 1.065-.19.288-.426.434-.7.434-.23 0-.418-.06-.56-.18-.146-.12-.46-.48-.95-1.07-.69-.843-1.37-1.264-2.037-1.264-.322 0-.58.102-.772.305-.19.204-.29.47-.29.8 0 .654.44 1.147 1.32 1.477 1.193.46 1.955.793 2.288 1.003 1.466.934 2.2 2.305 2.2 4.114 0 1.6-.5 2.907-1.5 3.922C13.162 23.48 11.825 24 10.175 24a8.64 8.64 0 0 1-2.33-.344c-.816-.23-1.406-.497-1.77-.805-.274-.24-.523-.762-.745-1.57a8.972 8.972 0 0 1-.33-2.36c0-.368.06-.647.174-.834.143-.24.324-.36.543-.36.22 0 .43.146.63.438.12.165.405.695.855 1.59.215.42.553.768 1.016 1.048.463.28.94.418 1.437.418.426 0 .77-.104 1.035-.31a.964.964 0 0 0 .396-.794c0-.3-.103-.56-.31-.777-.208-.22-.544-.423-1.01-.61-.823-.338-1.45-.65-1.88-.93a5.844 5.844 0 0 1-1.21-1.064c-.908-1.053-1.362-2.246-1.362-3.583 0-.66.12-1.305.355-1.932s.57-1.17 1-1.627C7.63 8.53 8.81 8 10.2 8z" fill="#fff"></path></svg>'
    },
    Slashdot: {
      background_color:"#004242",
    title: "Slashdot",
    redirect_url: "https://slashdot.org/submission?url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M20.89 6h-5L8.61 26h5"/><circle cx="20.89" cy="23.5" r="2.5"/></g></svg>'
    },
    StockTwits: {
      background_color:"#40576f",
    title: "StockTwits",
    redirect_url: "https://stocktwits.com/widgets/share?body=" + postTitle + " " + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path d="M11.328 14.309l-1.793-.736c-1.303-.536-1.955-1.244-1.955-2.123 0-.637.249-1.166.746-1.587.498-.427 1.123-.642 1.878-.642.614 0 1.115.125 1.504.373.373.218.766.684 1.178 1.399l2.204-1.306c-1.166-2.024-2.788-3.037-4.863-3.037-1.539 0-2.828.459-3.866 1.376-1.039.909-1.559 2.039-1.559 3.391 0 2.005 1.232 3.528 3.698 4.569l1.738.722c.451.194.84.399 1.167.612.326.214.593.443.799.687.206.245.358.513.455.805.097.291.146.612.146.961 0 .871-.28 1.59-.84 2.156-.56.568-1.263.851-2.111.851-1.073 0-1.889-.389-2.449-1.166-.311-.405-.529-1.135-.653-2.193L4 20.028c.249 1.679.875 2.986 1.878 3.92 1.018.936 2.309 1.403 3.872 1.403 1.648 0 3.028-.544 4.139-1.634 1.102-1.082 1.653-2.451 1.653-4.109 0-1.237-.338-2.281-1.012-3.134-.676-.852-1.743-1.573-3.202-2.165zM28 7.023H17.037v2.571h4.14v15.425h2.695V9.594H28z" fill="#fff"></path></svg>'
    },
    Svejo: {
      background_color:"#fa7aa3",
    title: "Svejo",
    redirect_url: "https://svejo.net/story/submit_by_url?url=" + postUrl + "&title=" + postTitle + "&summary=",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><g fill="#fff"><path d="M19.865 10.524c.31.16.48.29.48.29l.04-.02c.2-4.96-2.933-7.41-2.933-7.41-.688.87-1.147 2.21-1.387 3.04.26.11.51.24.76.38 2.13 1.19 2.83 2.92 3.04 3.72zm0 0c-.22-.8-.91-2.53-3.04-3.73-.25-.14-.5-.26-.76-.38-2.27-.99-4.73-.96-4.73-.96s0 2.92 3.08 4.95c.48-.17 1-.31 1.57-.42 1.81-.32 3.19.19 3.88.54zm-9.07 2.72c-.93 1.82 2.15 6.7 4.75 9.37 1.29 1.33 1.93 2.48 2.19 3.052 2.1.5 3.28-.29 3.42-.4l.07-.12c.93-1.94-1.46-4.818-3.19-7.068-2.14-2.78-2.7-4.832-2.7-4.832l-.01-.01c-3.5-1.582-4.53.008-4.53.008z"></path><path d="M21.176 25.274c-.15.11-1.32.9-3.42.4-1.1-.26-2.47-.88-4.07-2.15-2.31-1.818-4.03-3.43-5.2-5.53-.3-.528-.98-.568-1.37.2-.6 1.19-.67 4.5.7 6.44 0 0-.38 1.28.62 2.37.67.73 2.22 1.06 3.06.76l.17-.07s1.73 1.302 4.37.813c2.64-.49 4.33-1.73 5.18-3.24l-.04.007zm3.01-11.4s.38-1.28-.62-2.37c-.67-.73-2.22-1.06-3.06-.76l-.12.05-.04.02s-.17-.13-.48-.28c-.69-.36-2.07-.87-3.89-.53-.57.102-1.09.25-1.57.42-1.68.59-2.83 1.542-3.51 2.66l-.1.17s1.02-1.59 4.53-.01c.84.382 1.83.94 2.978 1.75 2.41 1.692 4.03 3.432 5.2 5.53.3.53.98.57 1.37-.198.612-1.2.682-4.512-.69-6.45z"></path></g></svg>'
    },
   
    Tuenti: {
      background_color:"#0075c9",
    title: "Tuenti",
    redirect_url: "https://www.tuenti.com/share?p=b5dd6602&url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path d="M13.907 19.803l-2.463 5.062a1.836 1.836 0 0 1-2.463.847 1.844 1.844 0 0 1-.844-2.465l2.46-5.062a1.844 1.844 0 0 1 3.314 1.618zm-.053-7.497a2.394 2.394 0 0 1-1.682.698 2.383 2.383 0 0 1-2.378-2.378c0-.626.255-1.236.7-1.68.885-.888 2.48-.888 3.36 0 .442.444.696 1.054.696 1.68 0 .626-.254 1.235-.696 1.68zm9.834 7.17a16.055 16.055 0 0 1-2.445 5.73 1.81 1.81 0 0 1-2.522.478 1.815 1.815 0 0 1-.473-2.52 12.532 12.532 0 0 0 1.896-4.448c.38-1.775.38-3.654 0-5.432a12.506 12.506 0 0 0-1.895-4.445 1.82 1.82 0 0 1 .48-2.527 1.815 1.815 0 0 1 2.522.48c1.177 1.727 2 3.655 2.442 5.73a16.68 16.68 0 0 1-.002 6.95z" fill="#fff"></path></svg>'
    },
    Twiddla: {
      background_color:"#ededed",
    title: "Twiddla",
    redirect_url: "https://www.twiddla.com/New.aspx?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M10.5 5.688l1.375 1.375-4.812 4.812L5.688 10.5A3.438 3.438 0 0 1 10.5 5.688zm2.406 2.406l-4.812 4.812 12.72 12.72L27 27l-1.375-6.188-12.72-12.718zm-.095 3.533l9.63 9.625-1.187 1.183-9.624-9.625 1.185-1.183z"></path></svg>'
    },
    Webnews: {
      background_color:"#cc2512",
    title: "Webnews",
    redirect_url: "https://www.webnews.de/login",
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M6 6h5.48v14.557h1.844V6h5.396v14.557h1.852V6H26v18.196h-1.82V26h-7.25v-1.825h-1.838V26h-7.25v-1.825H6V6z"/></svg>'
    },
    Wykop: {
      background_color:"#367da9",
    title: "Wykop",
    redirect_url: "https://www.wykop.pl/dodaj?url=" + postUrl + "&title=" + postTitle,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M23.54 3.5H8.46A4.96 4.96 0 0 0 3.5 8.46v15.08a4.96 4.96 0 0 0 4.96 4.96h15.08a4.96 4.96 0 0 0 4.96-4.96V8.46a4.96 4.96 0 0 0-4.96-4.96zM10.93 25.98L5 13.927l4.018-1.977 4.94 10.044 2.01-.988-4.94-10.043 4.016-1.977 4.942 10.043 2.01-.99L17.05 7.994l4.02-1.977L27 18.07l-16.07 7.91z"></path></svg>'
    },
    Xing: {
      background_color:"#00797d",
    title: "Xing",
    redirect_url: "https://www.xing.com/spi/shares/new?cb=0&url=" + postUrl,
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-6 -6 42 42"><path d="M 6 9 h 5 l 4 4 l -5 7 h -5 l 5 -7 z m 15 -4 h 5 l -9 13 l 4 8 h -5 l -4 -8 z" fill="#fff"></path> </svg>'
    },
    Yoolink: {
      background_color:"#a2c538",
    title: "Yoolink",
    redirect_url: "http://auth.yoolink.to/authenticate/login?service=yoolink.to&landing_path=%2Faddorshare%3Furl_value%3D" + encodeURIComponent(postUrl) + "%26title%3D" + encodeURIComponent(postTitle),
    svg: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="#fff" d="M16 4C9.37 4 4 9.373 4 16c0 6.628 5.372 12 12 12 6.626 0 12-5.372 12-12 0-6.627-5.374-12-12-12zm5.81 7.1c-.128.275-.346.655-.655 1.14l-3.694 5.942v4.908c0 .64-.14 1.118-.42 1.436a1.38 1.38 0 0 1-1.08.474c-.44 0-.8-.157-1.075-.47-.274-.313-.412-.794-.412-1.44v-4.91l-3.603-5.855c-.316-.528-.54-.94-.67-1.235-.13-.295-.197-.553-.197-.77 0-.36.133-.67.398-.93s.59-.39.98-.39c.41 0 .72.12.93.364.213.243.53.727.953 1.45l2.758 4.697 2.79-4.693c.17-.287.31-.53.423-.727.114-.198.24-.384.378-.556.14-.172.29-.305.46-.396.166-.09.37-.136.613-.136.376 0 .688.13.94.386.252.258.378.554.378.892 0 .275-.064.55-.19.823z"></path></svg>'
    }
  }
  var theChampMoreSharingServicesHtml = '<button id="the_champ_sharing_popup_close" class="close-button separated"><img src="'+ theChampCloseIconPath +'" /></button><div id="the_champ_sharing_more_content" data-href="'+ decodeURIComponent(shareContainer.getAttribute('class').indexOf('the_champ_horizontal_sharing') != -1 ? heateorSsHorSharingShortUrl : heateorSsVerticalSharingShortUrl) +'"><div class="filter"><input type="text" onkeyup="theChampFilterSharing(this.value.trim())" placeholder="'+ heateorSsMoreSharePopupSearchText +'" class="search"></div><div class="all-services"><ul class="mini">';
  for(var i in theChampMoreSharingServices){
    var tempTitle = theChampCapitaliseFirstLetter(theChampMoreSharingServices[i].title.replace(/[_. ]/g, ""));
    theChampMoreSharingServicesHtml += '<li><a rel="nofollow" class="theChamp'+i+'Share" title="'+ theChampMoreSharingServices[i].title +'" alt="'+ theChampMoreSharingServices[i].title +'" ';
    if(theChampMoreSharingServices[i].bookmarklet_url){
      theChampMoreSharingServicesHtml += 'href="' + theChampMoreSharingServices[i].bookmarklet_url + '" ';
    }else if(theChampMoreSharingServices[i].redirect_url){
      theChampMoreSharingServicesHtml += 'onclick="theChampPopup(\'' + theChampMoreSharingServices[i].redirect_url + '\')" href="javascript:void(0)" ';
    }else{
      theChampMoreSharingServicesHtml += 'href="javascript:void(0)" ';
    }
    theChampMoreSharingServicesHtml += '"><span class="the_champ_svg the_champ_s__default the_champ_s_'+ theChampMoreSharingServices[i].title.replace(' ', '_').toLowerCase() +'" style="background-color:' + theChampMoreSharingServices[i].background_color + ';width:22px;height:22px;display:block;float:left;" title="'+ theChampMoreSharingServices[i].title +'">'+ theChampMoreSharingServices[i].svg +'</span><span style="display:block;float:left;margin-left:3px;line-height:24px;" class="the_champ_more_label_'+ theChampMoreSharingServices[i].title.replace(' ', '_').toLowerCase() +'">' + theChampMoreSharingServices[i].title + '</span></a></li>';
  }
  theChampMoreSharingServicesHtml += concate;
  
  var mainDiv = document.createElement('div');
  mainDiv.innerHTML = theChampMoreSharingServicesHtml;
  mainDiv.setAttribute('id', 'the_champ_sharing_more_providers');
  var bgDiv = document.createElement('div');
  bgDiv.setAttribute('id', 'the_champ_popup_bg');
  jQuery('body').append(mainDiv).append(bgDiv);
  document.getElementById('the_champ_popup_bg').onclick = document.getElementById('the_champ_sharing_popup_close').onclick = function(){
    mainDiv.parentNode.removeChild(mainDiv);
    bgDiv.parentNode.removeChild(bgDiv);
  }
  jQuery('#the_champ_sharing_more_content a[alt=Mastodon]').click(function(){
    event.preventDefault();
    heateorSsMastodonPopup(jQuery(this).attr("href"));
  });
}

function heateorSsMastodonPopup(targetUrl) {
  var moreSharingServicesHtml = '<button id="heateor_ss_mastodon_popup_close" class="close-button separated"><img src="'+ theChampCloseIconPath +'" /></button><div id="the_champ_sharing_more_content"><div class="all-services" style="height:auto"><div class="filter"><center>Your Mastodon Instance</center><input type="text" id="heateor_ss_mastodon_instance" placeholder="https://mastodon.social" class="search"><center><input type="button" class="heateor_ss_mastodon_popup_button" value="Submit" onclick="var heateorMastodonInstance = jQuery(\'#heateor_ss_mastodon_instance\').val().trim(), heateorMastodonAnchor = jQuery(\'a.the_champ_button_mastodon\').length > 0 ? jQuery(\'a.the_champ_button_mastodon\').attr(\'href\') : \''+ targetUrl +'\'; heateorMastShareURL = heateorMastodonInstance ? heateorMastodonAnchor.replace(\'https://mastodon.social\', heateorMastodonInstance) : heateorMastodonAnchor;window.open(heateorMastShareURL,\'_blank\',\'height=520,width=770,left=315,top=80,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status\');" /></center></div></div><div class="footer-panel"></div></div>';
  var mainDiv = document.createElement('div');
  mainDiv.innerHTML = moreSharingServicesHtml;
  mainDiv.setAttribute('id', 'the_champ_sharing_more_providers');
  mainDiv.style.height = 'auto';
  var bgDiv = document.createElement('div');
  bgDiv.setAttribute('id', 'heateor_ss_mastodon_popup_bg');
  jQuery('body').append(mainDiv).append(bgDiv);
  document.getElementById('heateor_ss_mastodon_popup_bg').onclick = document.getElementById('heateor_ss_mastodon_popup_close').onclick = function(){
    mainDiv.parentNode.removeChild(mainDiv);
    bgDiv.parentNode.removeChild(bgDiv);
  }
}

if(typeof theChampHorizontalSharingCountEnable == 'undefined'){
  var theChampHorizontalSharingCountEnable = 0;
}
if(typeof theChampVerticalSharingCountEnable == 'undefined'){
  var theChampVerticalSharingCountEnable = 0;
}
if(theChampHorizontalSharingCountEnable || theChampVerticalSharingCountEnable){
  // get sharing counts on window load
  theChampLoadEvent(
    function(){
      // sharing counts
      theChampCallAjax(function(){
        theChampGetSharingCounts();
      });
    }
  );
}
  
/**
 * Search sharing services
 */
function theChampFilterSharing(val) {
  jQuery('ul.mini li a').each(function(){
    if (jQuery(this).text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
      jQuery(this).parent().css('display', 'block');
    } else {
      jQuery(this).parent().css('display', 'none');
    }
  });
};

var heateorSsFacebookTargetUrls = [];

/**
 * Get sharing counts
 */
function theChampGetSharingCounts(){
  if(typeof theChampSaveSharesLocally != 'undefined' && theChampSaveSharesLocally == 1){
    return;
  }
  var targetUrls = [];
  jQuery('.the_champ_sharing_container').each(function(){
    if(typeof jQuery(this).attr('data-super-socializer-no-counts') == 'undefined'){
      var currentTargetUrl = jQuery(this).attr('data-super-socializer-href');
      if(currentTargetUrl != null && jQuery.inArray(currentTargetUrl, heateorSsUrlCountFetched) == -1){
        targetUrls.push(currentTargetUrl);
        heateorSsUrlCountFetched.push(currentTargetUrl);
      }
    }
  });
  if(targetUrls.length == 0){
    return;
  }
  jQuery.ajax({
    type: 'GET',
    dataType: 'json',
    url: theChampSharingAjaxUrl,
    data: {
      action: 'the_champ_sharing_count',
      urls: targetUrls,
    },
    success: function(data, textStatus, XMLHttpRequest){
      if(data.status == 1){
        if(data.facebook){
          heateorSsFacebookTargetUrls = data.facebook_urls;
        }
        for(var i in data.message){
          var sharingContainers = jQuery("div[data-super-socializer-href='"+i+"']");

          jQuery(sharingContainers).each(function(){
            var totalCount = 0;
            for(var j in data.message[i]){
              var sharingCount = parseInt(data.message[i][j]) || 0;

              var targetElement = jQuery(this).find('.the_champ_'+j+'_count');
              
              if(jQuery(targetElement).attr('data-heateor-ss-st-count')){
                sharingCount = parseInt(sharingCount) + parseInt(jQuery(targetElement).attr('data-heateor-ss-st-count'));
              }
              totalCount += parseInt(sharingCount);
              if(sharingCount < 1){ continue; }
              jQuery(targetElement).html(theChampCalculateApproxCount(sharingCount)).css({'visibility': 'visible', 'display': 'block'});
              
              if ( ( typeof theChampReduceHorizontalSvgWidth != 'undefined' && jQuery(this).hasClass('the_champ_horizontal_sharing') ) || ( typeof theChampReduceVerticalSvgWidth != 'undefined' && jQuery(this).hasClass('the_champ_vertical_sharing') ) ) {
                jQuery(targetElement).parents('li').find('.theChampSharingSvg').css('float', 'left');
              }
              if ( ( typeof theChampReduceHorizontalSvgHeight != 'undefined' && jQuery(this).hasClass('the_champ_horizontal_sharing') ) || ( typeof theChampReduceVerticalSvgHeight != 'undefined' && jQuery(this).hasClass('the_champ_vertical_sharing') ) ) {
                jQuery(targetElement).parents('li').find('.theChampSharingSvg').css('marginTop', '0');
              }
            }
            var totalCountContainer = jQuery(this).find('.theChampTCBackground');
            jQuery(totalCountContainer).each(function(){
              var containerHeight = jQuery(this).css('height');
              jQuery(this).html('<div class="theChampTotalShareCount" style="font-size: '+ (parseInt(containerHeight) * 62/100) +'px">' + theChampCalculateApproxCount(totalCount) + '</div><div class="theChampTotalShareText" style="font-size: '+ (parseInt(containerHeight) * 38/100) +'px">' + (totalCount == 0 || totalCount > 1 ? heateorSsSharesText : heateorSsShareText) + '</div>').css('visibility', 'visible');
            });
          });
        }
        if(heateorSsFacebookTargetUrls.length != 0){
          theChampFetchFacebookShares(heateorSsFacebookTargetUrls);
        }
      }
    }
  });
}

function theChampFetchFacebookShares(targetUrls){
  var loopCounter = 0;
  for(var i in targetUrls){
    for(var j in targetUrls[i]){
      loopCounter++;
      theChampFBShareJSONCall(targetUrls[i][j], loopCounter, targetUrls[0].length*targetUrls.length, targetUrls[0][j]);
    }
  }
}

function theChampFBShareJSONCall(targetUrl, loopCounter, targetUrlsLength, dataHref) {
  jQuery.getJSON('//graph.facebook.com/?id=' + targetUrl, function(data){
      if(data.share && data.share.share_count >= 0){
        var sharingContainers = jQuery("div[data-super-socializer-href='"+dataHref+"']");

      jQuery(sharingContainers).each(function(){
        var targetElement = jQuery(this).find('.the_champ_facebook_count');
        var facebookBackground = jQuery(this).find('i.theChampFacebookBackground');
        var sharingCount = parseInt(data.share.share_count);

        if(jQuery(targetElement).attr('data-heateor-ss-st-count') !== undefined){
          sharingCount += parseInt(jQuery(targetElement).attr('data-heateor-ss-st-count'));
        }
                if(sharingCount > 0){
            if(typeof jQuery(facebookBackground).attr('heateor-ss-fb-shares') == 'undefined'){
              jQuery(targetElement).html(theChampCalculateApproxCount(sharingCount)).css({'visibility': 'visible', 'display': 'block'});
              jQuery(facebookBackground).attr('heateor-ss-fb-shares', sharingCount);
            }else if(typeof jQuery(facebookBackground).attr('heateor-ss-fb-shares') != 'undefined'){
              var tempShareCount = parseInt(jQuery(facebookBackground).attr('heateor-ss-fb-shares'));
              jQuery(facebookBackground).attr('heateor-ss-fb-shares', sharingCount + tempShareCount);
              jQuery(targetElement).html(theChampCalculateApproxCount(sharingCount + tempShareCount));
            }
            if ( ( typeof theChampReduceHorizontalSvgWidth != 'undefined' && jQuery(this).hasClass('the_champ_horizontal_sharing') ) || ( typeof theChampReduceVerticalSvgWidth != 'undefined' && jQuery(this).hasClass('the_champ_vertical_sharing') ) ) {
              jQuery(targetElement).parents('li').find('.theChampSharingSvg').css('float', 'left');
            }
            if ( ( typeof theChampReduceHorizontalSvgHeight != 'undefined' && jQuery(this).hasClass('the_champ_horizontal_sharing') ) || ( typeof theChampReduceVerticalSvgHeight != 'undefined' && jQuery(this).hasClass('the_champ_vertical_sharing') ) ) {
              jQuery(targetElement).parents('li').find('.theChampSharingSvg').css('marginTop', '0');
            }
            var totalCountContainer = jQuery(this).find('.theChampTCBackground');
            jQuery(totalCountContainer).each(function(){
              var totalShareCountElem = jQuery(this).find('.theChampTotalShareCount');
              var totalShareCount = jQuery(totalShareCountElem).text();
              var newTotalCount = theChampCalculateActualCount(totalShareCount) + sharingCount;
              jQuery(totalShareCountElem).text(theChampCalculateApproxCount(newTotalCount));
              jQuery(this).find('.theChampTotalShareText').text(newTotalCount == 0 || newTotalCount > 1 ? heateorSsSharesText : heateorSsShareText);
            });
                }
      });
    }
    
    if(loopCounter == targetUrlsLength){
      setTimeout(function(){
        var facebookShares = {};
        for(var i in heateorSsFacebookTargetUrls[0]){
          var sharingContainers = jQuery("div[data-super-socializer-href='"+heateorSsFacebookTargetUrls[0][i]+"']");
          jQuery(sharingContainers).each(function(){
            var facebookCountElement = jQuery(this).find('.the_champ_facebook_count');
            var facebookCountElementBg = jQuery(this).find('i.theChampFacebookBackground');
            var shareCountString = typeof jQuery(facebookCountElementBg).attr('heateor-ss-fb-shares') != 'undefined' ? jQuery(facebookCountElementBg).attr('heateor-ss-fb-shares').trim() : '';
            if(shareCountString != ''){
              var shareCount = parseInt(theChampCalculateActualCount(shareCountString));
              if(jQuery(facebookCountElement).attr('data-heateor-ss-st-count') !== undefined){
                var startingCount = parseInt(jQuery(facebookCountElement).attr('data-heateor-ss-st-count').trim());
                shareCount = Math.abs(shareCount - startingCount);
              }
              facebookShares[heateorSsFacebookTargetUrls[0][i]] = shareCount;
              return;
            }
          });
        }
        if(!jQuery.isEmptyObject(facebookShares)){
          theChampSaveFacebookShares(facebookShares);
        }
      }, 1000);
    }
  });
}

function theChampSaveFacebookShares(facebookShares){
  jQuery.ajax({
    type: 'GET',
    dataType: 'json',
    url: theChampSharingAjaxUrl,
    data: {
      action: 'the_champ_save_facebook_shares',
      share_counts: facebookShares,
    },
    success: function(data, textStatus, XMLHttpRequest){}
  });
}

function theChampCalculateApproxCount(sharingCount){
    // round to one decimal
    if(sharingCount > 999 && sharingCount < 10000){
        sharingCount = (Math.round(sharingCount/100))/10 + 'K';
    }else if(sharingCount > 9999 && sharingCount < 100000){
        sharingCount = (Math.round(sharingCount/100))/10 + 'K';
    }else if(sharingCount > 99999 && sharingCount < 1000000){
        sharingCount = (Math.round(sharingCount/100))/10 + 'K';
    }else if(sharingCount > 999999){
        sharingCount = (Math.round(sharingCount/100000))/10 + 'M';
    }
    return sharingCount;
}

function theChampCalculateActualCount(sharingCount){
    if(sharingCount.indexOf('K') > 0){
        sharingCount = sharingCount.replace('K', '') * 1000;
    }else if(sharingCount.indexOf('M') > 0){
        sharingCount = sharingCount.replace('M', '') * 1000000;
    }
    return parseInt(sharingCount);
}

function theChampCapitaliseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

jQuery(function(){
  jQuery(document).on('click', 'a.the_champ_button_mastodon', function(){
    event.preventDefault();
    heateorSsMastodonPopup('');
  });
  var heateorSsWhatsappJSAPI = heateorSsDetermineWhatsappShareAPI(false);
  var classes = ['the_champ_vertical_sharing', 'the_champ_vertical_counter'];
  for(var i = 0; i < classes.length; i++){
    if(jQuery('.' + classes[i]).length){
      jQuery('.' + classes[i]).each(function(){
        var verticalSharingHtml = jQuery(this).html();
        if(jQuery(this).attr('style').indexOf('right') >= 0){
          var removeClass = 'theChampPushIn', margin = 'Right', alignment = 'right', addClass = 'theChampPullOut';
        }else{
          var removeClass = 'theChampPullOut', margin = 'Left', alignment = 'left', addClass = 'theChampPushIn';
        }
        jQuery(this).html(verticalSharingHtml + '<div title="Hide" style="float:' + alignment + '" onclick="theChampHideSharing(this, \''+ removeClass +'\', \''+ addClass +'\',\'' + margin +'\', \'' + alignment + '\')" class="theChampSharingArrow ' + removeClass + '"></div>');
      });
    }
  }
    if(typeof theChampMobileStickySharingEnabled != 'undefined' && theChampMobileStickySharingEnabled == 1){
      if(jQuery('div.the_champ_vertical_sharing').length){
        // insert div before </body>
        jQuery(document.body).append("<div class='heateor_ss_mobile_footer'></div>");
      }
    }

    var heateorSsClipboard = new ClipboardJS('a.the_champ_button_copy_link, span.the_champ_s_copy_link, span.the_champ_s_copy_link svg, span.the_champ_more_label_copy_link', {
        text: function(trigger) {
            if(jQuery(trigger).hasClass('the_champ_button_copy_link')){
                var element = trigger.parentElement.parentElement;
                var url = jQuery(element).attr("data-super-socializer-href") || "";
            }else if(jQuery(trigger).hasClass('the_champ_s_copy_link')){
                var element = trigger.parentElement.parentElement.parentElement;
                var url = jQuery(element).attr("data-super-socializer-href") || "";
                if(!url){
                    var element = trigger.parentElement.parentElement.parentElement.parentElement.parentElement;
                    var url = jQuery(element).attr("data-href") || "";
                }
            }else if(jQuery(trigger).parent().hasClass('the_champ_s_copy_link')){
                var element = trigger.parentElement.parentElement.parentElement.parentElement;
                var url = jQuery(element).attr("data-super-socializer-href") || "";
                if(!url){
                    var element = trigger.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                    var url = jQuery(element).attr("data-href") || "";
                }
            }else if(jQuery(trigger).hasClass('the_champ_more_label_copy_link')){
                var element = trigger.parentElement.parentElement.parentElement.parentElement.parentElement;
                var url = jQuery(element).attr("data-href") || "";
            }else if(jQuery(trigger).attr('href') != "undefined"){
                var element = trigger.parentElement.parentElement.parentElement.parentElement;
                var url = jQuery(element).attr("data-href") || "";
            }
            return url;
        }
    });
    heateorSsClipboard.on('success', function(e) {
        alert(heateorSsCopyLinkMessage);
    });
});

function theChampHideSharing(elem, removeClass, addClass, margin, alignment){
  var animation = {}, counter = jQuery(elem).parent().hasClass('the_champ_vertical_counter'), offset = parseInt(jQuery(elem).parent().css('width')) + 10 - (counter ? 16 : 0);
  var ssOffset = jQuery(elem).parent().attr('data-heateor-ss-offset');
  if(ssOffset){
    var savedOffset = parseInt(ssOffset);
  }else{
    var savedOffset = (counter ? theChampCounterOffset : theChampSharingOffset);
  }
  if(jQuery(elem).attr('title') == 'Hide'){
    animation[alignment] = "-=" + (offset + savedOffset);
    jQuery(elem).parent().animate(animation, 400, function(){
      jQuery(elem).removeClass(removeClass).addClass(addClass).attr('title', 'Share');
      if(counter){
        var cssFloat = alignment == 'left' ? 'right' : 'left';
        jQuery(elem).css('float', cssFloat);
      }else{
        jQuery(elem).css('margin' + margin, offset + 'px')
      }
    });
  }else{
    animation[alignment] = "+=" + (offset + savedOffset); 
    jQuery(elem).parent().animate(animation, 400, function(){
      jQuery(elem).removeClass(addClass).addClass(removeClass).attr('title', 'Hide');
      if(counter){
        jQuery(elem).css('float', alignment);
      }else{
        jQuery(elem).css('margin' + margin, '0px');
      }
    });
  }
}

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});