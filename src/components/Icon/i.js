(function(){
let two_comand = document.querySelector(".two-members-available")
const commandCollect = two_comand.querySelectorAll(".ss-member-statistics-container")
const toArray = [...commandCollect]
const commandNameCollect = toArray.map(v => v.querySelector(".member-statistics-label.bold").innerHTML)
const homeCommandName = commandNameCollect[0]
const awayCommandName = commandNameCollect[1]

const result = toArray.reduce((acc, cur, index) => {
  const matches = [...cur.querySelector(".ss-team-matches-table").children]//все матчи
  const filterdMatches = matches.filter(v => !v.querySelector(".date"))//вернем элементы где нет дат
  const matchesWithFiltredScore = filterdMatches.reduce( (acc, cur) => {
    const away = cur.querySelector(".members-right").querySelector(".member.bold")
    const home = cur.querySelector(".members-left").querySelector(".member.bold")
    let score = cur.replace("(", "").replace(")", "").replace(" ", "").split(",") //должно быть в виде ["24:30", "30:30"]
    score = score.map(v => v.split(":"))
    const match = {
      team: commandNameCollect[index],
      score
    }
    if(home){
      match.isHome = true
    } else {
      match.isHome = false
    }
    acc = [...acc, match]
    return acc
  }, [])
  acc = [...acc, matchesWithFiltredScore]
  return acc
},[])
return result
})()
