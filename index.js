//legaturi intre elementele JS si html

const valoareScor = document.querySelector('#valoareScor')
const literaChallenge = document.querySelector('#literaChallenge')
const casetaIntrare = document.querySelector('#casetaIntrare')
const introdus = document.querySelector('#introdus')
const fereastraFinal = document.querySelector('#fereastraFinal')
const scorFinal = document.querySelector('#scorFinal')

//definire varaibile necesare
let alfabet=[]
let literaIntrare=''
let scorCurent = 0

//functie pentru schimbarea litere curente
function schimbareLitera(){
	alfabet = ['B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	'A','B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	literaChallenge.innerHTML =  alfabet[Math.floor(Math.random()*50)]
	casetaIntrare.value = null //de fiecare data cand se schimba litera, campul pentru introducere text se goleste
}

function schimbareCuvant(){
	vocabular = ['ana','bon','are','amic','brad','iele','mere','urs','val','porc','cal','casa','nene','pian',
	'uliu','rac','olar','masa','nas','taur','zar','sat','pas','fes','poze','lac','ana','bon','are','amic','brad',
	'iele','mere','urs','val','porc','cal','casa','nene','pian','uliu','rac','olar','masa','nas','taur','zar','sat',
	'pas','poze','lac', 'fes']
	literaChallenge.innerHTML =  vocabular[Math.floor(Math.random()*51)].toUpperCase()
	casetaIntrare.value = null //de fiecare data cand se schimba litera, campul pentru introducere text se goleste
}

function schimbareCuvant2(){
	vocabular2 = ['aventurier','clepsidra','bormasina','delfinariu','furculita','extraterestru',
	'portocala','gorgonzola','hipopotam','instalator','kilogram','laparoscopic','miraculos','mirobolant',
	'nazdravan','oftalmolog','piramidal','restaurant','salamandra','telegondola','urangutan',
	'vocalist','wasabi','xilofon','yoga','zimbabwe', 'aventurier','clepsidra','bormasina','delfinariu','furculita','extraterestru',
	'portocala','gorgonzola','hipopotam','instalator','kilogram','laparoscopic','miraculos','mirobolant',
	'nazdravan','oftalmolog','piramidal','restaurant','salamandra','telegondola','urangutan',
	'vocalist','wasabi','xilofon','yoga','zimbabwe']
	literaChallenge.innerHTML =  vocabular2[Math.floor(Math.random()*53)].toUpperCase()
	casetaIntrare.value = null
}

function schimbarePropozitie(){
	propozitii = ['dana vine acasa','masina este zburatoare','cristina canta frumos',
				'multimea se bucura','rosiile sunt fructe','baiatul este istet',
				'ti este cool','imi plac veveritele','imi plac cerealele','flori de mai',
				'el citeste corect','cainele latra tare','de ce plang chitarele',
				'un pisic grasun','la multi ani','bulinele exista','becul este stins',
				'mosul taie la rindea','mama face placinte','in oceanul pacific','scrisul este citet',
				'am o carte mare','globuri de craciun','artificii pe tavan','soare cu dinti',
				'dana vine acasa','masina este zburatoare','cristina canta frumos',
				'multimea se bucura','rosiile sunt fructe','baiatul este istet',
				'ti este cool','imi plac veveritele','imi plac cerealele','flori de mai',
				'el citeste corect','cainele latra tare','de ce plang chitarele',
				'un pisic grasun','la multi ani','bulinele exista','becul este stins',
				'mosul taie la rindea','mama face placinte','in oceanul pacific','scrisul este citet',
				'am o carte mare','globuri de craciun','artificii pe tavan','soare cu dinti']
	literaChallenge.innerHTML =  propozitii[Math.floor(Math.random()*49)].toUpperCase()
	casetaIntrare.value = null
}

//functie citire de la tastatura
function citireTastatura(){
	casetaIntrare.addEventListener('input', () =>{
		literaIntrare = casetaIntrare.value.toUpperCase()
	
		setTimeout(function(){
			if(literaIntrare == literaChallenge.innerHTML)
			{
				console.log('bravo')
				
				
				if(scorCurent<40){
					schimbareLitera()
					scorCurent+=10
					valoareScor.innerHTML = scorCurent
				} else if(scorCurent == 40){
					schimbareCuvant()
					scorCurent+=10
					valoareScor.innerHTML = scorCurent
				}else if(scorCurent>40 && scorCurent<225){
					schimbareCuvant()
					scorCurent+=25
					valoareScor.innerHTML = scorCurent
				}else if(scorCurent == 225){
					schimbareCuvant2()
					scorCurent+=25
					valoareScor.innerHTML = scorCurent
				}else if(scorCurent>225 && scorCurent<450)
				{
					schimbareCuvant2()
					scorCurent+=50
					valoareScor.innerHTML = scorCurent
				}else if(scorCurent==450){
					schimbarePropozitie()
					scorCurent+=50
					valoareScor.innerHTML = scorCurent
				}
				else if(scorCurent>450 && scorCurent<900){
					schimbarePropozitie()
					scorCurent+=100
					valoareScor.innerHTML = scorCurent
				}else if(scorCurent==900){
						scorCurent+=100
						valoareScor.innerHTML = scorCurent
						scorFinal.innerHTML = scorCurent
						fereastraFinal.style.display='flex'
				}
			}
			else{
				console.log('Mai incearca!')
				//doar pentru verificare
			}
		}
			
			,500)
	})

	
}


fereastraFinal.style.display='none' //fereastra de final nu se afiseaza de la inceputul jocului

citireTastatura()
