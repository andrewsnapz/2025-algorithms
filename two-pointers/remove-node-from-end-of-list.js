/*
  keypoints: 
  1. linked list (single)
  2. remove the nth position and return it's head

  questions:
  1. do we have to do this in place or can we create a new linked list?
  2. can we assume or guarantee that the nth position will always exist?
  3. can we assume or guarantee that the head will not be empty?
  4. what if it's just the head and n is the head of the list?

  brute force:
  iterate through the linked list, get the length of the list and subtract n from it.
  go to the length - nth position and remove it

*/
function removeNthFromEnd(head, n) {
  // assign two pointers
  let pt1 = head;
  let pt2 = head;

  // move pt2 n number of times
  for (let i = 0; i < n; i++) {
    pt2 = pt2.next;
  }

  if (!pt2) {
    return head.next;
  }

  // iterate through the linked list until pt2 hits the end of the list
  while (pt2.next) {
    pt1 = pt1.next;
    pt2 = pt2.next;
  }

  // the node to remove is pt1 + 1 space
  pt1.next = pt1.next.next;

  // return head
  return head;
}
