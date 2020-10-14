# Input: "banana"
# Output: "anana"

# Input: "million"
# Output: "illi"

import math

class Solution: 
    def longestPalindrome(self, s):

      # Fill this in.
      for i in range(len(s)):
            if s[i-1] == s[len(s)-1-i]:
        
# Test program
s = "tracecars"
print(str(Solution().longestPalindrome(s)))
# racecar