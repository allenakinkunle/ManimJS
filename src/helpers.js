export function canvasHeightForGrid(width, numXBoxes, numYBoxes) {
    let box_size = width / numYBoxes;
    let height = box_size * numXBoxes;
    return height;
}

export function vecCoords2GridCoords(vecCoords, gridSpacing) {
    let x2 = vecCoords[0] * gridSpacing;
    let y2 = vecCoords[1] * gridSpacing;
    return [x2, -y2];
}