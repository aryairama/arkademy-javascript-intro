const biodata = {
    name: "Arya Irama Wahono",
    age: 18,
    hobbies: ['membaca', 'gaming'],
    isMaried: false,
    schoolList: [{
            name: "Madrasah Ibtidaiyah Nuruzh Zholam",
            yearIn: "2009",
            yearOut: "2015",
            major: null
        },
        {
            name: "SMP NEGERI 1 POGALAN",
            yearIn: "2015",
            yearOut: "2018",
            major: null
        },
        {
            name: "SMK NEGERI 2 TRENGGALEK",
            yearIn: "2018",
            yearOut: "2021",
            major: "REKAYASA PERANGKAT LUNAK"
        }
    ],
    skills: [{
            skillName: "Php Laravel",
            level: "advanced"
        },
        {
            skillName: "Css Bootstrap",
            level: "advanced"
        },
        {
            skillName: "Css Tailwind",
            level: "beginner"
        },
        {
            skillName: "Vue Js",
            level: "advanced"
        },
        {
            skillName: "JS",
            level: "advanced"
        },
        {
            skillName: "MySQL",
            level: "advanced"
        },
    ],
    interestinCoding: true
}

console.log(biodata);
let line = (length, type) => {
    let garis = ""
    for (let i = 0; i < length; i++) {
        garis += `${type}`
    }
    return console.log(garis);
}
line(50, "=")
console.log("\t\t\t\tBiodata");
line(50,"=")
console.log(`Nama  : ${biodata.name}`);
console.log(`umur  : ${biodata.age}`);
let hoby = ""
for (const value of biodata.hobbies) {
    hoby += `${value}`;
}
console.log(`hobi : ${hoby}`);
console.log(`Kawin : ${biodata.isMaried}`);
line(50, "=")
console.log("\t\t\t\t Jenjang pendidikan");
line(50, "=")
biodata.schoolList.forEach(value => {
    console.log(`Nama sekolah : ${value.name}`);
    console.log(`Tahun masuk : ${value.yearIn}`);
    console.log(`Tahun keluar : ${value.yearOut}`);
    console.log(`Jurusan  : ${value.major}`);
})
line(50, "=")
console.log("\t\t\t\t Skills");
line(50, "=")
biodata.skills.forEach(skill => {
    console.log(`Nama skill : ${skill.skillName}`);
    console.log(`level skill : ${skill.level}`);
})