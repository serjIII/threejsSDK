{"payload":{"allShortcutsEnabled":true,"fileTree":{"src/core":{"items":[{"name":"BufferAttribute.js","path":"src/core/BufferAttribute.js","contentType":"file"},{"name":"BufferGeometry.js","path":"src/core/BufferGeometry.js","contentType":"file"},{"name":"Clock.js","path":"src/core/Clock.js","contentType":"file"},{"name":"EventDispatcher.js","path":"src/core/EventDispatcher.js","contentType":"file"},{"name":"GLBufferAttribute.js","path":"src/core/GLBufferAttribute.js","contentType":"file"},{"name":"InstancedBufferAttribute.js","path":"src/core/InstancedBufferAttribute.js","contentType":"file"},{"name":"InstancedBufferGeometry.js","path":"src/core/InstancedBufferGeometry.js","contentType":"file"},{"name":"InstancedInterleavedBuffer.js","path":"src/core/InstancedInterleavedBuffer.js","contentType":"file"},{"name":"InterleavedBuffer.js","path":"src/core/InterleavedBuffer.js","contentType":"file"},{"name":"InterleavedBufferAttribute.js","path":"src/core/InterleavedBufferAttribute.js","contentType":"file"},{"name":"Layers.js","path":"src/core/Layers.js","contentType":"file"},{"name":"Object3D.js","path":"src/core/Object3D.js","contentType":"file"},{"name":"Raycaster.js","path":"src/core/Raycaster.js","contentType":"file"},{"name":"Uniform.js","path":"src/core/Uniform.js","contentType":"file"},{"name":"UniformsGroup.js","path":"src/core/UniformsGroup.js","contentType":"file"}],"totalCount":15},"src":{"items":[{"name":"animation","path":"src/animation","contentType":"directory"},{"name":"audio","path":"src/audio","contentType":"directory"},{"name":"cameras","path":"src/cameras","contentType":"directory"},{"name":"core","path":"src/core","contentType":"directory"},{"name":"extras","path":"src/extras","contentType":"directory"},{"name":"geometries","path":"src/geometries","contentType":"directory"},{"name":"helpers","path":"src/helpers","contentType":"directory"},{"name":"lights","path":"src/lights","contentType":"directory"},{"name":"loaders","path":"src/loaders","contentType":"directory"},{"name":"materials","path":"src/materials","contentType":"directory"},{"name":"math","path":"src/math","contentType":"directory"},{"name":"objects","path":"src/objects","contentType":"directory"},{"name":"renderers","path":"src/renderers","contentType":"directory"},{"name":"scenes","path":"src/scenes","contentType":"directory"},{"name":"textures","path":"src/textures","contentType":"directory"},{"name":"Three.Legacy.js","path":"src/Three.Legacy.js","contentType":"file"},{"name":"Three.js","path":"src/Three.js","contentType":"file"},{"name":"constants.js","path":"src/constants.js","contentType":"file"},{"name":"utils.js","path":"src/utils.js","contentType":"file"}],"totalCount":19},"":{"items":[{"name":".github","path":".github","contentType":"directory"},{"name":"build","path":"build","contentType":"directory"},{"name":"docs","path":"docs","contentType":"directory"},{"name":"editor","path":"editor","contentType":"directory"},{"name":"examples","path":"examples","contentType":"directory"},{"name":"files","path":"files","contentType":"directory"},{"name":"manual","path":"manual","contentType":"directory"},{"name":"playground","path":"playground","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":".editorconfig","path":".editorconfig","contentType":"file"},{"name":".eslintrc.json","path":".eslintrc.json","contentType":"file"},{"name":".gitattributes","path":".gitattributes","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"SECURITY.md","path":"SECURITY.md","contentType":"file"},{"name":"icon.png","path":"icon.png","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"}],"totalCount":21}},"fileTreeProcessingTime":11.377030999999999,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":576201,"defaultBranch":"dev","name":"three.js","ownerLogin":"mrdoob","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2010-03-23T20:58:01.000+02:00","ownerAvatar":"https://avatars.githubusercontent.com/u/97088?v=4","public":true,"private":false,"isOrgOwned":false},"refInfo":{"name":"master","listCacheKey":"v0:1688979432.0","canEdit":true,"refType":"branch","currentOid":"edefdc237b2528b9668fb873a1c06cb835840303"},"path":"src/core/GLBufferAttribute.js","currentUser":{"id":24853051,"login":"serjIII","userEmail":"serjprohor@gmail.com"},"blob":{"rawBlob":"class GLBufferAttribute {\n\n\tconstructor( buffer, type, itemSize, elementSize, count ) {\n\n\t\tthis.isGLBufferAttribute = true;\n\n\t\tthis.name = '';\n\n\t\tthis.buffer = buffer;\n\t\tthis.type = type;\n\t\tthis.itemSize = itemSize;\n\t\tthis.elementSize = elementSize;\n\t\tthis.count = count;\n\n\t\tthis.version = 0;\n\n\t}\n\n\tset needsUpdate( value ) {\n\n\t\tif ( value === true ) this.version ++;\n\n\t}\n\n\tsetBuffer( buffer ) {\n\n\t\tthis.buffer = buffer;\n\n\t\treturn this;\n\n\t}\n\n\tsetType( type, elementSize ) {\n\n\t\tthis.type = type;\n\t\tthis.elementSize = elementSize;\n\n\t\treturn this;\n\n\t}\n\n\tsetItemSize( itemSize ) {\n\n\t\tthis.itemSize = itemSize;\n\n\t\treturn this;\n\n\t}\n\n\tsetCount( count ) {\n\n\t\tthis.count = count;\n\n\t\treturn this;\n\n\t}\n\n}\n\nexport { GLBufferAttribute };\n","colorizedLines":null,"stylingDirectives":[[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":23,"cssClass":"pl-v"},{"start":24,"end":25,"cssClass":"pl-kos"}],[],[{"start":1,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":49,"cssClass":"pl-s1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":51,"end":56,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":7,"end":12,"cssClass":"pl-s1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-smi"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":36,"cssClass":"pl-c1"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-smi"},{"start":13,"end":14,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":27,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"}],[],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-smi"},{"start":13,"end":14,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-smi"},{"start":13,"end":14,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":11,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-smi"},{"start":13,"end":14,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":26,"cssClass":"pl-v"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/mrdoob/three.js/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/mrdoob/three.js/security/dependabot","repoSecurityAndAnalysisPath":"/mrdoob/three.js/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"GLBufferAttribute.js","displayUrl":"https://github.com/mrdoob/three.js/blob/master/src/core/GLBufferAttribute.js?raw=true","headerInfo":{"blobSize":"725 Bytes","deleteInfo":{"deletePath":"https://github.com/mrdoob/three.js/delete/master/src/core/GLBufferAttribute.js","deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"41f6908","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fmrdoob%2Fthree.js%2Fblob%2Fmaster%2Fsrc%2Fcore%2FGLBufferAttribute.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"60","truncatedSloc":"33"},"mode":"file"},"image":false,"isCodeownersFile":null,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","large":false,"loggedIn":true,"newDiscussionPath":"/mrdoob/three.js/discussions/new","newIssuePath":"/mrdoob/three.js/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/mrdoob/three.js/blob/master/src/core/GLBufferAttribute.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/mrdoob/three.js/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"mrdoob","repoName":"three.js","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"GLBufferAttribute","kind":"class","identStart":6,"identEnd":23,"extentStart":0,"extentEnd":693,"fullyQualifiedName":"GLBufferAttribute","identUtf16":{"start":{"lineNumber":0,"utf16Col":6},"end":{"lineNumber":0,"utf16Col":23}},"extentUtf16":{"start":{"lineNumber":0,"utf16Col":0},"end":{"lineNumber":57,"utf16Col":1}}},{"name":"constructor","kind":"method","identStart":28,"identEnd":39,"extentStart":28,"extentEnd":296,"fullyQualifiedName":"GLBufferAttribute.constructor","identUtf16":{"start":{"lineNumber":2,"utf16Col":1},"end":{"lineNumber":2,"utf16Col":12}},"extentUtf16":{"start":{"lineNumber":2,"utf16Col":1},"end":{"lineNumber":16,"utf16Col":2}}},{"name":"needsUpdate","kind":"method","identStart":303,"identEnd":314,"extentStart":299,"extentEnd":371,"fullyQualifiedName":"GLBufferAttribute.needsUpdate","identUtf16":{"start":{"lineNumber":18,"utf16Col":5},"end":{"lineNumber":18,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":18,"utf16Col":1},"end":{"lineNumber":22,"utf16Col":2}}},{"name":"setBuffer","kind":"method","identStart":374,"identEnd":383,"extentStart":374,"extentEnd":440,"fullyQualifiedName":"GLBufferAttribute.setBuffer","identUtf16":{"start":{"lineNumber":24,"utf16Col":1},"end":{"lineNumber":24,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":24,"utf16Col":1},"end":{"lineNumber":30,"utf16Col":2}}},{"name":"setType","kind":"method","identStart":443,"identEnd":450,"extentStart":443,"extentEnd":548,"fullyQualifiedName":"GLBufferAttribute.setType","identUtf16":{"start":{"lineNumber":32,"utf16Col":1},"end":{"lineNumber":32,"utf16Col":8}},"extentUtf16":{"start":{"lineNumber":32,"utf16Col":1},"end":{"lineNumber":39,"utf16Col":2}}},{"name":"setItemSize","kind":"method","identStart":551,"identEnd":562,"extentStart":551,"extentEnd":625,"fullyQualifiedName":"GLBufferAttribute.setItemSize","identUtf16":{"start":{"lineNumber":41,"utf16Col":1},"end":{"lineNumber":41,"utf16Col":12}},"extentUtf16":{"start":{"lineNumber":41,"utf16Col":1},"end":{"lineNumber":47,"utf16Col":2}}},{"name":"setCount","kind":"method","identStart":628,"identEnd":636,"extentStart":628,"extentEnd":690,"fullyQualifiedName":"GLBufferAttribute.setCount","identUtf16":{"start":{"lineNumber":49,"utf16Col":1},"end":{"lineNumber":49,"utf16Col":9}},"extentUtf16":{"start":{"lineNumber":49,"utf16Col":1},"end":{"lineNumber":55,"utf16Col":2}}}]}},"csrf_tokens":{"/mrdoob/three.js/branches":{"post":"aNo05Fy72jJkrPVOa2KpsnmAFWstygLhr2d4HJgKgg2ZOuqZFixY4yXtiUrwQ1ZtVUsZBXpp3FA-4mbQ-Y7FIw"}}},"title":"three.js/src/core/GLBufferAttribute.js at master · mrdoob/three.js","locale":"en"}