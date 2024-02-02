const college = {
    Name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gap: 5,
            merit: 'top',
        }
    }
}

// console.log(college.unique.color);
college.unique.result.merit = 'top top top most';
console.log(college.unique.result.merit);
college.events[1] = '16 December 2014',
console.log(college.events[1]);

