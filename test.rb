def range(start, finish)
  return [start] if start == finish
  prevState = range(start, finish - 1)
  prevState.push(prevState.last + 1)


end

puts range(1,3)
