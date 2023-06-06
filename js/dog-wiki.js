document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementsByClassName('container')[0];

    function createWikiItem(breed, imageUrl){
        const wikiItem = document.createElement('div');
        wikiItem.className = 'wiki-item';

        const header = document.createElement('h1');
        header.className = 'wiki-header';
        header.textContent = breed;

        const content = document.createElement('div')
        content.className = document.createElement('wiki-content');

        const para = document.createElement('p');
        para.className = 'wiki-text';
        para.textContent = "information about the breed"
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';

        const img = document.createElement('img');
        img.className = 'wiki-img';
        img.src = imageUrl;
        img.alt = breed;

        content.appendChild(para);
        content.appendChild(imgContainer);
        imgContainer.appendChild(img);
        wikiItem.appendChild(header);
        wikiItem.appendChild(content)
        
        console.log(wikiItem)
        return wikiItem;
    }

    async function fetchDogImage(breed) {
        try {
          const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
          const data = await response.json();
          console.log(data.message)
          return data.message;
        } catch (error) {
          console.log('Error fetching dog image:', error);
          return null;
        }
      }

      async function generateWikiItems() {
        const breeds = ['hound', 'bulldog', 'poodle', 'beagle', 'dalmatian'];
        for (const breed of breeds) {
          const imageUrl = await fetchDogImage(breed);
          const item = createWikiItem(breed, imageUrl);
          container.appendChild(item);
          console.log(item)
        }
      }
    
      generateWikiItems();

    })