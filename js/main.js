var bridalPhotos = [
	{
		image: "img/bridal.png"
	},
	{
		image: "img/bridal2.png"
	},
	{
		image: "img/bridal3.png"
	},
	{
		image: "img/bridal4.png"
	},
	{
		image: "img/bridal5.png"
	},
	{
		image: "img/bridal6.png"
	},
	{
		image: "img/bridal7.png"
	}
]

var makeupPhotos = [
	{
		image: "img/makeup1.png"
	},
	{
		image: "img/makeup1.png"
	},
	{
		image: "img/makeup2.png"
	},
	{
		image: "img/makeup3.png"
	},
	{
		image: "img/makeup4.png"
	},
	{
		image: "img/makeup5.png"
	},
	{
		image: "img/makeup6.png"
	},
	{
		image: "img/makeup7.png"
	},
	{
		image: "img/makeup8.png"
	},
	{
		image: "img/makeup9.jpg"
	},
	{
		image: "img/makeup10.jpg"
	},
	{
		image: "img/makeup11.png"
	},
	{
		image: "img/makeup12.jpg"
	},
	{
		image: "img/makeup13.png"
	}
]
	
var hairPhotos	= [
	{
		image: "img/hair1.jpg"
	},
	{
		image: "img/hair2.png"
	},
	{
		image: "img/hair3.png"
	}

]
//Fucntion that adds images to the image modal
function addMakeupImage() {

	for (var i = 0; i < makeupPhotos.length; i++) {
	
		var makeupImage = document.createElement('img')
		makeupImage.src = makeupPhotos[i].image
		makeupImage.setAttribute('width', 300)

		var makeupModal = document.getElementById('makeupContent')
		makeupModal.appendChild(makeupImage)
	}	

}

//function that adds images to bridal modal
function addBridalImage() {

	for (var i = 0; i < bridalPhotos.length; i++) {
	
		var bridalImage = document.createElement('img')
		bridalImage.src = bridalPhotos[i].image
		bridalImage.setAttribute('width', 180)
		bridalImage.setAttribute('height', 300)

		var bridalModal = document.getElementById('bridalContent')
		bridalModal.appendChild(bridalImage)
	}
}

//function that adds images to hair modal 
function addHairImage() {

	for (var i = 0; i < hairPhotos.length; i++) {
	
		var hairImage = document.createElement('img')
		hairImage.src = hairPhotos[i].image
		hairImage.setAttribute('width', 180)
		hairImage.setAttribute('height', 300)

		var hairModal = document.getElementById('hairContent')
		hairModal.appendChild(hairImage)
	}
}


//Event listener for bridal link - modal
var bridal = document.getElementById('bridal')
bridal.addEventListener('click', addBridalImage, false)

// event listener for makeup link modal
var makeup = document.getElementById('makeup')
makeup.addEventListener('click', addMakeupImage, false)

// event listener for hair link modal
var hair = document.getElementById('hair')
hair.addEventListener('click', addHairImage, false)





































