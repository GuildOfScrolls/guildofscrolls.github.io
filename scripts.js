function dropdownChanged() {
    const dropdown = document.getElementById('rpg-dropdown');
    const selectedValue = dropdown.value;
    const resultDiv = document.getElementById('result');

    let content = '';

    switch (selectedValue) {
        case 'character':
            content = 'Here you can generate RPG characters with different attributes and abilities.';
            break;
        case 'item':
            content = 'Here you can generate various items like weapons, armor, and potions.';
            break;
        case 'quest':
            content = 'Here you can generate different types of quests and storylines for your game.';
            break;
        default:
            content = '';
    }

    resultDiv.innerHTML = content;
}
