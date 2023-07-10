{"payload":{"allShortcutsEnabled":true,"fileTree":{"src/core":{"items":[{"name":"BufferAttribute.js","path":"src/core/BufferAttribute.js","contentType":"file"},{"name":"BufferGeometry.js","path":"src/core/BufferGeometry.js","contentType":"file"},{"name":"Clock.js","path":"src/core/Clock.js","contentType":"file"},{"name":"EventDispatcher.js","path":"src/core/EventDispatcher.js","contentType":"file"},{"name":"GLBufferAttribute.js","path":"src/core/GLBufferAttribute.js","contentType":"file"},{"name":"InstancedBufferAttribute.js","path":"src/core/InstancedBufferAttribute.js","contentType":"file"},{"name":"InstancedBufferGeometry.js","path":"src/core/InstancedBufferGeometry.js","contentType":"file"},{"name":"InstancedInterleavedBuffer.js","path":"src/core/InstancedInterleavedBuffer.js","contentType":"file"},{"name":"InterleavedBuffer.js","path":"src/core/InterleavedBuffer.js","contentType":"file"},{"name":"InterleavedBufferAttribute.js","path":"src/core/InterleavedBufferAttribute.js","contentType":"file"},{"name":"Layers.js","path":"src/core/Layers.js","contentType":"file"},{"name":"Object3D.js","path":"src/core/Object3D.js","contentType":"file"},{"name":"Raycaster.js","path":"src/core/Raycaster.js","contentType":"file"},{"name":"Uniform.js","path":"src/core/Uniform.js","contentType":"file"},{"name":"UniformsGroup.js","path":"src/core/UniformsGroup.js","contentType":"file"}],"totalCount":15},"src":{"items":[{"name":"animation","path":"src/animation","contentType":"directory"},{"name":"audio","path":"src/audio","contentType":"directory"},{"name":"cameras","path":"src/cameras","contentType":"directory"},{"name":"core","path":"src/core","contentType":"directory"},{"name":"extras","path":"src/extras","contentType":"directory"},{"name":"geometries","path":"src/geometries","contentType":"directory"},{"name":"helpers","path":"src/helpers","contentType":"directory"},{"name":"lights","path":"src/lights","contentType":"directory"},{"name":"loaders","path":"src/loaders","contentType":"directory"},{"name":"materials","path":"src/materials","contentType":"directory"},{"name":"math","path":"src/math","contentType":"directory"},{"name":"objects","path":"src/objects","contentType":"directory"},{"name":"renderers","path":"src/renderers","contentType":"directory"},{"name":"scenes","path":"src/scenes","contentType":"directory"},{"name":"textures","path":"src/textures","contentType":"directory"},{"name":"Three.Legacy.js","path":"src/Three.Legacy.js","contentType":"file"},{"name":"Three.js","path":"src/Three.js","contentType":"file"},{"name":"constants.js","path":"src/constants.js","contentType":"file"},{"name":"utils.js","path":"src/utils.js","contentType":"file"}],"totalCount":19},"":{"items":[{"name":".github","path":".github","contentType":"directory"},{"name":"build","path":"build","contentType":"directory"},{"name":"docs","path":"docs","contentType":"directory"},{"name":"editor","path":"editor","contentType":"directory"},{"name":"examples","path":"examples","contentType":"directory"},{"name":"files","path":"files","contentType":"directory"},{"name":"manual","path":"manual","contentType":"directory"},{"name":"playground","path":"playground","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":".editorconfig","path":".editorconfig","contentType":"file"},{"name":".eslintrc.json","path":".eslintrc.json","contentType":"file"},{"name":".gitattributes","path":".gitattributes","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"SECURITY.md","path":"SECURITY.md","contentType":"file"},{"name":"icon.png","path":"icon.png","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"}],"totalCount":21}},"fileTreeProcessingTime":14.436373000000001,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":576201,"defaultBranch":"dev","name":"three.js","ownerLogin":"mrdoob","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2010-03-23T20:58:01.000+02:00","ownerAvatar":"https://avatars.githubusercontent.com/u/97088?v=4","public":true,"private":false,"isOrgOwned":false},"refInfo":{"name":"master","listCacheKey":"v0:1688979432.0","canEdit":true,"refType":"branch","currentOid":"edefdc237b2528b9668fb873a1c06cb835840303"},"path":"src/core/Clock.js","currentUser":{"id":24853051,"login":"serjIII","userEmail":"serjprohor@gmail.com"},"blob":{"rawBlob":"class Clock {\n\n\tconstructor( autoStart = true ) {\n\n\t\tthis.autoStart = autoStart;\n\n\t\tthis.startTime = 0;\n\t\tthis.oldTime = 0;\n\t\tthis.elapsedTime = 0;\n\n\t\tthis.running = false;\n\n\t}\n\n\tstart() {\n\n\t\tthis.startTime = now();\n\n\t\tthis.oldTime = this.startTime;\n\t\tthis.elapsedTime = 0;\n\t\tthis.running = true;\n\n\t}\n\n\tstop() {\n\n\t\tthis.getElapsedTime();\n\t\tthis.running = false;\n\t\tthis.autoStart = false;\n\n\t}\n\n\tgetElapsedTime() {\n\n\t\tthis.getDelta();\n\t\treturn this.elapsedTime;\n\n\t}\n\n\tgetDelta() {\n\n\t\tlet diff = 0;\n\n\t\tif ( this.autoStart && ! this.running ) {\n\n\t\t\tthis.start();\n\t\t\treturn 0;\n\n\t\t}\n\n\t\tif ( this.running ) {\n\n\t\t\tconst newTime = now();\n\n\t\t\tdiff = ( newTime - this.oldTime ) / 1000;\n\t\t\tthis.oldTime = newTime;\n\n\t\t\tthis.elapsedTime += diff;\n\n\t\t}\n\n\t\treturn diff;\n\n\t}\n\n}\n\nfunction now() {\n\n\treturn ( typeof performance === 'undefined' ? Date : performance ).now(); // see #10732\n\n}\n\nexport { Clock };\n","colorizedLines":null,"stylingDirectives":[[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":11,"cssClass":"pl-v"},{"start":12,"end":13,"cssClass":"pl-kos"}],[],[{"start":1,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-smi"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":5,"cssClass":"pl-en"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-smi"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-smi"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":21,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":31,"cssClass":"pl-smi"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":39,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"}],[],[{"start":3,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[],[{"start":2,"end":3,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-smi"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[],[{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":26,"cssClass":"pl-smi"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":39,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[],[{"start":3,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":19,"cssClass":"pl-c1"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":23,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"}],[],[{"start":2,"end":3,"cssClass":"pl-kos"}],[],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":16,"cssClass":"pl-k"},{"start":17,"end":28,"cssClass":"pl-s1"},{"start":29,"end":32,"cssClass":"pl-c1"},{"start":33,"end":44,"cssClass":"pl-s"},{"start":47,"end":51,"cssClass":"pl-v"},{"start":54,"end":65,"cssClass":"pl-s1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":71,"cssClass":"pl-en"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":88,"cssClass":"pl-c"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":14,"cssClass":"pl-v"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/mrdoob/three.js/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/mrdoob/three.js/security/dependabot","repoSecurityAndAnalysisPath":"/mrdoob/three.js/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"Clock.js","displayUrl":"https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js?raw=true","headerInfo":{"blobSize":"890 Bytes","deleteInfo":{"deletePath":"https://github.com/mrdoob/three.js/delete/master/src/core/Clock.js","deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"0bba330","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fmrdoob%2Fthree.js%2Fblob%2Fmaster%2Fsrc%2Fcore%2FClock.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"74","truncatedSloc":"42"},"mode":"file"},"image":false,"isCodeownersFile":null,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","large":false,"loggedIn":true,"newDiscussionPath":"/mrdoob/three.js/discussions/new","newIssuePath":"/mrdoob/three.js/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/mrdoob/three.js/blob/master/src/core/Clock.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/mrdoob/three.js/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"mrdoob","repoName":"three.js","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"Clock","kind":"class","identStart":6,"identEnd":11,"extentStart":0,"extentEnd":759,"fullyQualifiedName":"Clock","identUtf16":{"start":{"lineNumber":0,"utf16Col":6},"end":{"lineNumber":0,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":0,"utf16Col":0},"end":{"lineNumber":65,"utf16Col":1}}},{"name":"constructor","kind":"method","identStart":16,"identEnd":27,"extentStart":16,"extentEnd":176,"fullyQualifiedName":"Clock.constructor","identUtf16":{"start":{"lineNumber":2,"utf16Col":1},"end":{"lineNumber":2,"utf16Col":12}},"extentUtf16":{"start":{"lineNumber":2,"utf16Col":1},"end":{"lineNumber":12,"utf16Col":2}}},{"name":"start","kind":"method","identStart":179,"identEnd":184,"extentStart":179,"extentEnd":300,"fullyQualifiedName":"Clock.start","identUtf16":{"start":{"lineNumber":14,"utf16Col":1},"end":{"lineNumber":14,"utf16Col":6}},"extentUtf16":{"start":{"lineNumber":14,"utf16Col":1},"end":{"lineNumber":22,"utf16Col":2}}},{"name":"stop","kind":"method","identStart":303,"identEnd":307,"extentStart":303,"extentEnd":391,"fullyQualifiedName":"Clock.stop","identUtf16":{"start":{"lineNumber":24,"utf16Col":1},"end":{"lineNumber":24,"utf16Col":5}},"extentUtf16":{"start":{"lineNumber":24,"utf16Col":1},"end":{"lineNumber":30,"utf16Col":2}}},{"name":"getElapsedTime","kind":"method","identStart":394,"identEnd":408,"extentStart":394,"extentEnd":463,"fullyQualifiedName":"Clock.getElapsedTime","identUtf16":{"start":{"lineNumber":32,"utf16Col":1},"end":{"lineNumber":32,"utf16Col":15}},"extentUtf16":{"start":{"lineNumber":32,"utf16Col":1},"end":{"lineNumber":37,"utf16Col":2}}},{"name":"getDelta","kind":"method","identStart":466,"identEnd":474,"extentStart":466,"extentEnd":756,"fullyQualifiedName":"Clock.getDelta","identUtf16":{"start":{"lineNumber":39,"utf16Col":1},"end":{"lineNumber":39,"utf16Col":9}},"extentUtf16":{"start":{"lineNumber":39,"utf16Col":1},"end":{"lineNumber":63,"utf16Col":2}}},{"name":"now","kind":"function","identStart":770,"identEnd":773,"extentStart":761,"extentEnd":870,"fullyQualifiedName":"now","identUtf16":{"start":{"lineNumber":67,"utf16Col":9},"end":{"lineNumber":67,"utf16Col":12}},"extentUtf16":{"start":{"lineNumber":67,"utf16Col":0},"end":{"lineNumber":71,"utf16Col":1}}}]}},"csrf_tokens":{"/mrdoob/three.js/branches":{"post":"cK5Cq201FLukjJMAX16IM0zE6tPFHPjOMLLKf5r7e9yBTpzWJ6KWauXN7wTEf3fsYA_mvZK_Jn-hN9Sz-3888g"}}},"title":"three.js/src/core/Clock.js at master · mrdoob/three.js","locale":"en"}