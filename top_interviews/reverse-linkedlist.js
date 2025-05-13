


function reverseLinkedList(head) {
    let prev = null 
    let current = head 
    while(current) {
        let nextTemp = current.next 
        current.next = prev 
        prev = current 
        current = nextTemp
    }

    return prev
}