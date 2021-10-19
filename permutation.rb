def PermutationStep(num)

  # make an array of integers
  array = num.to_s.chars.map{|str| str.to_i}

  return -1 if array.length === 1
  # start iterating from the second to last digit
  i = array.length - 2;

  # if whole iteration is ascending, no greater number possible, return num
  while i >= 0 && array[i] > array[i + 1]
    i -= 1
    return -1 if i < 0
  end

  # get first descending digit
  firstDescending = nil
  while i >= 0
    if array[i] < array[i + 1]
      firstDescending = array[i]
      j = array.length - 1;
      # get the first smaller digit to swap it with
        while j >= 0
          if firstDescending < array[j]
            array[i], array[j] = array[j], array[i]
            # reverse the tail of the array
            reversedEnd = array.slice!(j, array.length - 1).reverse()
            num = array + reversedEnd
            num = num.join.to_i
            return num
          end
          j -= 1
        end
    end
    i -= 1
  end
  return -1
end

# keep this function call here 
puts PermutationStep(STDIN.gets)