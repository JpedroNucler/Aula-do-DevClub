const list = [20,3,234,12,17,541,6,87,275,1000];

const numerosPares = list.filter ( number => {
    if(number % 2 === 0 && number % 5 === 0) return true 
    else  return false
})

console.log(numerosPares)

const companies = [ 
    {name:"Samsung", marketValue: 50, CEO:"Kim Hyun Suk", foundedOn: 1938},
    {name:"Microsoft", marketValue: 415, CEO:"Satya Nadella", foundedOn: 1975}, 
    {name:"Intel", marketValue: 117, CEO:"Brian Krzanich", foundedOn: 1968}, 
    {name:"Facebook", marketValue: 383, CEO:"Mark Zuckerberg", foundedOn: 2004}, 
    {name:"Spotify", marketValue: 30, CEO:"Daniel EK", foundedOn: 2006}, 
    {name:"Apple", marketValue: 845, CEO:"Tim Cook", foundedOn: 1976}, 
];

const newCompanies = companies.filter(company => {
    if( company.foundedOn < 1975) return false 
    if( company.marketValue < 200) return false

    return true
})

console.log(newCompanies)