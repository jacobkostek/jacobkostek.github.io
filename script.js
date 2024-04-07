function changeContent(page) {
    var contentDiv = document.getElementById('content');
    switch (page) {
        case 'glowna':
            contentDiv.innerHTML = `
            <div id="content">

            <h2>Witam na stronie poświęconej kotom</h2>
            <h3>
                Nasza strona jest poświęcona najukochańszym zwierzętom na świecie - kotom.
                Te zwierzęta towarzyszą nam na codzień i uważamy, że dedykowana strona zgodna z RWD + SPA im się należy.
            </h3>
            `;
            break;
        case 'galeria':
            contentDiv.innerHTML = `
            <h2>Galeria kotów</h2>
                <div id="gallery">
                    <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kot1">
                    <img src="https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt="kot2"">
                    <img src="https://images.pexels.com/photos/2071881/pexels-photo-2071881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kot3">
                    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kot4">
                </div>
            `;
            break;
        case 'ciekawostki':
            var catFacts = [
                "Koty mają ponad 100 różnych dźwięków w porównaniu do psów, które mają tylko około 10.",
                "Koty potrafią skakać nawet sześć razy długości swojego ciała.",
                "Koty mają niezwykle elastyczne kości. Mają aż 230 kości, a człowiek tylko 206.",
                "Koty są zwierzętami nocnymi. Mają w oku warstwę komórek światłoczułych zwanych komórkami czopkowymi, co pozwala im widzieć w ciemnościach.",
                "Koty lubią zabawy, ponieważ ćwiczą w ten sposób umiejętności myśliwskie.",
                "Koty potrafią przyjąć pozycję spania, w której są całkowicie zrelaksowane, ale w każdej chwili mogą natychmiast zareagować i być gotowe do działania.",
                "Koty potrafią mrugać na różne sposoby. Mruganie to nie tylko sposób na oczyszczenie oczu, ale także sposób na wyrażenie zadowolenia lub zrozumienia innego kota.",
                "Koty są bardzo czystymi zwierzętami. Spędzają dużo czasu na pielęgnacji swojego futra.",
                "Koty mają unikalne odciski łap, tak jak ludzie mają unikalne odciski palców.",
                "Wiele kotów nie toleruje mleka. Mają one trudności z trawieniem laktozy, co może prowadzić do problemów żołądkowych."
            ];
            var randomFactIndex = Math.floor(Math.random() * catFacts.length);
            var randomFact = catFacts[randomFactIndex];
            contentDiv.innerHTML = `
                <h2>Losowa ciekawostka o kotach</h2>
                <p>${randomFact}</p>
            `;
            break;
 
        default:
            contentDiv.innerHTML = '<h2>Błąd!! Strony nie znaleziono!</h2>';
    }
}

