const divCardElement = document.createElement('div');
divCardElement.className = 'card'

const imgElement = document.createElement('img')
imgElement.src = './caffe.jpg'
imgElement.alt = 'immagine di un capuccino'

const divCardBody = document.createElement('div')
console.log(divCardBody);

divCardBody.classList = 'card-body'

const divTitle = document.createElement('div')

const h1Element = document.createElement('h1')
const h1TextElement = document.createTextNode('Capuccino')

const pElement = document.createElement('p')
const pTextElement = document.createTextNode('21k')


const cardFooter = document.createElement('div')
const badges = document.createElement('div')
const badge = document.createElement('span')
const testoBadge = document.createTextNode('hot')

const badge2 = document.createElement('span')
const testoBadge2 = document.createTextNode('cold')


cardFooter.className = 'card-footer'
badges.className = 'etichette'


const buttonElement = document.createElement('button')
const textButton = document.createTextNode('aggiungi')



document.body.appendChild(divCardElement);
divCardBody.appendChild(imgElement);
divCardElement.appendChild(divCardBody);
divCardBody.appendChild(divTitle)
divTitle.appendChild(h1Element)
h1Element.appendChild(h1TextElement)
divTitle.appendChild(pElement)
pElement.appendChild(pTextElement)
divCardElement.appendChild(cardFooter);
cardFooter.appendChild(badges)
badges.appendChild(badge);
badge.appendChild(testoBadge)
badges.appendChild(badge2);
badge2.appendChild(testoBadge2)
buttonElement.appendChild(textButton)
cardFooter.appendChild(buttonElement)






/* <div class="card">
    <div class="card-body">
        <img src="caffe.jpg" alt="caffe">
        <div>
            <h1>Vanilla Latte</h1>
            <p>21K</p>
        </div>
    </div>
    <div class="card-footer">
        <div class="etichette">
            <span>Hot</span>
            <span>Cold</span>
        </div>
        <button>Aggiungi</button>
    </div>
</div>  */