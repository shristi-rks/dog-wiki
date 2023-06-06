document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementsByClassName('container')[0];

    function createWikiItem(breed, imageUrl){
        const wikiItem = document.createElement('div');
        wikiItem.className = 'wiki-item';
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';

        const img = document.createElement('img');
        img.className = 'wiki-img';
        img.src = imageUrl;
        img.alt = breed;

        imgContainer.appendChild(img);
        console.log(wikiItem)
        return img;
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
          const wikiItem = createWikiItem(breed, imageUrl);
          container.appendChild(wikiItem);
        }
      }
    
      generateWikiItems();

    })