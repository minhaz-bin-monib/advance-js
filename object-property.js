const student = [
    {id: 17, studentName:'Minhaz'},
    {id: 9, studentName:'Rahat'},
    {id: 2, studentName:'Sadman'},
    {id: 5, studentName: 'abuAhad'}
]
const names = student.map(s => s.studentName);
const ids = student.map(s => s.id);

console.log(ids);
console.log(names);
const idsf = student.filter(s => s.id>5);
console.log(idsf);