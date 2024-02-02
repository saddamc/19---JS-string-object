const address = 'andorKilla';
const part = address.slice(2,5);
console.log(part);

const sentance = 'I am a good and hadworking person.';
// console.log(sentance.split(' '));
console.log(sentance.split('a'));

const friendsStr = 'Rahim, kahim, dahim, lahim, sahin';
const friends = friendsStr.split(',');
console.log(friends);
const realFriend = ['Rahim', 'kahim', 'dahim', 'lahim', 'sahin']
console.log(realFriend.join);
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
