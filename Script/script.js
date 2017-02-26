window.onload = init();
	var Mer, Ven, Ear, Mar, Jup, Sat, Ura, Nep;
	var Focus;

	Mer = document.getElementById('1');
	Ven = document.getElementById('2');
	Ear = document.getElementById('3');
	Mar = document.getElementById('4');
	Jup = document.getElementById('5');
	Sat = document.getElementById('6');
	Ura = document.getElementById('7');
	Nep = document.getElementById('8');
	
	var MerT, VenT, EarT, MarT, JupT, SatT, UraT, NepT;
	
	MerT = document.getElementById('tabMe');
	VenT = document.getElementById('tabVe');
	EarT = document.getElementById('tabEa');
	MarT = document.getElementById('tabMa');
	JupT = document.getElementById('tabJu');
	SatT = document.getElementById('tabSa');
	UraT = document.getElementById('tabUr');
	NepT = document.getElementById('tabNe');
	
	$(Mer).on('click', function() {
		$(MerT).css('visibility', 'visible');
		$(VenT).css('visibility', 'hidden');
		$(EarT).css('visibility', 'hidden');
		$(MarT).css('visibility', 'hidden');
		$(JupT).css('visibility', 'hidden');
		$(SatT).css('visibility', 'hidden');
		$(UraT).css('visibility', 'hidden');
		$(NepT).css('visibility', 'hidden');
		console.log(alert);
		Focus=1;
});
	$(Ven).on('click', function() {
		$(VenT).css('visibility', 'visible');
		$(MerT).css('visibility', 'hidden');
		$(EarT).css('visibility', 'hidden');
		$(MarT).css('visibility', 'hidden');
		$(JupT).css('visibility', 'hidden');
		$(SatT).css('visibility', 'hidden');
		$(UraT).css('visibility', 'hidden');
		$(NepT).css('visibility', 'hidden');
		Focus=2;
});
	$(Ear).on('click', function() {
		$(EarT).css('visibility', 'visible');
		$(MerT).css('visibility', 'hidden');
		$(VenT).css('visibility', 'hidden');
		$(MarT).css('visibility', 'hidden');
		$(JupT).css('visibility', 'hidden');
		$(SatT).css('visibility', 'hidden');
		$(UraT).css('visibility', 'hidden');
		$(NepT).css('visibility', 'hidden');
		
		Focus=3;
});
	$(Mar).on('click', function() {
		$(MarT).css('visibility', 'visible');
		$(MerT).css('visibility', 'hidden');
		$(VenT).css('visibility', 'hidden');
		$(EarT).css('visibility', 'hidden');
		$(JupT).css('visibility', 'hidden');
		$(SatT).css('visibility', 'hidden');
		$(UraT).css('visibility', 'hidden');
		$(NepT).css('visibility', 'hidden');
		
		Focus=4;
});
	$(Jup).on('click', function() {
		$(JupT).css('visibility', 'visible');
		$(MerT).css('visibility', 'hidden');
		$(VenT).css('visibility', 'hidden');
		$(EarT).css('visibility', 'hidden');
		$(MarT).css('visibility', 'hidden');
		$(SatT).css('visibility', 'hidden');
		$(UraT).css('visibility', 'hidden');
		$(NepT).css('visibility', 'hidden');
		
		Focus=5;
});
	$(Sat).on('click', function() {
		$(SatT).css('visibility', 'visible');
		$(MerT).css('visibility', 'hidden');
		$(VenT).css('visibility', 'hidden');
		$(EarT).css('visibility', 'hidden');
		$(MarT).css('visibility', 'hidden');
		$(JupT).css('visibility', 'hidden');
		$(UraT).css('visibility', 'hidden');
		$(NepT).css('visibility', 'hidden');
		
		Focus=6;
});
	$(Ura).on('click', function() {
		$(UraT).css('visibility', 'visible');
		$(MerT).css('visibility', 'hidden');
		$(VenT).css('visibility', 'hidden');
		$(EarT).css('visibility', 'hidden');
		$(MarT).css('visibility', 'hidden');
		$(JupT).css('visibility', 'hidden');
		$(SatT).css('visibility', 'hidden');
		$(NepT).css('visibility', 'hidden');
		
		Focus=7;
});
	$(Nep).on('click', function() {
		$(NepT).css('visibility', 'visible');
		$(MerT).css('visibility', 'hidden');
		$(VenT).css('visibility', 'hidden');
		$(EarT).css('visibility', 'hidden');
		$(MarT).css('visibility', 'hidden');
		$(JupT).css('visibility', 'hidden');
		$(SatT).css('visibility', 'hidden');
		$(UraT).css('visibility', 'hidden');
		
		Focus=8;
});


var render, scene, camera;

//PLANETS
var MercuryGeometry, MercuryMaterial, Mercury;
var Venus, VenusMaterial, VenusGeometry;
var EarthGeometry, EarthMaterial, Earth;
var EarthAtmGeometry, EartAtmhMaterial, EarthAtm;
var MarsGeometry, MarsMaterial, Mars;
var JupiterGeometry, JupiterMaterial, Jupiter;
var SaturnGeometry, SaturnMaterial, Saturn;
var UranusGeometry, UranusMaterial, Uranus;
var NeptunGeometry, NeptunMaterial, Neptun;

//SATELLITES
var MoonGeometry, MoonMaterial, Moon;


//STARS
var SunGeometry, SunMaterial, Sun;
var starsGeometry, starsMaterial, stars;
var AsteroidBeltGeometry, AsteroidBeltMaterial, AsteroidBelt;

//ORBITS
var MercuryOrbitGeometry, MercuryOrbitMaterial, MercuryOrbit;
var VenusOrbitGeometry, VenusOrbitMaterial, VenusOrbit;
var EarthOrbitGeometry, EarthOrbitMaterial, EarthOrbit;
var MarsOrbitGeometry, MarsOrbitMaterial, MarsOrbit;
var JupiterOrbitGeometry, JupiterOrbitMaterial, JupiterOrbit;
var SaturnOrbitGeometry, SaturnOrbitMaterial, SaturnOrbit;
var UranusOrbitGeometry, UranusOrbitMaterial, UranusOrbit;
var NeptunOrbitGeometry, NeptunOrbitMaterial, NeptunOrbit;


var container;

function init(){
	
	var width = window.innerWidth;
	var height = window.innerHeight;
	container = document.createElement('div');
	document.body.appendChild(container);
	
	scene = new THREE.Scene();
	
	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 10000000);
	camera.position.set(-8000, 5000, 0);
	
	var UnivMeterial = new THREE.MeshNormalMaterial(0x5102a3);
	
	
	//Mercury
	MercuryGeometry = new THREE.SphereGeometry(24.4, 25, 25);
	var MercuryTexture = new THREE.Texture();
	var MTLoader = new THREE.TextureLoader();
	MercuryTexture = MTLoader.load('Sources/mercury.jpg');
	MercuryMaterial = new THREE.MeshBasicMaterial({map: MercuryTexture, overdraw: true});
	//var merMat = new THREE.MeshBasicMaterial({color: 0xcc6600});
	Mercury = new THREE.Mesh(MercuryGeometry, MercuryMaterial);
	Mercury.rotation.z = -0.4;
	
	
	
	MercuryOrbitGeometry = new THREE.Geometry();
	MercuryOrbitMaterial = new THREE.PointsMaterial({color: 0xbb00bb, size: 2});
	for(var i=0; i<150; i++){
		var vertex = new THREE.Vector3();
		vertex.x = Math.sin(i)*1670;
		vertex.y = Math.sin(i)*(-100);
		vertex.z = Math.cos(i)*1500;
		
		MercuryOrbitGeometry.vertices.push(vertex);
	};
	
		
	MercuryOrbit = new THREE.Points(MercuryOrbitGeometry, MercuryOrbitMaterial);
	
	//scene.add(Mercury);
	

	
	//Venus
	VenusGeometry = new THREE.SphereGeometry(60.5, 40, 40);
	var VenusTexture = new THREE.Texture();
	var VTLoader = new THREE.TextureLoader();
	VenusTexture = VTLoader.load('Sources/Venus.jpg');
	VenusMaterial = new THREE.MeshBasicMaterial({map: VenusTexture, overdraw: true});
	Venus = new THREE.Mesh(VenusGeometry, VenusMaterial);
	Venus.rotation.z = -0.3;
	
	
	
	VenusOrbitGeometry = new THREE.Geometry();
	VenusOrbitMaterial = new THREE.PointsMaterial({color: 0xaaaa00, size: 2});
	for(var i=0; i<300; i++){
		var vertex = new THREE.Vector3();
		vertex.x = Math.sin(i)*1880;
		vertex.y = Math.sin(i)*300;
		vertex.z = Math.cos(i)*2280;
		
		VenusOrbitGeometry.vertices.push(vertex);
	}
	VenusOrbit = new THREE.Points(VenusOrbitGeometry, VenusOrbitMaterial);

	//scene.add(Venus);
	
	// Earth
	EarthGeometry = new THREE.SphereGeometry(64, 70, 70);
	var texture = new THREE.Texture();
	var textureloader = new THREE.TextureLoader();
	texture = textureloader.load('Sources/Earth.jpg');
	EarthMaterial = new THREE.MeshBasicMaterial({map: texture, overdraw: true});
	Earth = new THREE.Mesh(EarthGeometry, EarthMaterial);
	
	Earth.rotation.z = -0.4;
	
	EarthAtmGeometry = new THREE.SphereGeometry(70, 40, 40);
	var textureAtm = new THREE.Texture();
	var TextureAtmLoader = new THREE.TextureLoader();
	textureAtm = TextureAtmLoader.load('Sources/earthAtm.png');
	EartAtmhMaterial = new THREE.MeshBasicMaterial({map: textureAtm, overdraw: true, transparent: true});
	EarthAtm = new THREE.Mesh(EarthAtmGeometry, EartAtmhMaterial);
	
	EarthAtm.rotation.z = -0.4;
	
	MoonGeometry = new THREE.SphereGeometry(20, 15, 15);
	var MoonTexture = new THREE.Texture();
	var MoonTxtrLoader = new THREE.TextureLoader();
	MoonTexture = MoonTxtrLoader.load('Sources/MoonTxtr.jpg');
	MoonMaterial = new THREE.MeshBasicMaterial({map: MoonTexture, overdraw: true});
	
	Moon = new THREE.Mesh(MoonGeometry, MoonMaterial);	
	
	Moon.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( Earth.position.x+200, Earth.position.y, Earth.position.z ) );
	
	EarthOrbitGeometry = new THREE.Geometry();
	EarthOrbitMaterial = new THREE.PointsMaterial({color: 0x00aaff, size: 2});
	for(var i=0; i<350; i++){
		var vertex = new THREE.Vector3();
		vertex.x = Math.sin(i)*2400;
		vertex.y = Math.sin(i)*400;
		vertex.z = Math.cos(i)*2600;
		
		EarthOrbitGeometry.vertices.push(vertex);
	}
	EarthOrbit = new THREE.Points(EarthOrbitGeometry, EarthOrbitMaterial);
	
	//scene.add(Earth);
	
	//Mars
	MarsGeometry = new THREE.SphereGeometry(34, 70, 70);
	var MarsTexture = new THREE.Texture();
	var MTLoader = new THREE.TextureLoader();
	MarsTexture = MTLoader.load('Sources/Mars.jpg');
	MarsMaterial = new THREE.MeshBasicMaterial({map: MarsTexture, overdraw: true});
	Mars = new THREE.Mesh(MarsGeometry, MarsMaterial);
	Mars.rotation.z = -0.44;
	
	
	MarsOrbitGeometry = new THREE.Geometry();
	MarsOrbitMaterial = new THREE.PointsMaterial({color: 0xff0000, size: 2});
	for(var i=0; i<350; i++){
		var vertex = new THREE.Vector3();
		vertex.x = Math.sin(i)*3080;
		vertex.y = Math.cos(i)*200;
		vertex.z = Math.cos(i)*3480;
		
		MarsOrbitGeometry.vertices.push(vertex);
	}
	MarsOrbit = new THREE.Points(MarsOrbitGeometry, MarsOrbitMaterial);

	//scene.add(Mars);
	
	AsteroidBeltGeometry = new THREE.Geometry();
	AsteroidBeltMaterial = new THREE.PointsMaterial({size:2.5, color: 0x774220, sizeAttenuation: false});
	for(var i=0; i<5000; i++){
		var vertex = new THREE.Vector3();
		
			var ran = Math.floor(Math.random() * (6401 - 4300)) + 4300;
		
			vertex.y = THREE.Math.randFloatSpread(-120,120);
			vertex.x = Math.sin(i)*ran;
			vertex.z = Math.cos(i)*ran;
		
				
		AsteroidBeltGeometry.vertices.push(vertex);
	}
	AsteroidBelt = new THREE.Points(AsteroidBeltGeometry, AsteroidBeltMaterial);
	
	
	//Jupiter
	JupiterGeometry = new THREE.SphereGeometry(100, 90, 90);
	var JupiterTexture = new THREE.Texture();
	var JTLoader = new THREE.TextureLoader();
	JupiterTexture = JTLoader.load('Sources/Jupiter.jpg');
	JupiterMaterial = new THREE.MeshBasicMaterial({map: JupiterTexture, overdraw: true});
	Jupiter = new THREE.Mesh(JupiterGeometry, JupiterMaterial);
	Jupiter.rotation.z = -0.34;
	
	
	JupiterOrbitGeometry = new THREE.Geometry();
	JupiterOrbitMaterial = new THREE.PointsMaterial({color: 0xb6a392, size: 2});
	for(var i=0; i<378; i++){
		var vertex = new THREE.Vector3();
		vertex.x = Math.sin(i)*8980;
		vertex.y = Math.sin(i)*350;
		vertex.z = Math.cos(i)*8580;
		
		JupiterOrbitGeometry.vertices.push(vertex);
	}
	JupiterOrbit = new THREE.Points(JupiterOrbitGeometry, JupiterOrbitMaterial);
	

	//scene.add(Jupiter);
	
	//Saturn
	SaturnGeometry = new THREE.SphereGeometry(87, 70, 70);
	var SaturnTexrure = new THREE.Texture();
	var SaTLoader = new THREE.TextureLoader();
	SaturnTexture = SaTLoader.load('Sources/Saturnlow.jpg');
	SaturnMaterial = new THREE.MeshBasicMaterial({map: SaturnTexture, overdraw: true});
	Saturn = new THREE.Mesh(SaturnGeometry, SaturnMaterial);
	Saturn.rotation.z = -0.444;

	var satCircGeometry = new THREE.Geometry();
	for(var i=0; i<400000; i++){
		var vertex = new THREE.Vector3();
		var ran = Math.floor(Math.random() * (250 - 190)) + 190;
		
			vertex.y = THREE.Math.randFloatSpread(-10,10);
			vertex.x = Math.sin(i)*ran;
			vertex.z = Math.cos(i)*ran;
		
		satCircGeometry.vertices.push(vertex);
		
		
	}
	
	var satCircGeometry1 = new THREE.Geometry();
	for(var i=0; i<10000; i++){
		var vertex = new THREE.Vector3();
		var ran = Math.floor(Math.random() * (180 - 130)) + 130;
		
			vertex.y = THREE.Math.randFloatSpread(-5,5);
			vertex.x = Math.sin(i)*ran;
			vertex.z = Math.cos(i)*ran;
		
		satCircGeometry1.vertices.push(vertex);
	}
	
	var satCircGeometry2 = new THREE.Geometry();
	for(var i=0; i<40000; i++){
		var vertex = new THREE.Vector3();
		var ran = Math.floor(Math.random() * (370 - 265)) + 265;
		
			vertex.y = THREE.Math.randFloatSpread(-3,3);
			vertex.x = Math.sin(i)*ran;
			vertex.z = Math.cos(i)*ran;

		
		satCircGeometry2.vertices.push(vertex);
	}
	
	var satCircMesh, satCircMesh1, satCircMesh2;
	
	var satCircMaterial = new THREE.PointsMaterial({size: 1, color: 0xe3d2aa, opacity: 0.7});
	var satCircMaterial1 = new THREE.PointsMaterial({size: 1, color: 0xe0d0a5});
	var satCircMaterial2 = new THREE.PointsMaterial({linewidth: 2, color: 0xe3d2aa, opacity: 0.3});
	
	satCircMesh = new THREE.Points(satCircGeometry, satCircMaterial);
	satCircMesh1 = new THREE.Points(satCircGeometry1, satCircMaterial1);
	satCircMesh2 = new THREE.Points(satCircGeometry2, satCircMaterial2);
		
	SaturnOrbitGeometry = new THREE.Geometry();
	SaturnOrbitMaterial = new THREE.PointsMaterial({color: 0xc5c3ce, size: 2});
	for(var i=0; i<730; i++){
		var vertex = new THREE.Vector3();
		vertex.x = Math.sin(i)*14270;
		vertex.y = Math.sin(i)*500;
		vertex.z = Math.cos(i)*16270;
		
		SaturnOrbitGeometry.vertices.push(vertex);

	}
	SaturnOrbit = new THREE.Points(SaturnOrbitGeometry, SaturnOrbitMaterial);
	//scene.add(Saturn);
	
	//Uran
	UranusGeometry = new THREE.SphereGeometry(25, 65, 65);
	var UranusTexture = new THREE.Texture();
	var UTLoader = new THREE.TextureLoader();
	UranusTexture = UTLoader.load('Sources/uranuslow.png');
	UranusMaterial = new THREE.MeshBasicMaterial({map: UranusTexture, overdraw: true, opacity: 0.8});
	Uranus = new THREE.Mesh(UranusGeometry, UranusMaterial);
	Uranus.rotation.z = -0.244;
	
	UranusOrbitGeometry = new THREE.Geometry();
	UranusOrbitMaterial = new THREE.PointsMaterial({color: 0x71a2a5, size: 2});
	for(var i=0; i<730; i++){
		var vertex = new THREE.Vector3();
		vertex.x = Math.sin(i)*27860;
		vertex.y = Math.cos(i)*(-1600);
		vertex.z = Math.cos(i)*29860;
		
		UranusOrbitGeometry.vertices.push(vertex);
	}
	UranusOrbit = new THREE.Points(UranusOrbitGeometry, UranusOrbitMaterial);
	//
	
	//Neptun
	NeptunGeometry = new THREE.SphereGeometry(24, 54, 54);
	var NeptunTexture = new THREE.Texture();
	var NTLoader = new THREE.TextureLoader()
	NeptunTexture = NTLoader.load('Sources/neptune.jpg');
	NeptunMaterial = new THREE.MeshBasicMaterial({map: NeptunTexture, overdraw: true});
	
	Neptun = new THREE.Mesh(NeptunGeometry, NeptunMaterial);
	Neptun.rotation.z = -0.25;
	
	NeptunOrbitGeometry = new THREE.Geometry();
	NeptunOrbitMaterial = new THREE.PointsMaterial({color: 0x5d7bd4, size: 2});
	for(var i=0; i<730; i++){
		var vertex = new THREE.Vector3();
		vertex.x = Math.sin(i)*46980;
		vertex.y = Math.cos(i)*2000;
		vertex.z = Math.cos(i)*44980;
		
		NeptunOrbitGeometry.vertices.push(vertex);
		
	}
	NeptunOrbit = new THREE.Points(NeptunOrbitGeometry, NeptunOrbitMaterial);
	
	//Sun
	SunGeometry = new THREE.SphereGeometry(1000, 100, 100);
	var SunTexture	= new THREE.Texture();
	var STLoader	= new THREE.TextureLoader();
	SunTexture = STLoader.load('Sources/suncyl1.jpg');
	
	SunMaterial = new THREE.MeshBasicMaterial({map: SunTexture, overdraw: true});
	Sun = new THREE.Mesh(SunGeometry, SunMaterial);
	
	//Stars
	starsGeometry = new THREE.Geometry();
	starsMaterial = new THREE.PointsMaterial({color:0x8999bb, size:1, sizeAttenuation: false});
	
	for(var i=0; i<50000; i++){
		var vertex = new THREE.Vector3();
		vertex.x = THREE.Math.randFloatSpread(-500000, 500000);
		vertex.y = THREE.Math.randFloatSpread(-500000, 500000);
		vertex.z = THREE.Math.randFloatSpread(-500000, 500000);
		if( vertex.x < 50000 && vertex.x > -50000 &&
		  	vertex.y < 50000 && vertex.y > -50000 &&
		  	vertex.z < 50000 && vertex.z > -50000 ){
			vertex.x = vertex.y =vertex.z = 0;
		}
		
		starsGeometry.vertices.push(vertex);
	}
	
	stars = new THREE.Points(starsGeometry, starsMaterial);
	
	
	scene.add(Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptun, stars, EarthAtm, Moon,AsteroidBelt, MercuryOrbit, VenusOrbit, EarthOrbit, MarsOrbit, JupiterOrbit,SaturnOrbit, UranusOrbit, NeptunOrbit, satCircMesh, satCircMesh1, satCircMesh2);
	
	
	
	render = new THREE.WebGLRenderer({antialias: true, alpha: true});
	render.setSize(width,height);
	render.setClearColor(0x000000);
	render.shadowMap.enabled = true;
	//render.shadowMapType = THREE.PCFSoftShadowMap;
	container.appendChild(render.domElement);
	
	var angle = 0;
	
	var controls = new THREE.TrackballControls( camera );
	controls.minDistance = 1400;		//Set Camera max distance to target
	controls.maxDistance = 100000;	//Set Camera max distance to target
	
	animate();
	
		
	function animate(){
		
		if(Focus == 1){
			camera.lookAt(Mercury.position);
			camera.position.x = Math.sin(angle*0.4)*1770;
			camera.position.y = Math.sin(angle*0.4)*(-100);
			camera.position.z = Math.cos(angle*0.4)*1600;
	
		}else if(Focus == 2){
			camera.lookAt(Venus.position);
			camera.position.x = Math.sin(angle*0.29)*2080;
			camera.position.y =	Math.sin(angle*0.29)*300;
			camera.position.z = Math.cos(angle*0.29)*2480;


		}else if(Focus == 3){
			camera.lookAt(Earth.position);
			camera.position.x = Math.sin(angle*0.1)*2700;
			camera.position.y = Math.sin(angle*0.1)*400;
			camera.position.z = Math.cos(angle*0.1)*2900;
	
		}else if(Focus == 4){
			camera.lookAt(Mars.position);
			camera.position.x = Math.sin(angle*0.098)*3380;
			camera.position.y = Math.cos(angle*0.098)*200;
			camera.position.z = Math.cos(angle*0.098)*3780;
			
		}else if(Focus == 5){
			camera.lookAt(Jupiter.position);
			camera.position.x = Math.sin(angle*0.1)*9480;
			camera.position.y = Math.sin(angle*0.1)*370;
			camera.position.z = Math.cos(angle*0.1)*9080;
			
			
		}else if(Focus == 6){
			camera.lookAt(Saturn.position);
			camera.position.x = Math.sin(angle*0.08)*14770;
			camera.position.y =  Math.sin(angle*0.08)*500 ;
			camera.position.z = Math.cos(angle*0.08)*16770;
			
		}else if(Focus == 7){
			camera.lookAt(Uranus.position);
			camera.position.x = Math.sin(angle*0.024)*28360;
			camera.position.y = Math.cos(angle*0.024)*(-1600);
			camera.position.z = Math.cos(angle*0.024)*30360 ;
			
		}else if(Focus == 8){
			
			camera.position.x = Math.sin(angle*0.038)*47280;
			camera.position.y = Math.cos(angle*0.038)*2000;
			camera.position.z = Math.cos(angle*0.038)*45280 ;
		}
		
		requestAnimationFrame(animate);
		render.render(scene, camera);
		
		Mercury.position.y = Math.sin(angle*0.4)*(-100);
		Mercury.position.x = Math.sin(angle*0.4)*1670;
		Mercury.position.z = Math.cos(angle*0.4)*1500;
		Mercury.rotation.y += 0.014;
		
		Venus.position.y = Math.sin(angle*0.29)*300;
		Venus.position.x = Math.sin(angle*0.29)*1880;
		Venus.position.z = Math.cos(angle*0.29)*2280;
		Venus.rotation.y += 0.013;
		
		Earth.position.y = Math.sin(angle*0.1)*400;
		Earth.position.x = Math.sin(angle*0.1)*2400;
		Earth.position.z = Math.cos(angle*0.1)*2600;
		Earth.rotation.y += 0.01;
		
		EarthAtm.position.y = Earth.position.y;
		EarthAtm.position.x = Earth.position.x;
		EarthAtm.position.z = Earth.position.z;
		EarthAtm.rotation.y += 0.01;
		Moon.position.y = Earth.position.y;
		Moon.position.x = Earth.position.x;
		Moon.position.z = Earth.position.z;
		Moon.rotation.y += 0.01;
		
		Mars.position.y = Math.cos(angle*0.098)*200;
		Mars.position.x = Math.sin(angle*0.098)*3080;
		Mars.position.z = Math.cos(angle*0.098)*3480;
		Mars.rotation.y += 0.0091;
		
		Jupiter.position.y = Math.sin(angle*0.1)*350;
		Jupiter.position.x = Math.sin(angle*0.1)*8980;
		Jupiter.position.z = Math.cos(angle*0.1)*8580;
		Jupiter.rotation.y += 0.0041;
		
		Saturn.position.y = Math.sin(angle*0.08)*500;
		Saturn.position.x = Math.sin(angle*0.08)*14270;
		Saturn.position.z = Math.cos(angle*0.08)*16270;
		Saturn.rotation.y += 0.0061;
		
		satCircMesh.position.x = satCircMesh1.position.x = satCircMesh2.position.x = Math.sin(angle*0.08)*14270;
		satCircMesh.position.y = satCircMesh1.position.y = satCircMesh2.position.y = Math.sin(angle*0.08)*500;
		satCircMesh.position.z = satCircMesh1.position.z = satCircMesh2.position.z =Math.cos(angle*0.08)*16270;
		
		satCircMesh.rotation.y = satCircMesh1.rotation.y = satCircMesh2.rotation.y += 0.0061;
		satCircMesh.rotation.z = satCircMesh1.rotation.z = satCircMesh2.rotation.z = -0.444;
		
		
		Uranus.position.y = Math.cos(angle*0.024)*(-1600);
		Uranus.position.x = Math.sin(angle*0.024)*27860;
		Uranus.position.z = Math.cos(angle*0.024)*29860;
		Uranus.rotation.y += 0.0071;
		
		Neptun.position.y = Math.cos(angle*0.038)*2000;
		Neptun.position.x = Math.sin(angle*0.038)*46980;
		Neptun.position.z = Math.cos(angle*0.038)*44980;
		Neptun.rotation.y += 0.0081;
		
		
		
		angle += Math.PI/180*2;
		
		Sun.rotation.y += 0.007;
		
		controls.update();
	}
	
	
	
}