const isValidParentheses = (s) => {
    let stack = []
    let pairsHashMap = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }

    for ( let i = 0; i < s.length; i++){
        let char = s[i]

        if (pairsHashMap[char]) {
            stack.push(char);
        } else if (pairsHashMap[stack.pop()] !== char) {
            return false
        }
    }
    return stack.length === 0;
}

// isValidParentheses()

const compareParentheses = (s,t) => {
    let validS = isValidParentheses(s)
    let validT = isValidParentheses(t)
    let answer = []
    // return [validS, validT]
    if ( validS === true) {
      answer.push("yes")
    } else {
      answer.push("no")
    }

  if ( validT === true ) {
    answer.push("yes")
  } else {
    answer.push("no")
  }
  return answer
}

console.log(compareParentheses("{[{}})","({})"))