function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}


function generateTalk(target) {
  let talk = '身為一個'

  //define job take and phrase
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code'],
    designer: ['畫一張圖', '改個logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  //generating talk  
  if (!target) {
    return '請選擇一個職業'
  }
  if (target === 'engineer') {
    talk = talk.concat('工程師', getRandomElement(task.engineer))
  }
  if (target === 'designer') {
    talk = talk.concat('設計師', getRandomElement(task.designer))
  }
  if (target === 'entrepreneur') {
    talk = talk.concat('創業家', getRandomElement(task.entrepreneur))
  }
  //return
  return talk += getRandomElement(phrase)
}

generateTalk()
module.exports = generateTalk