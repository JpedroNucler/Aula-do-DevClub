const list = [
    { name: "Rodolfo", vip: true},
    { name: "Maria", vip: false},
    { name: "João", vip: true},
    { name: "Bruno", vip: true},
    { name: "Carla", vip: false},
    { name: "Ana", vip: true},
    { name: "Julio", vip: false},
];

const newList = list.map ( client => {
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "Black" : "Green"
    }
        return newList
})

console.log(newList)
//const list = [
//    { name: "Rodolfo", vip: true, sector: "Black" },
//    { name: "Maria", vip: false, sector: "Green" },
//    { name: "João", vip: true, sector: "Black" },
//    { name: "Bruno", vip: true, sector: "Black" },
//    { name: "Carla", vip: false, sector: "Green" },
//    { name: "Ana", vip: true, sector: "Black" },
//    { name: "Julio", vip: false, sector: "Green" },
//];

const students = [
    { name: "Rodolfo", testGrande: 7},
    { name: "Maria", testGrande: 5},
    { name: "João",testGrande: 8},
    { name: "Bruno",testGrande: 9},
    { name: "Carla", testGrande: 3},
    { name: "Ana",testGrande: 2},
    { name: "Julio", testGrande: 10},
]

const approvedStudents = students.map ( student => {
    let approvedOrNot
    if(student.finalResult >= 7){
        approvedOrNot = 'approved'
    } else{{
        approvedOrNot = 'disapproved'
    }}
    
    const  students = {
       name: student.name,
        finalResult: approvedOrNot
    }

    return students
})

console.log(approvedStudents)
//const students = [
//    { name: "Rodolfo",  finalResult: "approved"},
//    { name: "Maria",  finalResult: "disapproved"},
//    { name: "João", finalResult: "approved"},
//   { name: "Bruno", finalResult: "approved"},
//   { name: "Carla",  finalResult: "disapproved"},
//    { name: "Ana", finalResult: "disapproved"},
//   { name: "Julio", finalResult: "approved"},
//]