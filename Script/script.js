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

var MercuryGeometry, MercuryMaterial, Mercury;
var Venus, VenusMaterial, VenusGeometry;
var EarthGeometry, EarthMaterial, Earth;
var EarthAtmGeometry, EartAtmhMaterial, EarthAtm;
var MarsGeometry, MarsMaterial, Mars;
var JupiterGeometry, JupiterMaterial, Jupiter;
var SaturnGeometry, SaturnMaterial, Saturn;
var UranusGeometry, UranusMaterial, Uranus;
var NeptunGeometry, NeptunMaterial, Neptun;

var SunGeometry, SunMaterial, Sun;

var starsGeometry, starsMaterial, stars;

var container;

function init(){
	
	var width = window.innerWidth;
	var height = window.innerHeight;
	container = document.createElement('div');
	document.body.appendChild(container);
	
	scene = new THREE.Scene();
	
	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 10000000);
	camera.position.set(-5000, 0, 5300);
	
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
	
	
	//scene.add(Mercury);
	

	
	//Venus
	VenusGeometry = new THREE.SphereGeometry(60.5, 40, 40);
	var VenusTexture = new THREE.Texture();
	var VTLoader = new THREE.TextureLoader();
	VenusTexture = VTLoader.load('Sources/Venus.jpg');
	VenusMaterial = new THREE.MeshBasicMaterial({map: VenusTexture, overdraw: true});
	Venus = new THREE.Mesh(VenusGeometry, VenusMaterial);
	Venus.rotation.z = -0.3;
	//scene.add(Venus);
	
	// Earth
	EarthGeometry = new THREE.SphereGeometry(64, 70, 70);
	var texture = new THREE.Texture();
	var textureloader = new THREE.TextureLoader();
	texture = textureloader.load('Sources/Earth.jpg');
	EarthMaterial = new THREE.MeshBasicMaterial({map: texture, overdraw: true});
	Earth = new THREE.Mesh(EarthGeometry, EarthMaterial);
	
	Earth.rotation.z = -0.4;
	Earth.position.x = 2000;
	
	EarthAtmGeometry = new THREE.SphereGeometry(70, 40, 40);
	var textureAtm = new THREE.Texture();
	var TextureAtmLoader = new THREE.TextureLoader();
	textureAtm = TextureAtmLoader.load('Sources/earthAtm.png');
	EartAtmhMaterial = new THREE.MeshBasicMaterial({map: textureAtm, overdraw: true, transparent: true});
	EarthAtm = new THREE.Mesh(EarthAtmGeometry, EartAtmhMaterial);
	
	EarthAtm.rotation.z = -0.4;
	EarthAtm.position.x = 2000;
	//scene.add(Earth);
	
	//Mars
	MarsGeometry = new THREE.SphereGeometry(34, 70, 70);
	var MarsTexture = new THREE.Texture();
	var MTLoader = new THREE.TextureLoader();
	MarsTexture = MTLoader.load('Sources/Mars.jpg');
	MarsMaterial = new THREE.MeshBasicMaterial({map: MarsTexture, overdraw: true});
	Mars = new THREE.Mesh(MarsGeometry, MarsMaterial);
	Mars.rotation.z = -0.44;
	//scene.add(Mars);
	
	
	//Jupiter
	JupiterGeometry = new THREE.SphereGeometry(100, 90, 90);
	var JupiterTexture = new THREE.Texture();
	var JTLoader = new THREE.TextureLoader();
	JupiterTexture = JTLoader.load('Sources/Jupiter.jpg');
	JupiterMaterial = new THREE.MeshBasicMaterial({map: JupiterTexture, overdraw: true});
	Jupiter = new THREE.Mesh(JupiterGeometry, JupiterMaterial);
	Jupiter.rotation.z = -0.34;
	//scene.add(Jupiter);
	
	//Saturn
	SaturnGeometry = new THREE.SphereGeometry(87, 70, 70);
	var SaturnTexrure = new THREE.Texture();
	var SaTLoader = new THREE.TextureLoader();
	SaturnTexture = SaTLoader.load('Sources/Saturnlow.jpg');
	SaturnMaterial = new THREE.MeshBasicMaterial({map: SaturnTexture, overdraw: true});
	Saturn = new THREE.Mesh(SaturnGeometry, SaturnMaterial);
	Saturn.rotation.z = -0.444;
	//scene.add(Saturn);
	
	//Uran
	UranusGeometry = new THREE.SphereGeometry(25, 65, 65);
	var UranusTexture = new THREE.Texture();
	var UTLoader = new THREE.TextureLoader();
	UranusTexture = UTLoader.load('Sources/uranuslow.png');
	UranusMaterial = new THREE.MeshBasicMaterial({map: UranusTexture, overdraw: true, opacity: 0.8});
	Uranus = new THREE.Mesh(UranusGeometry, UranusMaterial);
	Uranus.rotation.z = -0.244;
	//
	
	//Neptun
	NeptunGeometry = new THREE.SphereGeometry(24, 54, 54);
	var NeptunTexture = new THREE.Texture();
	var NTLoader = new THREE.TextureLoader()
	NeptunTexture = NTLoader.load('Sources/neptune.jpg');
	UranusMaterial = new THREE.MeshBasicMaterial({map: NeptunTexture, overdraw: true});
	
	Neptun = new THREE.Mesh(NeptunGeometry, NeptunMaterial);
	Neptun.rotation.z = -0.25;
	
	//Sun
	SunGeometry = new THREE.SphereGeometry(500, 100, 100);
	var SunTexture	= new THREE.Texture();
	var STLoader	= new THREE.TextureLoader();
	SunTexture = STLoader.load('Sources/suncyl1.jpg');
	
	SunMaterial = new THREE.MeshBasicMaterial({map: SunTexture, overdraw: true});
	Sun = new THREE.Mesh(SunGeometry, SunMaterial);
	
	//Stars
	starsGeometry = new THREE.Geometry();
	starsMaterial = new THREE.PointsMaterial({color:0x9999bb, size:1, sizeAttenuation: false});
	
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
	
	
	scene.add(Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptun, stars, EarthAtm);
	
	
	
	render = new THREE.WebGLRenderer({antialias: true, alpha: true});
	render.setSize(width,height);
	render.setClearColor(0x000000);
	render.shadowMap.enabled = true;
	//render.shadowMapType = THREE.PCFSoftShadowMap;
	container.appendChild(render.domElement);
	
	var angle = 0;
	
	var controls = new THREE.TrackballControls( camera );
	controls.minDistance = 1400;		//Set Camera max distance to target
	controls.maxDistance = 20000;	//Set Camera max distance to target
	
	animate();
	
		
	function animate(){
		
		if(Focus == 1){
			camera.lookAt(Mercury.position);
			camera.position.x = (Mercury.position.x + 300);
			camera.position.y = Mercury.position.y;
			camera.position.z = Mercury.position.z ;
			console.log(Focus);
		}else if(Focus == 2){
			camera.lookAt(Venus.position);
			camera.position.x = (Venus.position.x + 400);
			camera.position.y =	Venus.position.y ;
			camera.position.z = Venus.position.z ;
			console.log(Focus);
		}else if(Focus == 3){
			camera.lookAt(Earth.position);
			camera.position.x = (Earth.position.x + 500);
			camera.position.y = Earth.position.y ;
			camera.position.z = Earth.position.z ;
			console.log(Focus);
		}else if(Focus == 4){
			camera.lookAt(Mars.position);
			camera.position.x = (Mars.position.x + 400);
			camera.position.y = Mars.position.y ;
			camera.position.z = Mars.position.z ;
			console.log(Focus);
		}else if(Focus == 5){
			camera.lookAt(Jupiter.position);
			camera.position.x = (Jupiter.position.x + 700);
			camera.position.y = Jupiter.position.y ;
			camera.position.z = Jupiter.position.z ;
			console.log(Focus);
		}else if(Focus == 6){
			camera.lookAt(Saturn.position);
			camera.position.x = (Saturn.position.x + 600);
			camera.position.y = Saturn.position.y ;
			camera.position.z = Saturn.position.z ;
			console.log(Focus);
		}else if(Focus == 7){
			camera.lookAt(Uranus.position);
			camera.position.x = (Uranus.position.x + 600);
			camera.position.y = Uranus.position.y ;
			camera.position.z = Uranus.position.z ;
			console.log(Focus);
		}else if(Focus == 8){
			camera.lookAt(Neptun.position);
			camera.position.x = (Neptun.position.x + 600);
			camera.position.y = Neptun.position.y ;
			camera.position.z = Neptun.position.z ;
			console.log(Focus);
		}
		
		requestAnimationFrame(animate);
		render.render(scene, camera);
		
		Mercury.position.y = Math.sin(angle*0.4)*(-100);
		Mercury.position.x = Math.sin(angle*0.4)*1000;
		Mercury.position.z = Math.cos(angle*0.4)*750;
		Mercury.rotation.y += 0.014;
		
		Venus.position.y = Math.sin(angle*0.29)*200;
		Venus.position.x = Math.sin(angle*0.29)*1750;
		Venus.position.z = Math.cos(angle*0.29)*1300;
		Venus.rotation.y += 0.013;
		
		Earth.position.y = Math.sin(angle*0.1)*200;
		Earth.position.x = Math.sin(angle*0.1)*2400;
		Earth.position.z = Math.cos(angle*0.1)*2000;
		Earth.rotation.y += 0.01;
		
		EarthAtm.position.y = Math.sin(angle*0.1)*200;
		EarthAtm.position.x = Math.sin(angle*0.1)*2400;
		EarthAtm.position.z = Math.cos(angle*0.1)*2000;
		EarthAtm.rotation.y += 0.01;
		
		Mars.position.y = Math.cos(angle*0.098)*200;
		Mars.position.x = Math.sin(angle*0.098)*2800;
		Mars.position.z = Math.cos(angle*0.098)*2100;
		Mars.rotation.y += 0.0091;
		
		Jupiter.position.y = Math.sin(angle*0.1)*200;
		Jupiter.position.x = Math.sin(angle*0.1)*3500;
		Jupiter.position.z = Math.cos(angle*0.1)*3100;
		Jupiter.rotation.y += 0.0041;
		
		Saturn.position.y = Math.sin(angle*0.08)*300;
		Saturn.position.x = Math.sin(angle*0.08)*3900;
		Saturn.position.z = Math.cos(angle*0.08)*3450;
		Saturn.rotation.y += 0.0061;
		
		Uranus.position.y = Math.cos(angle*0.024)*(-600);
		Uranus.position.x = Math.sin(angle*0.024)*4450;
		Uranus.position.z = Math.cos(angle*0.024)*4050;
		Uranus.rotation.y += 0.0071;
		
		Neptun.position.y = Math.cos(angle*0.038)*600;
		Neptun.position.x = Math.sin(angle*0.038)*5000;
		Neptun.position.z = Math.cos(angle*0.038)*4350;
		Neptun.rotation.y += 0.0081;
		
		if(camera.position.x > 15000 || camera.position.y > 15000 ||  camera.position.z > 15000 ){
			camera.position.x = camera.position.x;
			camera.position.y = camera.position.y;
			camera.position.z = camera.position.z;
		}else if(camera.position.x < -15000 ||camera.position.y < -15000 ||camera.position.z < -15000){
			camera.position.x += 500;
			camera.position.y += 500;
			camera.position.z += 500;
		}
		
		angle += Math.PI/180*2;
		
		Sun.rotation.y += 0.007;
		
		controls.update();
	}
	
	
	
}