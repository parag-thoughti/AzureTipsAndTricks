(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{591:function(e,t,o){"use strict";o.r(t);var r=o(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Logic Apps Documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=rN24xLJwPbk&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=39?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Work with Connectors in Azure Logic Apps"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"upload-files-from-a-url-with-azure-logic-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-files-from-a-url-with-azure-logic-apps"}},[e._v("#")]),e._v(" Upload Files from a URL with Azure Logic Apps")]),e._v(" "),o("h4",{attrs:{id:"my-scenario-tracking-run-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#my-scenario-tracking-run-data"}},[e._v("#")]),e._v(" My Scenario - Tracking Run Data")]),e._v(" "),o("p",[e._v("I thought I'd use this week's Tip and Tricks series to show a practical example of how I am using Azure. I've started running outdoors and would like to extract several links that my app generates via email and send them to my OneDrive account automatically vs doing it manually after each run. I'm also concerned that the app that generates my data may be abandoned one day. In order to secure my data, I used a combination of "),o("a",{attrs:{href:"http://www.zapier.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zappier.com"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"http://www.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),o("OutboundLink")],1),e._v(" to solve my problem and over the course of this week, we'll cover the following sections needed in order to implement this:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip37.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parse Emails to be used in a Azure Logic Apps"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create JSON Schema to be used in a Azure Logic Apps"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip39.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup an HTTP Request Trigger that is used in an Azure Logic Apps"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip40.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("This post - Upload Files from a URL with Azure Logic Apps"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"upload-files-from-a-url-with-azure-logic-apps-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-files-from-a-url-with-azure-logic-apps-2"}},[e._v("#")]),e._v(" Upload Files from a URL with Azure Logic Apps")]),e._v(" "),o("p",[e._v("In the "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip39.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this post"),o("OutboundLink")],1),e._v(", we setup our Azure Logic App to receive an HTTP Request from Zappier which included a JSON payload with the four fields that we wish to extract from our email. (filename, csv, gpx and kml url)")]),e._v(" "),o("p",[e._v("We'll pick up by working with our existing Azure Logic App and using OneDrive to automatically upload the files to my personal OneDrive account.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/onedriveblog1.png")}}),e._v(" "),o("p",[e._v("Typically, you'll add an "),o("strong",[e._v("Action")]),e._v(" or "),o("strong",[e._v("Condition")]),e._v(" to trigger once the HTTP request is complete.")]),e._v(" "),o("p",[e._v("We'll select an "),o("strong",[e._v("Action")]),e._v(" as we want it to run every time vs. an "),o("strong",[e._v("Condition")]),e._v(' which would use "If..then.." logic after the HTTP request comes in. Select '),o("strong",[e._v("Action")]),e._v(' and search for "upload file to onedrive" and you\'ll see the following is available to use.')]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/onedriveblog2.png")}}),e._v(" "),o("p",[e._v("You'll have to sign in to your OneDrive account.")]),e._v(" "),o("p",[e._v("Now you can pull the fields that we captured and use them as dynamic content. For example, the GPX file contains the full URL, so we can just use that dynamic field. For the destination URL, we'll construct where we want it to go in our OneDrive account. Note that I've also setup 2 additional OneDrive actions for the KML and CSV file.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/onedriveblog3.png")}}),e._v(" "),o("p",[e._v("Now you'd want to send an email to your Zappier mailbox to test all the pieces to this app. If everything goes well, then you can switch over to your OneDrive account and you'll see your new files.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/onedriveblog4.png")}}),e._v(" "),o("p",[e._v("If it doesn't appear to be working then you should start by looking at the "),o("strong",[e._v("Overview")]),e._v(" section, then the "),o("strong",[e._v("Run History")]),e._v(" as shown below.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/onedriveblog5.png")}})])}),[],!1,null,null,null);t.default=a.exports}}]);