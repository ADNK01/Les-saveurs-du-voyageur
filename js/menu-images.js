// Script pour ajouter les images réelles des plats au menu

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour ajouter une image à un élément de menu
    function addImageToMenuItem(dishName, imagePath) {
        // Rechercher tous les éléments de menu
        const menuItems = document.querySelectorAll('.menu-item, .menu-item-full');
        
        menuItems.forEach(item => {
            const nameElement = item.querySelector('.menu-item-name');
            if (nameElement && nameElement.textContent.toLowerCase().includes(dishName.toLowerCase())) {
                // Créer un conteneur pour l'image
                const imageContainer = document.createElement('div');
                imageContainer.className = 'menu-item-image';
                
                // Créer l'élément image
                const image = document.createElement('img');
                image.src = imagePath;
                image.alt = nameElement.textContent;
                image.loading = 'lazy';
                
                // Ajouter l'image au conteneur
                imageContainer.appendChild(image);
                
                // Ajouter le conteneur à l'élément de menu
                if (item.classList.contains('menu-item-full')) {
                    // Pour la page de menu complète
                    item.insertBefore(imageContainer, item.firstChild);
                    item.classList.add('with-image');
                } else {
                    // Pour la section de menu sur la page d'accueil
                    item.appendChild(imageContainer);
                }
            }
        });
    }
    
    // Ajouter les images aux plats
    addImageToMenuItem('Chicken Fried Rice', 'images/real_dishes/chicken_fried_rice.jpeg');
    addImageToMenuItem('Beef Fried Rice', 'images/real_dishes/beef_fried_rice.jpeg');
    addImageToMenuItem('Prawn Fried Rice', 'images/real_dishes/prawn_fried_rice.jpeg');
    addImageToMenuItem('Poulet Nyembwé', 'images/real_dishes/poulet_nyembwe.jpeg');
    addImageToMenuItem('Attiéké Poisson', 'images/real_dishes/attieke_poisson.jpeg');
    addImageToMenuItem('Poulet DG', 'images/real_dishes/poulet_dg.jpeg');
});
