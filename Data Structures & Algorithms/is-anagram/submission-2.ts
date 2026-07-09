class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }

        let maps = new Map<string, number>();
        let mapp = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            maps.set(s.slice(i, i + 1), 1 + (maps.get(s.slice(i, i + 1)) ?? 0));
            mapp.set(t.slice(i, i + 1), 1 + (mapp.get(t.slice(i, i + 1)) ?? 0));
        }

        for (let j = 0; j < t.length; j++) {
            let obj = mapp.get(s.slice(j, j + 1));
            let obj2 = maps.get(s.slice(j, j + 1));
            if (obj != obj2) {
                return false;
            }
        }

        return true;
    }
}
