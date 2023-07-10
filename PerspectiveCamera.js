{"payload":{"allShortcutsEnabled":true,"fileTree":{"src/cameras":{"items":[{"name":"ArrayCamera.js","path":"src/cameras/ArrayCamera.js","contentType":"file"},{"name":"Camera.js","path":"src/cameras/Camera.js","contentType":"file"},{"name":"CubeCamera.js","path":"src/cameras/CubeCamera.js","contentType":"file"},{"name":"OrthographicCamera.js","path":"src/cameras/OrthographicCamera.js","contentType":"file"},{"name":"PerspectiveCamera.js","path":"src/cameras/PerspectiveCamera.js","contentType":"file"},{"name":"StereoCamera.js","path":"src/cameras/StereoCamera.js","contentType":"file"}],"totalCount":6},"src":{"items":[{"name":"animation","path":"src/animation","contentType":"directory"},{"name":"audio","path":"src/audio","contentType":"directory"},{"name":"cameras","path":"src/cameras","contentType":"directory"},{"name":"core","path":"src/core","contentType":"directory"},{"name":"extras","path":"src/extras","contentType":"directory"},{"name":"geometries","path":"src/geometries","contentType":"directory"},{"name":"helpers","path":"src/helpers","contentType":"directory"},{"name":"lights","path":"src/lights","contentType":"directory"},{"name":"loaders","path":"src/loaders","contentType":"directory"},{"name":"materials","path":"src/materials","contentType":"directory"},{"name":"math","path":"src/math","contentType":"directory"},{"name":"objects","path":"src/objects","contentType":"directory"},{"name":"renderers","path":"src/renderers","contentType":"directory"},{"name":"scenes","path":"src/scenes","contentType":"directory"},{"name":"textures","path":"src/textures","contentType":"directory"},{"name":"Three.Legacy.js","path":"src/Three.Legacy.js","contentType":"file"},{"name":"Three.js","path":"src/Three.js","contentType":"file"},{"name":"constants.js","path":"src/constants.js","contentType":"file"},{"name":"utils.js","path":"src/utils.js","contentType":"file"}],"totalCount":19},"":{"items":[{"name":".github","path":".github","contentType":"directory"},{"name":"build","path":"build","contentType":"directory"},{"name":"docs","path":"docs","contentType":"directory"},{"name":"editor","path":"editor","contentType":"directory"},{"name":"examples","path":"examples","contentType":"directory"},{"name":"files","path":"files","contentType":"directory"},{"name":"manual","path":"manual","contentType":"directory"},{"name":"playground","path":"playground","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":".editorconfig","path":".editorconfig","contentType":"file"},{"name":".eslintrc.json","path":".eslintrc.json","contentType":"file"},{"name":".gitattributes","path":".gitattributes","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"SECURITY.md","path":"SECURITY.md","contentType":"file"},{"name":"icon.png","path":"icon.png","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"}],"totalCount":21}},"fileTreeProcessingTime":16.107363,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":576201,"defaultBranch":"dev","name":"three.js","ownerLogin":"mrdoob","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2010-03-23T20:58:01.000+02:00","ownerAvatar":"https://avatars.githubusercontent.com/u/97088?v=4","public":true,"private":false,"isOrgOwned":false},"refInfo":{"name":"master","listCacheKey":"v0:1688979432.0","canEdit":true,"refType":"branch","currentOid":"edefdc237b2528b9668fb873a1c06cb835840303"},"path":"src/cameras/PerspectiveCamera.js","currentUser":{"id":24853051,"login":"serjIII","userEmail":"serjprohor@gmail.com"},"blob":{"rawBlob":"import { Camera } from './Camera.js';\nimport * as MathUtils from '../math/MathUtils.js';\n\nclass PerspectiveCamera extends Camera {\n\n\tconstructor( fov = 50, aspect = 1, near = 0.1, far = 2000 ) {\n\n\t\tsuper();\n\n\t\tthis.isPerspectiveCamera = true;\n\n\t\tthis.type = 'PerspectiveCamera';\n\n\t\tthis.fov = fov;\n\t\tthis.zoom = 1;\n\n\t\tthis.near = near;\n\t\tthis.far = far;\n\t\tthis.focus = 10;\n\n\t\tthis.aspect = aspect;\n\t\tthis.view = null;\n\n\t\tthis.filmGauge = 35;\t// width of the film (default in millimeters)\n\t\tthis.filmOffset = 0;\t// horizontal film offset (same unit as gauge)\n\n\t\tthis.updateProjectionMatrix();\n\n\t}\n\n\tcopy( source, recursive ) {\n\n\t\tsuper.copy( source, recursive );\n\n\t\tthis.fov = source.fov;\n\t\tthis.zoom = source.zoom;\n\n\t\tthis.near = source.near;\n\t\tthis.far = source.far;\n\t\tthis.focus = source.focus;\n\n\t\tthis.aspect = source.aspect;\n\t\tthis.view = source.view === null ? null : Object.assign( {}, source.view );\n\n\t\tthis.filmGauge = source.filmGauge;\n\t\tthis.filmOffset = source.filmOffset;\n\n\t\treturn this;\n\n\t}\n\n\t/**\n\t * Sets the FOV by focal length in respect to the current .filmGauge.\n\t *\n\t * The default film gauge is 35, so that the focal length can be specified for\n\t * a 35mm (full frame) camera.\n\t *\n\t * Values for focal length and film gauge must have the same unit.\n\t */\n\tsetFocalLength( focalLength ) {\n\n\t\t/** see {@link http://www.bobatkins.com/photography/technical/field_of_view.html} */\n\t\tconst vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;\n\n\t\tthis.fov = MathUtils.RAD2DEG * 2 * Math.atan( vExtentSlope );\n\t\tthis.updateProjectionMatrix();\n\n\t}\n\n\t/**\n\t * Calculates the focal length from the current .fov and .filmGauge.\n\t */\n\tgetFocalLength() {\n\n\t\tconst vExtentSlope = Math.tan( MathUtils.DEG2RAD * 0.5 * this.fov );\n\n\t\treturn 0.5 * this.getFilmHeight() / vExtentSlope;\n\n\t}\n\n\tgetEffectiveFOV() {\n\n\t\treturn MathUtils.RAD2DEG * 2 * Math.atan(\n\t\t\tMath.tan( MathUtils.DEG2RAD * 0.5 * this.fov ) / this.zoom );\n\n\t}\n\n\tgetFilmWidth() {\n\n\t\t// film not completely covered in portrait format (aspect < 1)\n\t\treturn this.filmGauge * Math.min( this.aspect, 1 );\n\n\t}\n\n\tgetFilmHeight() {\n\n\t\t// film not completely covered in landscape format (aspect > 1)\n\t\treturn this.filmGauge / Math.max( this.aspect, 1 );\n\n\t}\n\n\t/**\n\t * Sets an offset in a larger frustum. This is useful for multi-window or\n\t * multi-monitor/multi-machine setups.\n\t *\n\t * For example, if you have 3x2 monitors and each monitor is 1920x1080 and\n\t * the monitors are in grid like this\n\t *\n\t *   +---+---+---+\n\t *   | A | B | C |\n\t *   +---+---+---+\n\t *   | D | E | F |\n\t *   +---+---+---+\n\t *\n\t * then for each monitor you would call it like this\n\t *\n\t *   const w = 1920;\n\t *   const h = 1080;\n\t *   const fullWidth = w * 3;\n\t *   const fullHeight = h * 2;\n\t *\n\t *   --A--\n\t *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );\n\t *   --B--\n\t *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );\n\t *   --C--\n\t *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );\n\t *   --D--\n\t *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );\n\t *   --E--\n\t *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );\n\t *   --F--\n\t *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );\n\t *\n\t *   Note there is no reason monitors have to be the same size or in a grid.\n\t */\n\tsetViewOffset( fullWidth, fullHeight, x, y, width, height ) {\n\n\t\tthis.aspect = fullWidth / fullHeight;\n\n\t\tif ( this.view === null ) {\n\n\t\t\tthis.view = {\n\t\t\t\tenabled: true,\n\t\t\t\tfullWidth: 1,\n\t\t\t\tfullHeight: 1,\n\t\t\t\toffsetX: 0,\n\t\t\t\toffsetY: 0,\n\t\t\t\twidth: 1,\n\t\t\t\theight: 1\n\t\t\t};\n\n\t\t}\n\n\t\tthis.view.enabled = true;\n\t\tthis.view.fullWidth = fullWidth;\n\t\tthis.view.fullHeight = fullHeight;\n\t\tthis.view.offsetX = x;\n\t\tthis.view.offsetY = y;\n\t\tthis.view.width = width;\n\t\tthis.view.height = height;\n\n\t\tthis.updateProjectionMatrix();\n\n\t}\n\n\tclearViewOffset() {\n\n\t\tif ( this.view !== null ) {\n\n\t\t\tthis.view.enabled = false;\n\n\t\t}\n\n\t\tthis.updateProjectionMatrix();\n\n\t}\n\n\tupdateProjectionMatrix() {\n\n\t\tconst near = this.near;\n\t\tlet top = near * Math.tan( MathUtils.DEG2RAD * 0.5 * this.fov ) / this.zoom;\n\t\tlet height = 2 * top;\n\t\tlet width = this.aspect * height;\n\t\tlet left = - 0.5 * width;\n\t\tconst view = this.view;\n\n\t\tif ( this.view !== null && this.view.enabled ) {\n\n\t\t\tconst fullWidth = view.fullWidth,\n\t\t\t\tfullHeight = view.fullHeight;\n\n\t\t\tleft += view.offsetX * width / fullWidth;\n\t\t\ttop -= view.offsetY * height / fullHeight;\n\t\t\twidth *= view.width / fullWidth;\n\t\t\theight *= view.height / fullHeight;\n\n\t\t}\n\n\t\tconst skew = this.filmOffset;\n\t\tif ( skew !== 0 ) left += near * skew / this.getFilmWidth();\n\n\t\tthis.projectionMatrix.makePerspective( left, left + width, top, top - height, near, this.far, this.coordinateSystem );\n\n\t\tthis.projectionMatrixInverse.copy( this.projectionMatrix ).invert();\n\n\t}\n\n\ttoJSON( meta ) {\n\n\t\tconst data = super.toJSON( meta );\n\n\t\tdata.object.fov = this.fov;\n\t\tdata.object.zoom = this.zoom;\n\n\t\tdata.object.near = this.near;\n\t\tdata.object.far = this.far;\n\t\tdata.object.focus = this.focus;\n\n\t\tdata.object.aspect = this.aspect;\n\n\t\tif ( this.view !== null ) data.object.view = Object.assign( {}, this.view );\n\n\t\tdata.object.filmGauge = this.filmGauge;\n\t\tdata.object.filmOffset = this.filmOffset;\n\n\t\treturn data;\n\n\t}\n\n}\n\nexport { PerspectiveCamera };\n","colorizedLines":null,"stylingDirectives":null,"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/mrdoob/three.js/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/mrdoob/three.js/security/dependabot","repoSecurityAndAnalysisPath":"/mrdoob/three.js/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"PerspectiveCamera.js","displayUrl":"https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js?raw=true","headerInfo":{"blobSize":"5.17 KB","deleteInfo":{"deletePath":"https://github.com/mrdoob/three.js/delete/master/src/cameras/PerspectiveCamera.js","deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"e6450d2","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fmrdoob%2Fthree.js%2Fblob%2Fmaster%2Fsrc%2Fcameras%2FPerspectiveCamera.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"233","truncatedSloc":"162"},"mode":"file"},"image":false,"isCodeownersFile":null,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","large":false,"loggedIn":true,"newDiscussionPath":"/mrdoob/three.js/discussions/new","newIssuePath":"/mrdoob/three.js/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/mrdoob/three.js/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"mrdoob","repoName":"three.js","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"PerspectiveCamera","kind":"class","identStart":96,"identEnd":113,"extentStart":90,"extentEnd":5264,"fullyQualifiedName":"PerspectiveCamera","identUtf16":{"start":{"lineNumber":3,"utf16Col":6},"end":{"lineNumber":3,"utf16Col":23}},"extentUtf16":{"start":{"lineNumber":3,"utf16Col":0},"end":{"lineNumber":230,"utf16Col":1}}},{"name":"constructor","kind":"method","identStart":133,"identEnd":144,"extentStart":133,"extentEnd":595,"fullyQualifiedName":"PerspectiveCamera.constructor","identUtf16":{"start":{"lineNumber":5,"utf16Col":1},"end":{"lineNumber":5,"utf16Col":12}},"extentUtf16":{"start":{"lineNumber":5,"utf16Col":1},"end":{"lineNumber":28,"utf16Col":2}}},{"name":"copy","kind":"method","identStart":598,"identEnd":602,"extentStart":598,"extentEnd":1003,"fullyQualifiedName":"PerspectiveCamera.copy","identUtf16":{"start":{"lineNumber":30,"utf16Col":1},"end":{"lineNumber":30,"utf16Col":5}},"extentUtf16":{"start":{"lineNumber":30,"utf16Col":1},"end":{"lineNumber":49,"utf16Col":2}}},{"name":"setFocalLength","kind":"method","identStart":1275,"identEnd":1289,"extentStart":1275,"extentEnd":1561,"fullyQualifiedName":"PerspectiveCamera.setFocalLength","identUtf16":{"start":{"lineNumber":59,"utf16Col":1},"end":{"lineNumber":59,"utf16Col":15}},"extentUtf16":{"start":{"lineNumber":59,"utf16Col":1},"end":{"lineNumber":67,"utf16Col":2}}},{"name":"getFocalLength","kind":"method","identStart":1644,"identEnd":1658,"extentStart":1644,"extentEnd":1791,"fullyQualifiedName":"PerspectiveCamera.getFocalLength","identUtf16":{"start":{"lineNumber":72,"utf16Col":1},"end":{"lineNumber":72,"utf16Col":15}},"extentUtf16":{"start":{"lineNumber":72,"utf16Col":1},"end":{"lineNumber":78,"utf16Col":2}}},{"name":"getEffectiveFOV","kind":"method","identStart":1794,"identEnd":1809,"extentStart":1794,"extentEnd":1927,"fullyQualifiedName":"PerspectiveCamera.getEffectiveFOV","identUtf16":{"start":{"lineNumber":80,"utf16Col":1},"end":{"lineNumber":80,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":80,"utf16Col":1},"end":{"lineNumber":85,"utf16Col":2}}},{"name":"getFilmWidth","kind":"method","identStart":1930,"identEnd":1942,"extentStart":1930,"extentEnd":2070,"fullyQualifiedName":"PerspectiveCamera.getFilmWidth","identUtf16":{"start":{"lineNumber":87,"utf16Col":1},"end":{"lineNumber":87,"utf16Col":13}},"extentUtf16":{"start":{"lineNumber":87,"utf16Col":1},"end":{"lineNumber":92,"utf16Col":2}}},{"name":"getFilmHeight","kind":"method","identStart":2073,"identEnd":2086,"extentStart":2073,"extentEnd":2215,"fullyQualifiedName":"PerspectiveCamera.getFilmHeight","identUtf16":{"start":{"lineNumber":94,"utf16Col":1},"end":{"lineNumber":94,"utf16Col":14}},"extentUtf16":{"start":{"lineNumber":94,"utf16Col":1},"end":{"lineNumber":99,"utf16Col":2}}},{"name":"setViewOffset","kind":"method","identStart":3331,"identEnd":3344,"extentStart":3331,"extentEnd":3854,"fullyQualifiedName":"PerspectiveCamera.setViewOffset","identUtf16":{"start":{"lineNumber":136,"utf16Col":1},"end":{"lineNumber":136,"utf16Col":14}},"extentUtf16":{"start":{"lineNumber":136,"utf16Col":1},"end":{"lineNumber":164,"utf16Col":2}}},{"name":"clearViewOffset","kind":"method","identStart":3857,"identEnd":3872,"extentStart":3857,"extentEnd":3981,"fullyQualifiedName":"PerspectiveCamera.clearViewOffset","identUtf16":{"start":{"lineNumber":166,"utf16Col":1},"end":{"lineNumber":166,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":166,"utf16Col":1},"end":{"lineNumber":176,"utf16Col":2}}},{"name":"updateProjectionMatrix","kind":"method","identStart":3984,"identEnd":4006,"extentStart":3984,"extentEnd":4820,"fullyQualifiedName":"PerspectiveCamera.updateProjectionMatrix","identUtf16":{"start":{"lineNumber":178,"utf16Col":1},"end":{"lineNumber":178,"utf16Col":23}},"extentUtf16":{"start":{"lineNumber":178,"utf16Col":1},"end":{"lineNumber":206,"utf16Col":2}}},{"name":"toJSON","kind":"method","identStart":4823,"identEnd":4829,"extentStart":4823,"extentEnd":5261,"fullyQualifiedName":"PerspectiveCamera.toJSON","identUtf16":{"start":{"lineNumber":208,"utf16Col":1},"end":{"lineNumber":208,"utf16Col":7}},"extentUtf16":{"start":{"lineNumber":208,"utf16Col":1},"end":{"lineNumber":228,"utf16Col":2}}}]}},"csrf_tokens":{"/mrdoob/three.js/branches":{"post":"ctpWawLRHVb4sjeyv5peRmkU0uup_PKs-GipWD-dyRuDOogWSEafh7nzS7Yku6GZRd_ehf5fLB1p7beUXhmONQ"}}},"title":"three.js/src/cameras/PerspectiveCamera.js at master · mrdoob/three.js","locale":"en"}