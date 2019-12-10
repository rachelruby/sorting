let swapCounter = 0

function bubbleSort(array) {
    if (array.length === 0) {
        return array
    }
    for (let i = 0; i < array.length; i++) {
        const ele1 = array[i]
        const ele2 = array[i+1]
        if (ele1 > ele2) {
            array[i+1] = ele1
            array[i] = ele2           
        }
    }

    swapCounter++


    return bubbleSort(array.slice(0, array.length-1)).concat(array[array.length]) 

}