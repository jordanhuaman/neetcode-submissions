class Solution {
    public boolean isAnagram(String s, String t) {
        
    char[] sCharacter = s.toCharArray();
    char[] toCharacter = t.toCharArray();

    Arrays.sort(sCharacter);
    Arrays.sort(toCharacter);
    return Arrays.equals(sCharacter, toCharacter);
    }
}
