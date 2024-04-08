function zmienStrone(strona) {
    var contentDiv = document.getElementById('content');
    switch (strona) {
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
            var faktykoty = [
                "Koty posiadają unikalną zdolność do czyszczenia swojego futra poprzez obgryzanie i szczotkowanie go językiem, co pomaga im w utrzymaniu higieny.",
                "Koty potrafią wydawać dźwięki niewidoczne dla ludzkiego ucha, co pozwala im na komunikację na odległość z innymi kotami.",
                "Koty są niesamowicie zręczne i potrafią łapać zdobycz nawet w locie dzięki swoim szybkim i precyzyjnym ruchom.",
                "Koty mają naturalną skłonność do drapania, co pozwala im na czyszczenie pazurów oraz na oznaczanie swojego terytorium.",
                "Niektóre koty posiadają unikalne umiejętności, takie jak otwieranie drzwi czy korzystanie z toalety, co sprawia, że są one bardzo inteligentnymi zwierzętami domowymi.",
                "Koty mają niezwykłe zdolności słuchowe, które pozwalają im na wykrywanie nawet najdelikatniejszych dźwięków, włączając w to nawet ultradźwięki.",
                "Koty są znanymi leniuszkami i potrafią spać nawet do 16 godzin dziennie, co pomaga im w regeneracji sił oraz utrzymaniu zdrowia i witalności.",
                "Koty posiadają bardzo wyrafinowany zmysł równowagi, co pozwala im na wykonywanie skomplikowanych akrobacji oraz unikanie niebezpieczeństw.",
                "Koty mają wyjątkowe zdolności terapeutyczne i mogą być wykorzystywane do leczenia różnych dolegliwości psychicznych oraz fizycznych u ludzi.",
                "Niektóre koty mogą nauczyć się korzystać z toalety, co pozwala na utrzymanie czystości w domu i ułatwia opiekę nad zwierzęciem.",
                "Koty potrafią zyskać kontrolę nad swoim terytorium i są znane ze swojego silnego instynktu obronnego, co sprawia, że są doskonałymi strażnikami.",
                "Koty posiadają unikalne wzorce zachowań, które mogą być związane z ich rasą, wiekiem oraz historią życia.",
                "Koty są bardzo elastycznymi zwierzętami i mogą dostosować swoje ciało do różnych sytuacji, co sprawia, że są bardzo zwinne i zręczne.",
                "Niektóre koty mogą być nauczane chodzenia na smyczy oraz wykonywania różnych sztuczek, co pozwala na wspólne spędzanie czasu na świeżym powietrzu.",
                "Koty są znane z tego, że potrafią odnaleźć drogę do domu z ogromnych odległości, co sprawia, że są bardzo wytrzymałymi i inteligentnymi zwierzętami.",
                "Koty są związane z różnymi kulturami i religiami na całym świecie, co sprawia, że są uważane za symbole szczęścia, mądrości oraz ochrony.",
                "Koty mają unikalne zdolności związane z postrzeganiem światła oraz kolorów, co pozwala im na lepsze orientowanie się w otoczeniu oraz na zdobywanie pożywienia.",
                        ];
            
            var indexx = Math.floor(Math.random() * faktykoty.length);
            var fakt = faktykoty[indexx];
            contentDiv.innerHTML = `
                <h2>Losowa ciekawostka o kotach</h2>
                <p>${fakt}</p>
            `;
            break;
 
        default:
            contentDiv.innerHTML = '<h2>Błąd!! Strony nie znaleziono!</h2>';
    }
}

