{"payload":{"allShortcutsEnabled":true,"fileTree":{"src/audio":{"items":[{"name":"Audio.js","path":"src/audio/Audio.js","contentType":"file"},{"name":"AudioAnalyser.js","path":"src/audio/AudioAnalyser.js","contentType":"file"},{"name":"AudioContext.js","path":"src/audio/AudioContext.js","contentType":"file"},{"name":"AudioListener.js","path":"src/audio/AudioListener.js","contentType":"file"},{"name":"PositionalAudio.js","path":"src/audio/PositionalAudio.js","contentType":"file"}],"totalCount":5},"src":{"items":[{"name":"animation","path":"src/animation","contentType":"directory"},{"name":"audio","path":"src/audio","contentType":"directory"},{"name":"cameras","path":"src/cameras","contentType":"directory"},{"name":"core","path":"src/core","contentType":"directory"},{"name":"extras","path":"src/extras","contentType":"directory"},{"name":"geometries","path":"src/geometries","contentType":"directory"},{"name":"helpers","path":"src/helpers","contentType":"directory"},{"name":"lights","path":"src/lights","contentType":"directory"},{"name":"loaders","path":"src/loaders","contentType":"directory"},{"name":"materials","path":"src/materials","contentType":"directory"},{"name":"math","path":"src/math","contentType":"directory"},{"name":"objects","path":"src/objects","contentType":"directory"},{"name":"renderers","path":"src/renderers","contentType":"directory"},{"name":"scenes","path":"src/scenes","contentType":"directory"},{"name":"textures","path":"src/textures","contentType":"directory"},{"name":"Three.Legacy.js","path":"src/Three.Legacy.js","contentType":"file"},{"name":"Three.js","path":"src/Three.js","contentType":"file"},{"name":"constants.js","path":"src/constants.js","contentType":"file"},{"name":"utils.js","path":"src/utils.js","contentType":"file"}],"totalCount":19},"":{"items":[{"name":".github","path":".github","contentType":"directory"},{"name":"build","path":"build","contentType":"directory"},{"name":"docs","path":"docs","contentType":"directory"},{"name":"editor","path":"editor","contentType":"directory"},{"name":"examples","path":"examples","contentType":"directory"},{"name":"files","path":"files","contentType":"directory"},{"name":"manual","path":"manual","contentType":"directory"},{"name":"playground","path":"playground","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":".editorconfig","path":".editorconfig","contentType":"file"},{"name":".eslintrc.json","path":".eslintrc.json","contentType":"file"},{"name":".gitattributes","path":".gitattributes","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"SECURITY.md","path":"SECURITY.md","contentType":"file"},{"name":"icon.png","path":"icon.png","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"}],"totalCount":21}},"fileTreeProcessingTime":11.232211000000001,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":576201,"defaultBranch":"dev","name":"three.js","ownerLogin":"mrdoob","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2010-03-23T20:58:01.000+02:00","ownerAvatar":"https://avatars.githubusercontent.com/u/97088?v=4","public":true,"private":false,"isOrgOwned":false},"refInfo":{"name":"master","listCacheKey":"v0:1688979432.0","canEdit":true,"refType":"branch","currentOid":"edefdc237b2528b9668fb873a1c06cb835840303"},"path":"src/audio/AudioAnalyser.js","currentUser":{"id":24853051,"login":"serjIII","userEmail":"serjprohor@gmail.com"},"blob":{"rawBlob":"class AudioAnalyser {\n\n\tconstructor( audio, fftSize = 2048 ) {\n\n\t\tthis.analyser = audio.context.createAnalyser();\n\t\tthis.analyser.fftSize = fftSize;\n\n\t\tthis.data = new Uint8Array( this.analyser.frequencyBinCount );\n\n\t\taudio.getOutput().connect( this.analyser );\n\n\t}\n\n\n\tgetFrequencyData() {\n\n\t\tthis.analyser.getByteFrequencyData( this.data );\n\n\t\treturn this.data;\n\n\t}\n\n\tgetAverageFrequency() {\n\n\t\tlet value = 0;\n\t\tconst data = this.getFrequencyData();\n\n\t\tfor ( let i = 0; i < data.length; i ++ ) {\n\n\t\t\tvalue += data[ i ];\n\n\t\t}\n\n\t\treturn value / data.length;\n\n\t}\n\n}\n\nexport { AudioAnalyser };\n","colorizedLines":null,"stylingDirectives":[[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":19,"cssClass":"pl-v"},{"start":20,"end":21,"cssClass":"pl-kos"}],[],[{"start":1,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":28,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":46,"cssClass":"pl-en"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-k"},{"start":18,"end":28,"cssClass":"pl-v"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":34,"cssClass":"pl-smi"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":61,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"}],[],[{"start":2,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-smi"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":42,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[],[{"start":1,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":42,"cssClass":"pl-smi"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-smi"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-smi"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-s1"},{"start":38,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":9,"end":11,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[],[{"start":2,"end":3,"cssClass":"pl-kos"}],[],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":22,"cssClass":"pl-v"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/mrdoob/three.js/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/mrdoob/three.js/security/dependabot","repoSecurityAndAnalysisPath":"/mrdoob/three.js/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"AudioAnalyser.js","displayUrl":"https://github.com/mrdoob/three.js/blob/master/src/audio/AudioAnalyser.js?raw=true","headerInfo":{"blobSize":"591 Bytes","deleteInfo":{"deletePath":"https://github.com/mrdoob/three.js/delete/master/src/audio/AudioAnalyser.js","deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"bb34c79","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fmrdoob%2Fthree.js%2Fblob%2Fmaster%2Fsrc%2Faudio%2FAudioAnalyser.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"40","truncatedSloc":"21"},"mode":"file"},"image":false,"isCodeownersFile":null,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","large":false,"loggedIn":true,"newDiscussionPath":"/mrdoob/three.js/discussions/new","newIssuePath":"/mrdoob/three.js/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/mrdoob/three.js/blob/master/src/audio/AudioAnalyser.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/mrdoob/three.js/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"mrdoob","repoName":"three.js","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"AudioAnalyser","kind":"class","identStart":6,"identEnd":19,"extentStart":0,"extentEnd":563,"fullyQualifiedName":"AudioAnalyser","identUtf16":{"start":{"lineNumber":0,"utf16Col":6},"end":{"lineNumber":0,"utf16Col":19}},"extentUtf16":{"start":{"lineNumber":0,"utf16Col":0},"end":{"lineNumber":37,"utf16Col":1}}},{"name":"constructor","kind":"method","identStart":24,"identEnd":35,"extentStart":24,"extentEnd":265,"fullyQualifiedName":"AudioAnalyser.constructor","identUtf16":{"start":{"lineNumber":2,"utf16Col":1},"end":{"lineNumber":2,"utf16Col":12}},"extentUtf16":{"start":{"lineNumber":2,"utf16Col":1},"end":{"lineNumber":11,"utf16Col":2}}},{"name":"getFrequencyData","kind":"method","identStart":269,"identEnd":285,"extentStart":269,"extentEnd":366,"fullyQualifiedName":"AudioAnalyser.getFrequencyData","identUtf16":{"start":{"lineNumber":14,"utf16Col":1},"end":{"lineNumber":14,"utf16Col":17}},"extentUtf16":{"start":{"lineNumber":14,"utf16Col":1},"end":{"lineNumber":20,"utf16Col":2}}},{"name":"getAverageFrequency","kind":"method","identStart":369,"identEnd":388,"extentStart":369,"extentEnd":560,"fullyQualifiedName":"AudioAnalyser.getAverageFrequency","identUtf16":{"start":{"lineNumber":22,"utf16Col":1},"end":{"lineNumber":22,"utf16Col":20}},"extentUtf16":{"start":{"lineNumber":22,"utf16Col":1},"end":{"lineNumber":35,"utf16Col":2}}}]}},"csrf_tokens":{"/mrdoob/three.js/branches":{"post":"RifA1hCCJnIno-2QEpq2vKdEOhiUFho7EuAmKjEghQ23xx6rWhWko2bikZSJu0lji482dsO1xIqDZTjmUKTCIw"}}},"title":"three.js/src/audio/AudioAnalyser.js at master · mrdoob/three.js","locale":"en"}