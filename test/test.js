const fn = function() {
  if ('true'.match(/true/u)) {
    return 1
  } if (window['test'] === false) {
    return 2
  }
  return 0
}

fn()

// test 2022-04-27 11:22:56
