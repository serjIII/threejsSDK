{"payload":{"allShortcutsEnabled":true,"fileTree":{"src/cameras":{"items":[{"name":"ArrayCamera.js","path":"src/cameras/ArrayCamera.js","contentType":"file"},{"name":"Camera.js","path":"src/cameras/Camera.js","contentType":"file"},{"name":"CubeCamera.js","path":"src/cameras/CubeCamera.js","contentType":"file"},{"name":"OrthographicCamera.js","path":"src/cameras/OrthographicCamera.js","contentType":"file"},{"name":"PerspectiveCamera.js","path":"src/cameras/PerspectiveCamera.js","contentType":"file"},{"name":"StereoCamera.js","path":"src/cameras/StereoCamera.js","contentType":"file"}],"totalCount":6},"src":{"items":[{"name":"animation","path":"src/animation","contentType":"directory"},{"name":"audio","path":"src/audio","contentType":"directory"},{"name":"cameras","path":"src/cameras","contentType":"directory"},{"name":"core","path":"src/core","contentType":"directory"},{"name":"extras","path":"src/extras","contentType":"directory"},{"name":"geometries","path":"src/geometries","contentType":"directory"},{"name":"helpers","path":"src/helpers","contentType":"directory"},{"name":"lights","path":"src/lights","contentType":"directory"},{"name":"loaders","path":"src/loaders","contentType":"directory"},{"name":"materials","path":"src/materials","contentType":"directory"},{"name":"math","path":"src/math","contentType":"directory"},{"name":"objects","path":"src/objects","contentType":"directory"},{"name":"renderers","path":"src/renderers","contentType":"directory"},{"name":"scenes","path":"src/scenes","contentType":"directory"},{"name":"textures","path":"src/textures","contentType":"directory"},{"name":"Three.Legacy.js","path":"src/Three.Legacy.js","contentType":"file"},{"name":"Three.js","path":"src/Three.js","contentType":"file"},{"name":"constants.js","path":"src/constants.js","contentType":"file"},{"name":"utils.js","path":"src/utils.js","contentType":"file"}],"totalCount":19},"":{"items":[{"name":".github","path":".github","contentType":"directory"},{"name":"build","path":"build","contentType":"directory"},{"name":"docs","path":"docs","contentType":"directory"},{"name":"editor","path":"editor","contentType":"directory"},{"name":"examples","path":"examples","contentType":"directory"},{"name":"files","path":"files","contentType":"directory"},{"name":"manual","path":"manual","contentType":"directory"},{"name":"playground","path":"playground","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":".editorconfig","path":".editorconfig","contentType":"file"},{"name":".eslintrc.json","path":".eslintrc.json","contentType":"file"},{"name":".gitattributes","path":".gitattributes","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"SECURITY.md","path":"SECURITY.md","contentType":"file"},{"name":"icon.png","path":"icon.png","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"}],"totalCount":21}},"fileTreeProcessingTime":9.225693999999999,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":576201,"defaultBranch":"dev","name":"three.js","ownerLogin":"mrdoob","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2010-03-23T20:58:01.000+02:00","ownerAvatar":"https://avatars.githubusercontent.com/u/97088?v=4","public":true,"private":false,"isOrgOwned":false},"refInfo":{"name":"master","listCacheKey":"v0:1688979432.0","canEdit":true,"refType":"branch","currentOid":"edefdc237b2528b9668fb873a1c06cb835840303"},"path":"src/cameras/StereoCamera.js","currentUser":{"id":24853051,"login":"serjIII","userEmail":"serjprohor@gmail.com"},"blob":{"rawBlob":"import { Matrix4 } from '../math/Matrix4.js';\nimport * as MathUtils from '../math/MathUtils.js';\nimport { PerspectiveCamera } from './PerspectiveCamera.js';\n\nconst _eyeRight = /*@__PURE__*/ new Matrix4();\nconst _eyeLeft = /*@__PURE__*/ new Matrix4();\nconst _projectionMatrix = /*@__PURE__*/ new Matrix4();\n\nclass StereoCamera {\n\n\tconstructor() {\n\n\t\tthis.type = 'StereoCamera';\n\n\t\tthis.aspect = 1;\n\n\t\tthis.eyeSep = 0.064;\n\n\t\tthis.cameraL = new PerspectiveCamera();\n\t\tthis.cameraL.layers.enable( 1 );\n\t\tthis.cameraL.matrixAutoUpdate = false;\n\n\t\tthis.cameraR = new PerspectiveCamera();\n\t\tthis.cameraR.layers.enable( 2 );\n\t\tthis.cameraR.matrixAutoUpdate = false;\n\n\t\tthis._cache = {\n\t\t\tfocus: null,\n\t\t\tfov: null,\n\t\t\taspect: null,\n\t\t\tnear: null,\n\t\t\tfar: null,\n\t\t\tzoom: null,\n\t\t\teyeSep: null\n\t\t};\n\n\t}\n\n\tupdate( camera ) {\n\n\t\tconst cache = this._cache;\n\n\t\tconst needsUpdate = cache.focus !== camera.focus || cache.fov !== camera.fov ||\n\t\t\tcache.aspect !== camera.aspect * this.aspect || cache.near !== camera.near ||\n\t\t\tcache.far !== camera.far || cache.zoom !== camera.zoom || cache.eyeSep !== this.eyeSep;\n\n\t\tif ( needsUpdate ) {\n\n\t\t\tcache.focus = camera.focus;\n\t\t\tcache.fov = camera.fov;\n\t\t\tcache.aspect = camera.aspect * this.aspect;\n\t\t\tcache.near = camera.near;\n\t\t\tcache.far = camera.far;\n\t\t\tcache.zoom = camera.zoom;\n\t\t\tcache.eyeSep = this.eyeSep;\n\n\t\t\t// Off-axis stereoscopic effect based on\n\t\t\t// http://paulbourke.net/stereographics/stereorender/\n\n\t\t\t_projectionMatrix.copy( camera.projectionMatrix );\n\t\t\tconst eyeSepHalf = cache.eyeSep / 2;\n\t\t\tconst eyeSepOnProjection = eyeSepHalf * cache.near / cache.focus;\n\t\t\tconst ymax = ( cache.near * Math.tan( MathUtils.DEG2RAD * cache.fov * 0.5 ) ) / cache.zoom;\n\t\t\tlet xmin, xmax;\n\n\t\t\t// translate xOffset\n\n\t\t\t_eyeLeft.elements[ 12 ] = - eyeSepHalf;\n\t\t\t_eyeRight.elements[ 12 ] = eyeSepHalf;\n\n\t\t\t// for left eye\n\n\t\t\txmin = - ymax * cache.aspect + eyeSepOnProjection;\n\t\t\txmax = ymax * cache.aspect + eyeSepOnProjection;\n\n\t\t\t_projectionMatrix.elements[ 0 ] = 2 * cache.near / ( xmax - xmin );\n\t\t\t_projectionMatrix.elements[ 8 ] = ( xmax + xmin ) / ( xmax - xmin );\n\n\t\t\tthis.cameraL.projectionMatrix.copy( _projectionMatrix );\n\n\t\t\t// for right eye\n\n\t\t\txmin = - ymax * cache.aspect - eyeSepOnProjection;\n\t\t\txmax = ymax * cache.aspect - eyeSepOnProjection;\n\n\t\t\t_projectionMatrix.elements[ 0 ] = 2 * cache.near / ( xmax - xmin );\n\t\t\t_projectionMatrix.elements[ 8 ] = ( xmax + xmin ) / ( xmax - xmin );\n\n\t\t\tthis.cameraR.projectionMatrix.copy( _projectionMatrix );\n\n\t\t}\n\n\t\tthis.cameraL.matrixWorld.copy( camera.matrixWorld ).multiply( _eyeLeft );\n\t\tthis.cameraR.matrixWorld.copy( camera.matrixWorld ).multiply( _eyeRight );\n\n\t}\n\n}\n\nexport { StereoCamera };\n","colorizedLines":null,"stylingDirectives":[[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-v"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":23,"cssClass":"pl-k"},{"start":24,"end":44,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":11,"cssClass":"pl-k"},{"start":12,"end":21,"cssClass":"pl-v"},{"start":22,"end":26,"cssClass":"pl-k"},{"start":27,"end":49,"cssClass":"pl-s"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":26,"cssClass":"pl-v"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-k"},{"start":34,"end":58,"cssClass":"pl-s"},{"start":58,"end":59,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":31,"cssClass":"pl-c"},{"start":20,"end":29,"cssClass":"pl-k"},{"start":32,"end":35,"cssClass":"pl-k"},{"start":36,"end":43,"cssClass":"pl-v"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":30,"cssClass":"pl-c"},{"start":19,"end":28,"cssClass":"pl-k"},{"start":31,"end":34,"cssClass":"pl-k"},{"start":35,"end":42,"cssClass":"pl-v"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":39,"cssClass":"pl-c"},{"start":28,"end":37,"cssClass":"pl-k"},{"start":40,"end":43,"cssClass":"pl-k"},{"start":44,"end":51,"cssClass":"pl-v"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":18,"cssClass":"pl-v"},{"start":19,"end":20,"cssClass":"pl-kos"}],[],[{"start":1,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-k"},{"start":21,"end":38,"cssClass":"pl-v"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-k"},{"start":21,"end":38,"cssClass":"pl-v"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-c1"},{"start":10,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-c1"},{"start":8,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-c1"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-c1"},{"start":8,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-c1"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-c1"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-smi"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"}],[],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":33,"cssClass":"pl-c1"},{"start":34,"end":37,"cssClass":"pl-c1"},{"start":38,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":50,"cssClass":"pl-c1"},{"start":51,"end":53,"cssClass":"pl-c1"},{"start":54,"end":59,"cssClass":"pl-s1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":63,"cssClass":"pl-c1"},{"start":64,"end":67,"cssClass":"pl-c1"},{"start":68,"end":74,"cssClass":"pl-s1"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":78,"cssClass":"pl-c1"},{"start":79,"end":81,"cssClass":"pl-c1"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-c1"},{"start":16,"end":19,"cssClass":"pl-c1"},{"start":20,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":40,"cssClass":"pl-smi"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":47,"cssClass":"pl-c1"},{"start":48,"end":50,"cssClass":"pl-c1"},{"start":51,"end":56,"cssClass":"pl-s1"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":61,"cssClass":"pl-c1"},{"start":62,"end":65,"cssClass":"pl-c1"},{"start":66,"end":72,"cssClass":"pl-s1"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":77,"cssClass":"pl-c1"},{"start":78,"end":80,"cssClass":"pl-c1"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":27,"cssClass":"pl-c1"},{"start":28,"end":30,"cssClass":"pl-c1"},{"start":31,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":41,"cssClass":"pl-c1"},{"start":42,"end":45,"cssClass":"pl-c1"},{"start":46,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":57,"cssClass":"pl-c1"},{"start":58,"end":60,"cssClass":"pl-c1"},{"start":61,"end":66,"cssClass":"pl-s1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":73,"cssClass":"pl-c1"},{"start":74,"end":77,"cssClass":"pl-c1"},{"start":78,"end":82,"cssClass":"pl-smi"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":83,"end":89,"cssClass":"pl-c1"},{"start":89,"end":90,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":7,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":38,"cssClass":"pl-smi"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":22,"cssClass":"pl-smi"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[],[{"start":3,"end":43,"cssClass":"pl-c"}],[{"start":3,"end":56,"cssClass":"pl-c"}],[],[{"start":3,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":50,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":27,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":40,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":43,"end":48,"cssClass":"pl-s1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":53,"cssClass":"pl-c1"},{"start":54,"end":55,"cssClass":"pl-c1"},{"start":56,"end":61,"cssClass":"pl-s1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":67,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":35,"cssClass":"pl-v"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":50,"cssClass":"pl-v"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":58,"cssClass":"pl-c1"},{"start":59,"end":60,"cssClass":"pl-c1"},{"start":61,"end":66,"cssClass":"pl-s1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":70,"cssClass":"pl-c1"},{"start":71,"end":72,"cssClass":"pl-c1"},{"start":73,"end":76,"cssClass":"pl-c1"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":79,"end":80,"cssClass":"pl-kos"},{"start":81,"end":82,"cssClass":"pl-c1"},{"start":83,"end":88,"cssClass":"pl-s1"},{"start":88,"end":89,"cssClass":"pl-kos"},{"start":89,"end":93,"cssClass":"pl-c1"},{"start":93,"end":94,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[],[{"start":3,"end":23,"cssClass":"pl-c"}],[],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":3,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"}],[],[{"start":3,"end":18,"cssClass":"pl-c"}],[],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"}],[],[{"start":3,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":51,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-c1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":56,"end":60,"cssClass":"pl-s1"},{"start":61,"end":62,"cssClass":"pl-c1"},{"start":63,"end":67,"cssClass":"pl-s1"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":69,"end":70,"cssClass":"pl-kos"}],[{"start":3,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":43,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":46,"end":50,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-c1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":57,"end":61,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-c1"},{"start":64,"end":68,"cssClass":"pl-s1"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-kos"}],[],[{"start":3,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":56,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-kos"}],[],[{"start":3,"end":19,"cssClass":"pl-c"}],[],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"}],[],[{"start":3,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":51,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-c1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":56,"end":60,"cssClass":"pl-s1"},{"start":61,"end":62,"cssClass":"pl-c1"},{"start":63,"end":67,"cssClass":"pl-s1"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":69,"end":70,"cssClass":"pl-kos"}],[{"start":3,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":43,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":46,"end":50,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-c1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":57,"end":61,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-c1"},{"start":64,"end":68,"cssClass":"pl-s1"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-kos"}],[],[{"start":3,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":56,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-kos"}],[],[{"start":2,"end":3,"cssClass":"pl-kos"}],[],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":51,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":62,"cssClass":"pl-en"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":72,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":51,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":62,"cssClass":"pl-en"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":73,"cssClass":"pl-s1"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"}],[],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":21,"cssClass":"pl-v"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/mrdoob/three.js/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/mrdoob/three.js/security/dependabot","repoSecurityAndAnalysisPath":"/mrdoob/three.js/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"StereoCamera.js","displayUrl":"https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js?raw=true","headerInfo":{"blobSize":"2.63 KB","deleteInfo":{"deletePath":"https://github.com/mrdoob/three.js/delete/master/src/cameras/StereoCamera.js","deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"ae8f848","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fmrdoob%2Fthree.js%2Fblob%2Fmaster%2Fsrc%2Fcameras%2FStereoCamera.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"100","truncatedSloc":"68"},"mode":"file"},"image":false,"isCodeownersFile":null,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","large":false,"loggedIn":true,"newDiscussionPath":"/mrdoob/three.js/discussions/new","newIssuePath":"/mrdoob/three.js/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/mrdoob/three.js/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"mrdoob","repoName":"three.js","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"StereoCamera","kind":"class","identStart":313,"identEnd":325,"extentStart":307,"extentEnd":2667,"fullyQualifiedName":"StereoCamera","identUtf16":{"start":{"lineNumber":8,"utf16Col":6},"end":{"lineNumber":8,"utf16Col":18}},"extentUtf16":{"start":{"lineNumber":8,"utf16Col":0},"end":{"lineNumber":97,"utf16Col":1}}},{"name":"constructor","kind":"method","identStart":330,"identEnd":341,"extentStart":330,"extentEnd":793,"fullyQualifiedName":"StereoCamera.constructor","identUtf16":{"start":{"lineNumber":10,"utf16Col":1},"end":{"lineNumber":10,"utf16Col":12}},"extentUtf16":{"start":{"lineNumber":10,"utf16Col":1},"end":{"lineNumber":36,"utf16Col":2}}},{"name":"update","kind":"method","identStart":796,"identEnd":802,"extentStart":796,"extentEnd":2664,"fullyQualifiedName":"StereoCamera.update","identUtf16":{"start":{"lineNumber":38,"utf16Col":1},"end":{"lineNumber":38,"utf16Col":7}},"extentUtf16":{"start":{"lineNumber":38,"utf16Col":1},"end":{"lineNumber":95,"utf16Col":2}}}]}},"csrf_tokens":{"/mrdoob/three.js/branches":{"post":"Z-FM6gfBu-OqWXsewbmgaGTt57CpryhwBc1qRl0jmqmWAZKXTVY5MusYBxpamF-3SCbr3v4M9sGUSHSKPKfdhw"}}},"title":"three.js/src/cameras/StereoCamera.js at master · mrdoob/three.js","locale":"en"}