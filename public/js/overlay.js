let showTrafficOverlay = false;
let showWaterOverlay = false;
let overlayCells = document.getElementsByClassName('cellBorder');



function toggleTrafficOL(backStrip) {
    if (!showTrafficOverlay)
        showTrafficOL(backStrip);
    else
        hideTrafficOL(backStrip);

    aToggleOverlay.playNext();
}

function showTrafficOL(backStrip) {
    backStrip.style.width = '100%';
    showTrafficOverlay = true;
}

function hideTrafficOL(backStrip) {
    for (let i = 0; i < overlayCells.length; i++)
        overlayCells[i].style.backgroundColor = 'transparent';
    backStrip.style.width = '';
    showTrafficOverlay = false;
}



function toggleWaterOL(backStrip) {
    if (!showWaterOverlay)
        showWaterOL(backStrip);
    else
        hideWaterOL(backStrip)

    aToggleOverlay.playNext();
}

function showWaterOL(backStrip) {
    backStrip.style.width = '100%';
    for (let y = 0; y < mapWidth; y++)
        for (let x = 0; x < mapHeight; x++)
            overlayCells[x + y * 60].style.backgroundColor = `rgb(15, 15, ${15 + waterLayer[y][x] * 48})`;
    showWaterOverlay = true;

}

function hideWaterOL(backStrip) {
    for (let x = 0; x < mapWidth; x++)
        for (let y = 0; y < mapHeight; y++)
            overlayCells[x + y * 60].style.backgroundColor = 'transparent';
    backStrip.style.width = '';
    showWaterOverlay = false;
}